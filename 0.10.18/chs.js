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
    "Removes most forms of inisidious motion impairment.": "治疗大多数动作不便的症状",
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
	"Actions": "动作",
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
	"Evil": "邪恶",
	"Skill Points": "技能点",
	"Rest": "休息",
	"Mount": "坐骑",
	"mount": "坐骑",
	"Distance": "距离",
	"Classes": "课程",
	"Progress Cost": "进度成本",
	"Results": "结果",
	"Cost": "消耗",
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
	"Hide Maxed": "隐藏已满级",
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
	'max activity': '动作上限',
	"max magicgems": "魔法宝石上限",
	"max prismatic": "棱柱上限",
	"prismatic rate": "棱柱速率",
	"max prismaticgems": "棱柱宝石上限",
	"max elementalgems": "元素宝石上限",
	"max element": "元素上限",
	"max elemental": "元素上限",
	"elemental 经验值": "元素知识 经验值",
	"activity 经验值": "动作 经验值",
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
	'Locks': '解锁要求',
	'LOOT': '掠夺',
	'RETREAT': '撤退',
	'Alternate Wizard classes of this tier will be locked.': '这一层的其它巫师职业将被锁定。',
	'This action is not reversible. Continue?': '这个动作不可逆，是否确定？（译者注：一般都有一些负面效果，请先导出存档。）',
	// 0.10.18
    "apple bobbing": "咬苹果游戏",
    "carve lantern": "雕刻灯笼",
    "filch pumpkins": "偷窃南瓜",
    "reveler's rite": "狂欢者的仪式",
    "smash pumpkin": "砸南瓜",
    "trick & treat": "捣蛋",
    "advise notables": "劝告名人",
    "almagest": "天大的",
    "animal companion": "动物伴侣",
    "annals of arazor": "阿拉佐纪事",
    "annals of orrem": "奥雷姆纪事",
    "arcane bestiary": "神秘的寓言",
    "arcane thievery": "秘术盗窃",
    "assemble machina": "组装机",
    "assemble puppet": "组装木偶",
    "Attune (elements": "调（元素",
    "bag of demons": "一袋恶魔",
    "bag of mayhem": "一袋混乱",
    "bestiary": "寓言",
    "bind codex": "绑定法典",
    "blood siphon": "血虹吸管",
    "buy scroll": "购买卷轴",
    "call hammer": "叫锤",
    "chant": "咏唱",
    "clean stables": "清理马厩",
    "Clean Stables": "清理马厩",
    "coagulate gem (Blood": "凝固宝石（血",
    "codex annihilus": "歼灭法典",
    "Combat": "战斗",
    "commune": "公社",
    "Compile Tome": "编译大部头",
    "complete soulflag": "完整的灵魂旗帜",
    "concoct potions": "调制药水",
    "coporis fabrica": "胴体",
    "craft gem": "工艺宝石",
    "craft rune": "工艺符文",
    "craft rune (Air": "工艺符文（空气",
    "craft rune (Chaos": "工艺符文（混沌",
    "craft rune (Earth": "工艺符文（地球",
    "craft rune (Fire": "工艺符文（火",
    "craft rune (Spirit": "工艺符文（精神",
    "craft rune (Water": "工艺符文（水",
    "craft schematic": "工艺示意图",
    "craft soulflag": "工艺魂旗",
    "craft timepiece": "工艺钟表",
    "create ritual paper": "制作仪式纸",
    "create still room": "创建静止空间",
    "demonic dictionary": "恶魔词典",
    "Dig out a bigger cave": "挖出一个更大的洞穴",
    "dissect cadaver": "解剖尸体",
    "do chores": "做家务事",
    "dreamweaver": "织梦者",
    "dwarven dirges": "矮人挽歌",
    "eat children": "吃孩子",
    "Event": "事件",
    "fazbit's fixations": "fazbit 的注视",
    "focus": "专注",
    "funerary rites": "葬礼",
    "garden": "花园",
    "gather herbs": "采集草药",
    "geas": "指令",
    "ghost catcher": "捉鬼者",
    "Git游戏": "Git游戏",
    "gold": "金币",
    "Gold": "金币",
    "greater ritual of cultivation": "更大的修炼仪式",
    "greater ritual of cursing": "更大的诅咒仪式",
    "greater ritual of energy": "更大的能量仪式",
    "greater ritual of healing": "更大的治疗仪式",
    "greater ritual of the arcane": "更大的奥术仪式",
    "grind": "研磨",
    "grind bones": "磨骨头",
    "hat trick": "帽子戏法",
    "hold seance": "举行降神会",
    "imbue gem (Air": "灌魔宝石（空气",
    "imbue gem (Arcane": "灌魔宝石（奥术",
    "imbue gem (Chaos": "灌魔宝石（混沌",
    "imbue gem (Fire": "灌魔宝石（火",
    "imbue gem (Light": "灌魔宝石（光",
    "imbue gem (Nature": "灌输宝石（自然",
    "imbue gem (Shadow": "灌魔宝石（暗影",
    "imbue gem (Spirit": "灌输宝石（精神",
    "imbue gem (Water": "灌魔宝石（水",
    "imbue stone (earth": "灌魔石（土",
    "imbue timepiece": "灌输钟表",
    "improve soulflag": "提升魂旗",
    "indulge": "放纵",
    "inscribe ritual paper": "铭文",
    "It's stable employment": "这是一份稳定的工作",
    "lease labor": "租赁劳动力",
    "lemurian lexicon": "利穆里亚语词典",
    "lich": "巫妖",
    "LOADING DATA...": "加载数据中...",
    "Login": "登录",
    "Loot": "抢劫",
    "magic heist": "魔法抢劫",
    "main": "主界面",
    "Make a Beautiful Home": "打造美丽家园",
    "malleus maleficarum": "魔锤",
    "map stars": "地图星星",
    "markhul's codex": "马克胡尔的手抄本",
    "mine": "矿",
    "murder": "谋杀",
    "offer services": "提供服务",
    "oppress": "压迫",
    "pace": "步伐",
    "pet familiar": "宠物熟悉",
    "phylactory": "预言家",
    "Pillage Graves": "掠夺坟墓",
    "plan future": "计划未来",
    "player": "玩家",
    "powderize skull": "粉化头骨",
    "prestidigitation": "预指",
    "puppet show": "木偶戏",
    "purchase gem": "购买宝石",
    "re-weave soulflag": "重织魂旗",
    "read palms": "看手相",
    "relax": "放松",
    "Relax": "放松",
    "ritual of air": "空气仪式",
    "ritual of cultivation": "修炼仪式",
    "ritual of cursing": "咒骂的仪式",
    "ritual of dawn": "黎明仪式",
    "ritual of dreams": "梦的仪式",
    "ritual of dusk": "黄昏的仪式",
    "ritual of earth": "大地仪式",
    "ritual of fire": "火的仪式",
    "ritual of healing": "治愈的仪式",
    "ritual of light binding": "光缚仪式",
    "ritual of mana": "法力仪式",
    "ritual of mandalas": "曼荼罗仪式",
    "ritual of penance": "忏悔的仪式",
    "ritual of refreshment": "茶点仪式",
    "ritual of the arcane": "奥术仪式",
    "ritual of time": "时间的仪式",
    "ritual of void": "虚空仪式",
    "ritual of water": "水的仪式",
    "run errands": "跑腿",
    "scribe scroll": "抄写员卷轴",
    "scry": "占卜",
    "sell gem": "卖宝石",
    "Sell Herbs": "卖药草",
    "sell scroll": "卖卷轴",
    "shape automata": "形状自动机",
    "slumber": "睡眠",
    "spellbook": "拼写书",
    "spin gold": "旋转黄金",
    "starwish": "星愿",
    "study": "学习",
    "sublimate lore": "升华传说",
    "summon familiar": "召唤魔宠",
    "sylvan syllabary": "森林音节",
    "tend animals": "照料动物",
    "Test Site": "测试版",
    "time siphon": "时间虹吸",
    "titan's hammer": "泰坦之锤",
    "trap soul": "陷阱灵魂",
    "travel": "旅行",
    "treat ailments": "治病",
    "unending codex": "无休止的抄本",
    "unending scroll": "无休止的滚动",
    "unending tome": "无休止的大部头",
    "Unlock": "开锁",
    "vile experiment": "卑鄙的实验",
    "warp landscape": "经线景观",
    "weave tapestry": "编织挂毯",
    "Wiki": "Wiki",
    "witch's sabbat": "女巫安息日",
    "Working from home.": "居家办公。",
    " Rest": "休息",
    "Fists": "拳头",
    "Waif": "流浪汉",
    "Wizard life-force": "巫师生命力",
    "Titles": "头衔",
    "Gold Coins": "金币",
    "Spend to unlock new skills": "花费以解锁新技能",
    "LOADING DATA...": "数据加载中...",
    "pouch": "钱袋",
    "Pouch": "钱袋",
    "relaxing": "放松身心",
    "Keep your money safe.": "确保您的资金安全。",
    "Seems a tad pricey for a bag.": "对于一个袋子来说看起来有点贵。",
    "Attempt to load game from Remote host before loading from browser Storage.": "在从浏览器存储加载之前尝试从远程主机加载游戏。",
    "Auto-Save": "自动保存",
    "Close": "关闭",
    "Compact Mode": "紧凑模式",
    "Dark Mode": "深色模式",
    "Periodically save game to storage. Game is saved to Browser storage by default. Only saved to Remote storage if logged in and server is available.": "定期将游戏保存到存储中。 游戏默认保存到浏览器存储。 仅在登录且服务器可用时才保存到远程存储。",
    "Try Remote Load First": "首先尝试远程加载",
    "A novice can get by with very basic scrolls, hopefully you won't need any of the pricier ones.": "新手可以使用非常基本的卷轴，希望您不需要任何更昂贵的卷轴。",
    "A Tattered Scroll": "一个破烂的卷轴",
    "buy scroll": "购买卷轴",
    "Buy Scroll": "购买卷轴",
    "A tattered scroll": "破烂的卷轴",
    "apprentice": "学徒",
    "Apprentice": "学徒",
    "Become an apprentice.": "成为学徒。",
    "Class": "课程",
    "apprentice": "学徒",
    "research": "研究",
    "Research": "研究",
    "Research into the Arcane": "研究奥术",
    "Scroll of arcane lore": "奥术知识卷轴",
    "scrolls": "卷轴",
    "Scrolls": "卷轴",
    "Study": "学习",
    "Study arcane scrolls": "研究奥术卷轴",
    "studying scrolls": "学习卷轴",
    "You buy a strange scroll from a travelling peddler. If you could only decipher the cryptic symbols.": "你从一个旅行小贩那里买了一个奇怪的卷轴。 如果你只能破译神秘的符号。",
    "Blunt": "钝器",
    "Maximum travel distance.": "最大移动距离。",
    "Press {Number} again to use quickslot Item.\n\t": "再次按 {数字} 以使用快速槽物品。\n\t",
    "Roll-over Item and hold {Shift} + {Number} to assign quickslot.": "鼠标悬浮物品并按住 {Shift} + {数字} 分配物品快速槽。",
    "🎃carve lantern": "🎃雕刻灯笼",
    "🎃filch pumpkins": "🎃偷取南瓜",
    "🎃pumpkin seeds": "🎃南瓜种子",
    "🎃pumpkins": "🎃南瓜",
    "🎃smash pumpkin": "🎃砸碎南瓜",
    "After paying a small fee, you became apprenticed to a local wizard.": "支付少量费用后，您成为当地巫师的学徒。",
    "Apprentice to a notable wizard": "著名巫师的学徒",
    "Carve Lantern": "雕刻灯笼",
    "Common way to carry coins.": "携带硬币的常用方法。",
    "Do Chores": "做家务事",
    "equip": "装备",
    "Filch Pumpkins": "菲尔奇南瓜",
    "Furniture Unlocked: basin": "家具解锁：盆",
    "Furniture Unlocked: birdcage": "解锁家具：鸟笼",
    "Furniture Unlocked: cot": "解锁家具：婴儿床",
    "Furniture Unlocked: small chest": "解锁家具：小胸",
    "Home Unlocked: alcove": "家庭解锁：壁龛",
    "Plump round gourds of the season.": "当季丰满的圆瓜。",
    "🎃bubbling brew": "🎃气泡酒",
    "pumpkin seeds": "南瓜种子",
    "pumpkins": "南瓜",
    "Pumpkins": "南瓜",
    "purse": "钱包",
    "Purse": "钱包",
    "Run Errands": "跑腿",
    "skills": "技能",
    "Smash Pumpkin": "粉碎南瓜",
    "Standard apprentice work.": "标准的学徒工作。",
    "Steal pumpkins from nearby homes.": "从附近的房子里偷南瓜。",
    "\tStop": "\t停止",
    "\tTrain": "\t训练",
    "A small bench for arts and crafts. Necessary for many wizard studies.": "用于工艺品的小长凳。 许多巫师研究所必需的。",
    "A small wooden chest.": "一个小木箱。",
    "Back": "背部",
    "basin": "盆地",
    "Basin": "盆地",
    "Basin of water.": "水盆。",
    "Bed,  Furniture": "床、家具",
    "birdcage": "鸟笼",
    "Birdcage": "鸟笼",
    "Chest": "胸部",
    "cot": "婴儿床",
    "Cot": "婴儿床",
    "Feet": "脚部",
    "Fingers": "手指",
    "Furniture": "家具",
    "Hands": "手部",
    "Head": "头部",
    "Left": "左手",
    "mage lore": "法师知识",
    "Mage Lore": "法师知识",
    "Neck": "脖子",
    "Nothing is more important to a wizard than the depth of their lore.": "对于一个巫师来说，没有什么比他们的知识渊博更重要的了。",
    "Perfect for robins.": "非常适合知更鸟。",
    "Pets,  Furniture": "宠物、家具",
    "Plantsource,  Furniture": "植物资源，家具",
    "potted milkweed": "盆栽乳草",
    "Potted Milkweed": "盆栽乳草",
    "Really brightens up the place.": "真的照亮了这个地方。",
    "Right": "右手",
    "School,  Skill": "学校，技能",
    "Shins": "小腿",
    "Slightly better than sleeping on the floor": "比睡地板好一点",
    "small chest": "小箱子",
    "Small Chest": "小箱子",
    "Trinket": "饰品",
    "Waist": "腰部",
    "Watersource,  Furniture": "水源、家具",
    "workbench": "工作台",
    "Workbench": "工作台",
    "Workspace,  Furniture": "工作区、家具",
    "arcana": "奥术",
    "Arcana": "奥术",
    "Auto Focus": "自动专注",
    "Books and scrolls are written in many obscure languages. Learn as many as possible.": "书籍和卷轴是用许多晦涩的语言写成的。 尽可能多地学习。",
    "herbalism": "草药学",
    "Herbalism": "草药学",
    "languages": "语言",
    "Languages": "语言",
    "Plantsource": "植物源",
    "Profound mystical knowledge": "深厚的玄学知识",
    "Pumpkin Seeds": "南瓜种子",
    "Skill": "技能",
    "A good apprentice knows there are 30 hours to the day.": "一个好的学徒知道一天有 30 个小时。",
    "A tiny glowing candle.": "一个发光的小蜡烛。",
    "Activities": "激活中",
    "Candle": "蜡烛",
    "Continue working even while idle": "即使在空闲时也能继续工作",
    "Pursuits": "追求",
    "Quicken your skills with magic energy.": "用魔法能量加速你的技能。",
    "restless nights": "不安的夜晚",
    "Restless Nights": "不安的夜晚",
    "Waiting/Blocked": "等待/阻止",
    "wax candle": "蜡烛",
    "Wax Candle": "蜡烛",
    "You no take candle!": "你不要拿蜡烛！",
    "Carry more scrolls.": "携带更多卷轴。",
    "magic circle": "魔法阵",
    "Magic circle": "魔法阵",
    "Magic Circle": "魔法阵",
    "satchel": "书包",
    "Satchel": "书包",
    "No space remaining. Sell items or find a new Home.": "没有剩余空间。 出售物品或寻找新家。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
	"": "",
	// 原样
    "⚙": "⚙",
    "▼": "▼",
    "* 启用后台游戏": "* 启用后台游戏",
    "Discord": "Discord",
    "Reddit": "Reddit",
    "QQ群号": "QQ群号",
    "x": "x",
    " X ": " X ",
    "CS": "CS",
    "R": "R",
    "S": "S",
    "🔒": "🔒",
    "X": "X",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "🎃": "🎃",
    "🎃": "🎃",

    "\n			Next Improvement: ": "下一次提升：",
    "\n\t\t": "\n\t\t",
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
	'Upgrade Unlocked: ': '升级解锁：',
	'action Unlocked: ': '动作解锁：',
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
	'max:': '上限:',
	'Life: ': '生命:',
	'Gold: ': '金币: ',
	'Research: ': '研究: ',
	'Skill Points: ': '技能点: ',
	'Max Research: ': '研究上限: ',
	'Mana: ': '法力: ',
	'Arcana: ': '奥术: ',
	'Max Arcana: ': '奥术上限: ',
	'Max Herbs: ': '草药上限: ',
	'Max Scrolls: ': '卷轴上限: ',
	'Max Inventory: ': '库存上限: ',
	'Max Spelllist: ': '法术列表上限: ',
	'Relax Stamina: ': '放松耐力: ',
	'Pumpkin Seeds: ': '南瓜种子: ',
	'Jack O\' Lantern: ': '杰克南瓜灯: ',
	'Arcana Rate: ': '奥术速率: ',
	'Gold Rate: ': '金币速率: ',
	'Gold Rate: ': '金币速率: ',
	'Fire Rate: ': '火之速率: ',
	'Water Rate: ': '水之速率: ',
	'Earth Rate: ': '土之速率: ',
	'Nature Rate: ': '自然速率: ',
	'Research Rate: ': '研究速率: ',
	'Mage Lore Rate: ': '法师知识速率: ',
	'Damage: ': '伤害: ',
	'Prismatic: ': '棱柱: ',
	'Hit Bonus:': '命中加成: ',
	'Stress:': '压力: ',
	'Scrolls: ': '卷轴: ',
	'Kind:  ': '种类:  ',
	'Max Gold: ': '金币上限: ',
	'Trickery Exp: ': '诡计经验: ',
	'Stamina: ': '耐力: ',
    "Version: stable ": "版本：稳定版 ",
    "Action Unlocked: ": "动作解锁: ",
    "Class Unlocked: ": "课程解锁: ",
    "Resource Unlocked: ": "资源解锁: ",
    "Virtue : ": "德行 : ",
    "Virtue: ": "德行: ",
    "Pumpkins: ": "南瓜: ",
    "Pouch (": "钱袋 (",
    "running errands ": "跑腿 ",
    "Filch Pumpkins ": "偷取南瓜 ",
    "\tCompletion time: ": "\t完成时间: ",
    "Potion Unlocked: ": "药水解锁: ",
    "reading lore ": "阅读知识 ",
    "Floor Space: ": "占地空间: ",
    "Level: ": "等级: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "\n\t\t\t": "\n\t\t\t",
    "\n\t\t": "\n\t\t",
    "\n\t": "\n\t",
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
    " Used": " 已使用",
    " Bed": " 床",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}


//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+) \/ ([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+) ~ ([\d\.,]+)$/,
    /^([\d\.,]+) : ([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^ ([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
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
	[/^(.+) Exp: (.+)$/, '$1 经验：$2'],
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
