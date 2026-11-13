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
  ]
};
