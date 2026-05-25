/*
 @name    : 锅巴汉化 - Web汉化插件 (高性能稳定版)
 @version : V0.8.1 - 2026-05-22
 @features: 静态词条索引 O(1) | 资源名索引 O(1) | 无缓存 | 支持 {{*}} | 忽略首字母大小写
*/

var CNITEM_DEBUG = 0;

// ============================================================
// 辅助函数
// ============================================================
function normalizeForMatching(str) {
    if (typeof str !== 'string') return str;
    return str.split(/\s+/).map(word => {
        if (word.length === 0) return word;
        return word[0].toLowerCase() + word.slice(1);
    }).join(' ');
}

function ignoreFirstLetterCaseEqual(a, b) {
    if (a === b) return true;
    return normalizeForMatching(a) === normalizeForMatching(b);
}

function addIgnoreCaseFlag(regex) {
    if (!(regex instanceof RegExp)) return regex;
    if (regex.flags.includes('i')) return regex;
    return new RegExp(regex.source, regex.flags + 'i');
}

// ============================================================
// 索引构建
// ============================================================
var _staticIndex = {};      // 标准化静态词条原文 -> 中文
var _templateList = [];     // 存储 { srcTemplate, translation } 用于模板匹配
var _resourceNameIndex = {}; // 标准化资源名 -> 中文

function rebuildIndices() {
    _staticIndex = {};
    _templateList = [];
    for (let key in window.cnItems) {
        let val = window.cnItems[key];
        if (typeof val !== 'string') continue;
        if (key.indexOf('{{') !== -1) {
            _templateList.push({ srcTemplate: key, translation: val });
        } else {
            let normKey = normalizeForMatching(key);
            _staticIndex[normKey] = val;
        }
    }
    _resourceNameIndex = {};
    if (window.cnResourceNames) {
        for (let key in window.cnResourceNames) {
            let normKey = normalizeForMatching(key);
            _resourceNameIndex[normKey] = window.cnResourceNames[key];
        }
    }
}

// 初始构建（在 core.js 最后调用）
// ============================================================
// 模板匹配核心
// ============================================================
function templateToRegex(template) {
    let varNames = [];
    let escaped = '';
    let lastIndex = 0;
    while (true) {
        let start = template.indexOf('{{', lastIndex);
        if (start === -1) {
            escaped += template.slice(lastIndex).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            break;
        }
        let end = template.indexOf('}}', start);
        if (end === -1) break;
        escaped += template.slice(lastIndex, start).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let varName = template.slice(start+2, end);
        varNames.push(varName);
        if (varName === '*' || varName.startsWith('*|')) {
            escaped += '(.+)';
        } else {
            escaped += '(.+?)';
        }
        lastIndex = end + 2;
    }
    return { regex: new RegExp('^' + escaped + '$', 'i'), varNames: varNames };
}

function parseListPlaceholder(varName) {
    let sepRegex = /\s*,\s*/;
    let joinStr = '、';
    if (varName === '*') return { sepRegex, joinStr };
    if (varName.startsWith('*|')) {
        let parts = varName.slice(2).split('|');
        let sepPart = parts[0] !== undefined ? parts[0] : '';
        let joinPart = parts[1] !== undefined ? parts[1] : '';
        if (sepPart !== '') {
            let regexMatch = sepPart.match(/^\/(.+)\/([gimuy]*)$/);
            if (regexMatch) {
                try {
                    sepRegex = new RegExp(regexMatch[1], regexMatch[2]);
                } catch(e) {
                    let escaped = sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    sepRegex = new RegExp('\\s*' + escaped + '\\s*');
                }
            } else {
                let escaped = sepPart.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                sepRegex = new RegExp('\\s*' + escaped + '\\s*');
            }
        }
        if (joinPart !== '') joinStr = joinPart;
    }
    return { sepRegex, joinStr };
}

function applyTemplateTranslation(sourceText, srcTemplate, tgtTemplate, node) {
    let { regex, varNames } = templateToRegex(srcTemplate);
    let match = sourceText.match(regex);
    if (!match) return null;
    let values = {};
    for (let i = 0; i < varNames.length; i++) {
        let varName = varNames[i];
        let rawValue = match[i+1];
        if (varName === '*' || varName.startsWith('*|')) {
            let { sepRegex, joinStr } = parseListPlaceholder(varName);
            let items = rawValue.split(sepRegex).map(s => s.trim()).filter(s => s);
            let translatedItems = items.map(item => cnItem(item, node));
            values[varName] = translatedItems.join(joinStr);
        } else {
            let trimmed = rawValue ? rawValue.trim() : '';
            values[varName] = cnItem(trimmed, node);
        }
    }
    let result = tgtTemplate.replace(/\{\{([^}]+)\}\}/g, (_, varName) => {
        if (values[varName] !== undefined) return values[varName];
        let idx = varNames.indexOf(varName);
        if (idx !== -1 && match[idx+1]) return match[idx+1].trim();
        return '';
    });
    return result;
}

// ============================================================
// 纯名词翻译（使用索引 O(1)）
// ============================================================
function translateNoun(text) {
    if (!window.cnResourceNames) return null;
    let trimmed = text.trim();
    if (trimmed === "") return null;
    let normKey = normalizeForMatching(trimmed);
    if (_resourceNameIndex.hasOwnProperty(normKey)) {
        return _resourceNameIndex[normKey];
    }
    // 简单复数处理
    if (trimmed.endsWith('s')) {
        let singular = trimmed.slice(0, -1);
        if (singular.endsWith('e')) {
            let candidate = singular.slice(0, -1);
            let normCandidate = normalizeForMatching(candidate);
            if (_resourceNameIndex.hasOwnProperty(normCandidate)) {
                return _resourceNameIndex[normCandidate];
            }
        }
        let normSingular = normalizeForMatching(singular);
        if (_resourceNameIndex.hasOwnProperty(normSingular)) {
            return _resourceNameIndex[normSingular];
        }
    }
    return null;
}

// ============================================================
// 资源数值自动翻译（使用索引）
// ============================================================
function autoTranslateResourceName(text) {
    if (!window.cnResourceNames) return null;
    let match1 = text.match(/^([A-Za-z][A-Za-z\s]+):\s*(.+)$/i);
    if (match1) {
        let resource = match1[1].trim();
        let value = match1[2];
        let normKey = normalizeForMatching(resource);
        if (_resourceNameIndex.hasOwnProperty(normKey)) {
            return _resourceNameIndex[normKey] + '：' + value;
        }
    }
    let match2 = text.match(/^([\+\-]\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
    if (match2) {
        let num = match2[1];
        let resource = match2[2].trim();
        let normKey = normalizeForMatching(resource);
        if (_resourceNameIndex.hasOwnProperty(normKey)) {
            return num + ' ' + _resourceNameIndex[normKey];
        }
    }
    let match3 = text.match(/^(\d+(?:\.\d+)?)\s+([A-Za-z][A-Za-z\s]+)$/i);
    if (match3) {
        let num = match3[1];
        let resource = match3[2].trim();
        let normKey = normalizeForMatching(resource);
        if (_resourceNameIndex.hasOwnProperty(normKey)) {
            return num + ' ' + _resourceNameIndex[normKey];
        }
    }
    return null;
}

// ============================================================
// cnItemByTag 保持不变
// ============================================================
function cnItemByTag(text, itemgroup, node, textori){
    for (let i in itemgroup){
        if (i[0] == '.') {
            let current_node = node;
            while (current_node){
                if (current_node.classList && current_node.classList.contains(i.substr(1))) return itemgroup[i];
                else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                else break;
            }
        }
        else if (i[0] == '#') {
            let current_node = node;
            while (current_node){
                if (current_node.id == i.substr(1)) return itemgroup[i];
                else if(current_node.parentElement && current_node.parentElement != document.documentElement) current_node = current_node.parentElement;
                else break;
            }
        }
        else if (i[0] == '$') {
            if (document.querySelector(i.substr(1)) != null) return itemgroup[i];
        }
        else if (i[0] == '*') {
            if (textori.includes(i.substr(1))) return itemgroup[i];
        }
        else CNITEM_DEBUG && console.log({text, itemgroup, dsc:"不识别的标签" + i});
    }
    return null;
}

// ============================================================
// 全局变量（兼容原有配置）
// ============================================================
var cnItems = window.cnItems || {};
var cnRegReplace = window.cnRegReplace || new Map();
var cnPrefix = window.cnPrefix || {};
var cnPostfix = window.cnPostfix || {};
var cnExcludeWhole = window.cnExcludeWhole || [];
var cnExcludePostfix = window.cnExcludePostfix || [];

// ============================================================
// 主翻译函数（无缓存，使用索引）
// ============================================================
function cnItem(text, node) {
    if (typeof text !== "string") return text;
    let textori = text;

    // 前缀处理
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.length >= prefix.length) {
            let head = text.substr(0, prefix.length);
            if (ignoreFirstLetterCaseEqual(head, prefix)) {
                text_prefix += cnPrefix[prefix];
                text = text.substr(prefix.length);
            }
        }
    }

    // 后缀处理
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.length >= postfix.length) {
            let tail = text.substr(-postfix.length);
            if (ignoreFirstLetterCaseEqual(tail, postfix)) {
                text_postfix = cnPostfix[postfix] + text_postfix;
                text = text.substr(0, text.length - postfix.length);
                break;
            }
        }
    }

    // 正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let ignoreCaseReg = addIgnoreCaseFlag(reg);
        let result = text.match(ignoreCaseReg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    // 排除规则
    for (let reg of cnExcludeWhole) {
        let ignoreCaseReg = addIgnoreCaseFlag(reg);
        if (ignoreCaseReg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 精确静态匹配（使用索引 O(1)）
    let normText = normalizeForMatching(text);
    if (_staticIndex.hasOwnProperty(normText)) {
        return text_prefix + _staticIndex[normText] + text_reg_exclude_postfix + text_postfix;
    }

    // 正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        let ignoreCaseKey = addIgnoreCaseFlag(key);
        if (ignoreCaseKey.test(text)) {
            let replaced;
            if (typeof value === 'function') {
                let match = text.match(ignoreCaseKey);
                replaced = value(match, text, node);
            } else {
                replaced = text.replace(ignoreCaseKey, value);
                replaced = cnItem(replaced, node);
            }
            return text_prefix + replaced + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 模板匹配（遍历模板列表，通常数量少）
    for (let { srcTemplate, translation } of _templateList) {
        let result = applyTemplateTranslation(text, srcTemplate, translation, node);
        if (result !== null) {
            return text_prefix + result + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 条件标签匹配（原逻辑，遍历 cnItems 中 object 类型）
    for (let i in cnItems) {
        if (typeof(cnItems[i]) == "object") {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) {
                return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }
    }

    // 纯名词翻译
    let nounResult = translateNoun(text);
    if (nounResult !== null) {
        return text_prefix + nounResult + text_reg_exclude_postfix + text_postfix;
    }

    // 资源数值自动翻译
    let autoResult = autoTranslateResourceName(text);
    if (autoResult !== null) {
        return text_prefix + autoResult + text_reg_exclude_postfix + text_postfix;
    }

    // 未翻译收集
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;
    for (let i = 0; i < cnItems._OTHER_.length; i++) {
        if (save_text == cnItems._OTHER_[i]) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }
    if (cnItems._OTHER_.length < 10000) {
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort();
    }
    CNITEM_DEBUG && console.log('有需要汉化的英文：', text);
    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
}

// ============================================================
// 辅助工具（支持重建索引）
// ============================================================
window.CN_Helper = {
    getUntranslatedList: () => cnItems._OTHER_ || [],
    exportUntranslated: function(filename = "untranslated.json") {
        let data = JSON.stringify(cnItems._OTHER_, null, 2);
        let blob = new Blob([data], {type: "application/json"});
        let url = URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
        console.log(`已导出 ${cnItems._OTHER_.length} 个未翻译词条`);
    },
    addTranslations: function(translations) {
        for (let eng in translations) {
            cnItems[eng] = translations[eng];
        }
        rebuildIndices(); // 重建索引
        console.log(`已添加 ${Object.keys(translations).length} 条翻译，索引已重建`);
    },
    extendResourceNames: function(more) {
        if (!window.cnResourceNames) window.cnResourceNames = {};
        Object.assign(window.cnResourceNames, more);
        rebuildIndices();
        console.log("资源名映射已扩展，索引已重建");
    },
    getResourceNames: () => window.cnResourceNames || {},
    rebuildIndex: rebuildIndices
};

// ============================================================
// 页面汉化及 MutationObserver
// ============================================================
var transTaskMgr = {
    tasks: [],
    addTask: function(node, attr, text) { this.tasks.push({node, attr, text}); },
    doTask: function() { let task; while (task = this.tasks.pop()) task.node[task.attr] = task.text; }
};

function TransSubTextNode(node) {
    if (node.childNodes.length) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || !subnode.childNodes.length) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                } else {
                    TransSubTextNode(subnode);
                }
            }
        }
    }
}

!function() {
    // 先确保全局变量已定义（chs.js 应在 core.js 之前加载）
    rebuildIndices();
    console.log("加载汉化模块 (高性能稳定版 V0.8.1) - 静态词条索引 O(1)，无缓存");
    let observer_config = { attributes: false, characterData: true, childList: true, subtree: true };
    let targetNode = document.body;
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    let observer = new MutationObserver(function(e) {
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT"|| mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || !mutation.target.childNodes.length) {
                if (mutation.target.innerText) mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
            } else if (mutation.addedNodes.length) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || !node.childNodes.length) {
                            if (node.innerText) node.innerText = cnItem(node.innerText, node);
                        } else {
                            TransSubTextNode(node);
                        }
                    }
                }
            }
        }
        transTaskMgr.doTask();
        observer.observe(targetNode, observer_config);
    });
    observer.observe(targetNode, observer_config);
}();