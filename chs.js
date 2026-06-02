/*
 @name : 锅巴汉化 - Web汉化插件 (模块化版)
 @author : 麦子、JAR、小蓝、好阳光的小锅巴、人民當家做主
 @version : V0.7.0 - 2026-6-2
 @website : http://www.g8hh.com
 @QQ Group : 627141737

 模块化说明：
 - 翻译数据已拆分到 translations/ 目录下的多个 JSON 文件中
 - 新增翻译只需在 translations/ 下添加 JSON 文件即可自动加载
 - 支持按分类管理：ui.json / items.json / spells.json / monsters.json / locations.json / descriptions.json / misc.json
 - 兼容 Firefox (自动从 JSON 加载) 和 Chrome/Edge (自动 fallback 到 bundle)
*/

// ============================================================
// 基本配置
// ============================================================
var cnConfig = {
    ignoreCase: true,
    trimSpaces: true,
};

// ============================================================
// 前缀/后缀/排除规则
// ============================================================
var cnPrefix = {
    // 可在此添加前缀匹配（如 "Gold: " → "金币： "）
};

var cnPostfix = {
    // 可在此添加后缀匹配（如 " Coin" → " 金币"）
};

var cnExcludeWhole = [
    /^\d+$/,
    /^\s*$/,
    /^[\d\.]+%?$/,
    /^[\d\.]+$/,
    /^(\d+)$/,
    /^\s*$/,
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)$/,
    /^x([\d\.]+)$/,
    /^v([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^\(([\d\.]+), ([\d\.]+)\)$/,
    /^([\d\.]+) \(([\d\.]+)\%\)$/,
    /^([\d\.]+)\%$/,
    /^\+([\d\.]+)\%$/,
    /^\-([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^\(([\d\.]+),([\d\.]+)\)$/,
    /^\(\-([\d\.]+),([\d\.]+)\)$/,
    /^\(\-([\d\.]+),\-([\d\.]+)\)$/,
    /^\(([\d\.]+),\-([\d\.]+)\)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^([\d\.]+) \/ ([\d\.]+)(.+)$/,
    /^([\d\.]+)(.+) \/ ([\d\.]+)(.+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\(x([\d\.,]+)\)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^\/ ([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)\/\∞$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/,
];

var cnExcludePostfix = [
    // 排除特定后缀的正则
];

var cnRegReplace = new Map([
    // 可在此添加正则匹配规则，优先级高于分词 fallback
]);

// ============================================================
// 初始化翻译数据存储
// ============================================================
window.cnItems = window.cnItems || {};
window.cnResourceNames = window.cnResourceNames || {};

// ============================================================
// 加载翻译数据
// ============================================================
(function() {
    'use strict';

    var transDir = (function() {
        var scripts = document.getElementsByTagName('script');
        var src = scripts[scripts.length - 1].src;
        return src ? src.substring(0, src.lastIndexOf('/') + 1) + 'translations/' : 'translations/';
    })();

    // ---- Tier 1: 同步 XHR 加载 JSON (Firefox/Safari) ----
    function tryXHR() {
        var indexFile = transDir + 'index.json';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', indexFile, false);
        try {
            xhr.send(null);
        } catch(e) {
            return 0;
        }
        if (xhr.status !== 0 && xhr.status !== 200) return 0;

        var index;
        try { index = JSON.parse(xhr.responseText); } catch(e) { return 0; }
        var files = index && index.files ? index.files : [];

        var total = 0;
        for (var i = 0; i < files.length; i++) {
            var f = files[i];
            if (typeof f !== 'string' || !f.endsWith('.json')) continue;

            var xhr2 = new XMLHttpRequest();
            xhr2.open('GET', transDir + f, false);
            try { xhr2.send(null); } catch(e) { continue; }
            if (xhr2.status !== 0 && xhr2.status !== 200) continue;

            try {
                var data = JSON.parse(xhr2.responseText);
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        var val = data[key];
                        window.cnItems[key] = val;
                        window.cnResourceNames[key] = val;
                        total++;
                    }
                }
            } catch(e) { continue; }
        }
        return total;
    }

    // ---- Tier 2: document.write 加载 bundle (Chrome/Edge) ----
    function loadBundle() {
        var bundlePath = transDir + '_bundle.js';
        document.write('<script src="' + bundlePath + '"><\/script>');
    }

    // ---- 执行加载 ----
    var count = tryXHR();
    if (count > 0) {
        console.log('[CN] 翻译数据加载完成（JSON 模式），共 ' + count + ' 条');
    } else {
        console.warn('[CN] 同步 XHR 不可用（Chrome file:// 限制），切换到 bundle 模式...');
        loadBundle(); // bundle 加载完成后会自动设置 cnItems / cnResourceNames
    }
})();
