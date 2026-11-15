/* Learning content for CNn1English. Edit this file to add or change lessons. */
window.CN1 = {
  words: [
    { w: "thought", ipa: "/θɔːt/", zh: "想法；思考（think 的过去式）", ex: "That's a great thought." },
    { w: "comfortable", ipa: "/ˈkʌmftəbl/", zh: "舒服的", ex: "This chair is really comfortable." },
    { w: "schedule", ipa: "/ˈskedʒuːl/ (US)", zh: "日程安排", ex: "Let me check my schedule." },
    { w: "available", ipa: "/əˈveɪləbl/", zh: "有空的；可用的", ex: "Are you available on Friday?" },
    { w: "recommend", ipa: "/ˌrekəˈmend/", zh: "推荐", ex: "Can you recommend a good restaurant?" },
    { w: "appreciate", ipa: "/əˈpriːʃieɪt/", zh: "感激；欣赏", ex: "I really appreciate your help." },
    { w: "vegetable", ipa: "/ˈvedʒtəbl/", zh: "蔬菜", ex: "Eat more vegetables." },
    { w: "although", ipa: "/ɔːlˈðoʊ/", zh: "虽然（后面不用 but）", ex: "Although it was raining, we went out." },
    { w: "world", ipa: "/wɜːrld/", zh: "世界", ex: "She has travelled around the world." },
    { w: "clothes", ipa: "/kloʊðz/", zh: "衣服", ex: "I need to buy some new clothes." }
  ],

  sounds: [
    {
      title: "th", ipa: "/θ/ · /ð/",
      zh: "舌尖轻放在上下牙齿之间，吹气。不要发成 s、z 或 f。",
      en: "Put the tip of your tongue between your teeth and blow air.",
      pairs: [["think", "sink"], ["three", "free"], ["they", "day"], ["mouth", "mouse"]]
    },
    {
      title: "l / r", ipa: "/l/ · /r/",
      zh: "l：舌尖顶住上齿龈。r：舌头向后卷，不碰任何地方，嘴唇略圆。",
      en: "L: tongue tip touches behind the top teeth. R: tongue curls back and touches nothing.",
      pairs: [["light", "right"], ["long", "wrong"], ["lice", "rice"], ["glass", "grass"]]
    },
    {
      title: "v / w", ipa: "/v/ · /w/",
      zh: "v：上牙轻咬下唇并震动。w：双唇收圆，像“乌”，牙齿不碰嘴唇。",
      en: "V: top teeth on the bottom lip, with voice. W: round lips, teeth don't touch.",
      pairs: [["vest", "west"], ["vine", "wine"], ["very", "wary"], ["veil", "whale"]]
    },
    {
      title: "长音 / 短音", ipa: "/iː/ · /ɪ/",
      zh: "/iː/ 嘴角拉开，音拉长；/ɪ/ 嘴巴放松，短而快。中文里没有这种区别。",
      en: "/iː/ is long and tense; /ɪ/ is short and relaxed. Mandarin doesn't make this distinction.",
      pairs: [["sheep", "ship"], ["leave", "live"], ["seat", "sit"], ["feel", "fill"]]
    },
    {
      title: "词尾辅音", ipa: "-t · -d · -k · -s",
      zh: "英语单词常以辅音结尾。不要省略，也不要在后面加“呃”音（例如 good 不是 “goodə”）。",
      en: "Don't drop final consonants, and don't add an extra vowel after them.",
      pairs: [["bed", "bet"], ["cap", "cab"], ["price", "prize"], ["back", "bag"]]
    },
    {
      title: "/æ/ vs /e/", ipa: "/æ/ · /e/",
      zh: "/æ/ 嘴巴张得更大，介于“啊”和“诶”之间。",
      en: "/æ/ needs a wider mouth — between 'ah' and 'eh'.",
      pairs: [["bad", "bed"], ["man", "men"], ["sad", "said"], ["pan", "pen"]]
    }
  ],

  phrases: {
    "问候 Greetings": [
      ["你好吗？", "How are you doing?"],
      ["好久不见！", "Long time no see! / It's been a while!"],
      ["很高兴认识你。", "Nice to meet you."],
      ["最近怎么样？", "How have you been?"],
      ["回头见。", "See you later."],
      ["保重。", "Take care."]
    ],
    "日常 Daily life": [
      ["我听不懂，请再说一遍。", "Sorry, I didn't catch that. Could you say it again?"],
      ["请说慢一点。", "Could you speak a bit more slowly, please?"],
      ["这个用英语怎么说？", "How do you say this in English?"],
      ["没关系。", "No worries. / That's okay."],
      ["我同意。", "I agree."],
      ["我不太确定。", "I'm not really sure."]
    ],
    "餐厅 Restaurant": [
      ["我想点餐。", "I'd like to order, please."],
      ["有什么推荐的吗？", "What would you recommend?"],
      ["请不要放辣。", "Could you make it not spicy, please?"],
      ["买单。", "Could we have the bill, please? (US: the check)"],
      ["打包带走。", "Can I get this to go? / Can I take this away?"],
      ["我对花生过敏。", "I'm allergic to peanuts."]
    ],
    "出行 Travel": [
      ["请问洗手间在哪里？", "Excuse me, where's the restroom? (UK: toilet)"],
      ["去火车站怎么走？", "How do I get to the train station?"],
      ["这个多少钱？", "How much is this?"],
      ["我要办理入住。", "I'd like to check in, please."],
      ["可以帮我拍张照吗？", "Could you take a photo of me, please?"],
      ["我迷路了。", "I'm lost. Can you help me?"]
    ],
    "工作 Work": [
      ["我晚点回复你。", "I'll get back to you later."],
      ["我们约个时间开会吧。", "Let's set up a time to meet."],
      ["请查收附件。", "Please find the attached file."],
      ["我负责这个项目。", "I'm in charge of this project."],
      ["能再解释一下吗？", "Could you clarify that a little?"],
      ["辛苦了！", "Thanks for all your hard work!"]
    ]
  },

  grammar: [
    {
      t: "动词要变化：时态", e: "Verbs change with time (tense)",
      zh: "中文用“昨天”“了”表示过去，动词本身不变。英语的动词必须变化。",
      wrong: "Yesterday I go to the shop.", right: "Yesterday I went to the shop."
    },
    {
      t: "第三人称单数加 -s", e: "He / she / it + verb-s",
      zh: "主语是 he、she、it 或一个人/物时，现在时动词要加 -s 或 -es。",
      wrong: "She like coffee.", right: "She likes coffee."
    },
    {
      t: "冠词 a / an / the", e: "Articles",
      zh: "中文没有冠词。第一次提到可数单数名词用 a/an，双方都知道的用 the。",
      wrong: "I bought book. Book is very good.", right: "I bought a book. The book is very good."
    },
    {
      t: "复数要加 -s", e: "Plural nouns",
      zh: "“三个苹果”在英语里，名词本身也要变成复数。",
      wrong: "I have three apple.", right: "I have three apples."
    },
    {
      t: "he 和 she 要分清", e: "He vs. she",
      zh: "口语中“他”和“她”同音，所以很容易说错。英语里一定要区分。",
      wrong: "My mother is a doctor. He works in a hospital.", right: "My mother is a doctor. She works in a hospital."
    },
    {
      t: "时间和地点放在句尾", e: "Time and place go at the end",
      zh: "中文常说“我明天在北京开会”。英语通常把地点和时间放在后面。",
      wrong: "I tomorrow in Beijing have a meeting.", right: "I have a meeting in Beijing tomorrow."
    },
    {
      t: "疑问句要倒装", e: "Questions need do / does / did",
      zh: "中文加“吗”就变成问句。英语要用助动词或把 be 动词提前。",
      wrong: "You like music?", right: "Do you like music?"
    },
    {
      t: "although 和 but 不能一起用", e: "Although… (no but)",
      zh: "中文说“虽然……但是……”，英语只用其中一个。because 和 so 也一样。",
      wrong: "Although it's cold, but I'm going out.", right: "Although it's cold, I'm going out."
    }
  ],

  fixes: [
    ["I very like it.", "I really like it. / I like it very much.", "very 不能直接修饰动词。"],
    ["Open the light.", "Turn on the light.", "电器用 turn on / turn off。"],
    ["I have a cold. (said for 'I'm cold')", "I'm cold. / I feel cold.", "have a cold = 感冒；I'm cold = 我冷。"],
    ["My English is poor, please forgive.", "Sorry, my English isn't perfect.", "更自然、更自信的表达。"],
    ["I want to eat medicine.", "I need to take some medicine.", "吃药用 take，不用 eat。"],
    ["Let's discuss about it.", "Let's discuss it. / Let's talk about it.", "discuss 后面直接加宾语。"],
    ["I'm boring.", "I'm bored.", "boring = 让人无聊的；bored = 感到无聊的。"],
    ["Please call me Mr. Wang Wei.", "Please call me Mr. Wang. / Call me Wei.", "Mr./Ms. 后面只接姓。"],
    ["I have been to Shanghai last year.", "I went to Shanghai last year.", "有具体过去时间，用一般过去时。"],
    ["He is very handsome, isn't it?", "He is very handsome, isn't he?", "反义疑问句要和主语一致。"]
  ],

  quiz: [
    {"id": "q1", "q": "“我昨天看了一部电影。”", "o": ["I watch a movie yesterday.", "I watched a movie yesterday.", "I have watched a movie yesterday."], "a": 1, "x": "有 yesterday，明确表示过去时间，动词用过去式 watched。"},
    {"id": "q2", "q": "“她每天早上喝咖啡。”", "o": ["She drink coffee every morning.", "She drinks coffee every morning.", "She is drink coffee every morning."], "a": 1, "x": "主语 she 是第三人称单数，一般现在时动词需加 -s：drinks。"},
    {"id": "q3", "q": "Which word has the /θ/ sound?", "o": ["sink", "think", "pink"], "a": 1, "x": "think 以 /θ/ 开头，舌尖轻触上下牙齿之间送气；sink 发 /s/。"},
    {"id": "q4", "q": "“请把灯关掉。”", "o": ["Please close the light.", "Please turn off the light.", "Please shut the light."], "a": 1, "x": "电灯、电视、电脑等电器开关用 turn on / turn off；close/shut 用于门窗或盒子。"},
    {"id": "q5", "q": "“我对这部电影感到很无聊。”", "o": ["I'm boring with this movie.", "I'm bored with this movie.", "I'm bore with this movie."], "a": 1, "x": "表示人内心的感受用 -ed：bored, interested, excited；-ing 表示事物令人如何。"},
    {"id": "q6", "q": "Choose the correct sentence.", "o": ["Although I was tired, but I finished.", "Although I was tired, I finished.", "Although tired, but I finished."], "a": 1, "x": "英语中 although 和 but 属于同类连词，不能同时在句中出现。"},
    {"id": "q7", "q": "“我有两只猫。”", "o": ["I have two cat.", "I have two cats.", "I have two the cats."], "a": 1, "x": "数量大于一的可数名词要用复数形式 cats。"},
    {"id": "q8", "q": "“你喜欢中国菜吗？”", "o": ["You like Chinese food?", "Do you like Chinese food?", "Are you like Chinese food?"], "a": 1, "x": "实义动词 like 的一般疑问句需要借助助动词 Do：Do you like...？"},
    {"id": "q9", "q": "Which pair is a long /iː/ vs short /ɪ/?", "o": ["sheep / ship", "ship / shop", "sheep / shape"], "a": 0, "x": "sheep 是长元音 /iː/，ship 是松元音短音 /ɪ/。"},
    {"id": "q10", "q": "“我明天在公司开会。”", "o": ["I tomorrow at the office have a meeting.", "I have a meeting at the office tomorrow.", "Tomorrow I at the office have a meeting."], "a": 1, "x": "标准英语语序：主语 + 谓语 + 宾语 + 地点状语 + 时间状语。"},
    {"id": "q11", "q": "“不要把今天的事拖延到明天。”（填入动词短语）", "o": ["Don't put off until tomorrow what you can do today.", "Don't put away until tomorrow what you can do today.", "Don't put on until tomorrow what you can do today."], "a": 0, "x": "put off 意为“推迟；拖延”；put away 是“收起来”，put on 是“穿上”。"},
    {"id": "q12", "q": "“我很期待很快见到你。”（注意介词搭配）", "o": ["I look forward to see you soon.", "I look forward to seeing you soon.", "I look forward seeing you soon."], "a": 1, "x": "look forward to 中的 to 是介词，后面必须接名词或动名词形式（V-ing）：seeing you。"},
    {"id": "q13", "q": "“你能借我你的笔吗？”", "o": ["Can you borrow me your pen?", "Can you lend me your pen?", "Can you rent me your pen?"], "a": 1, "x": "lend 是“把东西借给别人”；borrow 是“向别人借入”。你可以说 'Can you lend me...' 或 'Can I borrow...'"},
    {"id": "q14", "q": "“他给了我很多有用的建议。”", "o": ["He gave me many advices.", "He gave me a lot of useful advice.", "He gave me an advice."], "a": 1, "x": "advice 在英语中是不可数名词，不能加 -s，也不能直接加 an。可说 a piece of advice 或 a lot of advice。"},
    {"id": "q15", "q": "“请把电脑打开。”（避免中式英语）", "o": ["Please open the computer.", "Please turn on the computer.", "Please start up computer."], "a": 1, "x": "电器开机启动用 turn on（关机用 turn off）。open the computer 意思是把电脑机箱外壳拆开！"},
    {"id": "q16", "q": "“我感冒了，需要吃药。”", "o": ["I have a cold and need to eat medicine.", "I have a cold and need to take medicine.", "I have a cold and need to drink medicine."], "a": 1, "x": "英语习惯搭配是 take medicine，不能按中文直译为 eat medicine。"},
    {"id": "q17", "q": "听力辨析：下列哪个单词的重音在【第一音节】？", "o": ["thirteen", "thirty", "fifteen"], "a": 1, "x": "thirty /ˈθɜːrti/ 重音在第一音节；而 thirteen /ˌθɜːrˈtiːn/、fifteen /ˌfɪfˈtiːn/ 重音在第二音节 -teen。"},
    {"id": "q18", "q": "“桌子上有三本书。”", "o": ["There have three books on the table.", "There are three books on the table.", "There is three books on the table."], "a": 1, "x": "“某处有某物”用 There be 句型，后接复数 books，因此使用 There are。不能用 There have。"},
    {"id": "q19", "q": "“我们星期一见。”（介词选择）", "o": ["See you in Monday.", "See you on Monday.", "See you at Monday."], "a": 1, "x": "在具体的星期几或具体某一天，介词用 on；在钟点用 at；在月份或年份用 in。"},
    {"id": "q20", "q": "“火车在八点整出发。”", "o": ["The train leaves at eight o'clock.", "The train leaves on eight o'clock.", "The train leaves in eight o'clock."], "a": 0, "x": "具体钟点时刻前使用介词 at：at eight o'clock。"},
    {"id": "q21", "q": "“我们的牛奶喝光了。”（填入动词短语）", "o": ["We have run out of milk.", "We have run away milk.", "We have run off milk."], "a": 0, "x": "run out of 表示“用光、耗尽（物资、时间、汽油等）”。"},
    {"id": "q22", "q": "“我们在学校学到了很多新东西/新知识。”", "o": ["We learn much knowledge at school.", "We learn many new things at school.", "We study new knowledges at school."], "a": 1, "x": "knowledge 是不可数名词且不与 learn 搭配。母语者最自然的地道口语是 learn new things 或 gain knowledge。"},
    {"id": "q23", "q": "下列哪组词语区分了普通话中常混淆的 /l/ 与 /r/？", "o": ["light / right", "lead / head", "lake / make"], "a": 0, "x": "light 舌尖轻抵上齿龈发 /l/；right 舌头悬空微卷后缩发 /r/。"},
    {"id": "q24", "q": "“这本书花了我十美元。”", "o": ["This book spent me ten dollars.", "This book cost me ten dollars.", "This book took me ten dollars."], "a": 1, "x": "以物品或费用作主语时用 cost（某物花某人多少钱）；spend 的主语必须是人。"},
    {"id": "q25", "q": "“每个人都很开心。”（主谓一致）", "o": ["Everyone are happy.", "Everyone is happy.", "Everyone have happy."], "a": 1, "x": "everyone / everybody 在语法上视为单数第三人称，谓语动词用 is。"},
    {"id": "q26", "q": "“请把电视机声音调小一点。”", "o": ["Please turn down the TV.", "Please turn low the TV.", "Please turn off the TV."], "a": 0, "x": "turn down 表示“调低音量/温度”；turn off 则是彻底关掉。"},
    {"id": "q27", "q": "“我非常喜欢苹果。”（避免中式直译）", "o": ["I very like apples.", "I like apples very much.", "I very much apples."], "a": 1, "x": "副词 very 不能直接修饰实义动词 like。正确说法是将 very much 放在句末：I like apples very much。"},
    {"id": "q28", "q": "发下列哪个单词的开头音时，上齿必须轻触下唇（咬唇音）？", "o": ["very", "water", "window"], "a": 0, "x": "very 开头是唇齿摩擦音 /v/；而 water 和 window 是双唇圆唇音 /w/。"},
    {"id": "q29", "q": "“你能帮我照顾小狗吗？”", "o": ["Could you look for my dog?", "Could you look after my dog?", "Could you look over my dog?"], "a": 1, "x": "look after 意为“照看；照顾”；look for 是“寻找”；look over 是“检查”。"},
    {"id": "q30", "q": "有客人敲门进屋时，英语中最地道热情的接待用语是：", "o": ["Welcome to my room!", "Please come in!", "Enter please!"], "a": 1, "x": "客人敲门进屋时，母语者会说 'Please come in!' 或 'Come on in!'。Welcome 通常用于路牌、展会招牌或正式迎宾。"},
    {"id": "q31", "q": "“看！外面正在下雪。”", "o": ["Look! It snows outside.", "Look! It is snowing outside.", "Look! It is snow outside."], "a": 1, "x": "祈使句 Look! 提示说话当下正在进行的动作，用现在进行时 is snowing。"},
    {"id": "q32", "q": "“你想要多少糖？”（不可数名词提问）", "o": ["How many sugar do you want?", "How much sugar do you want?", "How sugar do you want?"], "a": 1, "x": "sugar（糖）是不可数名词，询问数量用 How much；可数名词复数才用 How many。"},
    {"id": "q33", "q": "“绝不要放弃你的梦想。”", "o": ["Never give in your dreams.", "Never give up on your dreams.", "Never give away your dreams."], "a": 1, "x": "give up on something 意为“对……放弃希望/努力”；give in 是“屈服妥协”；give away 是“赠送”。"},
    {"id": "q34", "q": "哪组最小对立对区分了送气清音 /p/ 与声带振动的浊音 /b/？", "o": ["pat / bat", "pie / tie", "pen / ten"], "a": 0, "x": "pat /pæt/（清辅音，声带不振动）与 bat /bæt/（浊辅音，声带振动）构成了典型的清浊辅音对立。"},
    {"id": "q35", "q": "“你想要一杯红茶吗？”", "o": ["Would you like a cup of red tea?", "Would you like a cup of black tea?", "Would you like a cup of brown tea?"], "a": 1, "x": "英语中“红茶”是 black tea（因加工后的干茶颜色发黑而得名），说 red tea 母语者通常指南非博士茶 (Rooibos)。"},
    {"id": "q36", "q": "英语口语习语 'It's a piece of cake!' 表达什么意思？", "o": ["这是一块很美味的蛋糕。", "小菜一碟，非常容易做到。", "需要大家一起分摊费用。"], "a": 1, "x": "a piece of cake 是极高频的地道习语，相当于中文的“小菜一碟”、“不费吹灰之力”。"}
  ]
};
