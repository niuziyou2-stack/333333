const dimensions = {
  EI: { label: "社交电量", pair: ["E", "I"] },
  SN: { label: "现实感 / 脑洞感", pair: ["S", "N"] },
  TF: { label: "逻辑 / 共情", pair: ["T", "F"] },
  JP: { label: "计划 / 随机", pair: ["J", "P"] },
};

const fruitShapes = {
  blob: "M53 129C50 73 81 34 125 38C171 42 198 87 191 140C185 190 154 222 103 214C63 208 55 177 53 129Z",
  pear: "M101 38C132 24 172 51 181 99C193 159 168 216 112 220C64 223 36 185 46 133C54 93 72 58 101 38Z",
  oval: "M69 65C98 24 162 35 185 86C210 141 188 204 133 219C81 233 42 196 40 138C39 105 50 82 69 65Z",
  round: "M45 127C45 74 78 42 124 41C172 40 196 78 194 132C191 185 160 219 111 217C67 215 45 181 45 127Z",
  tall: "M78 45C113 14 167 41 185 98C205 160 176 218 113 222C60 225 39 184 50 124C57 84 58 62 78 45Z",
  bean: "M66 86C93 33 171 44 188 98C199 133 171 146 170 176C169 209 130 225 91 211C49 196 36 149 50 112C54 101 60 95 66 86Z",
  drop: "M115 28C143 70 188 103 182 158C177 205 141 226 100 215C60 204 40 169 51 126C60 89 91 66 115 28Z",
  cluster: "M87 58C105 33 144 38 158 63C187 62 206 88 198 119C218 144 205 184 173 190C160 219 119 229 96 205C64 211 38 183 47 153C24 127 39 84 73 82C76 73 80 65 87 58Z",
};

const questions = [
  {
    axis: "EI",
    fruit: "菠萝",
    title: "刚进一个不熟的局，你的第一动作更像？",
    hint: "不是社交考试，是果盘自救现场。",
    colors: ["#f1bd43", "#1fa879", "#ef7f5f"],
    options: [
      { trait: "E", label: "先抛一个轻松话题", desc: "空气太安静，我来拧开汽水。", color: "#f1bd43" },
      { trait: "E", label: "顺手接住别人梗", desc: "有人开头，我马上加一段配菜。", color: "#f3a56d" },
      { trait: "I", label: "先观察座位和气氛", desc: "确认安全，再决定要不要出汁。", color: "#a9bab8" },
      { trait: "I", label: "找一个舒服角落待机", desc: "我不是冷漠，我在慢慢预热。", color: "#7a8c5f" },
    ],
  },
  {
    axis: "SN",
    fruit: "蓝莓",
    title: "朋友说“随便逛逛”，你脑子里更先出现？",
    hint: "随便两个字，能暴露整套操作系统。",
    colors: ["#6f82c9", "#f0cc77", "#7d421d"],
    options: [
      { trait: "S", label: "路线、距离、吃什么", desc: "现实不落地，快乐会走失。", color: "#f0cc77" },
      { trait: "S", label: "附近评分和营业时间", desc: "不查一下，我的安心感不熟。", color: "#a9bab8" },
      { trait: "N", label: "会不会遇到神秘支线", desc: "转角可能是命运，也可能是奶茶。", color: "#6f82c9" },
      { trait: "N", label: "这趟会变成什么故事", desc: "逛街只是表层，后劲才是正片。", color: "#b38ad7" },
    ],
  },
  {
    axis: "TF",
    fruit: "柠檬",
    title: "朋友深夜发来 800 字崩溃小作文，你先做什么？",
    hint: "此刻你是果味客服，还是情绪急救包。",
    colors: ["#f2dd58", "#94d6e6", "#ef7f5f"],
    options: [
      { trait: "T", label: "帮 TA 拆问题", desc: "先找线头，不然越哭越像毛线团。", color: "#94d6e6" },
      { trait: "T", label: "问清楚关键事实", desc: "情绪我懂，但证据也要上桌。", color: "#a9bab8" },
      { trait: "F", label: "先说我在", desc: "方案稍后，人先别碎成水果丁。", color: "#f3a56d" },
      { trait: "F", label: "陪 TA 把情绪讲完", desc: "先让心落地，再考虑下一步。", color: "#ef7f5f" },
    ],
  },
  {
    axis: "JP",
    fruit: "苹果",
    title: "出门前 20 分钟，计划突然变了。",
    hint: "果篮秩序迎来压力测试。",
    colors: ["#ef5a4e", "#d99a2b", "#7a8c5f"],
    options: [
      { trait: "J", label: "立刻重排时间线", desc: "可以改，但新版地图要立刻上线。", color: "#ef5a4e" },
      { trait: "J", label: "先确认谁负责什么", desc: "乱可以，但不能无人认领。", color: "#d99a2b" },
      { trait: "P", label: "先走，边走边改", desc: "人生本来就是边剥边吃的橘子。", color: "#7a8c5f" },
      { trait: "P", label: "顺势换个玩法", desc: "计划塌了，可能是支线开了。", color: "#94d6e6" },
    ],
  },
  {
    axis: "EI",
    fruit: "西瓜",
    title: "你的社交电量更像哪种提示？",
    hint: "不是没礼貌，是电池有自己的尊严。",
    colors: ["#5fc28e", "#ef7f5f", "#94d6e6"],
    options: [
      { trait: "E", label: "越聊越亮", desc: "人越多，隐藏主持人越容易上线。", color: "#5fc28e" },
      { trait: "E", label: "热闹能给我回血", desc: "朋友一笑，我的低电量就假装不存在。", color: "#ef7f5f" },
      { trait: "I", label: "亮一会儿就省电", desc: "喜欢大家，也喜欢及时回壳。", color: "#a9bab8" },
      { trait: "I", label: "独处才是真充电", desc: "我需要把自己放回冰箱冷静一下。", color: "#94d6e6" },
    ],
  },
  {
    axis: "SN",
    fruit: "椰子",
    title: "看一部新电影，你更容易记住？",
    hint: "有人记台词，有人记宇宙暗线。",
    colors: ["#b99472", "#f0cc77", "#6f82c9"],
    options: [
      { trait: "S", label: "台词、镜头和服装", desc: "细节都在，我能逐帧拿证据。", color: "#b99472" },
      { trait: "S", label: "哪段真的好看", desc: "感受很重要，但我也记得具体发生了啥。", color: "#f0cc77" },
      { trait: "N", label: "隐喻和后劲", desc: "它表面讲电影，实际暗杀我的人生。", color: "#6f82c9" },
      { trait: "N", label: "世界观和未说出口的东西", desc: "我已经在脑补导演没拍的三部曲。", color: "#b38ad7" },
    ],
  },
  {
    axis: "TF",
    fruit: "草莓",
    title: "小组讨论跑偏了，你会更想？",
    hint: "一边是效率，一边是空气别结冰。",
    colors: ["#ee6f82", "#f3a56d", "#94d6e6"],
    options: [
      { trait: "T", label: "拉回核心问题", desc: "好笑归好笑，ddl 不会自己成熟。", color: "#94d6e6" },
      { trait: "T", label: "列出可执行步骤", desc: "先别飘，我们把果汁倒进杯子。", color: "#a9bab8" },
      { trait: "F", label: "照顾大家情绪", desc: "人没散，事才有机会继续往前。", color: "#ee6f82" },
      { trait: "F", label: "先让每个人讲完", desc: "被听见之后，合作才不会发酸。", color: "#f3a56d" },
    ],
  },
  {
    axis: "JP",
    fruit: "葡萄",
    title: "手机备忘录里的你更接近？",
    hint: "备忘录是人格的冰箱门。",
    colors: ["#8a67b1", "#d99a2b", "#7a8c5f"],
    options: [
      { trait: "J", label: "分类清楚，像档案馆", desc: "找得到，是对过去的自己基本尊重。", color: "#8a67b1" },
      { trait: "J", label: "清单很多，打勾很爽", desc: "每个勾都是一粒被驯服的葡萄。", color: "#7a8c5f" },
      { trait: "P", label: "灵感乱飞，像果汁泼过", desc: "混乱归混乱，里面有未来爆款。", color: "#d99a2b" },
      { trait: "P", label: "标题经常叫“新建备忘录”", desc: "我尊重灵感的野生状态。", color: "#f3a56d" },
    ],
  },
  {
    axis: "EI",
    fruit: "芒果",
    title: "被夸奖时，你的第一反应是？",
    hint: "果皮可以淡定，果肉未必。",
    colors: ["#f4a73b", "#ef7f5f", "#a9bab8"],
    options: [
      { trait: "E", label: "接住并加一点戏", desc: "谢谢，今天本水果确实状态不错。", color: "#f4a73b" },
      { trait: "E", label: "顺手夸回去", desc: "互相发光，谁也别想低调。", color: "#ef7f5f" },
      { trait: "I", label: "嘴上冷静，心里收藏", desc: "表面没事，内心年度循环播放。", color: "#a9bab8" },
      { trait: "I", label: "有点害羞但很开心", desc: "我会假装没事，其实已经熟透。", color: "#94d6e6" },
    ],
  },
  {
    axis: "SN",
    fruit: "梨",
    title: "做决定前，你更信任什么？",
    hint: "果汁的来源很重要。",
    colors: ["#d7dc91", "#f0cc77", "#b38ad7"],
    options: [
      { trait: "S", label: "已有经验", desc: "踩过的坑，比漂亮口号更会说话。", color: "#d7dc91" },
      { trait: "S", label: "具体数据和现实条件", desc: "样本够不够，细节稳不稳，先看这个。", color: "#f0cc77" },
      { trait: "N", label: "直觉走向", desc: "我说不清，但脑内雷达已经响了。", color: "#b38ad7" },
      { trait: "N", label: "未来可能性", desc: "眼前只是开头，我更想看它能长成什么。", color: "#94d6e6" },
    ],
  },
  {
    axis: "TF",
    fruit: "橙子",
    title: "别人说你“太直接了”，你会想？",
    hint: "酸甜比例开始暴露。",
    colors: ["#f39a42", "#ef7f5f", "#94d6e6"],
    options: [
      { trait: "T", label: "直接是为了节省时间", desc: "糖衣可以有，但别把重点腌没了。", color: "#94d6e6" },
      { trait: "T", label: "那我下次说得更清楚", desc: "我的重点不是刺人，是让事情别糊。", color: "#a9bab8" },
      { trait: "F", label: "我是不是刺到人了", desc: "意思要说到，感受也要留住。", color: "#f39a42" },
      { trait: "F", label: "先修复关系", desc: "话可以重说，人别被我说没了。", color: "#ef7f5f" },
    ],
  },
  {
    axis: "JP",
    fruit: "猕猴桃",
    title: "旅行时，你更喜欢哪种快乐？",
    hint: "有人收纳行程，有人收纳意外。",
    colors: ["#8abf50", "#d99a2b", "#94d6e6"],
    options: [
      { trait: "J", label: "订好关键节点", desc: "车票、住宿、必吃清单，安全感先落地。", color: "#8abf50" },
      { trait: "J", label: "攻略写到能救命", desc: "不是紧张，是我想把快乐铺平。", color: "#d99a2b" },
      { trait: "P", label: "留白给现场发挥", desc: "攻略是参考，迷路可能才是正片。", color: "#94d6e6" },
      { trait: "P", label: "看天气和心情决定", desc: "我不反对计划，我反对计划管我。", color: "#f3a56d" },
    ],
  },
  {
    axis: "EI",
    fruit: "荔枝",
    title: "群聊突然热闹起来，你通常是？",
    hint: "有人上桌，有人潜水但已读。",
    colors: ["#f4d5d9", "#ef7f5f", "#a9bab8"],
    options: [
      { trait: "E", label: "立刻加入战场", desc: "这波我有话说，而且还挺多。", color: "#ef7f5f" },
      { trait: "E", label: "发图发梗接住节奏", desc: "文字不够，表情包来补维生素。", color: "#f3a56d" },
      { trait: "I", label: "默默看完再挑重点回", desc: "我在，不代表我要每秒冒泡。", color: "#a9bab8" },
      { trait: "I", label: "等被点名才出现", desc: "不是失踪，是降低存在感损耗。", color: "#f4d5d9" },
    ],
  },
  {
    axis: "SN",
    fruit: "无花果",
    title: "听别人讲一个新想法，你更先捕捉到？",
    hint: "同一颗果子，有人看皮，有人看籽。",
    colors: ["#a77ab4", "#d99a2b", "#a9bab8"],
    options: [
      { trait: "S", label: "它现在能不能做", desc: "灵感不错，落地条件先拿来。", color: "#d99a2b" },
      { trait: "S", label: "缺了哪些具体信息", desc: "空白太多，我会自动补问号。", color: "#a9bab8" },
      { trait: "N", label: "它背后的可能方向", desc: "我已经看到它长出三条支线。", color: "#a77ab4" },
      { trait: "N", label: "它像不像某种更大的趋势", desc: "表面是点子，实际可能是一扇门。", color: "#94d6e6" },
    ],
  },
  {
    axis: "TF",
    fruit: "水蜜桃",
    title: "朋友问你“我这样做对吗”，你更常？",
    hint: "回答之前，果肉和果核先开会。",
    colors: ["#f7b6a8", "#ef7f5f", "#94d6e6"],
    options: [
      { trait: "T", label: "先判断逻辑是否成立", desc: "我会温柔，但逻辑不能假装没问题。", color: "#94d6e6" },
      { trait: "T", label: "指出风险和代价", desc: "不是泼冷水，是帮你少摔一跤。", color: "#a9bab8" },
      { trait: "F", label: "先确认 TA 真正在意什么", desc: "答案不止对错，还有心里过不过得去。", color: "#f7b6a8" },
      { trait: "F", label: "站在 TA 的感受里想一遍", desc: "我想先理解你为什么这样选。", color: "#ef7f5f" },
    ],
  },
  {
    axis: "JP",
    fruit: "石榴",
    title: "面对一个大任务，你会怎么启动？",
    hint: "有人先画地图，有人先切一刀。",
    colors: ["#c84654", "#d99a2b", "#7a8c5f"],
    options: [
      { trait: "J", label: "拆成节点和截止日", desc: "没有节点的大任务只是巨型果冻。", color: "#c84654" },
      { trait: "J", label: "先定标准和优先级", desc: "什么叫完成，必须先说清楚。", color: "#d99a2b" },
      { trait: "P", label: "先做最顺手的一块", desc: "动起来后，路径会自己露出来。", color: "#7a8c5f" },
      { trait: "P", label: "边试边调", desc: "初版不完美，但它能把问题逼出来。", color: "#94d6e6" },
    ],
  },
];

const results = {
  ENFP: {
    fruit: "菠萝",
    name: "噪点灵感菠萝型人格",
    tone: "#f0b63d",
    accent: "#11a575",
    dark: "#7d421d",
    ink: "#241d0c",
    shape: "tall",
    keywords: ["热情跳跃", "支线狂魔", "救场担当", "外甜内刺"],
    desc: "你像一颗自带信号增强器的菠萝，哪里无聊就往哪里发射火花。脑洞很亮，节奏很快，偶尔把自己也吵到。",
    friend: "朋友眼里你是气氛急救包，上一秒说不行了，下一秒已经把大家带进新剧情。",
    danger: "隐藏雷区是被迫重复无聊流程，或者被人用“现实一点”盖住灵感。",
    match: "草莓、芒果、柠檬",
    quote: "我不是三分钟热度，我是每三分钟刷新一个宇宙。",
  },
  INFP: {
    fruit: "水蜜桃",
    name: "内心暴雨水蜜桃型人格",
    tone: "#f7b6a8",
    accent: "#ef7f5f",
    dark: "#9b5b4c",
    ink: "#331712",
    shape: "round",
    keywords: ["柔软敏感", "脑内剧场", "慢热真诚", "外甜内潮"],
    desc: "你看起来像轻轻一碰就会留下指纹的桃子，其实心里有一套完整天气系统。你很会感受，也很会把普通瞬间变成私人电影。",
    friend: "朋友眼里你温柔、细腻、不太抢话，但一开口常常精准戳到别人没说出口的地方。",
    danger: "隐藏雷区是被催着立刻表态，或者真心被当成情绪装饰品。",
    match: "无花果、葡萄、草莓",
    quote: "我的沉默不是空白，是正在加载一场小型海啸。",
  },
  ENTJ: {
    fruit: "石榴",
    name: "高压开局石榴型人格",
    tone: "#c84654",
    accent: "#f0cc77",
    dark: "#681c26",
    ink: "#fff8f4",
    shape: "cluster",
    keywords: ["目标感强", "气场锋利", "效率洁癖", "颗粒分明"],
    desc: "你像一颗结构严密的石榴，外表不好撬，里面每一粒都写着计划。你不是喜欢控制，你只是看不得混乱假装自己很自由。",
    friend: "朋友眼里你可靠、有判断力、能把烂摊子变成进度表，就是语气有时像项目验收。",
    danger: "隐藏雷区是无效会议、临时摆烂和没有负责人但人人都有意见。",
    match: "苹果、柠檬、芒果",
    quote: "我可以温柔，但请先把目标、预算和截止时间发我。",
  },
  INTJ: {
    fruit: "蓝莓",
    name: "冷感暗线蓝莓型人格",
    tone: "#6f82c9",
    accent: "#94d6e6",
    dark: "#2e3f8a",
    ink: "#f8f8ff",
    shape: "round",
    keywords: ["冷静独立", "暗中布局", "长期主义", "不爱废话"],
    desc: "你像蓝莓，小小一颗，信息密度很高。表面低调，脑内已经把未来三步的变量算完，只是不一定想解释给所有人听。",
    friend: "朋友眼里你像安静的后台系统，不常热闹，但关键时刻总能给出一针见血的答案。",
    danger: "隐藏雷区是被迫社交表演，或别人拿情绪噪音干扰你的判断。",
    match: "柠檬、椰子、石榴",
    quote: "我没冷场，我只是在后台更新世界模型。",
  },
  ESFP: {
    fruit: "西瓜",
    name: "夏日放送西瓜型人格",
    tone: "#5fc28e",
    accent: "#ef5a4e",
    dark: "#1d7a4b",
    ink: "#11241b",
    shape: "oval",
    keywords: ["快乐外放", "现场感强", "气氛组", "松弛会玩"],
    desc: "你像西瓜，出现就自动降温，切开就是热闹。你很会享受当下，也能把普通日子过成有背景音乐的片段。",
    friend: "朋友眼里你有感染力、好相处、很能把人从低气压里捞出来。",
    danger: "隐藏雷区是被关进太严肃的计划里，或者快乐被过度分析。",
    match: "菠萝、芒果、橙子",
    quote: "人生已经够硬了，我负责把它切成冰镇的。",
  },
  ISFP: {
    fruit: "荔枝",
    name: "漂亮反骨荔枝型人格",
    tone: "#f4d5d9",
    accent: "#ef7f5f",
    dark: "#bd7c86",
    ink: "#2b1518",
    shape: "bean",
    keywords: ["外软内倔", "审美在线", "低调敏锐", "不吃硬控"],
    desc: "你像荔枝，外壳有一点刺，剥开却很清甜。你不一定爱解释自己，但审美、边界和喜好都很明确。",
    friend: "朋友眼里你温和、有品位、偶尔突然很犀利，像在安静处开了一盏很准的灯。",
    danger: "隐藏雷区是被强行安排，或者被人粗暴评价你的选择。",
    match: "水蜜桃、猕猴桃、葡萄",
    quote: "我看起来好说话，不代表你可以乱调我的频道。",
  },
  ESTJ: {
    fruit: "苹果",
    name: "秩序硬核苹果型人格",
    tone: "#ef5a4e",
    accent: "#7a8c5f",
    dark: "#a8221d",
    ink: "#fff9f4",
    shape: "round",
    keywords: ["稳定靠谱", "规则感强", "执行到位", "抗压很硬"],
    desc: "你像苹果，经典、耐放、关键时刻顶得住。你相信事情要落地，承诺要兑现，混乱不能靠许愿解决。",
    friend: "朋友眼里你是现实世界的固定锚点，有你在，事情通常不会散成水果沙拉。",
    danger: "隐藏雷区是拖延、反复横跳和说了等于没说的模糊承诺。",
    match: "石榴、梨、橙子",
    quote: "浪漫可以有，但先把表格填完整。",
  },
  ISTJ: {
    fruit: "梨",
    name: "低温靠谱梨型人格",
    tone: "#d7dc91",
    accent: "#7a8c5f",
    dark: "#8f9850",
    ink: "#222411",
    shape: "pear",
    keywords: ["安静踏实", "细节稳定", "慢热守信", "不轻易上头"],
    desc: "你像梨，清清淡淡，但很能扛事。你不爱把可靠挂嘴边，因为你通常直接把事情做好。",
    friend: "朋友眼里你不浮夸、不抢戏，但只要答应了，就像给现实打了一颗钉子。",
    danger: "隐藏雷区是临时改规则，或别人把你的耐心当成免费仓库。",
    match: "苹果、葡萄、蓝莓",
    quote: "我不需要闪亮登场，我负责别让地板塌。",
  },
  ENTP: {
    fruit: "柠檬",
    name: "嘴快清醒柠檬型人格",
    tone: "#f2dd58",
    accent: "#94d6e6",
    dark: "#c6aa20",
    ink: "#241f05",
    shape: "oval",
    keywords: ["清醒锋利", "越辩越兴奋", "反应很快", "酸得有理"],
    desc: "你像柠檬，一开口就让空气醒过来。你喜欢拆概念、找漏洞、反手开新脑洞，偶尔酸到别人表情管理失效。",
    friend: "朋友眼里你聪明、有趣、很会把沉闷话题拧出汁，但也会突然变成辩论赛主持。",
    danger: "隐藏雷区是被要求无条件认同，或者面对不能开玩笑的玻璃心气氛。",
    match: "菠萝、蓝莓、石榴",
    quote: "我不是抬杠，我是在给空气加一点维生素 C。",
  },
  INTP: {
    fruit: "椰子",
    name: "外壳离线椰子型人格",
    tone: "#b99472",
    accent: "#fff4dc",
    dark: "#7d421d",
    ink: "#fffaf1",
    shape: "round",
    keywords: ["外冷内复杂", "逻辑潜水", "兴趣深挖", "延迟回复"],
    desc: "你像椰子，外面敲不太动，里面另有生态。你对无聊社交省电，对感兴趣的东西可以一路钻到地心。",
    friend: "朋友眼里你神出鬼没、思路奇特、偶尔一句话让人怀疑你刚从另一个维度回来。",
    danger: "隐藏雷区是被迫即时反应，或在没有逻辑的要求里打转。",
    match: "蓝莓、猕猴桃、柠檬",
    quote: "我不是失联，我是在和一个想法单独会面。",
  },
  ENFJ: {
    fruit: "草莓",
    name: "社交雷达草莓型人格",
    tone: "#ee6f82",
    accent: "#f0cc77",
    dark: "#b53a50",
    ink: "#fff8fa",
    shape: "drop",
    keywords: ["亲和会照顾", "感知很准", "组织气氛", "甜中带管"],
    desc: "你像草莓，出现时很容易让人放松，但你并不只是甜。你会读空气、接住情绪，也会在混乱里悄悄把大家排好队。",
    friend: "朋友眼里你温暖、体面、能照顾每个人的情绪，只是偶尔像在主持人生班会。",
    danger: "隐藏雷区是付出被当理所当然，或者一群人拒绝沟通还要你善后。",
    match: "水蜜桃、橙子、菠萝",
    quote: "我可以照顾全场，但别忘了我也需要被认真对待。",
  },
  INFJ: {
    fruit: "无花果",
    name: "神秘预言无花果型人格",
    tone: "#a77ab4",
    accent: "#f0cc77",
    dark: "#6b3d78",
    ink: "#fff9ff",
    shape: "bean",
    keywords: ["神秘细腻", "洞察很深", "理想主义", "难被读懂"],
    desc: "你像无花果，不是第一眼最吵的水果，但越靠近越发现层次很多。你能看见别人没说出口的东西，也常常被自己的感受推着往深处走。",
    friend: "朋友眼里你温柔又有距离感，像一本只给少数人翻开的隐秘说明书。",
    danger: "隐藏雷区是浅薄消耗、虚假热闹和别人用一句“想太多”结束你的认真。",
    match: "水蜜桃、蓝莓、葡萄",
    quote: "我不是想太多，我是在读你没写出来的那一页。",
  },
  ESTP: {
    fruit: "芒果",
    name: "高光冲刺芒果型人格",
    tone: "#f4a73b",
    accent: "#ef7f5f",
    dark: "#bd6a16",
    ink: "#251907",
    shape: "bean",
    keywords: ["行动派", "敢冲敢试", "存在感强", "现场解题"],
    desc: "你像芒果，颜色亮，能量足，不喜欢把人生过成说明书。你更相信现场手感，遇到事先动起来再说。",
    friend: "朋友眼里你爽快、会玩、有胆量，像一颗移动的高光，哪里有局面哪里就有你。",
    danger: "隐藏雷区是无限开会、过度预判和别人用恐惧包装成谨慎。",
    match: "西瓜、菠萝、石榴",
    quote: "先别写 30 页方案，让我试一下就知道。",
  },
  ISTP: {
    fruit: "猕猴桃",
    name: "低调刀法猕猴桃型人格",
    tone: "#8abf50",
    accent: "#f0cc77",
    dark: "#526f2a",
    ink: "#17210f",
    shape: "oval",
    keywords: ["低调有技能", "冷静动手", "突然犀利", "独立省话"],
    desc: "你像猕猴桃，外表朴素，切开才知道很有料。你不爱空谈，喜欢靠观察和手感解决问题。",
    friend: "朋友眼里你平时话不多，但一出手就很准，像随身带着隐藏工具箱。",
    danger: "隐藏雷区是被情绪绑架，或被要求参加没有意义的表态仪式。",
    match: "椰子、荔枝、梨",
    quote: "别催我解释，等我修好你自然会懂。",
  },
  ESFJ: {
    fruit: "橙子",
    name: "人情保鲜橙子型人格",
    tone: "#f39a42",
    accent: "#7a8c5f",
    dark: "#bd601b",
    ink: "#271606",
    shape: "round",
    keywords: ["温暖会安排", "关系维护", "行动贴心", "酸甜平衡"],
    desc: "你像橙子，明亮、实在、很会让人感觉被照顾。你能记住别人的小习惯，也能把一群散装朋友重新装回果篮。",
    friend: "朋友眼里你靠谱、周到、很有人情味，只是偶尔会因为大家不配合而默默爆汁。",
    danger: "隐藏雷区是好意被忽略，或你认真维系的关系被人随手糟蹋。",
    match: "草莓、西瓜、苹果",
    quote: "我不是爱操心，我是在维护人类基本甜度。",
  },
  ISFJ: {
    fruit: "葡萄",
    name: "默默挂念葡萄型人格",
    tone: "#8a67b1",
    accent: "#d7dc91",
    dark: "#5b3a79",
    ink: "#fffaff",
    shape: "cluster",
    keywords: ["细心耐心", "默默照顾", "记忆力强", "温柔有界"],
    desc: "你像葡萄，一颗颗攒着细节和在意。你不一定高调表达，但会把重要的人放在心里慢慢照看。",
    friend: "朋友眼里你温柔、稳定、很会记事，像生活里一串不声张的甜。",
    danger: "隐藏雷区是被消耗到没电，或别人只在需要你时才想起你。",
    match: "梨、水蜜桃、无花果",
    quote: "我可以很体贴，但不是无限续杯。",
  },
};

const fruitStickerDetails = {
  菠萝: {
    word: "SPARK",
    expression: "spark",
    decor: "pineapple",
  },
  水蜜桃: {
    word: "SOFT",
    expression: "blush",
    decor: "peach",
  },
  石榴: {
    word: "BOSS",
    expression: "cool",
    decor: "pomegranate",
  },
  蓝莓: {
    word: "DEEP",
    expression: "sleepy",
    decor: "blueberry",
  },
  西瓜: {
    word: "CHILL",
    expression: "happy",
    decor: "watermelon",
  },
  荔枝: {
    word: "SPKY",
    expression: "side",
    decor: "lychee",
  },
  苹果: {
    word: "DONE",
    expression: "focus",
    decor: "apple",
  },
  梨: {
    word: "STEADY",
    expression: "calm",
    decor: "pear",
  },
  柠檬: {
    word: "ZING",
    expression: "wink",
    decor: "lemon",
  },
  椰子: {
    word: "OFFLINE",
    expression: "flat",
    decor: "coconut",
  },
  草莓: {
    word: "RADAR",
    expression: "heart",
    decor: "strawberry",
  },
  无花果: {
    word: "MYSTIC",
    expression: "mystic",
    decor: "fig",
  },
  芒果: {
    word: "GO",
    expression: "tongue",
    decor: "mango",
  },
  猕猴桃: {
    word: "TOOL",
    expression: "cool",
    decor: "kiwi",
  },
  橙子: {
    word: "ORANGE",
    expression: "tongue",
    decor: "orange",
  },
  葡萄: {
    word: "CARE",
    expression: "gentle",
    decor: "grape",
  },
};

const state = {
  current: 0,
  answers: [],
  resultType: null,
  soundOn: true,
  audioContext: null,
  reportTimer: null,
  autoAdvanceTimer: null,
};

const stage = document.querySelector("#stage");
const canvas = document.querySelector("#shareCanvas");
const soundToggle = document.querySelector("#soundToggle");

function resetViewport() {
  window.requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}

function renderIntro(direction = "pop") {
  resetViewport();
  const galleryTypes = ["ENFP", "ESFP", "ENTP", "INFP", "INTJ", "ESTP", "ISFJ", "ISTP"];
  stage.innerHTML = `
    <div class="intro page-view turn-${direction}">
      <div class="intro-copy">
        <div class="headline">
          <h2>翻开果味小记本，看看你的灵魂是哪颗抽象水果。</h2>
          <p>16 道生活切片，每题 4 个选项。选中的瞬间会爆开一把色块果汁，再用书页翻动进入下一题。</p>
        </div>
        <div class="fruit-gallery" aria-label="水果形象预览">
          ${galleryTypes
            .map(
              (type) => `
                <div class="gallery-cell" style="--cell:${results[type].tone}">
                  ${fruitCharacter(results[type], "mini", false)}
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
      <aside class="intro-panel" aria-label="玩法预览">
        <div>
          ${fruitCharacter(results.ENFP, "medium", true)}
          <p class="panel-note">不是严肃心理测评，是一份轻松愉快的水果人格档案。结果卡会保持同一套抽象色块小人风格。</p>
        </div>
        <div class="specimen-list">
          <div class="specimen"><span class="specimen-dot" style="--dot:#f2dd58"></span>酸得有理</div>
          <div class="specimen"><span class="specimen-dot" style="--dot:#a77ab4"></span>神秘后劲</div>
          <div class="specimen"><span class="specimen-dot" style="--dot:#8abf50"></span>低调有料</div>
        </div>
        <div class="cta-row">
          <button class="btn btn-primary" type="button" data-action="start">开始翻页</button>
        </div>
      </aside>
    </div>
  `;
}

function startQuiz() {
  stopReportTimer();
  playSound("start");
  state.current = 0;
  state.answers = [];
  state.resultType = null;
  renderQuestion("forward");
}

function renderQuestion(direction = "forward") {
  resetViewport();
  const question = questions[state.current];
  const selectedIndex = state.answers[state.current];
  const progress = Math.round(((state.current + 1) / questions.length) * 100);

  stage.innerHTML = `
    <div class="quiz page-view turn-${direction}">
      <div class="quiz-sheet">
        <div class="progress-wrap">
          <div class="progress-meta">
            <span>${String(state.current + 1).padStart(2, "0")} / ${questions.length}</span>
            <span>${dimensions[question.axis].label}</span>
          </div>
          <div class="progress-bar" aria-hidden="true">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>
        </div>

        <div class="question-area">
          <div>
            <div class="question-copy">
              <span class="question-meta">${question.fruit}情境 · ${axisName(question.axis)}</span>
              <h2>${question.title}</h2>
              <p>${question.hint}</p>
            </div>
            <div class="options">
              ${question.options
                .map(
                  (option, index) => `
                    <button
                      class="option ${selectedIndex === index ? "is-selected" : ""}"
                      type="button"
                      data-option-index="${index}"
                      aria-pressed="${selectedIndex === index ? "true" : "false"}"
                      style="--choice:${option.color}"
                    >
                      <span class="choice-blob" aria-hidden="true">${["A", "B", "C", "D"][index]}</span>
                      <span>
                        <strong>${option.label}</strong>
                        <span>${option.desc}</span>
                      </span>
                    </button>
                  `,
                )
                .join("")}
            </div>
          </div>
          <aside class="question-buddy" aria-label="本题水果角色">
            ${fruitCharacter(questionFruitVisual(question), "medium", false)}
          </aside>
        </div>
      </div>

      <div class="quiz-actions">
        <button class="btn btn-ghost" type="button" data-action="prev" ${state.current === 0 ? "disabled" : ""}>
          <span class="nav-icon nav-icon-prev" aria-hidden="true"></span>
          上一题
        </button>
        <button class="btn btn-primary" type="button" data-action="next" ${selectedIndex === undefined ? "disabled" : ""}>
          ${state.current === questions.length - 1 ? "查看结果" : "下一题"}
          <span class="nav-icon nav-icon-next" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  `;
}

function questionFruitVisual(question) {
  const result = Object.values(results).find((item) => item.fruit === question.fruit) || results.ENFP;
  return {
    ...result,
    tone: question.colors[0],
    accent: question.colors[1],
    dark: question.colors[2],
  };
}

function axisName(axis) {
  return {
    EI: "能量来源",
    SN: "感知方式",
    TF: "判断方式",
    JP: "生活节奏",
  }[axis];
}

function selectOption(button, event) {
  const index = Number(button.dataset.optionIndex);
  const question = questions[state.current];
  state.answers[state.current] = index;

  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
  }

  stage.querySelectorAll(".option").forEach((option) => {
    option.classList.remove("is-selected");
    option.setAttribute("aria-pressed", "false");
    option.disabled = true;
  });
  button.classList.add("is-selected");
  button.setAttribute("aria-pressed", "true");

  const nextButton = stage.querySelector('[data-action="next"]');
  if (nextButton) {
    nextButton.disabled = false;
  }

  playBurst(event, [question.options[index].color, ...question.colors]);
  playSound("pop");
  state.autoAdvanceTimer = window.setTimeout(() => {
    state.autoAdvanceTimer = null;
    nextQuestion();
  }, 360);
}

function nextQuestion() {
  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }

  if (state.answers[state.current] === undefined) {
    showToast("先选一块果味，再翻下一页");
    playSound("deny");
    return;
  }

  if (state.current < questions.length - 1) {
    state.current += 1;
    playSound("turn");
    renderQuestion("forward");
    return;
  }

  state.resultType = getResultType();
  playSound("seal");
  renderCompletion("forward");
}

function previousQuestion() {
  if (state.autoAdvanceTimer) {
    window.clearTimeout(state.autoAdvanceTimer);
    state.autoAdvanceTimer = null;
  }

  if (state.current === 0) {
    return;
  }
  state.current -= 1;
  playSound("turnBack");
  renderQuestion("back");
}

function renderCompletion(direction = "forward") {
  resetViewport();
  const type = state.resultType || getResultType();
  const result = results[type];
  stage.innerHTML = `
    <div class="complete page-view turn-${direction}">
      <section class="complete-card">
        <span class="question-meta">16 题已封存 · 果味档案待生成</span>
        <h2>你的答案已经被装进果味检测仪。</h2>
        <p>接下来会读取你的社交电量、脑洞浓度、判断口味和生活节奏。报告不是简单弹出，而是像打开一份专属水果档案。</p>
        <div class="ritual-grid" aria-label="报告读取维度">
          <div class="ritual-chip"><strong>能</strong><span>社交电量</span></div>
          <div class="ritual-chip"><strong>感</strong><span>感知方式</span></div>
          <div class="ritual-chip"><strong>判</strong><span>判断口味</span></div>
        </div>
        <div class="cta-row">
          <button class="btn btn-primary" type="button" data-action="generate">生成我的水果报告</button>
          <button class="btn btn-ghost" type="button" data-action="lastQuestion">回到上一题</button>
        </div>
      </section>
      <aside class="analyzer-visual" aria-label="即将生成的水果角色">
        ${fruitCharacter(result, "medium", true)}
      </aside>
    </div>
  `;
}

function startReportGeneration() {
  stopReportTimer();
  const type = state.resultType || getResultType();
  state.resultType = type;
  let progress = 0;
  renderAnalyzer(progress, analysisMessage(progress), type);
  playSound("scan");

  state.reportTimer = window.setInterval(() => {
    progress = Math.min(100, progress + 9 + Math.round(Math.random() * 11));
    updateAnalyzer(progress, analysisMessage(progress));
    playSound(progress >= 100 ? "success" : "tick");

    if (progress >= 100) {
      stopReportTimer();
      window.setTimeout(() => {
        renderResult(type, "forward");
        playSound("success");
      }, 480);
    }
  }, 260);
}

function updateAnalyzer(progress, message) {
  const fill = stage.querySelector(".analysis-fill");
  const percent = stage.querySelector(".analysis-percent");
  const copy = stage.querySelector(".analyzer-card p");
  if (fill) fill.style.width = `${progress}%`;
  if (percent) percent.textContent = `${progress}%`;
  if (copy) copy.textContent = message;
}

function renderAnalyzer(progress, message, type) {
  resetViewport();
  const result = results[type];
  stage.innerHTML = `
    <div class="analyzer page-view turn-pop">
      <section class="analyzer-card">
        <span class="question-meta">Fruit Report Generator</span>
        <h2>正在榨取你的水果人格报告...</h2>
        <p>${message}</p>
        <div class="analysis-steps" aria-label="分析步骤">
          <div class="analysis-step"><span class="analysis-dot"></span>读取 16 个果味选择</div>
          <div class="analysis-step"><span class="analysis-dot"></span>匹配水果角色贴纸</div>
          <div class="analysis-step"><span class="analysis-dot"></span>生成专属报告切片</div>
        </div>
        <div class="analysis-meter">
          <div class="analysis-bar" aria-hidden="true">
            <div class="analysis-fill" style="width:${progress}%"></div>
          </div>
          <div class="analysis-percent">${progress}%</div>
        </div>
      </section>
      <aside class="analyzer-visual">
        <div class="scan-orbit">
          ${fruitCharacter(result, "", true)}
        </div>
      </aside>
    </div>
  `;
}

function analysisMessage(progress) {
  if (progress < 28) return "果味检测仪正在确认你的默认人生音量。";
  if (progress < 56) return "正在比对你的脑洞分叉、边界感和行动节奏。";
  if (progress < 82) return "正在给水果角色贴上专属表情、纹理和隐藏雷区。";
  return "报告即将完成，果汁浓度已经接近满格。";
}

function stopReportTimer() {
  if (state.reportTimer) {
    window.clearInterval(state.reportTimer);
    state.reportTimer = null;
  }
}

function getResultType() {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  state.answers.forEach((optionIndex, questionIndex) => {
    if (optionIndex === undefined) {
      return;
    }
    const trait = questions[questionIndex].options[optionIndex].trait;
    scores[trait] += 1;
  });

  return Object.entries(dimensions)
    .map(([axis, config]) => {
      const [left, right] = config.pair;
      if (scores[left] > scores[right]) return left;
      if (scores[right] > scores[left]) return right;
      return latestTraitForAxis(axis) || left;
    })
    .join("");
}

function latestTraitForAxis(axis) {
  for (let index = state.answers.length - 1; index >= 0; index -= 1) {
    const optionIndex = state.answers[index];
    if (optionIndex === undefined || questions[index].axis !== axis) {
      continue;
    }
    return questions[index].options[optionIndex].trait;
  }
  return null;
}

function renderResult(type, direction = "forward") {
  resetViewport();
  const result = results[type];
  const shareText = `我是「${result.name}」：${result.quote} 来测测你是什么水果。`;
  stage.innerHTML = `
    <div class="result page-view turn-${direction}">
      <aside class="result-hero" style="--result-bg:${result.tone}; --result-ink:${result.ink}">
        <div class="fruit-orbit">
          ${fruitCharacter(result, "", true)}
        </div>
        <div class="result-title">
          <span class="type-code">${type} · ${result.fruit}</span>
          <h2>${result.name}</h2>
          <p>${result.desc}</p>
        </div>
      </aside>
      <section class="result-main">
        <div class="keyword-row">
          ${result.keywords.map((keyword) => `<span class="keyword">${keyword}</span>`).join("")}
        </div>

        <div class="report-panel">
          <h3>本次报告读取</h3>
          <div class="report-meters">
            ${reportMeters(type, result)}
          </div>
        </div>

        <div class="insight-grid">
          <article class="insight">
            <h3>朋友眼中的你</h3>
            <p>${result.friend}</p>
          </article>
          <article class="insight">
            <h3>隐藏雷区</h3>
            <p>${result.danger}</p>
          </article>
          <article class="insight">
            <h3>适配水果朋友</h3>
            <p>${result.match}</p>
          </article>
          <article class="insight">
            <h3>果味判词</h3>
            <p>${result.quote}</p>
          </article>
        </div>

        <div class="share-card">
          <h3>分享短句</h3>
          <p>${shareText}</p>
        </div>

        <div class="result-actions">
          <button class="btn btn-primary" type="button" data-action="copy">复制分享文案</button>
          <button class="btn btn-ghost" type="button" data-action="download">下载结果卡</button>
          <button class="btn btn-ghost" type="button" data-action="restart">
            <span class="nav-icon nav-icon-loop" aria-hidden="true"></span>
            再测一次
          </button>
        </div>
      </section>
    </div>
  `;
  drawShareCard(type);
}

function reportMeters(type, result) {
  const rows = getAxisBreakdown(type);
  return rows
    .map(
      (row) => `
        <div class="report-meter" style="--meter:${result.tone}">
          <div class="meter-top">
            <span>${row.label}</span>
            <span>${row.chosenName} ${row.percent}%</span>
          </div>
          <div class="meter-track" aria-hidden="true">
            <div class="meter-fill" style="width:${row.percent}%"></div>
          </div>
        </div>
      `,
    )
    .join("");
}

function getAxisBreakdown(type) {
  const display = {
    E: "外放榨汁",
    I: "内向冷藏",
    S: "现实落地",
    N: "脑洞发酵",
    T: "逻辑酸度",
    F: "共情甜度",
    J: "计划切盘",
    P: "随性果篮",
  };
  const scoreMap = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  state.answers.forEach((optionIndex, questionIndex) => {
    if (optionIndex === undefined) return;
    scoreMap[questions[questionIndex].options[optionIndex].trait] += 1;
  });

  return Object.entries(dimensions).map(([axis, config], index) => {
    const [left, right] = config.pair;
    const chosen = type[index];
    const completedAxisAnswers = questions.filter((question, questionIndex) => {
      return question.axis === axis && state.answers[questionIndex] !== undefined;
    }).length;
    const chosenScore = completedAxisAnswers ? scoreMap[chosen] : 3;
    const total = completedAxisAnswers || 4;
    return {
      label: config.label,
      chosenName: display[chosen],
      percent: Math.round((chosenScore / total) * 100),
    };
  });
}

function fruitCharacter(result, className = "", labelled = false) {
  const path = fruitShapes[result.shape] || fruitShapes.blob;
  const sticker = fruitStickerDetails[result.fruit] || fruitStickerDetails.菠萝;
  const aria = labelled ? `role="img" aria-label="${result.fruit}抽象水果角色"` : `aria-hidden="true"`;
  return `
    <svg
      class="fruit-character ${className}"
      viewBox="0 0 240 280"
      ${aria}
      style="--fruit:${result.tone}; --fruit-accent:${result.accent}; --fruit-dark:${result.dark}"
    >
      <path class="fruit-sticker" d="${path}" transform="translate(0 0)" />
      <path class="fruit-sticker" d="M70 154C41 162 28 185 34 216" />
      <path class="fruit-sticker" d="M166 150C203 147 217 126 209 102" />
      <path class="fruit-sticker" d="M73 212L72 248L46 260L104 257L110 214" />
      <path class="fruit-sticker" d="M145 214L151 257L205 260L179 244L181 210" />
      <path class="fruit-line" d="M70 154C41 162 28 185 34 216" />
      <path class="fruit-line" d="M166 150C203 147 217 126 209 102" />
      <path class="fruit-line" d="M73 212L72 248L46 260L104 257L110 214" />
      <path class="fruit-line" d="M145 214L151 257L205 260L179 244L181 210" />
      <path class="fruit-shadow" d="${path}" transform="translate(8 8)" />
      <path class="fruit-body" d="${path}" />
      ${fruitDecoration(sticker.decor)}
      ${fruitFace(sticker.expression)}
      <text class="sticker-word" x="120" y="34" text-anchor="middle" transform="rotate(-8 120 34)">${sticker.word}</text>
    </svg>
  `;
}

function fruitDecoration(type) {
  const commonDots = `
    <circle class="fruit-seed" cx="92" cy="82" r="3" />
    <circle class="fruit-seed" cx="122" cy="74" r="3" />
    <circle class="fruit-seed" cx="153" cy="88" r="3" />
  `;
  const decorations = {
    pineapple: `
      <path class="fruit-detail-fill" d="M94 45L113 16L122 49L146 20L143 55L170 38L151 70L96 68Z" />
      <path class="fruit-detail" d="M82 96L166 178M167 97L82 178M104 82L180 145M60 132L139 210" />
    `,
    peach: `
      <path class="fruit-detail" d="M123 56C111 86 108 126 121 205" />
      <path class="fruit-detail-fill" d="M138 55C159 30 188 33 199 49C178 62 158 65 138 55Z" />
      <circle class="fruit-accent" cx="76" cy="160" r="9" />
      <circle class="fruit-accent" cx="168" cy="160" r="9" />
    `,
    pomegranate: `
      <path class="fruit-detail-fill" d="M95 55L109 31L124 54L142 31L151 59L127 72Z" />
      <circle class="fruit-accent" cx="89" cy="157" r="7" />
      <circle class="fruit-accent" cx="151" cy="156" r="7" />
      <circle class="fruit-accent" cx="119" cy="196" r="7" />
      ${commonDots}
    `,
    blueberry: `
      <path class="fruit-detail" d="M103 61L119 81L137 61M97 75L119 81L143 76" />
      <circle class="fruit-accent" cx="118" cy="76" r="8" />
      <circle class="fruit-accent" cx="78" cy="170" r="6" />
      <circle class="fruit-accent" cx="168" cy="174" r="6" />
    `,
    watermelon: `
      <path class="fruit-detail" d="M76 72C87 103 88 155 74 196M166 72C154 106 154 158 168 196" />
      <circle class="fruit-seed" cx="102" cy="91" r="4" />
      <circle class="fruit-seed" cx="139" cy="88" r="4" />
      <circle class="fruit-seed" cx="121" cy="204" r="4" />
    `,
    lychee: `
      ${Array.from({ length: 13 }, (_, index) => {
        const x = 78 + (index % 5) * 22;
        const y = 76 + Math.floor(index / 5) * 34;
        return `<circle class="fruit-accent" cx="${x}" cy="${y}" r="5" />`;
      }).join("")}
    `,
    apple: `
      <path class="fruit-detail" d="M121 52C114 38 116 27 130 18" />
      <path class="fruit-detail-fill" d="M133 42C153 22 181 28 188 43C168 55 149 57 133 42Z" />
      <path class="fruit-detail" d="M74 94C95 84 149 84 171 96" />
    `,
    pear: `
      <path class="fruit-detail" d="M119 44C113 32 117 22 129 15" />
      <path class="fruit-detail-fill" d="M130 41C148 26 171 29 181 43C163 53 146 54 130 41Z" />
      <circle class="fruit-accent" cx="82" cy="164" r="7" />
      <circle class="fruit-accent" cx="160" cy="166" r="7" />
    `,
    lemon: `
      <path class="fruit-detail" d="M71 106C93 86 148 83 171 107M70 194C95 212 149 212 170 193" />
      <path class="fruit-detail-fill" d="M165 70C184 55 204 61 211 77C193 85 177 83 165 70Z" />
    `,
    coconut: `
      <path class="fruit-detail" d="M83 80C105 102 107 181 83 203M153 82C136 114 135 173 157 202" />
      ${commonDots}
    `,
    strawberry: `
      <path class="fruit-detail-fill" d="M82 65L102 40L120 67L142 40L156 68L184 55L161 84L82 84Z" />
      ${Array.from({ length: 15 }, (_, index) => {
        const x = 78 + (index % 5) * 22;
        const y = 96 + Math.floor(index / 5) * 34;
        return `<ellipse class="fruit-accent" cx="${x}" cy="${y}" rx="4" ry="7" />`;
      }).join("")}
    `,
    fig: `
      <path class="fruit-detail-fill" d="M112 52C116 34 132 25 148 35C139 52 127 59 112 52Z" />
      <circle class="fruit-accent" cx="94" cy="169" r="5" />
      <circle class="fruit-accent" cx="122" cy="184" r="5" />
      <circle class="fruit-accent" cx="151" cy="164" r="5" />
    `,
    mango: `
      <path class="fruit-detail-fill" d="M143 57C166 28 202 31 215 51C187 66 165 68 143 57Z" />
      <path class="fruit-detail" d="M82 92C110 74 157 82 176 110" />
      <circle class="fruit-accent" cx="82" cy="171" r="7" />
      <circle class="fruit-accent" cx="170" cy="173" r="7" />
    `,
    kiwi: `
      <path class="fruit-detail" d="M76 88C100 70 145 72 169 91M75 199C98 215 145 215 168 198" />
      ${Array.from({ length: 16 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 16;
        const x = 121 + Math.cos(angle) * 42;
        const y = 146 + Math.sin(angle) * 36;
        return `<circle class="fruit-seed" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" />`;
      }).join("")}
    `,
    orange: `
      <path class="fruit-detail-fill" d="M145 58C167 29 204 31 216 50C188 66 166 68 145 58Z" />
      ${Array.from({ length: 11 }, (_, index) => {
        const x = 80 + (index % 4) * 28;
        const y = 82 + Math.floor(index / 4) * 42;
        return `<circle class="fruit-seed" cx="${x}" cy="${y}" r="3" />`;
      }).join("")}
      <path class="fruit-detail" d="M76 205C103 217 143 217 169 205" />
    `,
    grape: `
      <circle class="fruit-accent" cx="82" cy="94" r="13" />
      <circle class="fruit-accent" cx="120" cy="74" r="13" />
      <circle class="fruit-accent" cx="158" cy="96" r="13" />
      <circle class="fruit-accent" cx="101" cy="196" r="11" />
      <circle class="fruit-accent" cx="142" cy="197" r="11" />
    `,
  };
  return decorations[type] || "";
}

function fruitFace(expression) {
  const faces = {
    happy: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="23" ry="27" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="23" ry="27" />
      <ellipse class="fruit-eye" cx="86" cy="120" rx="12" ry="20" />
      <ellipse class="fruit-eye" cx="141" cy="120" rx="12" ry="20" />
      <ellipse class="fruit-accent" cx="119" cy="145" rx="17" ry="13" />
      <path class="fruit-line" d="M90 174C107 190 136 190 153 174" />
    `,
    wink: `
      <path class="fruit-line" d="M72 118C84 108 97 108 108 118" />
      <ellipse class="fruit-eye-white" cx="150" cy="119" rx="24" ry="27" />
      <ellipse class="fruit-eye" cx="143" cy="120" rx="12" ry="20" />
      <ellipse class="fruit-accent" cx="120" cy="145" rx="17" ry="13" />
      <path class="fruit-line" d="M90 176C107 187 132 188 153 170" />
    `,
    tongue: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="24" ry="25" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="24" ry="25" />
      <path class="fruit-eye" d="M75 121C92 132 105 130 115 118L75 118Z" />
      <path class="fruit-eye" d="M132 118C145 131 161 131 171 119L171 139L132 139Z" />
      <ellipse class="fruit-accent" cx="83" cy="164" rx="11" ry="9" />
      <path class="fruit-detail-fill" d="M108 166C125 158 151 164 158 183C145 201 116 198 106 184C104 177 104 171 108 166Z" />
      <path class="fruit-line" d="M116 187C130 187 140 182 146 172" />
    `,
    sleepy: `
      <path class="fruit-line" d="M73 119C86 114 98 114 109 119" />
      <path class="fruit-line" d="M133 119C146 114 158 114 169 119" />
      <ellipse class="fruit-accent" cx="119" cy="145" rx="17" ry="13" />
      <path class="fruit-line" d="M94 177C110 185 134 185 149 177" />
    `,
    cool: `
      <path class="fruit-eye" d="M68 109H113L104 135H78Z" />
      <path class="fruit-eye" d="M128 109H173L163 135H138Z" />
      <path class="fruit-line" d="M112 118H129" />
      <ellipse class="fruit-accent" cx="119" cy="148" rx="16" ry="11" />
      <path class="fruit-line" d="M93 178C112 170 135 170 153 178" />
    `,
    blush: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="22" ry="26" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="22" ry="26" />
      <ellipse class="fruit-eye" cx="87" cy="120" rx="10" ry="18" />
      <ellipse class="fruit-eye" cx="142" cy="120" rx="10" ry="18" />
      <ellipse class="fruit-accent" cx="76" cy="160" rx="11" ry="8" />
      <ellipse class="fruit-accent" cx="166" cy="160" rx="11" ry="8" />
      <path class="fruit-line" d="M95 177C111 190 132 190 147 177" />
    `,
    side: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="22" ry="26" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="22" ry="26" />
      <ellipse class="fruit-eye" cx="99" cy="119" rx="11" ry="18" />
      <ellipse class="fruit-eye" cx="154" cy="119" rx="11" ry="18" />
      <ellipse class="fruit-accent" cx="119" cy="145" rx="17" ry="13" />
      <path class="fruit-line" d="M101 177C118 184 137 182 151 172" />
    `,
    focus: `
      <path class="fruit-line" d="M72 102C84 98 98 99 110 106M132 106C146 99 160 99 172 102" />
      <ellipse class="fruit-eye-white" cx="93" cy="124" rx="22" ry="24" />
      <ellipse class="fruit-eye-white" cx="148" cy="124" rx="22" ry="24" />
      <ellipse class="fruit-eye" cx="93" cy="124" rx="10" ry="16" />
      <ellipse class="fruit-eye" cx="148" cy="124" rx="10" ry="16" />
      <ellipse class="fruit-accent" cx="119" cy="150" rx="16" ry="11" />
      <path class="fruit-line" d="M92 181H151" />
    `,
    flat: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="22" ry="22" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="22" ry="22" />
      <path class="fruit-eye" d="M74 119H110V132H74Z" />
      <path class="fruit-eye" d="M129 119H165V132H129Z" />
      <ellipse class="fruit-accent" cx="119" cy="149" rx="16" ry="11" />
      <path class="fruit-line" d="M99 180H144" />
    `,
    heart: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="22" ry="26" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="22" ry="26" />
      <path class="fruit-eye" d="M82 118C75 108 89 100 94 111C100 100 114 108 106 118L94 132Z" />
      <path class="fruit-eye" d="M137 118C130 108 144 100 149 111C155 100 169 108 161 118L149 132Z" />
      <ellipse class="fruit-accent" cx="119" cy="146" rx="17" ry="12" />
      <path class="fruit-line" d="M91 174C109 193 136 193 154 174" />
    `,
    mystic: `
      <path class="fruit-line" d="M72 119C88 100 102 101 113 119" />
      <path class="fruit-line" d="M130 119C146 100 160 101 171 119" />
      <circle class="fruit-eye" cx="93" cy="119" r="5" />
      <circle class="fruit-eye" cx="150" cy="119" r="5" />
      <ellipse class="fruit-accent" cx="119" cy="146" rx="17" ry="12" />
      <path class="fruit-line" d="M96 178C113 188 133 188 150 178" />
    `,
    gentle: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="22" ry="26" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="22" ry="26" />
      <ellipse class="fruit-eye" cx="88" cy="120" rx="10" ry="18" />
      <ellipse class="fruit-eye" cx="143" cy="120" rx="10" ry="18" />
      <ellipse class="fruit-accent" cx="119" cy="145" rx="17" ry="13" />
      <path class="fruit-line" d="M95 174C111 184 130 184 146 174" />
    `,
    calm: `
      <path class="fruit-line" d="M75 118C88 110 100 110 111 118" />
      <path class="fruit-line" d="M130 118C143 110 156 110 169 118" />
      <ellipse class="fruit-accent" cx="119" cy="145" rx="17" ry="12" />
      <path class="fruit-line" d="M97 178C112 185 129 185 144 178" />
    `,
    spark: `
      <ellipse class="fruit-eye-white" cx="93" cy="119" rx="23" ry="27" />
      <ellipse class="fruit-eye-white" cx="148" cy="119" rx="23" ry="27" />
      <circle class="fruit-eye" cx="90" cy="119" r="12" />
      <circle class="fruit-eye" cx="145" cy="119" r="12" />
      <circle class="fruit-eye-white" cx="86" cy="114" r="4" />
      <circle class="fruit-eye-white" cx="141" cy="114" r="4" />
      <ellipse class="fruit-accent" cx="119" cy="145" rx="17" ry="13" />
      <path class="fruit-line" d="M89 173C107 193 138 192 154 171" />
    `,
  };
  return faces[expression] || faces.happy;
}

function playBurst(event, palette) {
  const rect = stage.getBoundingClientRect();
  const burst = document.createElement("div");
  burst.className = "fruit-burst";
  burst.style.setProperty("--burst-x", `${event.clientX - rect.left}px`);
  burst.style.setProperty("--burst-y", `${event.clientY - rect.top}px`);

  for (let index = 0; index < 18; index += 1) {
    const piece = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 18 + (index % 2 ? 0.18 : -0.12);
    const distance = 48 + (index % 5) * 12;
    piece.className = "burst-piece";
    piece.style.setProperty("--piece", palette[index % palette.length]);
    piece.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    piece.style.setProperty("--rot", `${index * 31}deg`);
    piece.style.setProperty("--size", `${12 + (index % 4) * 5}px`);
    burst.appendChild(piece);
  }

  stage.appendChild(burst);
  window.setTimeout(() => burst.remove(), 760);
}

function drawShareCard(type) {
  const result = results[type];
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff8ec";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawBlob(ctx, 120, 90, 840, 1230, result.tone, 0);
  drawBlob(ctx, 720, 120, 250, 190, result.accent, -0.25, 0.32);
  drawBlob(ctx, 130, 1010, 280, 220, result.dark, 0.35, 0.24);
  drawBlob(ctx, 650, 1060, 310, 210, "#fff8ec", -0.16, 0.2);

  ctx.fillStyle = result.ink;
  ctx.font = "900 44px Arial Rounded MT Bold, Microsoft YaHei UI, sans-serif";
  ctx.fillText("Fruit Type Lab", 170, 190);

  drawCanvasFruit(ctx, result, 540, 430, 1.45);

  ctx.fillStyle = result.ink;
  ctx.font = "900 64px Arial Rounded MT Bold, Microsoft YaHei UI, sans-serif";
  wrapText(ctx, result.name, 170, 650, 760, 76);

  ctx.font = "800 34px Arial Rounded MT Bold, Microsoft YaHei UI, sans-serif";
  ctx.fillText(`${type} · ${result.fruit}`, 170, 790);

  ctx.font = "700 32px Arial Rounded MT Bold, Microsoft YaHei UI, sans-serif";
  drawPills(ctx, result.keywords, 170, 870, result.ink);

  ctx.font = "700 35px Arial Rounded MT Bold, Microsoft YaHei UI, sans-serif";
  wrapText(ctx, result.quote, 170, 1110, 760, 54);

  ctx.font = "700 27px Arial Rounded MT Bold, Microsoft YaHei UI, sans-serif";
  ctx.fillText("你是什么水果 MBTI · 仅供娱乐", 170, 1275);
}

function drawCanvasFruit(ctx, result, x, y, scale) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#14110f";

  ctx.beginPath();
  ctx.moveTo(-70, 16);
  ctx.bezierCurveTo(-118, 28, -112, 72, -100, 96);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(62, 10);
  ctx.bezierCurveTo(112, 8, 112, -52, 98, -76);
  ctx.stroke();

  drawBlob(ctx, -76, -104, 152, 178, result.tone, 0);

  ctx.fillStyle = "#fffdf8";
  ctx.beginPath();
  ctx.ellipse(-34, -28, 19, 25, 0, 0, Math.PI * 2);
  ctx.ellipse(34, -28, 19, 25, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#14110f";
  ctx.beginPath();
  ctx.ellipse(-41, -27, 10, 17, 0, 0, Math.PI * 2);
  ctx.ellipse(27, -27, 10, 17, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = result.accent;
  ctx.beginPath();
  ctx.ellipse(0, -4, 16, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(-29, 30);
  ctx.bezierCurveTo(-12, 46, 17, 46, 34, 30);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-38, 70);
  ctx.lineTo(-42, 120);
  ctx.lineTo(-70, 136);
  ctx.lineTo(-12, 132);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(38, 70);
  ctx.lineTo(42, 120);
  ctx.lineTo(72, 136);
  ctx.lineTo(12, 132);
  ctx.stroke();

  ctx.restore();
}

function drawBlob(ctx, x, y, width, height, color, rotate = 0, alpha = 1) {
  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(rotate);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(-width * 0.34, -height * 0.46);
  ctx.bezierCurveTo(width * 0.05, -height * 0.62, width * 0.48, -height * 0.28, width * 0.44, height * 0.09);
  ctx.bezierCurveTo(width * 0.39, height * 0.48, width * 0.02, height * 0.58, -width * 0.33, height * 0.42);
  ctx.bezierCurveTo(-width * 0.57, height * 0.31, -width * 0.55, -height * 0.18, -width * 0.34, -height * 0.46);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPills(ctx, keywords, x, y, ink) {
  let cursor = x;
  let row = y;
  keywords.forEach((keyword) => {
    const width = ctx.measureText(keyword).width + 44;
    if (cursor + width > 910) {
      cursor = x;
      row += 66;
    }
    ctx.fillStyle = rgba(ink, 0.14);
    roundRect(ctx, cursor, row - 40, width, 52, 18);
    ctx.fill();
    ctx.fillStyle = ink;
    ctx.fillText(keyword, cursor + 22, row);
    cursor += width + 16;
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = "";
  let currentY = y;
  for (const char of text) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currentY);
  }
}

function roundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function rgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  if (normalized.length !== 6) {
    return `rgba(24, 23, 19, ${alpha})`;
  }
  const value = parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

async function copyShareText() {
  const result = results[state.resultType];
  const shareText = `我是「${result.name}」：${result.quote} 来测测你是什么水果。`;
  let copied = false;

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(shareText);
      copied = true;
    } catch {
      copied = false;
    }
  }

  if (!copied) {
    copied = legacyCopy(shareText);
  }

  showToast(copied ? "分享文案已复制" : shareText);
  playSound(copied ? "pop" : "deny");
}

function legacyCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  return ok;
}

function downloadCard() {
  const result = results[state.resultType];
  const link = document.createElement("a");
  link.download = `${state.resultType}-${result.fruit}-水果人格卡.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  playSound("success");
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) {
    existing.remove();
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2200);
}

function ensureAudioContext() {
  if (!state.soundOn) {
    return null;
  }
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }
  if (!state.audioContext) {
    state.audioContext = new AudioContextClass();
  }
  if (state.audioContext.state === "suspended") {
    state.audioContext.resume();
  }
  return state.audioContext;
}

function playSound(kind) {
  const audioContext = ensureAudioContext();
  if (!audioContext) {
    return;
  }

  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(soundVolume(kind), now + 0.018);
  master.gain.exponentialRampToValueAtTime(0.0001, now + soundDuration(kind));
  master.connect(audioContext.destination);

  soundFrequencies(kind).forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = index % 2 ? "triangle" : "sine";
    oscillator.frequency.setValueAtTime(frequency, now + index * 0.028);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * soundEndRatio(kind), now + soundDuration(kind));
    gain.gain.setValueAtTime(index === 0 ? 1 : 0.55, now);
    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now + index * 0.028);
    oscillator.stop(now + soundDuration(kind) + 0.04);
  });
}

function soundFrequencies(kind) {
  return {
    start: [392, 523, 659],
    pop: [640, 900],
    turn: [330, 440],
    turnBack: [440, 330],
    seal: [262, 392, 523],
    scan: [196, 294],
    tick: [520],
    success: [523, 659, 784],
    deny: [180, 145],
  }[kind] || [440];
}

function soundDuration(kind) {
  return {
    scan: 0.32,
    success: 0.44,
    seal: 0.38,
    deny: 0.24,
  }[kind] || 0.18;
}

function soundVolume(kind) {
  return {
    pop: 0.08,
    tick: 0.035,
    scan: 0.045,
    deny: 0.05,
  }[kind] || 0.06;
}

function soundEndRatio(kind) {
  return {
    turnBack: 0.7,
    deny: 0.55,
    tick: 1.12,
    success: 1.35,
  }[kind] || 1.18;
}

stage.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  if (button.dataset.optionIndex !== undefined) {
    selectOption(button, event);
    return;
  }

  const action = button.dataset.action;
  if (action === "start") startQuiz();
  if (action === "prev") previousQuestion();
  if (action === "next") nextQuestion();
  if (action === "lastQuestion") renderQuestion("back");
  if (action === "generate") startReportGeneration();
  if (action === "restart") startQuiz();
  if (action === "copy") copyShareText();
  if (action === "download") downloadCard();
});

soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  soundToggle.textContent = state.soundOn ? "音效 开" : "音效 关";
  soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  if (state.soundOn) {
    playSound("start");
  }
});

renderIntro();
