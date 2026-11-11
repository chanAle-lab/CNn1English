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
    { q: "“我昨天看了一部电影。”", o: ["I watch a movie yesterday.", "I watched a movie yesterday.", "I have watched a movie yesterday."], a: 1, x: "有 yesterday，表示过去，用过去式 watched。" },
    { q: "“她每天早上喝咖啡。”", o: ["She drink coffee every morning.", "She drinks coffee every morning.", "She is drink coffee every morning."], a: 1, x: "主语 she 是第三人称单数，动词加 -s。" },
    { q: "Which word has the /θ/ sound?", o: ["sink", "think", "pink"], a: 1, x: "think 以 /θ/ 开头，舌尖要放在牙齿之间。" },
    { q: "“请把灯关掉。”", o: ["Please close the light.", "Please turn off the light.", "Please shut the light."], a: 1, x: "电灯、电视等电器用 turn on / turn off。" },
    { q: "“我对这部电影感到很无聊。”", o: ["I'm boring with this movie.", "I'm bored with this movie.", "I'm bore with this movie."], a: 1, x: "表示人的感受用 -ed：bored, excited, interested。" },
    { q: "Choose the correct sentence.", o: ["Although I was tired, but I finished.", "Although I was tired, I finished.", "Although tired, but I finished."], a: 1, x: "although 和 but 不能同时使用。" },
    { q: "“我有两只猫。”", o: ["I have two cat.", "I have two cats.", "I have two the cats."], a: 1, x: "数量大于一，名词要用复数 cats。" },
    { q: "“你喜欢中国菜吗？”", o: ["You like Chinese food?", "Do you like Chinese food?", "Are you like Chinese food?"], a: 1, x: "一般疑问句要用 do/does 开头。" },
    { q: "Which pair is a long /iː/ vs short /ɪ/?", o: ["sheep / ship", "ship / shop", "sheep / shape"], a: 0, x: "sheep 是长音 /iː/，ship 是短音 /ɪ/。" },
    { q: "“我明天在公司开会。”", o: ["I tomorrow at the office have a meeting.", "I have a meeting at the office tomorrow.", "Tomorrow I at the office have a meeting."], a: 1, x: "英语语序：主语 + 动词 + 宾语 + 地点 + 时间。" }
  ]
};
