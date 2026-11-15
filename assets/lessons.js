/* CNn1English - Lesson Modules (Dialogues, Reading, Listening) */
window.CN1_LESSONS = {
  dialogues: [
    {
      id: "cafe",
      title: "在咖啡馆点餐",
      titleEn: "At the Coffee Shop",
      badge: "日常 Daily",
      desc: "在英语国家咖啡馆点咖啡是每天都会用到的高频场景。学习杯型、奶类替换及打包的地道表达。",
      descEn: "Ordering coffee, customizing your milk preference, and requesting takeaway in English.",
      roles: {
        A: { name: "Barista 咖啡师", label: "Barista" },
        B: { name: "Customer 顾客", label: "Customer" }
      },
      lines: [
        { role: "A", en: "Hi there! What can I get started for you today?", zh: "嗨，您好！今天想喝点什么？" },
        { role: "B", en: "Hi! Could I please get a medium oat latte to go?", zh: "嗨！可以给我一杯中杯外带的燕麦拿铁吗？" },
        { role: "A", en: "Sure thing. Would you like an extra shot of espresso or any syrup?", zh: "没问题。需要加一份浓缩咖啡或者糖浆吗？" },
        { role: "B", en: "No extra syrup, thanks, but an extra shot would be great.", zh: "不用糖浆，谢谢，不过加一份浓缩挺好的。" },
        { role: "A", en: "You got it. That will be four pounds fifty. Paying by card?", zh: "好嘞。一共四磅五十便士。刷卡吗？" },
        { role: "B", en: "Yes, contactless please. Here you go.", zh: "是的，感应支付。给您。" },
        { role: "A", en: "Perfect. We'll have that right out for you at the end of the counter!", zh: "好的。稍后在吧台尽头为您出餐！" },
        { role: "B", en: "Thank you so much! Have a great day.", zh: "太感谢了！祝你有愉快的一天。" }
      ],
      notes: [
        { term: "to go / takeaway", zh: "美式常用 to go，英式常用 takeaway，表示“外带打包”；堂食说 for here (US) 或 have here (UK)。" },
        { term: "Sure thing / You got it", zh: "非常口语自然的“没问题 / 好嘞”，比单纯说 OK 更加地道热情。" },
        { term: "contactless", zh: "非接触式/感应刷卡支付（手机 Apple Pay、Google Pay 或触碰式银行卡）。" }
      ]
    },
    {
      id: "airport",
      title: "机场办理登机与托运",
      titleEn: "Airport Check-in",
      badge: "出行 Travel",
      desc: "国际旅行办理登机牌、托运行李与确认登机口的关键对话。",
      descEn: "Checking in luggage, choosing seats, and getting boarding information at the airport.",
      roles: {
        A: { name: "Check-in Agent 地勤人员", label: "Agent" },
        B: { name: "Passenger 乘客", label: "Passenger" }
      },
      lines: [
        { role: "A", en: "Good morning! Where are you flying to today?", zh: "早上好！您今天飞往哪里？" },
        { role: "B", en: "Good morning. I'm flying to Tokyo on flight JL 42.", zh: "早上好。我乘 JL 42 航班前往东京。" },
        { role: "A", en: "May I see your passport and booking reference, please?", zh: "请出示您的护照和订票信息好吗？" },
        { role: "B", en: "Here you are. I also have one suitcase to check in.", zh: "给您。我还有一件行李箱需要托运。" },
        { role: "A", en: "Please place it onto the scale. That's twenty kilos, right on limit. Do you prefer a window or an aisle seat?", zh: "请把它放到传送秤上。二十公斤，刚好符合限重。您偏好靠窗还是靠过道的座位？" },
        { role: "B", en: "A window seat if one is still available, please.", zh: "如果还有空位的话，请给我一个靠窗的座位。" },
        { role: "A", en: "All set! Here is your boarding pass. Gate 18, boarding begins at ten fifteen.", zh: "办好了！这是您的登机牌。18号登机口，十点十五分开始登机。" },
        { role: "B", en: "Wonderful. Thank you for your assistance!", zh: "太好了。感谢您的帮助！" }
      ],
      notes: [
        { term: "check in (luggage)", zh: "托运（行李）；办理入住/登机手续。" },
        { term: "window seat / aisle seat", zh: "靠窗座位（window seat）；靠过道座位（aisle seat，注意 aisle 的 s 不发音，读 /aɪl/）。" },
        { term: "boarding pass", zh: "登机牌；登机叫 boarding。" }
      ]
    },
    {
      id: "directions",
      title: "街头礼貌问路",
      titleEn: "Asking for Directions",
      badge: "生活 Survival",
      desc: "在陌生城市迷路时，如何礼貌地寻求当地人帮助并理解方位指引。",
      descEn: "Asking locals for directions politely and understanding directional cues.",
      roles: {
        A: { name: "Tourist 游客", label: "Tourist" },
        B: { name: "Local Resident 当地居民", label: "Local" }
      },
      lines: [
        { role: "A", en: "Excuse me, sorry to bother you, but could you tell me how to get to the Central Library?", zh: "打扰一下，很抱歉打扰您，请问去中央图书馆怎么走？" },
        { role: "B", en: "Oh, sure! It's not too far from here, about a seven-minute walk.", zh: "噢，当然！离这儿不远，步行大概七分钟。" },
        { role: "A", en: "That's great. Which way should I head?", zh: "太好了。我应该往哪个方向走呢？" },
        { role: "B", en: "Walk straight down this road past the supermarket, then turn right at the pedestrian crossing.", zh: "沿着这条路直走经过超市，然后在人行横道处右拐。" },
        { role: "A", en: "Right at the crossing, got it.", zh: "在人行横道右拐，记下了。" },
        { role: "B", en: "Keep going for another two blocks. You'll see a big red brick building on your left. That's the library.", zh: "再往前走两个街区。你会在左手边看到一栋巨大的红砖建筑，那就是图书馆了。" },
        { role: "A", en: "Thank you so much, I really appreciate your directions!", zh: "非常感谢您，太感激您的指路了！" },
        { role: "B", en: "You're very welcome! Enjoy your visit.", zh: "不客气！祝你游玩愉快。" }
      ],
      notes: [
        { term: "sorry to bother you", zh: "问路或请求帮助时常用的极具礼貌的开场白。" },
        { term: "two blocks", zh: "两个街区；block 指两条街道围成的十字路口区间。" },
        { term: "on your left / on your right", zh: "在你的左手边 / 右手边；注意介词用 on。" }
      ]
    },
    {
      id: "weekend",
      title: "邀约朋友共度周末",
      titleEn: "Making Weekend Plans",
      badge: "社交 Social",
      desc: "探讨周末休闲计划、商量时间和提议活动的自然口语表达。",
      descEn: "Planning casual weekend activities, suggesting movies or meals with friends.",
      roles: {
        A: { name: "Emma 艾玛", label: "Emma" },
        B: { name: "Lucas 卢卡斯", label: "Lucas" }
      },
      lines: [
        { role: "A", en: "Hey Lucas! Do you have any plans lined up for this Saturday afternoon?", zh: "嘿卢卡斯！这周六下午你有什么安排吗？" },
        { role: "B", en: "Not really, just planning to catch up on some laundry and rest. What's on your mind?", zh: "没什么特别的，就打算洗洗衣服休息一下。你有什么想法？" },
        { role: "A", en: "The new photography exhibition at the city gallery opened yesterday. Would you be up for checking it out?", zh: "城市美术馆的新摄影展昨天开幕了。你愿意一起去看看吗？" },
        { role: "B", en: "That sounds right up my street! What time were you thinking?", zh: "听起来正合我意！你想约在几点？" },
        { role: "A", en: "How about around two o'clock? We could grab a quick bite beforehand.", zh: "两点左右怎么样？我们还可以提前在附近吃点便饭。" },
        { role: "B", en: "Sounds like a plan! Let's meet right outside the station clock at one thirty.", zh: "就这么定啦！我们一点半在车站大钟前碰头。" }
      ],
      notes: [
        { term: "up for doing something", zh: "愿意/有兴趣做某事（例：Are you up for a walk?）" },
        { term: "right up my street", zh: "正合我意；非常适合我的喜好与兴趣。" },
        { term: "grab a quick bite", zh: "随便吃点便餐/快餐垫垫肚子。" }
      ]
    },
    {
      id: "hotel",
      title: "酒店入住与服务咨询",
      titleEn: "Hotel Check-in & Inquiries",
      badge: "旅行 Hotel",
      desc: "确认客房预订、询问免费早餐时间与无线网络密码的标准酒店英语。",
      descEn: "Confirming reservations, asking about amenities, breakfast hours, and Wi-Fi access.",
      roles: {
        A: { name: "Guest 住客", label: "Guest" },
        B: { name: "Receptionist 前台接待", label: "Receptionist" }
      },
      lines: [
        { role: "A", en: "Good evening. I have a reservation under the name Alexander Chen.", zh: "晚上好。我有预订，名字是 Alexander Chen。" },
        { role: "B", en: "Good evening, sir. Yes, I have you down for a double room for three nights. May I see your ID, please?", zh: "晚上好，先生。是的，您预订了一间大床房，住三晚。请出示您的证件好吗？" },
        { role: "A", en: "Sure, here is my passport and credit card.", zh: "好的，这是我的护照和信用卡。" },
        { role: "B", en: "Thank you. Your room is 408 on the fourth floor. Breakfast is served in the garden dining hall from seven to ten in the morning.", zh: "谢谢。您的房间在四楼 408。早餐每天早上七点至十点在花园餐厅供应。" },
        { role: "A", en: "Wonderful. Is Wi-Fi complimentary throughout the hotel?", zh: "太好了。请问酒店全程提供免费 Wi-Fi 吗？" },
        { role: "B", en: "Yes, it is completely free. The network name and password are on your key card sleeve.", zh: "是的，完全免费。网络名称和密码都印在您的房卡套上。" },
        { role: "A", en: "Thank you for all your help!", zh: "非常感谢您的帮助！" }
      ],
      notes: [
        { term: "under the name...", zh: "以……的名字预订（例：A table under the name Smith）。" },
        { term: "complimentary", zh: "正式用法，意为“赠送的；免费的”（比 free 显得更专业礼貌）。" },
        { term: "key card sleeve", zh: "装房卡的折叠纸套。" }
      ]
    }
  ],

  readings: [
    {
      id: "edinburgh",
      title: "A Day in Edinburgh",
      titleZh: "爱丁堡的一天",
      level: "A2 初级",
      time: "3 min read",
      tags: ["旅行 Travel", "文化 Culture"],
      paragraphs: [
        {
          en: "Edinburgh, the capital city of Scotland, is famous for its dramatic volcanic hills, historic cobblestone streets, and magnificent medieval castle. Every August, thousands of artists, musicians, and travellers gather here from all corners of the globe for the international festival.",
          zh: "爱丁堡是苏格兰的首府，以其壮丽的火山丘陵、古老的鹅卵石街道和宏伟的中世纪城堡而闻名。每年八月，数以万计的艺术家、音乐人和旅行者从世界各地汇聚于此，参加国际艺术节。"
        },
        {
          en: "A morning walk along the Royal Mile takes you from the castle down to Holyrood Palace. Along the way, you can hear the sweet, stirring sound of traditional bagpipes and enjoy the delicious smell of fresh butter shortbread drifting out of historic bakeries.",
          zh: "清晨沿着皇家一英里大道散步，会带你从城堡一直走到荷里路德宫。沿途，你可以听见苏格兰风笛悠扬动人的传统旋律，闻到从百年老字号面包店飘出的新鲜黄油酥饼的诱人香气。"
        },
        {
          en: "In the afternoon, climb up Arthur's Seat, an ancient extinct volcano overlooking the whole city. When the sun slowly sets over the northern sea, the entire skyline glows with golden light, leaving visitors with unforgettable memories.",
          zh: "到了下午，不妨登上亚瑟王座——一座俯瞰整座城市的古老死火山。当夕阳在北海之上缓缓沉落，整座天际线泛出金色的光芒，为每一位造访者留下难以磨灭的记忆。"
        }
      ],
      vocab: [
        { w: "magnificent", p: "adj", zh: "宏伟的；壮丽的" },
        { w: "cobblestone", p: "n", zh: "鹅卵石；圆石路" },
        { w: "bagpipes", p: "n", zh: "风笛（苏格兰传统乐器）" },
        { w: "skyline", p: "n", zh: "天际线；空中轮廓" }
      ],
      questions: [
        {
          q: "What takes place in Edinburgh every August?",
          options: ["A winter sports competition", "An international arts and culture festival", "A famous national sailing race"],
          answer: 1,
          explain: "文中第一段明确指出：'Every August, thousands of artists, musicians, and travellers gather here... for the international festival.'（每年八月举办国际艺术节）。"
        },
        {
          q: "What is Arthur's Seat according to the passage?",
          options: ["An ancient extinct volcano", "A royal library in the castle", "A popular local restaurant"],
          answer: 0,
          explain: "第三段提到：'Arthur's Seat, an ancient extinct volcano overlooking the whole city.'（亚瑟王座是一座可以俯瞰全城的古老死火山）。"
        },
        {
          q: "Which traditional Scottish instrument is mentioned in the text?",
          options: ["Drums", "Violin", "Bagpipes"],
          answer: 2,
          explain: "第二段中写到：'hear the sweet, stirring sound of traditional bagpipes'（听到传统风笛的声音）。"
        }
      ]
    },
    {
      id: "tea",
      title: "The Global Journey of Tea",
      titleZh: "茶的全球之旅",
      level: "A2 初级",
      time: "3 min read",
      tags: ["历史 History", "生活 Lifestyle"],
      paragraphs: [
        {
          en: "Tea is the second most popular drink in the entire world, surpassed only by plain drinking water. Although tea culture originated thousands of years ago in ancient China, it has travelled across mountains and oceans to become deeply rooted in daily life across Britain, India, Morocco, and beyond.",
          zh: "茶是全球流行度仅次于水的第二大饮品。尽管茶文化数千年前起源于中国古代，但它跨越了千山万水，早已深深融入了英国、印度、摩洛哥等全球各地的日常生活中。"
        },
        {
          en: "In Britain, afternoon tea became a fashionable social tradition in the nineteenth century. People enjoyed hot black tea with milk alongside fresh sandwiches and scones with clotted cream. Meanwhile, in northern Africa, sweet green tea brewed with fresh mint leaves is poured from high above into glasses as a symbol of hospitality.",
          zh: "在英国，下午茶于19世纪演变成一种优雅的社交传统。人们品尝加入牛奶的温热红茶，搭配新鲜三明治和涂有凝脂奶油的司康饼。而在北非，加入新鲜薄荷叶熬煮的甜绿茶会从高处冲入玻璃杯中，作为热情好客的象征。"
        },
        {
          en: "Today, scientists have proven that tea contains natural antioxidants that help protect the heart and reduce stress. A warm cup of tea is not just a drink; it is a peaceful pause in our busy modern lives.",
          zh: "如今，科学家已经证实茶叶含有天然抗氧化成分，有助于保护心血管并缓解压力。一杯温暖的茶不仅仅是一种解渴饮品，更是我们繁忙现代生活里的一刻宁静休憩。"
        }
      ],
      vocab: [
        { w: "originate", p: "v", zh: "起源于；发源" },
        { w: "hospitality", p: "n", zh: "好客；殷勤款待" },
        { w: "antioxidant", p: "n", zh: "抗氧化剂" },
        { w: "peaceful pause", p: "phrase", zh: "宁静的片刻停留" }
      ],
      questions: [
        {
          q: "Which drink is more widely consumed than tea worldwide?",
          options: ["Coffee", "Water", "Fruit juice"],
          answer: 1,
          explain: "第一句指出：'Tea is the second most popular drink... surpassed only by plain drinking water.'（茶是第二大饮品，仅次于普通水）。"
        },
        {
          q: "What do people in Britain traditionally add to their black tea?",
          options: ["Milk", "Mint leaves", "Chilli powder"],
          answer: 0,
          explain: "第二段描述英国传统：'hot black tea with milk alongside fresh sandwiches and scones'（加牛奶的热红茶搭配三明治与司康）。"
        },
        {
          q: "What health benefit of tea is highlighted in the final paragraph?",
          options: ["It cures tooth decay", "It contains antioxidants that protect the heart", "It replaces the need for sleep"],
          answer: 1,
          explain: "第三段提到：'tea contains natural antioxidants that help protect the heart'（茶叶含有帮助保护心脏的天然抗氧化剂）。"
        }
      ]
    },
    {
      id: "language",
      title: "How to Master a Language",
      titleZh: "攻克外语的实用秘诀",
      level: "A1+ 进阶",
      time: "2 min read",
      tags: ["学习 Study", "建议 Advice"],
      paragraphs: [
        {
          en: "Many adult learners believe that learning a new language requires special talent. However, modern educational research shows that consistency and daily habits are far more powerful than natural gift.",
          zh: "许多成年学习者认为学习一门外语需要特殊的天赋。然而，现代教育学研究表明，持之以恒的每日微习惯远比所谓的天资更加强大。"
        },
        {
          en: "Spending just fifteen minutes every morning reading sentences aloud, listening to native podcasts while commuting, or learning five new words will produce dramatic results over six months. The secret is making English part of your routine rather than studying for ten hours once a month.",
          zh: "每天早晨花十五分钟大声朗读例句，在通勤路上听地道播客，或是掌握五个新单词，半年之后都会带来令人惊喜的进步。真正的秘诀是让英语成为你日常生活的一部分，而不是一个月只狂学十小时。"
        },
        {
          en: "Finally, never be afraid of making mistakes. When you make an error, your brain actively learns the correct pattern. Every mistake is proof that you are trying and moving forward.",
          zh: "最后，千万不要害怕犯错误。当你出现差错时，你的大脑正在积极学习正确的结构模式。每一个错误，都是你在勇于尝试并不断前进的最好证明。"
        }
      ],
      vocab: [
        { w: "consistency", p: "n", zh: "连贯性；持之以恒" },
        { w: "commute", p: "v / n", zh: "通勤；上下班往返" },
        { w: "dramatic results", p: "phrase", zh: "显著的成效" },
        { w: "proof", p: "n", zh: "证据；证明" }
      ],
      questions: [
        {
          q: "According to research, what is more important than natural talent in language learning?",
          options: ["Buying expensive textbooks", "Consistency and daily habits", "Living in a foreign country alone"],
          answer: 1,
          explain: "第一段指出：'consistency and daily habits are far more powerful than natural gift'（持之以恒和每日习惯比天资强大得多）。"
        },
        {
          q: "What daily study method does the author recommend?",
          options: ["Studying ten hours on Sunday", "Spending fifteen minutes every morning on small tasks", "Memorising dictionary definitions only"],
          answer: 1,
          explain: "第二段建议：'Spending just fifteen minutes every morning... will produce dramatic results'（每天早晨十五分钟的小练习便能产生显著效果）。"
        },
        {
          q: "How should learners view making grammatical mistakes?",
          options: ["As a shameful failure", "As proof that they are trying and progressing", "As something that must always be avoided"],
          answer: 1,
          explain: "最后一段总结：'Every mistake is proof that you are trying and moving forward'（每一个错误都是你在勇于尝试、不断前行的证明）。"
        }
      ]
    },
    {
      id: "city-trees",
      title: "The Green Giants of Our Cities",
      titleZh: "城市里的绿色巨人",
      level: "A2 初级",
      time: "3 min read",
      tags: ["自然 Nature", "环保 Environment"],
      paragraphs: [
        {
          en: "Trees are the quiet heroes of our modern concrete cities. Lining busy roads and filling neighbourhood parks, they provide much more than green scenery for urban dwellers.",
          zh: "树木是现代化混凝土城市中默默奉献的英雄。它们伫立在繁忙的道路两旁，装点着社区公园，为城市居民带来的远不止一抹绿色景致。"
        },
        {
          en: "During hot summer heatwaves, tree leaves reflect sunlight and release moisture through transpiration, lowering street temperatures by as much as three to five degrees Celsius. They act as natural air conditioners, while their vast root networks absorb storm rainwater, preventing street flooding.",
          zh: "在炎炎夏日的酷暑热浪中，树叶反射阳光并通过蒸腾作用释放水分，使街道温度降低三到五摄氏度。它们如同天然空调，而发达的地下根系网络还能吸收暴雨雨水，防止道路积水成灾。"
        },
        {
          en: "Moreover, studies confirm that walking near greenery for twenty minutes substantially reduces blood pressure and anxiety. By protecting city trees, we protect both the environment and our own health.",
          zh: "不仅如此，多项研究证实，在绿树成荫的环境中漫步二十分钟，能显著降低人体血压并缓解焦虑感。呵护城市树木，既是在守护自然环境，也是在呵护我们自身的健康。"
        }
      ],
      vocab: [
        { w: "urban dweller", p: "phrase", zh: "城市居民" },
        { w: "heatwave", p: "n", zh: "热浪；高温期" },
        { w: "substantially", p: "adv", zh: "大幅度地；显著地" },
        { w: "anxiety", p: "n", zh: "焦虑；担忧" }
      ],
      questions: [
        {
          q: "How do city trees help reduce street temperatures in summer?",
          options: ["By creating electric breeze", "By reflecting sunlight and releasing moisture", "By producing ice on tree branches"],
          answer: 1,
          explain: "第二段明确指出：'tree leaves reflect sunlight and release moisture through transpiration'（通过反射阳光和蒸腾释放水汽来降温）。"
        },
        {
          q: "How do root systems of trees benefit streets during heavy rains?",
          options: ["They clean the car exhausts", "They absorb rainwater and help prevent street flooding", "They provide electricity to streetlights"],
          answer: 1,
          explain: "第二段写道：'vast root networks absorb storm rainwater, preventing street flooding'（庞大的根系吸收雨水，防止街道水浸）。"
        },
        {
          q: "What mental health benefit comes from walking near green trees?",
          options: ["Increased stress levels", "Reduced blood pressure and anxiety", "Immediate cure for common colds"],
          answer: 1,
          explain: "第三段提到：'substantially reduces blood pressure and anxiety'（显著降低血压与焦虑感）。"
        }
      ]
    }
  ],

  listening: [
    {
      id: "num-time",
      title: "数字与时间听辨",
      category: "数字与时间 Numbers & Time",
      prompt: "听一段简短的机场登机广播，找出正确的航班信息：",
      audio: "Attention all passengers on flight BA 214 to London Heathrow. The flight is now boarding at Gate 15. The departure time has been moved to 3:50.",
      question: "登机口（Gate）和起飞时间（Departure time）分别是多少？",
      options: [
        "Gate 50, at 3:15",
        "Gate 15, at 3:50",
        "Gate 15, at 3:15"
      ],
      answer: 1,
      transcript: "Attention all passengers on flight BA 214 to London Heathrow. The flight is now boarding at Gate 15. The departure time has been moved to 3:50.",
      tip: "【辨音难点】注意 fifteen (/ˌfɪfˈtiːn/，重音在后，元音长) 与 fifty (/ˈfɪfti/，重音在前，短促) 的发音规律。广播中说的 Gate 15 和 3:50 (three fifty)。"
    },
    {
      id: "connected",
      title: "连读与弱读识别",
      category: "连读技巧 Connected Speech",
      prompt: "仔细听日常口语中的连读现象，说话人请求对方做什么？",
      audio: "Could you pick it up on your way home tonight?",
      question: "这句话的实际含义是：",
      options: [
        "你今晚回家路上能顺便取一下它吗？",
        "你今晚能开车送他回家吗？",
        "你能帮忙收拾一下房间吗？"
      ],
      answer: 0,
      transcript: "Could you pick it up on your way home tonight?",
      tip: "【连读现象】'pick it up' 发生辅音与元音的连续拼读：/pɪ-kɪ-tʌp/，听起来像一个紧凑的单词；'on your way home' 意为“在回家的路上”。"
    },
    {
      id: "minimal-pair",
      title: "语境中的易混长短元音",
      category: "易混音辨析 Minimal Pairs",
      prompt: "听句子，判断说话人在农场边看到了什么？",
      audio: "There were several white sheep resting under the big oak tree.",
      question: "说话人看到的是哪种事物？",
      options: [
        "轮船（ships）",
        "绵羊（sheep）",
        "床单（sheets）"
      ],
      answer: 1,
      transcript: "There were several white sheep resting under the big oak tree.",
      tip: "【长短元音辨析】sheep 中的 /iː/ 是长元音，双唇向两侧平展如微笑；ship 中的 /ɪ/ 则是短促松弛元音。在橡树下休息的显然是 white sheep（白色的绵羊）。"
    },
    {
      id: "directions-listen",
      title: "听方位指引辨位置",
      category: "生活方位 Directions",
      prompt: "听一段街头问路指引，判断目的地书店的准确位置：",
      audio: "Go straight down this street for two blocks, turn left at the traffic lights, and you will find the bookshop right next to the bakery on your right.",
      question: "根据指引，书店具体在哪里？",
      options: [
        "红绿灯路口的左边",
        "直走一个街区，在超市对面",
        "红绿灯左拐后，在右手边面包店隔壁"
      ],
      answer: 2,
      transcript: "Go straight down this street for two blocks, turn left at the traffic lights, and you will find the bookshop right next to the bakery on your right.",
      tip: "【方位捕捉】注意信号词：turn left at the traffic lights（在红绿灯左转）以及 right next to the bakery on your right（在右手边面包店紧邻处）。"
    },
    {
      id: "price-shopping",
      title: "超市购物结账听算",
      category: "日常购物 Shopping & Money",
      prompt: "听收银员报出的账单金额，这单消费一共需要支付多少钱？",
      audio: "The organic apples come to three pounds twenty, and the whole milk is one pound fifteen. That brings your total to four pounds thirty-five, please.",
      question: "顾客总共需要支付多少金额？",
      options: [
        "£3.20 (three pounds twenty)",
        "£4.35 (four pounds thirty-five)",
        "£5.35 (five pounds thirty-five)"
      ],
      answer: 1,
      transcript: "The organic apples come to three pounds twenty, and the whole milk is one pound fifteen. That brings your total to four pounds thirty-five, please.",
      tip: "【数字相加与表达】£3.20 (three pounds twenty) + £1.15 (one pound fifteen) = £4.35 (four pounds thirty-five)。日常英语中经常省略便士 'pence'，直接说 'four pounds thirty-five'。"
    },
    {
      id: "daily-response",
      title: "情景问答反应力",
      category: "地道应答 Quick Response",
      prompt: "听同事在办公室里的礼貌问句，选出最得体恰当的回复：",
      audio: "Do you mind if I open the window for some fresh air?",
      question: "如果你【不介意】对方开窗，最正确的回答是：",
      options: [
        "Not at all, go right ahead!",
        "Yes, please open the window.",
        "Never mind, I don't care."
      ],
      answer: 0,
      transcript: "Do you mind if I open the window for some fresh air?",
      tip: "【高频易错点】'Do you mind...?' 意为“你介意……吗？”如果你同意对方做（即不介意），一定要回答否定形式，如 'Not at all'（一点也不介意）或 'No, go ahead'。如果回答 'Yes'，实际意思反而变成了“是的，我很介意，请别开”！"
    }
  ],
  phrasalVerbs: [
  {
    "id": "pv-give-up",
    "phrase": "give up",
    "particle": "up",
    "category": "UP 彻底/向上",
    "zh": "放弃；停止努力",
    "logic": "字面：向上交出。引申：高举双手交出控制权，即“认输投降、不再坚持”。",
    "tip": "及物动词短语，后接名词或 V-ing。若接代词，代词放中间：give it up（不能说 give up it）。",
    "ex": "Never give up on your dreams, even when things get difficult.",
    "exZh": "即使事情变得艰难，也绝不要放弃你的梦想。"
  },
  {
    "id": "pv-clean-up",
    "phrase": "clean up",
    "particle": "up",
    "category": "UP 彻底/向上",
    "zh": "彻底收拾干净；整理",
    "logic": "particle 'up' 常表动作的“彻底、完全”完成（如 eat up 吃光, drink up 喝光）。clean up 即“收拾得干干净净”。",
    "tip": "常用于房间、桌面或事故现场的清理：clean up the room / clean up the mess。",
    "ex": "Please clean up your study desk before dinner.",
    "exZh": "晚饭前请把你的书桌收拾干净。"
  },
  {
    "id": "pv-show-up",
    "phrase": "show up",
    "particle": "up",
    "category": "UP 彻底/向上",
    "zh": "露面；赶到；出席",
    "logic": "字面：显现出来。引申为在某个约定场合露面，常用于口语中代替 arrive。",
    "tip": "不及物短语，后面不直接加宾语；表示迟到时非常高频：He showed up late。",
    "ex": "Over fifty people showed up for the free English workshop.",
    "exZh": "有五十多人出席了这次免费英语工作坊。"
  },
  {
    "id": "pv-look-up",
    "phrase": "look up",
    "particle": "up",
    "category": "UP 彻底/向上",
    "zh": "查阅（词典/信息）；抬头看",
    "logic": "字面：抬头仰望。引申为在书架、词典或网络中“检索信息”。",
    "tip": "代词放中间：look it up in the dictionary（不能说 look up it）。",
    "ex": "If you don't know this word, you can look it up in the dictionary.",
    "exZh": "如果你不认识这个单词，可以在词典里查一查。"
  },
  {
    "id": "pv-end-up",
    "phrase": "end up",
    "particle": "up",
    "category": "UP 彻底/向上",
    "zh": "最终到达；以……告终",
    "logic": "end（结束）+ up（彻底）。引申为经历意外或转折后，最终落得某种结果。",
    "tip": "后面常接介词短语（end up in London）或动名词（end up paying double）。",
    "ex": "We took the wrong turn and ended up in another city.",
    "exZh": "我们拐错了弯，结果跑到了另一座城市。"
  },
  {
    "id": "pv-cheer-up",
    "phrase": "cheer up",
    "particle": "up",
    "category": "UP 彻底/向上",
    "zh": "（使）振作起来；高兴起来",
    "logic": "cheer（欢呼）+ up（向上）。情绪从低落的谷底升起，重新振作。",
    "tip": "常作为祈使句直接安慰朋友：Cheer up! 也可以是及物动词：cheer him up。",
    "ex": "Cheer up! Everything is going to be completely fine.",
    "exZh": "振作起来！一切都会好起来的。"
  },
  {
    "id": "pv-turn-off",
    "phrase": "turn off",
    "particle": "off",
    "category": "OFF 离开/分离",
    "zh": "关掉（电灯/电器/水龙头）",
    "logic": "off 表示“断开、切断触点”。turn on 是接通，turn off 是断开电源。",
    "tip": "中文常说“关电脑/关灯”，很多初学者误用 close。记住：门窗用 close，电器用 turn off！",
    "ex": "Remember to turn off the lights when you leave the room.",
    "exZh": "离开房间时请记得随手关灯。"
  },
  {
    "id": "pv-take-off",
    "phrase": "take off",
    "particle": "off",
    "category": "OFF 离开/分离",
    "zh": "起飞；脱下（衣帽鞋）",
    "logic": "take（拿走）+ off（离开表面）。飞机脱离地面 = 起飞；衣服脱离身体 = 脱下。",
    "tip": "双重核心含义：The plane took off（飞机起飞）；Take off your coat（脱掉外套）。",
    "ex": "Please take off your shoes before entering the Japanese tea house.",
    "exZh": "进入日式茶室前请先脱鞋。"
  },
  {
    "id": "pv-put-off",
    "phrase": "put off",
    "particle": "off",
    "category": "OFF 离开/分离",
    "zh": "推迟；拖延",
    "logic": "put（放置）+ off（移开/远离当下）。把原本计划好的事情移到以后做，即“推迟”。",
    "tip": "常接动名词 V-ing：put off doing something。如常见谚语：Never put off till tomorrow what you can do today。",
    "ex": "They decided to put off the meeting until next Wednesday.",
    "exZh": "他们决定把会议推迟到下周三。"
  },
  {
    "id": "pv-call-off",
    "phrase": "call off",
    "particle": "off",
    "category": "OFF 离开/分离",
    "zh": "取消（活动/计划）",
    "logic": "call（呼唤宣告）+ off（终止）。官方或组织者出面宣布活动不再举行。",
    "tip": "与 put off（推迟）不同，call off 是彻底取消（cancel）。",
    "ex": "The referee had to call off the soccer match due to heavy snow.",
    "exZh": "由于大雪，裁判不得不取消了这场足球比赛。"
  },
  {
    "id": "pv-set-off",
    "phrase": "set off",
    "particle": "off",
    "category": "OFF 离开/分离",
    "zh": "出发；启程；动身",
    "logic": "set（就位准备）+ off（离开起点）。动身开始一段旅程（英式英语中极常用）。",
    "tip": "常搭配时间状语：set off early in the morning（大清早动身出发）。",
    "ex": "We need to set off early tomorrow to beat the rush-hour traffic.",
    "exZh": "我们明天需要早点出发，避开早高峰交通。"
  },
  {
    "id": "pv-find-out",
    "phrase": "find out",
    "particle": "out",
    "category": "OUT 探究/耗尽",
    "zh": "查明；弄清楚；发现事实",
    "logic": "find（找到）+ out（公之于众/明朗）。通过打听、研究把隐藏的信息揭示出来。",
    "tip": "常接 that 从句或特殊疑问句：find out when the bus arrives / find out the truth。",
    "ex": "Can you find out what time the supermarket closes tonight?",
    "exZh": "你能弄清楚今晚超市几点关门吗？"
  },
  {
    "id": "pv-figure-out",
    "phrase": "figure out",
    "particle": "out",
    "category": "OUT 探究/耗尽",
    "zh": "弄明白；想出办法",
    "logic": "figure（计算思考）+ out（得出结果）。通过大脑思考分析，最终把难题琢磨明白。",
    "tip": "口语极高频：I can't figure it out（我实在想不通/搞不懂）。",
    "ex": "I am trying to figure out how this new software works.",
    "exZh": "我正在琢磨这款新软件到底该怎么用。"
  },
  {
    "id": "pv-run-out-of",
    "phrase": "run out of",
    "particle": "out",
    "category": "OUT 探究/耗尽",
    "zh": "用完；耗尽",
    "logic": "run（流失流动）+ out of（脱离/耗尽范围）。东西彻底用光，手头一点都不剩。",
    "tip": "常用于：run out of time（没时间了）、run out of money（花光钱）、run out of milk（牛奶喝光了）。",
    "ex": "Hurry up! We are running out of time before the gate closes.",
    "exZh": "快点！登机口关闭前我们的时间不多了。"
  },
  {
    "id": "pv-check-out",
    "phrase": "check out",
    "particle": "out",
    "category": "OUT 探究/耗尽",
    "zh": "办理退房；查看；结账",
    "logic": "check（登记核对）+ out（离开）。在酒店核对账单离开，或口语中“看看新鲜事物”。",
    "tip": "退房必备表达：What time is check-out? / We checked out at eleven.",
    "ex": "Guests are required to check out before 11:00 AM.",
    "exZh": "住客需在上午 11 点前办理退房手续。"
  },
  {
    "id": "pv-hang-out",
    "phrase": "hang out",
    "particle": "out",
    "category": "OUT 探究/耗尽",
    "zh": "闲逛；聚会休闲",
    "logic": "hang（悬挂停留）+ out（在外面）。朋友之间没有具体严肃的目的，纯粹一起放松聚会。",
    "tip": "常搭配 with：hang out with friends on the weekend（周末和朋友一起玩/逛街）。",
    "ex": "Do you want to hang out at the local cafe this afternoon?",
    "exZh": "你今天下午想去街角咖啡馆一起坐坐坐、聊聊天吗？"
  },
  {
    "id": "pv-point-out",
    "phrase": "point out",
    "particle": "out",
    "category": "OUT 探究/耗尽",
    "zh": "指出；向人提示",
    "logic": "point（用手指）+ out（显现出来）。将某人的注意力引向某个容易被忽略的事实或错误。",
    "tip": "及物短语：point out a mistake / point out the directions。",
    "ex": "The teacher kindly pointed out two spelling mistakes in my essay.",
    "exZh": "老师善意地指出了我作文里的两处拼写错误。"
  },
  {
    "id": "pv-turn-down",
    "phrase": "turn down",
    "particle": "down",
    "category": "DOWN 降低/减缓",
    "zh": "调小音量/温度；拒绝邀请",
    "logic": "turn（旋转旋钮）+ down（向下）。把旋钮向下旋以降低音量；引申为把提议压下不予接受（拒绝）。",
    "tip": "两大高频用法：Turn down the music（调低音乐）；turn down the job offer（婉拒工作邀约）。",
    "ex": "Could you please turn down the TV? I am trying to read.",
    "exZh": "你能把电视声音调小一点吗？我正在看书。"
  },
  {
    "id": "pv-calm-down",
    "phrase": "calm down",
    "particle": "down",
    "category": "DOWN 降低/减缓",
    "zh": "冷静下来；平息怒气",
    "logic": "calm（平静）+ down（平稳降落）。让激动、愤怒或恐惧的情绪降温平复。",
    "tip": "既可作不及物动词安慰人（Calm down!），也可作及物动词（calm the baby down）。",
    "ex": "Take a deep breath and calm down before you answer the phone.",
    "exZh": "接电话前先深吸一口气，让自己冷静下来。"
  },
  {
    "id": "pv-break-down",
    "phrase": "break down",
    "particle": "down",
    "category": "DOWN 降低/减缓",
    "zh": "出故障（机器）；崩溃痛哭",
    "logic": "break（破损）+ down（倒下瓦解）。机器损坏停止运转，或者人的心理防线彻底崩溃。",
    "tip": "汽车抛锚、电梯停运最地道表达：The car broke down / The elevator broke down。",
    "ex": "Our taxi broke down on the motorway, so we arrived an hour late.",
    "exZh": "我们的出租车在高速公路上抛锚了，所以我们迟到了一个小时。"
  },
  {
    "id": "pv-slow-down",
    "phrase": "slow down",
    "particle": "down",
    "category": "DOWN 降低/减缓",
    "zh": "减速；慢下来；放松节奏",
    "logic": "slow（慢）+ down（降速）。降低行进速度或放慢忙碌的生活节奏。",
    "tip": "司机开车或快节奏工作时的常用叮嘱：Slow down! You're working too hard.",
    "ex": "The sign says you must slow down when approaching a school zone.",
    "exZh": "路标指示在靠近学校区域时必须减速慢行。"
  },
  {
    "id": "pv-write-down",
    "phrase": "write down",
    "particle": "down",
    "category": "DOWN 降低/减缓",
    "zh": "写下；把……记在纸上",
    "logic": "write（写）+ down（落笔落在纸面上）。把听到的信息记录在笔记本或便签上。",
    "tip": "代词在中间：write it down。常用于记录电话号码或地址。",
    "ex": "Let me write down your email address so I don't forget it.",
    "exZh": "让我把你的电子邮箱地址记下来，免得忘了。"
  },
  {
    "id": "pv-look-forward-to",
    "phrase": "look forward to",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "期待；盼望（好事的发生）",
    "logic": "look（看）+ forward（向前看）+ to（朝向）。满心欢喜地展望未来即将发生的事情。",
    "tip": "【全网最高频避坑点】这里的 to 是介词，后面绝对不能接动词原形！必须接名词或动名词（-ing）：look forward to hearing from you！",
    "ex": "I am really looking forward to visiting Edinburgh this autumn.",
    "exZh": "我非常期待今年秋天能去爱丁堡旅行。"
  },
  {
    "id": "pv-run-into",
    "phrase": "run into",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "偶遇；不期而遇",
    "logic": "run（移动前行）+ into（撞见/融入视野）。在路上或公共场所碰巧撞见熟人。",
    "tip": "同义词为 bump into。非预定会面的巧遇：I ran into Sarah at the train station.",
    "ex": "Guess who I ran into at the supermarket this morning? Mr. Wilson!",
    "exZh": "猜猜我今天早上在超市偶遇了谁？威尔逊老师！"
  },
  {
    "id": "pv-get-along-with",
    "phrase": "get along with",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "与……相处融洽；和睦",
    "logic": "get along（顺畅同行）+ with（与某人）。在工作或生活中与他人同行合拍、没有摩擦冲突。",
    "tip": "美式常用 get along with，英式也常说 get on with。",
    "ex": "She is an easygoing person and gets along with all her roommates.",
    "exZh": "她是一个随和开朗的人，和所有的室友都相处得非常融洽。"
  },
  {
    "id": "pv-look-after",
    "phrase": "look after",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "照顾；照看；负责管理",
    "logic": "look（注视看管）+ after（紧跟在身后）。跟随在孩子或宠物后面确保其安全，即“照顾”。",
    "tip": "等同于 take care of。常用于托人照顾宠物或老人孩子。",
    "ex": "Could you look after my cat while I am away on a business trip?",
    "exZh": "我出差期间你能帮我照看一下我的猫吗？"
  },
  {
    "id": "pv-get-over",
    "phrase": "get over",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "从（疾病/难过）中康复；迈过坎坷",
    "logic": "get（移动）+ over（越过高墙/障碍）。跨越生活中的坎坷困难，重新恢复常态。",
    "tip": "常接疾病或情感挫败：get over a cold（感冒痊愈）/ get over a disappointment。",
    "ex": "It took him nearly three weeks to completely get over the heavy flu.",
    "exZh": "他花了将近三周的时间才从这场重感冒中完全康复过来。"
  },
  {
    "id": "pv-catch-up-with",
    "phrase": "catch up with",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "赶上（进度）；与朋友叙旧聊天",
    "logic": "catch（抓住）+ up（齐平水平）+ with（与某人）。原本落后，加快脚步赶上同步状态。",
    "tip": "老朋友久别重逢极常用：Let's have a coffee and catch up!（咱们喝杯咖啡好好叙叙旧吧！）",
    "ex": "Let's meet for lunch this Friday and catch up on everything.",
    "exZh": "咱们这周五一起吃午饭，好好叙叙近况吧。"
  },
  {
    "id": "pv-give-away",
    "phrase": "give away",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "赠送（免费物品）；泄露秘密",
    "logic": "give（给）+ away（移走脱离）。免费将物品送走，或不小心将藏在心底的信息脱口而出。",
    "tip": "看电影防剧透专用语：Don't give away the ending!（千万别给我剧透结局！）",
    "ex": "The local bookstore is giving away free bookmarks to all visitors today.",
    "exZh": "当地书店今天正在向所有访客免费赠送书签。"
  },
  {
    "id": "pv-piece-of-cake",
    "phrase": "a piece of cake",
    "particle": "other",
    "category": "OTHER 高频结合与习语",
    "zh": "小菜一碟；轻而易举的事",
    "logic": "吃一块香甜松软的蛋糕毫不费力。引申为某件事轻而易举，相当于中文里的“张飞吃豆芽，小菜一碟”。",
    "tip": "高频口语习语：The exam was a piece of cake!（这次考试简直易如反掌！）",
    "ex": "Don't stress about driving test — with enough practice, it's a piece of cake.",
    "exZh": "别对驾照考试太焦虑——只要练习充分，绝对是小菜一碟。"
  }
],
  phrasalDrills: [
  {
    "id": "pd-1",
    "prompt": "明天为了赶早班火车，我们必须一早动身【出发】。",
    "sentence": "We need to ______ early tomorrow morning to catch the first train.",
    "options": [
      "set off",
      "set up",
      "set out of"
    ],
    "answer": 0,
    "explanation": "set off 意为“动身；启程出发”，常用于开始一段旅程。"
  },
  {
    "id": "pd-2",
    "prompt": "不管遇到多大困难，绝不要轻易【放弃】。",
    "sentence": "No matter how tough it gets, you must never ______ your goals.",
    "options": [
      "give up on",
      "give away",
      "give in to"
    ],
    "answer": 0,
    "explanation": "give up on something 意为“对……放弃希望或努力”。"
  },
  {
    "id": "pd-3",
    "prompt": "房间里太冷了，能麻烦你把空调温度【调高/调低】或把音乐【调小】一点吗？",
    "sentence": "Could you please ______ the volume? It's much too loud for studying.",
    "options": [
      "turn down",
      "turn out",
      "turn off"
    ],
    "answer": 0,
    "explanation": "turn down 表示“调小音量/温度”；turn off 则是彻底关闭电源。"
  },
  {
    "id": "pd-4",
    "prompt": "我非常【期待】下个月在伦敦见到你。",
    "sentence": "I am really looking forward to ______ you in London next month.",
    "options": [
      "seeing",
      "see",
      "saw"
    ],
    "answer": 0,
    "explanation": "look forward to 中的 to 是介词，后面必须接动名词（-ing）：seeing you。"
  },
  {
    "id": "pd-5",
    "prompt": "我们的打印纸已经【用光了】，能帮我再去买一包吗？",
    "sentence": "The office has ______ printer paper. Could you pick up some more?",
    "options": [
      "run out of",
      "run into",
      "run over"
    ],
    "answer": 0,
    "explanation": "run out of 表示“某物资或时间用完、耗尽”。"
  },
  {
    "id": "pd-6",
    "prompt": "因为通勤时间实在太长，她最终决定【婉拒】这份工作邀请。",
    "sentence": "She decided to ______ the job offer because the daily commute was too long.",
    "options": [
      "turn down",
      "turn off",
      "turn back"
    ],
    "answer": 0,
    "explanation": "turn down 除了调低音量，另一个核心引申含义是“拒绝（提议、申请、邀请）”。"
  }
]
};
