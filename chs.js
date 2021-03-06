/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
	_OTHER_: [],

	//资源tags
	"gemimbue": "灌注宝石",
	"magicgems": "魔法宝石",
	"prismatic": "棱柱",
	"prismaticgems": "棱柱宝石",
	"elementalgems": "元素宝石",
	"element": "元素",
	"elemental": "元素知识",
	"primordialgems": "原始宝石",
	"primordial": "原始",
	"elementalrunes": "元素符文",
	"primaticrunes": "棱柱符文",
	"primordialrunes": "原始符文",
	"manas": "法力能量",
	"bed": "床",
	"t_pets": "宠物",
	"pets": "宠物",
	"workspace": "工作区",
	"furniture": "家具",
	"shadowsource": "暗影源泉",
	"spiritsource": "精神源泉",
	"plantsource": "植物源泉",
	"naturesource": "自然源泉",
	"firesource": "火源泉",
	"airsource": "气源泉",
	"watersource": "水源泉",
	"earthsource": "土源泉",
	"lightsource": "光源泉",
	"potsource": "药剂源泉",
	"starsource": "星空源泉",
	"enchantsource": "附魔源泉",
	"weavesource": "编织源泉",
	"timesource": "时间源泉",
	"tricksource": "诡计源泉",
	"stables": "马棚",
	"prison": "监狱",
	"armssource": "军备源泉",
	"outdoors": "户外",
	"patron": "赞助",
	"t_ritual": "仪式",
	"ritual": "仪式",
	"poison": "毒",
	"herb": "草药",
	"reagent": "试剂",
	"t_runes": "符石",
	"skill": "技能",
	"t_school": "学派",
	"school": "学派",
	"stress": "压力",
	"t_rest": "休息",
	"rest": "休息",
	"book": "典籍",
	"steed": "骏马",
	"candle": "蜡烛",
	"t_hall": "殿堂",
	"hall": "殿堂",
	"familiar": "魔宠",
	"magic": "魔法",

	//药剂名：
	"sip of gold": "财富药剂",
	"drip of mana": "生命分流",
	"echoing flask": "回声药水",
	"god's blood": "神之血液",
	"godspeed": "神速药剂",
	"healing potion": "治疗药水",
	"phial of skillfulness": "学识药水",
	"philter of clarity": "灵感药水",
	"potion of bull's tenacity": "牛的力量",
	"potion of monster's stamina": "怪物级耐力药水",
	"remedy": "十全大补抗性药",
	"tincture of limberness": "麻痹解除",
	"adamant salve": "坚定药剂",
	"portion of waterbreathing": "水下呼吸药剂",
	'': '',
	
	//药水说明：
	"A master\'s skill in liquid form": "液态化的技能点数",
	"Amplifies even significantly muffled sounds.": "即使细碎的低语也能放大。",
	"Converts passive information into short-term benefit": "让被动获取的资源派上大用场，厚积薄发！",	
	"Purchase Cost": "解锁花费",
	"Raw mana injected right into the veins of a mage can allow for sustained casting, if one disregards the side-effects": "也许把未经提炼的法力注入静脉能提高法力速率，这可能会有点痒	（译者注：不要往自己静脉打奇怪的东西啊！）",
	"Temporarily grants you an impeccable ability to acquire valuables.": "获得一段时间的研究经费支持，包括宝石碎片",
	"This reddish potion causes a surge of energy in the imbiber, at the expense of health": "这种略带红色的药剂会让身体超载",
    "Removes most forms of inisidious motion impairment.": "治疗大多数行动不便的症状",
	"Cures most common ailments and fortifies the body.": "治疗大多数常见的小毛病并增强体质",
    "Unusually, prepared by baking special herbs into a brownie.": "这些草药居然能用来做巧克力蛋糕",
	
	//异常效果：
	"sick": "疾病",
	"fear": "恐惧",
	"enrage": "狂化",
	"charmed": "魅惑",
	"quake": "失衡",
	"quell": "压制",
	"sacked": "束缚",
	
	
	//简单的词语：
	
	"When used": "效果",
	"potion": "药剂",
	"action cure: paralysis,enrage,charmed,fear,silence,sick": "抵抗效果：麻痹，狂化，魅惑，恐惧，沉默，疾病",
	"action targets: self": "指定目标：自己",
	"Targets: all": "指定目标：全部",
	"Targets: allies": "指定目标：盟友",
	"Targets: enemies": "指定目标：敌方",
	"Applies": "效果",
	"Attack": "攻击",
	"Attack hit": "攻击命中",
	"tohit": "命中率",
	" tohit": "命中率",
	"Damage": "伤害",
	"Duration": "持续时间",
	"Effects": "影响",
	"Results": "结果",
	"Kind": "属性种类",
	"Kind: air": "气属性",
	"Kind: chaos": "混沌（虚空）属性",
	"Kind: earth": "地属性",
	"Kind: fire": "火属性",
	"Kind: light": "光属性",
	"Kind: mana": "奥术属性",
	"Kind: nature": "自然属性",
	"Kind: shadow": "暗影属性",
	"Kind: spirit": "精神属性",
	"Kind: water": "水属性",

    //部分装备名称：
	
	"loop": "臂带",
	"band": "手环",
	" hide jerkin": "皮坎肩",
	" hide hat": "皮帽",
	" hide band": "皮指环",
	" hide loop": "皮指绳结",
	" hide girdle": "皮腰带",
	" hide gloves": "皮手套",
	" hide helm": "皮头盔",
	" hide greaves": "皮胫甲",
	" hide padded armor": "皮厚甲",
	" hide 护身符": "皮护身符",
	" hide 戒指": "皮戒指",
	
	"adamantine 护身符": "合金护身符",
	"adamantine 戒指": "合金戒指",
	"adamantine axe": "合金斧子",
	"adamantine band": "合金指环",
	"adamantine battleaxe": "合金战斧",
	"adamantine boots": "合金靴子",
	"adamantine cane": "合金手杖",
	"adamantine cap": "合金帽子",
	"adamantine chainmail": "合金锁甲",
	"adamantine cincture": "合金腰甲",
	"adamantine club": "合金短棒",
	"adamantine collar": "合金衣领",
	"adamantine conical helm": "合金项圈",
	"adamantine girdle": "合金腰带",
	"adamantine greatstaff": "合金法杖",
	"adamantine greaves": "合金胫甲",
	"adamantine hat": "合金帽子",
	"adamantine helm": "合金头盔",
	"adamantine knife": "合金小刀",
	"adamantine longsword": "合金长剑",
	"adamantine loop": "合金指绳结",
	"adamantine mace": "合金狼牙棒",
	"adamantine necklace": "合金项链",
	"adamantine pendant": "合金吊坠",
	"adamantine plate mail": "合金板甲",
	"adamantine rod": "合金魔杖",
	"adamantine spear": "合金长矛",
	"adamantine staff": "合金棍子",
	"adamantine sword": "合金剑",
	"adamantine wand": "合金魔棒",
	"adamantine warhammer": "合金战锤",
	"adamantine wings": "合金翼甲",
	
	
	//怪物名（准备中）
	"basilisk": "蛇怪",
	
	
	//资源group
	"books": "典籍",
	"runes": "符石",
	"necromancy": "死灵术",
	"gems": "宝石",
	"puppets": "木偶",
	"other": "其它",
	"Actions": "行动",
	"Tasks": "任务",
	"Upgrades": "升级",

	"stamina": "耐力",
	"Stamina": "耐力",
	"life": "生命",
	"Life": "生命",
	"Name": "名字",
	"Title": "头衔",
	"Notoriety": "名望",
	"Level": "等级",
	"Experience": "经验",
	"Virtue : Evil": "善良：邪恶",
	"Skill Points": "技能点",
	"Rest": "休息",
	"Mount": "坐骑",
	"mount": "坐骑",
	"Distance": "距离",
	"Classes": "阶级",
	"Progress Cost": "进度成本",
	"Results": "结果",
	"Cost": "价格",
	"Effects": "效果",
	"Focus": "专注",
	"Save": "保存",
	"Load": "读取",
	"Get Save": "下载存档",
	"Hall Save": "下载殿堂存档",
	"[Load Save]": "[加载存档]",
	"Wipe Wizard": "删除角色",
	"Wipe Hall Save": "删除殿堂存档",
	"Wizard's Hall": "巫师殿堂",
	"Find": "查找",
	"Hide Maxed": "隐藏已满",
	'\n			Train': '训练',
	'\n			Stop': '停止',
	'Space': '空间',
	'Furnishing': '家具',
	'Owned': '已拥有',
	'Maxed': '达上限',
	'Unowned': '未拥有',
	'Blocked': '已锁定',
	'Home': '家',
	'Werry': '位面',
	'Sort Level': '按等级排序',
	'Complete': '已完成',
	'Dungeon': '地下城',
	'Explore': '探索',
	'Enter': '进入',
	'Retreat': '撤退',
	'Luck': '幸运值',
	"defense": '护甲',
	'Defense': '防御',
	'Dodge': '闪避',
	'Damage Bonus': '伤害加成',
	'Bonus Damage': '加成伤害',
	'Hit Bonus': '命中加成',
	'Speed': '速度',
	'Weapon': '武器',
	'Resists': '抵抗',
	'Immunities': '免疫',
	'fire': '火',
	'water': '水',
	'air': '气',
	'earth': '地',
	'light': '光',
	'shadow': '暗影',
	'arcane': '奥术',
	'physical': '物理',
	'natural': '自然',
	'poison': '毒素',
	'disease': '疾病',
	'Stop All': '全部停止',
	'Clear': '清除',
	'event': '事件',
	'unlock': '解锁',
	'loot': '拾取',
	'combat': '战斗',
	'Modifications': '修订',
	'Learn': '学习',
	'Cast': '施放',
	'Memorize': '记忆',
	'Memorized': '已记忆',
	'Remove': '移除',
	'No space remaining. Sell items or find a new Home.\n			': '没有剩余空间。 出售物品或找到新家。',
	'If your max gold is not enough to buy a new home, free space for more chests.': '如果你达到黄金上限都买不起新家，腾出点地方买更多的箱子吧。',
	'\n		Roll-over Item and hold {Shift} + {Number} to assign quickslot.': '滚动物品并按住{Shift} + {数字}可以分配快速插槽。',
	'\n		Press {Number} again to use quickslot Item.\n	': '再次按{数字}以使用快速插槽物品。',
	"Enchantment levels on an Item cannot exceed Item's enchant slots.": '物品的附魔等级不能超过物品的附魔槽。',
	'animation': '机械',
	'nature': '自然',
	'spirit': '精神',
	"mana": "法力",
	'charms': '魅惑',
	'astral': '星空',
	'Craft': '制造',
	'right': '右',
	'left': '左',
	'ring': '戒指',
	'fingers': '手指',
	'neck': '颈部',
	'shins': '腿',
	'waist': '腰',
	'hands': '手',
	'head': '头',
	'back': '背部',
	'feet': '脚',
	'chest': '胸',
	'trinket': '饰品',
	'Brew': '调制',
	'Resume': '恢复',
	'Enchant': '附魔',
	'Need': '需求',
	'Purchase Cost': '采购成本',
	'max activity': '行动上限',
	"max magicgems": "魔法宝石上限",
	"max prismatic": "棱柱上限",
	"prismatic rate": "棱柱速率",
	"max prismaticgems": "棱柱宝石上限",
	"max elementalgems": "元素宝石上限",
	"max element": "元素上限",
	"max elemental": "元素上限",
	"elemental 经验值": "元素知识 经验值",
	"activity 经验值": "行动 经验值",
	"elemental rate": "元素知识速率",
	"max primordialgems": "原始宝石上限",
	"max primordial": "原始上限",
	"max elementalrunes": "元素符文上限",
	"max primaticrunes": "棱柱符文上限",
	"max primordialrunes": "原始符文上限",
	"max manas": "法力能量上限",
	"manas rate": "法力能量速率",
	"max t_runes": "符石上限",
	"max spelllist": "法术列表上限",
	"max inventory": "物品栏上限",
	"max candle": "蜡烛上限",
	"max stress": "压力上限",
	"stress rate": "压力速率",
	"Max": "上限",
	"Buy": "购买",
	"Sell": "出售",
	"home": "家",
	'Flee': '逃跑',
	'None': '无',
	'Cancel': '取消',
	'Confirm': '确认',
	'Skip Warning': '跳过警告',
	'Locks': '锁定',
	'LOOT': '掠夺',
	'RETREAT': '撤退',
	'Alternate Wizard classes of this tier will be locked.': '这一层的其它巫师职业将被锁定。',
	'This action is not reversible. Continue?': '这个动作不可逆，是否确定？（译者注：一般都有一些负面效果，请先导出存档。）',
}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
	
	"🌳": "🌳",
	"📖": "📖",
	"🏰": "🏰",
	"⚔": "⚔",
    "⭐": "⭐",
    "❄️": "❄️",

    "\n			Next Improvement: ": "下一次提升：",
    "\n\n\t\texp: ": "经验：",
    "Space: ": "空间：",
    "mana: ": "法力：",
    "fire: ": "火：",
    "air: ": "气：",
    "water: ": "水：",
	'earth: ': '地：',
	'light: ': '光：',
	'shadow: ': '暗影：',
	'arcane: ': '奥术：',
	'physical: ': '物理：',
	'natural: ': '自然：',
	'poison: ': '毒素：',
	'disease: ': '疾病：',
	'Max Levels: ': '等级上限：',
	'Power: ': '能量：',
	'Slot: ': '插槽：',
	'upgrade Unlocked: ': '升级解锁：',
	'action Unlocked: ': '行动解锁：',
	'resource Unlocked: ': '资源解锁：',
	'class Unlocked: ': '职业解锁：',
	'Unlocked: ': '解锁：',
	'locale Unlocked: ': '地点解锁：',
	'furniture Unlocked: ': '家具解锁：',
	'skill Unlocked: ': '技能解锁：',
	'home Unlocked: ': '住房解锁：',
	'dungeon Unlocked: ': '地下城解锁：',
	'potion Unlocked: ': '药剂解锁：',
	'enchant Unlocked: ': '附魔解锁：',
	'spell Unlocked: ': '法术解锁：',
	'monster Unlocked: ': '怪物解锁：',
	'Title Earned: ': '获得头衔：',
	'title: ': '头衔：',
	'max: ': '上限：',
}

//需处理的后缀
var cnPostfix = {
	"(once)": "(一次)",
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
	
    "❄️": "❄️",
    '🎃': '🎃',
	"🌳": "🌳",
	"📖": "📖",
	"🏰": "🏰",
	"⚔": "⚔",
	"⭐": "⭐",

	" Improved": "已提升",
	" Level Up!": "升级了！",
	', furniture': '，家具',
	', home': '，家',
	', skill': '，技能',

	//资源tags，注意顺序
	", naturesource": "，自然源泉",
	", patron": "，赞助",
	", gemimbue": "，灌注宝石",
	", magicgems": "，魔法宝石",
	", prismatic": "，棱柱",
	", elementalgems": "，元素宝石",
	", prismaticgems": "，棱柱宝石",
	", element": "，元素",
	", elemental": "，元素知识",
	", primordialgems": "，原始宝石",
	", primordial": "，原始",
	", primaticrunes": "，棱柱符文",
	", elementalrunes": "，元素符文",
	", primordialrunes": "，原始符文",
	", manas": "，法力能量",
	", bed": "，床",
	", t_pets": "，宠物",
	", pets": "，宠物",
	", workspace": "，工作区",
	", furniture": "，家具",
	", shadowsource": "，暗影源泉",
	", spiritsource": "，精神源泉",
	", plantsource": "，植物源泉",
	", firesource": "，火源泉",
	", airsource": "，气源泉",
	", watersource": "，水源泉",
	", earthsource": "，土源泉",
	", lightsource": "，光源泉",
	", potsource": "，药剂源泉",
	", starsource": "，星空源泉",
	", enchantsource": "，附魔源泉",
	", weavesource": "，编织源泉",
	", timesource": "，时间源泉",
	", tricksource": "，诡计源泉",
	", stables": "，马棚",
	", prison": "，监狱",
	", armssource": "，军备源泉",
	", outdoors": "，户外",
	", t_ritual": "，仪式",
	", ritual": "，仪式",
	", poison": "，毒",
	", reagent": "，试剂",
	", herb": "，草药",
	", t_runes": "，符石",
	", skill": "，技能",
	", t_school": "，学派",
	", school": "，学派",
	", stress": "，压力",
	", t_rest": "，休息",
	", rest": "，休息",
	", book": "，典籍",
	", steed": "，骏马",
	", candle": "，蜡烛",
	", t_hall": "，殿堂",
	", hall": "，殿堂",
	", familiar": "，魔宠",
	", magic": "，魔法",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s+$/, //纯空格
    /^[\u4E00-\u9FA5]+$/,//纯中文
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
];
var cnExcludePostfix = [
	/:?\s*\-?\d+(\.\d+)?\s*~\s*\d+(\.\d+)?$/,  // : 1.5 ~ 2.5
	/:?\s*\d+\s*\/\s*\d+\s*$/,	// : 13 / 14
	/:?\s*\d+(\.\d+)?,\s\+?\d+(\.\d+)?$/, // : 0.1, +1
    /(⚔)?(🌳)?(📖)?:?\s*\(?[+\-]?x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
	/:?\s*\d+%\s*$/, //12%
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
	//属性抵抗
	//注：由于源代码翻译，以下会出现汉字替换原英文再汉化的情况
	//从这里开始 ↓↓↓↓↓↓↓↓
	[/^(.+)\simmunities 火$/, '$1 火免疫'],
	[/^(.+)\sresist 火$/, '$1 火抵抗'],
	[/^(.+)\sbonuses 火$/, '$1 火加成'],
	[/^(.+)\shits 火$/, '$1 火命中加成'],
	[/^(.+)\sresist 光$/, '$1 光抵抗'],
	[/^(.+)\sbonuses 光$/, '$1 光加成'],
	[/^(.+)\shits 光$/, '$1 光命中加成'],
	[/^(.+)\sresist 自然$/, '$1 自然抵抗'],
	[/^(.+)\sbonuses 自然$/, '$1 自然加成'],
	[/^(.+)\shits 自然$/, '$1 自然命中加成'],
	[/^(.+)\sresist 精神$/, '$1 精神抵抗'],
	[/^(.+)\sbonuses 精神$/, '$1 精神加成'],
	[/^(.+)\shits 精神$/, '$1 精神命中加成'],
	[/^(.+)\sresist 暗影$/, '$1 暗影抵抗'],
	[/^(.+)\sbonuses 暗影$/, '$1 暗影加成'],
	[/^(.+)\shits 暗影$/, '$1 暗影命中加成'],
	[/^(.+)\sresist 气$/, '$1 气抵抗'],
	[/^(.+)\sbonuses 气$/, '$1 气加成'],
	[/^(.+)\shits 气$/, '$1 气命中加成'],
	[/^(.+)\sresist 水$/, '$1 水抵抗'],
	[/^(.+)\sbonuses 水$/, '$1 水加成'],
	[/^(.+)\shits 水$/, '$1 水命中加成'],
	[/^(.+)\sresist 土$/, '$1 土抵抗'],
	[/^(.+)\sbonuses 土$/, '$1 土加成'],
	[/^(.+)\shits 土$/, '$1 土命中加成'],

	//到这里结束 ↑↑↑↑↑↑↑↑

	[/^(.+)\sresist undead$/, '$1 亡灵抵抗'],
	[/^(.+)\sresist poison$/, '$1 毒素抵抗'],
	[/^(.+)\sresist necrotic$/, '$1 死灵抵抗'],
	[/^(.+)\sbonuses mana$/, '$1 法力加成'],
	[/^(.+)\sresist cold$/, '$1 冰冷抵抗'],
	[/^(.+)\sresist holy$/, '$1 神圣抵抗'],
	[/^(.+)\stohit$/, '$1 命中'],
	[/^(.+)\sdefense$/, '$1 防御'],
	
	//异常状态抵抗
	
	
	
	//基础
	[/max\s(.+)/, "$1上限"],
	[/(.+)\srate/, "$1速率"],
]);
