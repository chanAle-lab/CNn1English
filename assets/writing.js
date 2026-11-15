/* CNn1English - Letter Writing & Cursive Module */
(function() {
  "use strict";

  window.CN1_WRITING = {
    letters: [
  {
    "letter": "A",
    "lower": "a",
    "sound": "/eɪ/",
    "word": "Apple",
    "wordZh": "苹果",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "3笔：① 顶线向左下斜拉至基线；② 顶线向右下斜拉至基线；③ 中线上画横连接两斜线。",
    "printLower": "1笔：中格右上起笔，向左逆时针画半圆闭合，紧贴右侧垂直下拉到底线带微小弧度。",
    "cursiveUpper": "起笔于基线轻微上提，斜向上冲至顶线转弧，向下拉至基线形成左弯，中段回勾系结。",
    "cursiveLower": "从基线向右上滑入中格，逆时针画圆闭合，顺下落基线拉出连接下一个字母的斜小尾。",
    "pitfalls": "大写横线必须在中线上，不要画太低；小写 a 封口必须闭合，切勿留缝变成 u。"
  },
  {
    "letter": "B",
    "lower": "b",
    "sound": "/biː/",
    "word": "Book",
    "wordZh": "书本",
    "zone": "upper-mid",
    "zoneBadge": "大写上中格 · 小写上中格",
    "printUpper": "2笔：① 顶线竖直到基线；② 从顶线向右画上中两半圆，中半圆略大于上半圆。",
    "printLower": "1笔：从顶线垂直下拉至基线，反弹沿原线下半段向上向右画圆充满中格，紧密闭合于基线。",
    "cursiveUpper": "顶线直落基线出小尾，提笔从顶线向右顺画上下两环，中间微相扣。",
    "cursiveLower": "基线长提上扬穿入上格转小环下折到基线，向上收圆并在中线处横向出桥接尾（高位连写）。",
    "pitfalls": "【易混淆】b 的圆圈在右侧（先写竖再右画圆），千万不要和 d 混淆！连笔 b 收尾在高位，直接横连下一个字母。"
  },
  {
    "letter": "C",
    "lower": "c",
    "sound": "/siː/",
    "word": "Cat",
    "wordZh": "猫",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "1笔：顶线稍下方起笔，逆时针沿顶线画大半圆，弧底稳稳落在基线上，开口向右。",
    "printLower": "1笔：中线稍下方起笔，逆时针画小半圆充满中格，底部紧贴基线。",
    "cursiveUpper": "顶线下轻起微勾，顺滑向下弧行坐于基线，右挑收尾准备连写。",
    "cursiveLower": "基线轻微上斜入中格，顺势向左逆时针回画小弧圆，底部滑出基线连出引线。",
    "pitfalls": "弧度要圆润饱满，不要写得过扁或尖锐；底部必须踏实踩在基线上，不要悬空浮起。"
  },
  {
    "letter": "D",
    "lower": "d",
    "sound": "/diː/",
    "word": "Dog",
    "wordZh": "狗",
    "zone": "upper-mid",
    "zoneBadge": "大写上中格 · 小写上中格",
    "printUpper": "2笔：① 从顶线竖直到基线；② 从顶线向右画大圆弧，到底部紧闭合于基线竖脚。",
    "printLower": "1笔或2笔：先在中格写像 c 一样的左半圆闭合，再从顶线垂直拉长竖穿过右边直达基线收小脚。",
    "cursiveUpper": "顶线垂直下拉到底出小圈贴基线，向右大幅度画满圆饱满包回顶线。",
    "cursiveLower": "先在中格画圆，顺势长驱直上穿顶线，原路折返下拉到底线出连写勾。",
    "pitfalls": "【易混淆】d 的圆肚在左边（先写左半圆再长竖），与 b（先长竖再右半圆）正好相反！"
  },
  {
    "letter": "E",
    "lower": "e",
    "sound": "/iː/",
    "word": "Egg",
    "wordZh": "鸡蛋",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "4笔：① 从顶线向下竖直到底线；② 上横；③ 中横（略短）；④ 底横。",
    "printLower": "1笔：在中格正中间水平向右画短横，随即逆时针向上碰中线、向左画圆弧到底线开口。",
    "cursiveUpper": "中线上方起笔逆时针两段波浪弧，中间微交叠，下弧饱满坐落基线。",
    "cursiveLower": "基线斜向上至中格中间，向右翻折成小窄环，顺势下弧贴基线滑出。",
    "pitfalls": "小写 e 起笔的横线必须水平，不要倾斜；上环和下弧比例要匀称，切忌上下都写成闭合圆。"
  },
  {
    "letter": "F",
    "lower": "f",
    "sound": "/ef/",
    "word": "Fish",
    "wordZh": "鱼",
    "zone": "full",
    "zoneBadge": "大写上中格 · 印刷小写上中格 / 草书小写占三格",
    "printUpper": "3笔：① 顶线向下拉长竖；② 顶线长横；③ 中线短横。",
    "printLower": "2笔：① 从顶线下方起笔向上画右弯弧到底线垂直下拉；② 中线上画短横穿过竖线。",
    "cursiveUpper": "顶端画波浪帽子横，中竖带微弯落基线，中段加短破笔横。",
    "cursiveLower": "【特例·占三格】基线大幅上扬穿入顶线转小环，笔直向下贯穿基线冲入下格底部，再向前向上收环回基线连出！",
    "pitfalls": "连笔草书小写 f 是全字母表中极少数同时占满上、中、下三格的字母，上下各有一个精致闭环！"
  },
  {
    "letter": "G",
    "lower": "g",
    "sound": "/dʒiː/",
    "word": "Girl",
    "wordZh": "女孩",
    "zone": "mid-lower",
    "zoneBadge": "大写上中格 · 小写中下格",
    "printUpper": "2笔：① 仿 C 画大半圆至中线下方；② 竖向内折或向左加短横。",
    "printLower": "1笔：中格逆时针画满圆闭合，顺右侧向下拉直冲入下格，在底线向上向左画优美弯钩。",
    "cursiveUpper": "从基线长斜向右上冲入顶线，转大圈下坠入下格，底部甩出大弯环（极具辨识度）。",
    "cursiveLower": "中格圆环，右侧笔直垂入下格，底部向左上画大回弯环穿过竖线引向下一个字母。",
    "pitfalls": "小写 g 的圆腹必须紧贴中格，下垂尾必须伸入下格，千万不要把圆圈写在下格里！"
  },
  {
    "letter": "H",
    "lower": "h",
    "sound": "/eɪtʃ/",
    "word": "Hat",
    "wordZh": "帽子",
    "zone": "upper-mid",
    "zoneBadge": "大写上中格 · 小写上中格",
    "printUpper": "3笔：① 左长竖；② 右长竖；③ 中横相接。",
    "printLower": "1笔：顶线起笔长竖直落基线，反弹至中线弧形右拱至中格右侧落地带微脚。",
    "cursiveUpper": "左竖带微弯起笔，右长竖带顶环，中间折回水平交扣连写。",
    "cursiveLower": "基线大提上扬穿顶线转环下直落基线，反弹向右拱出圆拱门再收脚。",
    "pitfalls": "小写 h 的左竖必须高高挺拔直达顶线；如果左竖写短了，就会被误认成小写 n！"
  },
  {
    "letter": "I",
    "lower": "i",
    "sound": "/aɪ/",
    "word": "Ice",
    "wordZh": "冰块",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格 (圆点在上格)",
    "printUpper": "1笔或3笔：中间长竖，上下各加一条齐平短横（或单写一竖）。",
    "printLower": "2笔：① 中线到基线写短竖带微弧；② 在中线上方正中央轻点一点。",
    "cursiveUpper": "基线起笔画左下斜弧向上提成顶环，回落基线向左收弯。",
    "cursiveLower": "基线向上斜切至中线，折返下行落基线出小勾；最后轻点一点。",
    "pitfalls": "【中国学生高频误区】小写 i 顶上的点只是轻轻一点！严禁画成小圆圈、大黑疙瘩、小爱心或横线！"
  },
  {
    "letter": "J",
    "lower": "j",
    "sound": "/dʒeɪ/",
    "word": "Juice",
    "wordZh": "果汁",
    "zone": "mid-lower",
    "zoneBadge": "大写上中格 · 小写中下格 (圆点在上格)",
    "printUpper": "1笔：顶线直落到底线向上向左弯钩，顶端可加短平横。",
    "printLower": "2笔：中线垂直向下拉穿基线进入下格，向左弯钩；中线上方轻点一点。",
    "cursiveUpper": "中线起笔向右上画小环，长垂线下冲至下格，向左回卷大环向上出笔。",
    "cursiveLower": "基线上斜入中格，顺势笔直贯入下格，向左上回环交叉于基线连写；最后点点。",
    "pitfalls": "小写 j 属于中下格字母，必须穿过基线伸入下格；同样点要轻点，写完整个单词后再补点。"
  },
  {
    "letter": "K",
    "lower": "k",
    "sound": "/keɪ/",
    "word": "Kite",
    "wordZh": "风筝",
    "zone": "upper-mid",
    "zoneBadge": "大写上中格 · 小写上中格",
    "printUpper": "3笔：① 顶线到底线长竖；② 从顶线右侧斜向下汇聚中线；③ 从中点向右下撇到底线。",
    "printLower": "2笔：① 顶线到底线长竖；② 在中格内画两斜线（注意两斜折全部收缩在中格内！）。",
    "cursiveUpper": "左长竖带底翘，右斜折分段起笔，在中部交叠向右下甩尾。",
    "cursiveLower": "大提笔穿顶线转环直落基线，反弹进入中格画小闭环再向右下撇出连写脚。",
    "pitfalls": "【关键区分】大写 K 的斜折从顶线开始；小写 k 的长竖在上中格，但右边两个折叉必须全部严格在中格内！"
  },
  {
    "letter": "L",
    "lower": "l",
    "sound": "/el/",
    "word": "Lamp",
    "wordZh": "台灯",
    "zone": "upper-mid",
    "zoneBadge": "大写上中格 · 小写上中格",
    "printUpper": "1笔或2笔：顶线笔直到基线，随即向右水平折出底横。",
    "printLower": "1笔：从顶线笔直向下直拉到基线，末端略微向右挑出一点点极小弧度。",
    "cursiveUpper": "顶线小环微斜下落到底出扁环，向右顺滑展开波浪底。",
    "cursiveLower": "基线大步上扬贯穿顶线，向左转高瘦圆环，顺势笔直拉落至基线向上轻快扬起。",
    "pitfalls": "小写 l 必须写满上格和中格；草书小写 l 是一个优美的高耸长环，切记不要写成矮矮的 e。"
  },
  {
    "letter": "M",
    "lower": "m",
    "sound": "/em/",
    "word": "Moon",
    "wordZh": "月亮",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "4笔：① 左长竖到底；② 顶到基线左斜折；③ 基线到顶右斜折；④ 右长竖到底。",
    "printLower": "1笔：中线下拉至基线，反弹画两个连贯圆拱门，两拱顶端紧贴中线，底部全着陆于基线。",
    "cursiveUpper": "三段波浪大拱门，首笔可从底线带引上冲，结尾轻巧勾出连写线。",
    "cursiveLower": "从基线上扬入中格，连续画出三个圆润饱满的山拱，最后向右上扬起。",
    "pitfalls": "小写 m 的拱门要圆润，不要写成带尖角的锯齿；两个拱底都要老老实实踩在基线上。"
  },
  {
    "letter": "N",
    "lower": "n",
    "sound": "/en/",
    "word": "Nose",
    "wordZh": "鼻子",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "3笔：① 左长竖；② 从顶向右下贯通到底线的斜长线；③ 右长竖拔地而起至顶线。",
    "printLower": "1笔：中线到底线短竖，反弹画一个圆润饱满的拱门，稳稳落在基线上出小翘脚。",
    "cursiveUpper": "首拱大提上顶线，顺势大斜坡直冲到底，再扬长而起画右弯长挑。",
    "cursiveLower": "基线斜提入中格，顺画两道圆润小拱，末端向右上方扬出顺畅引线。",
    "pitfalls": "注意与 h 区分：n 的竖绝对不高出中线；与 u 区分：n 是开口向下的拱门，u 是开口向上的水桶。"
  },
  {
    "letter": "O",
    "lower": "o",
    "sound": "/ˈɒrɪndʒ/",
    "word": "Orange",
    "wordZh": "橙子",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "1笔：顶线正中偏右起笔，向左逆时针画一个端正的大椭圆，底部轻触基线后圆满闭合。",
    "printLower": "1笔：中线正中偏右起笔，向左逆时针画圆充满中格，紧密闭合在起点。",
    "cursiveUpper": "顶线向左下画饱满大椭圆，顺滑返回顶线并在内部掠过一个小结勾。",
    "cursiveLower": "基线上滑入中格逆时针画圆，闭合后【在中线高处直接向右横出小桥】！",
    "pitfalls": "【连写核心关键】小写连笔 o 结尾在【中线高位】直接横连下一个字母，千万不要掉回底线，否则容易被误读成 a！"
  },
  {
    "letter": "P",
    "lower": "p",
    "sound": "/piː/",
    "word": "Pen",
    "wordZh": "钢笔",
    "zone": "mid-lower",
    "zoneBadge": "大写上中格 · 小写中下格",
    "printUpper": "2笔：① 顶线到底线长竖；② 在上格画一个半圆闭合于中线竖身。",
    "printLower": "1笔或2笔：从中线起笔，垂直向下贯穿基线深入下格；反弹在中格画右半圆饱满闭合。",
    "cursiveUpper": "长竖带底翘，提笔自顶线向右顺画饱满圆弧包在中线上。",
    "cursiveLower": "基线向上冲至中线，笔直长坠入下格，反弹至中格画拱圆闭合，基线右出尾。",
    "pitfalls": "【占格区分】大写 P 坐在基线上（上中格）；小写 p 的竖必须刺入下格（中下格），圆肚在中格内！"
  },
  {
    "letter": "Q",
    "lower": "q",
    "sound": "/kwiːn/",
    "word": "Queen",
    "wordZh": "王后",
    "zone": "mid-lower",
    "zoneBadge": "大写上中格 · 小写中下格",
    "printUpper": "2笔：① 仿 O 画大椭圆；② 右下角向右下方斜插一根短尾巴。",
    "printLower": "1笔：中格逆时针画圆闭合，右侧笔直向下拉入下格，底部向右上方挑出短尖斜勾。",
    "cursiveUpper": "草书大写 Q 形状神似阿拉伯数字“2”，大头坐在顶线，底部顺滑画平卧波浪圈。",
    "cursiveLower": "中格圆圈闭合，笔直下冲至下格，在底部向右向后挑回基线连出引线。",
    "pitfalls": "【易混淆】小写 q 的尾巴在下格向【右上方】挑勾，不要和向【左上】弯的 g 或 p 搞混。"
  },
  {
    "letter": "R",
    "lower": "r",
    "sound": "/ɑːr/",
    "word": "Rain",
    "wordZh": "雨水",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "3笔：① 顶到底长竖；② 上格画半圆闭合中线；③ 从中点向右下踢出一条斜腿稳稳踏在基线。",
    "printLower": "1笔：中线到底线短竖，反弹至中线下方顺势向右画出平缓小树枝弧。",
    "cursiveUpper": "仿 P 长竖与上环，在中部回旋系小环，向右下甩出舒展长腿。",
    "cursiveLower": "【独特性状】基线斜提至中线形成小方肩或微折，平横一小段后再向下拉落基线甩出小勾！",
    "pitfalls": "草书小写 r 的形状与印刷体截然不同！它顶部有一个小平折台阶，千万不要写成连笔的 n 或 v。"
  },
  {
    "letter": "S",
    "lower": "s",
    "sound": "/es/",
    "word": "Sun",
    "wordZh": "太阳",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "1笔：顶线下方起笔，逆时针向上碰顶线画上弧，穿过中线向右画下弧稳踏基线向上收。",
    "printLower": "1笔：结构同大写，按比例严格缩在中格的四线三格中间，上下均不得出格。",
    "cursiveUpper": "从基线长斜向上直冲顶线转极小环，右侧大肚子贴回斜线，向左下收拢结扣。",
    "cursiveLower": "【独特草书】基线长斜线上挑至中线，右侧画饱满小鼓肚收回底线，在底部折回向右引出连写小尾。",
    "pitfalls": "草书小写 s 不是两道弯弯曲曲的蛇形，而是像一艘张帆的小船：先斜扬上桅杆，再右鼓圆腹折回。"
  },
  {
    "letter": "T",
    "lower": "t",
    "sound": "/tiː/",
    "word": "Tree",
    "wordZh": "大树",
    "zone": "upper-mid",
    "zoneBadge": "大写上中格 · 小写上中格",
    "printUpper": "2笔：① 顶线长横；② 横线正中央垂直直垂到基线。",
    "printLower": "2笔：① 顶线略下方起笔下拉到底线向右带出小弯勾；② 中线上横切画短横。",
    "cursiveUpper": "顶线画飘逸大波浪盖帽，中轴微带S形直落基线出小回勾。",
    "cursiveLower": "基线上扬冲入上格中段，顺原路下拉到底线出连写勾；最后在中线处横划一道短横。",
    "pitfalls": "小写 t 的横画在中线上（或略上方），起笔通常比顶线略低一点点，不要直接画成十字架。"
  },
  {
    "letter": "U",
    "lower": "u",
    "sound": "/juː/",
    "word": "Umbrella",
    "wordZh": "雨伞",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "1笔：顶线左直落到底线圆润兜底向上升起，直达顶线右侧。",
    "printLower": "1笔：中线直落圆滑兜底升到中线，紧接着顺势垂直向下拉回基线画出小立脚。",
    "cursiveUpper": "顶线小引笔顺下兜大底，升回顶线再下拉出连写小勾。",
    "cursiveLower": "基线上斜入中格，下坠兜底向右上拉，再垂直直落基线甩出优雅连写脚。",
    "pitfalls": "小写 u 右侧必须有一条明显的下拉立脚；如果没有立脚，容易和圆弧形的无脚容器混淆。"
  },
  {
    "letter": "V",
    "lower": "v",
    "sound": "/viː/",
    "word": "Voice",
    "wordZh": "嗓音",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "2笔：顶线左侧向右下直斜扎入基线尖点，立刻向右上锐利升起直达顶线右侧。",
    "printLower": "结构同大写，尺寸严格压缩在中格之内，底部必须是锐利的折角尖点。",
    "cursiveUpper": "顶线小环下斜至基线圆润折起，右上至顶线横出小回锋。",
    "cursiveLower": "基线上入中格，斜落底线柔和转折上扬至中线，【在中线高处横向出桥连写下一个字母】！",
    "pitfalls": "与连笔 o、w 相同，草书 v 在【中线顶端高位出桥连写】，绝对不能折回基线！"
  },
  {
    "letter": "W",
    "lower": "w",
    "sound": "/ˈwɔːtər/",
    "word": "Water",
    "wordZh": "水",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "4笔或1笔连折：由两个并排的尖锐 V 紧密组合而成，两底尖齐齐踏在基线上。",
    "printLower": "在中格内写两个紧凑的 v，底尖踏实基线，四个顶端全部与中线齐平。",
    "cursiveUpper": "顶端小浪花起笔，下垂连续画出两个优美的宽大波浪底，最后高位出锋。",
    "cursiveLower": "从中格画两个圆润连贯的 U 形底弧，末尾扬至中线处【高位横出小桥连写】！",
    "pitfalls": "草书 w 同样是【高位连写】字母！与连笔 v、o、b 并称四大顶端连笔核心字母。"
  },
  {
    "letter": "X",
    "lower": "x",
    "sound": "/eks/",
    "word": "Box",
    "wordZh": "盒子",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 小写中格",
    "printUpper": "2笔：① 左上到右下斜长线；② 右上到左下斜长线，两线正正交汇于中线上。",
    "printLower": "2笔：在中格内写对称交叉的两条小斜线，交叉点正居中格中央。",
    "cursiveUpper": "左半圆弧与右半圆弧背靠背交叠，首尾带流畅抛物弧。",
    "cursiveLower": "先画由基线冲上的弧背，再交叉一斜划，或一笔连画背靠背双反弧出尾。",
    "pitfalls": "两斜交叉点必须在中格正中间；注意不要画得太扁塌或过窄歪斜。"
  },
  {
    "letter": "Y",
    "lower": "y",
    "sound": "/ˈjeloʊ/",
    "word": "Yellow",
    "wordZh": "黄色",
    "zone": "mid-lower",
    "zoneBadge": "大写上中格 · 小写中下格",
    "printUpper": "3笔或2笔：在上格画一个小 V，底尖汇于中线正中央，随后垂直拉一根长腿稳立基线。",
    "printLower": "2笔或1笔：在中格写一个小 u 形，右边长笔画笔直向左下刺入下格，末端略微弯起或直收。",
    "cursiveUpper": "如同宽阔的 U 形上扬兜底后，长竖直贯入下格，底部向左上扬起大环圈。",
    "cursiveLower": "中格写圆润 u 形，顺势直落贯穿基线冲入下格深处，向左大幅回卷大环穿基线而出。",
    "pitfalls": "大写 Y 坐在基线上绝不下坠；而小写 y 的大长腿必须深深伸入下格，不要缩在中格变成小酒杯。"
  },
  {
    "letter": "Z",
    "lower": "z",
    "sound": "/zed/",
    "word": "Zoo",
    "wordZh": "动物园",
    "zone": "mid",
    "zoneBadge": "大写上中格 · 印刷小写中格 / 草书小写中下格",
    "printUpper": "1笔：顶线长横，向左下斜折直达基线，随即在基线上向右划出一条平齐底横。",
    "printLower": "1笔：在中格内完整复制大写 z 的走势，上下两条横线分别紧贴中线和基线。",
    "cursiveUpper": "顶浪横，中斜折回，基线处小回扣下坠冲入下格转大环尾。",
    "cursiveLower": "【特例·伸入下格】中格画小横折斜弧至基线，在中线下方打一个小结，随后长长坠入下格向左卷大回环连写！",
    "pitfalls": "注意草书的连笔 z 无论大小写，都带有伸入下格的长长环尾，外形极像汉字或者数字 3 加尾巴！"
  }
],
    cursiveRules: [
  {
    "id": "rule-slant",
    "title": "1. 规范倾斜与基线平坐 (Slant & Baseline)",
    "badge": "基础基石",
    "desc": "连笔草书（Cursive）的标准书写角度为向右前方倾斜约 60°~70°（即相对于垂直线约倾斜 15°~20°）。切忌后仰或角度忽大忽小。同时所有字母的脚部必须踏实落在基线（Baseline）上，就像人走在平地上一样。",
    "tip": "练习技巧：可以在四线三格纸上先用铅笔画几条 65° 的辅助斜线，引导自己的笔画保持恒定斜率。"
  },
  {
    "id": "rule-base-join",
    "title": "2. 底端连写 (Baseline Joins)",
    "badge": "最常用法则",
    "desc": "绝大多数小写字母（如 a, c, d, e, h, i, k, l, m, n, t, u, x）在基线上结束。它们的收笔自然向上扬起，正好成为下一个字母的起笔线（Lead-in stroke），一气呵成。",
    "example": "典型组合：in, at, the, he, me, and, cat, play",
    "tip": "书写时手腕放松，让底线收笔轻盈滑向中线，自然衔接下一个字母的身体。"
  },
  {
    "id": "rule-top-join",
    "title": "3. 高位横连 (Bridge / Top Joins)",
    "badge": "核心易错点 ★★★",
    "desc": "以小写字母 b, o, v, w 结尾时，它们的收笔停留在【中线附近的高位】！在连写下一个字母时，【直接从高位横向出桥】，千万不要掉回基线！如果掉回基线，o 会变成 a，v 会变成 u，造成严重误读！",
    "example": "典型组合：on, we, vi, oo, br, ou, good, sweet, over",
    "tip": "切记口诀：b、o、v、w 四大天王，头顶高位直接出桥横连，绝不下落基线！"
  },
  {
    "id": "rule-pen-lift",
    "title": "4. 提笔时机与后期打点 (Pen Lifts & Late Dots)",
    "badge": "流利节奏",
    "desc": "连续书写时，一个单词内部尽量一笔连贯完成。字母 i 和 j 的【小圆点】，以及字母 t 和 f 的【横线】，千万不要写到一半停下来去点或横！而是等到【整个单词连笔全部写完后】，最后再从左到右依次补齐打点和画横。",
    "example": "练习单词：little, flight, justice, action",
    "tip": "这叫“一气呵成，扫尾补划”，是让连笔书写速度倍增、笔触不突兀的秘诀。"
  }
],
    sampleWords: [
  {
    "word": "Hello",
    "zh": "你好",
    "tag": "日常问候",
    "desc": "高位大写 H 连小写 e-l-l-o，注意末尾 o 处在高位收笔。"
  },
  {
    "word": "English",
    "zh": "英语",
    "tag": "学习核心",
    "desc": "大写 E 开头，n-g-l-i-s-h 连贯流畅，注意 g 垂入下格，l 冲入上格。"
  },
  {
    "word": "beautiful",
    "zh": "美丽的",
    "tag": "经典长词",
    "desc": "b 高位横连 e，全词多处上冲下垂，练好连笔的极佳示范词。"
  },
  {
    "word": "friend",
    "zh": "朋友",
    "tag": "高频词汇",
    "desc": "f 占满三格，r 带独特微折台阶，i 在全词写完后再打点。"
  },
  {
    "word": "write",
    "zh": "书写",
    "tag": "动作",
    "desc": "w 顶端横连 r，r 接 i，t 在词末一划切过，轻快优雅。"
  },
  {
    "word": "welcome",
    "zh": "欢迎",
    "tag": "礼貌用语",
    "desc": "w 高位横连 e，l 冲顶，c-o-m-e 连贯，末尾 o 高位横连 m。"
  },
  {
    "word": "practice",
    "zh": "练习",
    "tag": "进阶提升",
    "desc": "p 扎入下格，r 台阶，a-c-t-i-c-e 连环相扣，末尾补 t 横与 i 点。"
  },
  {
    "word": "Sincerely",
    "zh": "真诚地 (书信署名)",
    "tag": "商务签名",
    "desc": "英文书信、邮件结尾署名最高频的花体礼貌套语。"
  }
],
    chinesePitfalls: [
  {
    "title": "1. 踩空与漂浮 (Floater / Sinking Letters)",
    "zh": "很多同学写英语字母没有基线意识，字母东倒西歪、忽上忽下像坐过山车。四线三格中的【第三条线——基线 Baseline】是地平线，每一个字母（除了垂入下格的尾巴）的脚部都必须稳稳贴在基线上。",
    "fix": "在脑海中树立“地基概念”，先确保所有字母底盘坐稳，再控制身高。"
  },
  {
    "title": "2. 中格字母大跃进 (Middle-Zone Overflow)",
    "zh": "小写字母 a, c, e, m, n, o, r, s, u, v, w, x, z 属于中格字母，必须严格收拢在中线与基线之间，高度绝对不能突破中线！如果 a 写得太大突破中线，会显得极不规范且容易被误认为大写。",
    "fix": "多在四线三格纸上练习把中格字母写得饱满匀称，头顶中线、脚踩基线。"
  },
  {
    "title": "3. 镜像混淆四兄弟 (b / d / p / q)",
    "zh": "中文汉字基本是对称方块，刚学英语字母很容易把这四个圆圈与竖线的组合搞混。",
    "fix": "记忆口诀：b 的大肚子在前面（右边），先长竖再画肚；d 的屁股在后面（左边），先画圆再从天而降长竖；p 是伸向地下的长腿（中下格），圆肚在右；q 的尾巴在下格向右上方踢脚。"
  },
  {
    "title": "4. 连写 o / v / w 时的“坠地错误” (Dropping the Bridge)",
    "zh": "写完 o, v, w 后习惯性地把笔尖落回基线去接下一个字母，导致 on 写成了 an，we 写成了 ue。",
    "fix": "牢记桥梁法则：b、o、v、w 是“悬崖式出口”，直接从空中搭桥通往下一座山头，绝不走下山谷！"
  }
]
  };

  // Helper methods for writing UI
  window.CN1_WRITING.getLetter = function(char) {
    var c = String(char).toUpperCase();
    return window.CN1_WRITING.letters.find(function(item) { return item.letter === c; }) || window.CN1_WRITING.letters[0];
  };


  /* ---------- Interactive Controller for Letter Writing & Cursive ---------- */
  function initWritingModule() {
    var section = document.getElementById("writing");
    if (!section) return;

    var W = window.CN1_WRITING;
    if (!W) return;

    var activeLetterChar = "A";
    var activeTraceText = "Aa";
    var traceFontMode = "cursive"; // 'cursive' or 'print'
    var isTraceEnabled = true;

    function speakText(text) {
      if (typeof window.CN1_SPEAK === "function") {
        window.CN1_SPEAK(text);
      } else if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        var u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US";
        u.rate = 0.85;
        window.speechSynthesis.speak(u);
      }
    }

    /* 1. Tab Switching */
    var tabs = section.querySelectorAll(".writing-tabs .tab-btn");
    var panels = section.querySelectorAll(".writing-tab-panel");

    function switchTab(tabId) {
      tabs.forEach(function(b) {
        var match = b.dataset.tab === tabId;
        b.classList.toggle("active", match);
        b.setAttribute("aria-selected", match ? "true" : "false");
      });
      panels.forEach(function(p) {
        var match = p.id === "panel-" + tabId;
        p.classList.toggle("active", match);
        if (match) {
          p.removeAttribute("hidden");
        } else {
          p.setAttribute("hidden", "hidden");
        }
      });
      if (tabId === "canvas") {
        setTimeout(function() { resizeCanvas(); redrawCanvas(); }, 60);
      }
    }

    tabs.forEach(function(b) {
      b.addEventListener("click", function() {
        switchTab(b.dataset.tab);
      });
    });

    /* 2. TAB 1: Letters Explorer */
    var picker = document.getElementById("letter-picker");
    var cardContainer = document.getElementById("letter-card");

    function renderPicker() {
      if (!picker) return;
      picker.innerHTML = "";
      W.letters.forEach(function(item) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "letter-btn" + (item.letter === activeLetterChar ? " active" : "");
        btn.setAttribute("aria-label", "Letter " + item.letter);
        btn.innerHTML = '<b>' + item.letter + '</b><small>' + item.lower + '</small>';
        btn.addEventListener("click", function() {
          activeLetterChar = item.letter;
          updateActiveLetter();
        });
        picker.appendChild(btn);
      });
    }

    function updateActiveLetter() {
      var item = W.getLetter(activeLetterChar);
      if (!item) return;

      // Update active state in picker
      if (picker) {
        picker.querySelectorAll(".letter-btn").forEach(function(btn) {
          btn.classList.toggle("active", btn.querySelector("b").textContent === activeLetterChar);
        });
      }

      if (!cardContainer) return;

      cardContainer.innerHTML = [
        '<div class="letter-stage">',
        '  <div class="stage-fourline" aria-label="Four-line three-space guideline">',
        '    <span class="line-label line-top">顶线 Top</span>',
        '    <span class="line-label line-mid">中线 Mid</span>',
        '    <span class="line-label line-base">基线 Base</span>',
        '    <span class="line-label line-bot">底线 Bottom</span>',
        '    <div class="line-guide line-1"></div>',
        '    <div class="line-guide line-2 dashed"></div>',
        '    <div class="line-guide line-3 solid-base"></div>',
        '    <div class="line-guide line-4"></div>',
        '    <div class="stage-letters-row">',
        '      <div class="letter-sample-col">',
        '        <span class="sample-tag">规范印刷体 Print</span>',
        '        <div class="sample-char print-font">' + item.letter + ' ' + item.lower + '</div>',
        '      </div>',
        '      <div class="letter-sample-col">',
        '        <span class="sample-tag sample-tag-cursive">连笔草书 Cursive</span>',
        '        <div class="sample-char cursive-font">' + item.letter + ' ' + item.lower + '</div>',
        '      </div>',
        '    </div>',
        '  </div>',
        '  <div class="stage-actions">',
        '    <button type="button" class="btn btn-sm btn-speak" id="btn-speak-letter">',
        '      <svg viewBox="0 0 24 24" class="icon"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>',
        '      朗读字母与例词 · ' + item.letter + ' for ' + item.word,
        '    </button>',
        '    <button type="button" class="btn btn-sm btn-ghost" id="btn-trace-letter">',
        '      ✍ 在画板临摹这个字母 · Trace in Canvas',
        '    </button>',
        '  </div>',
        '</div>',
        '<div class="letter-details">',
        '  <div class="detail-header">',
        '    <h3>Letter ' + item.letter + ' ' + item.lower + '</h3>',
        '    <span class="zone-badge">' + item.zoneBadge + '</span>',
        '    <span class="ipa-badge">' + item.sound + ' · ' + item.word + ' (' + item.wordZh + ')</span>',
        '  </div>',
        '  <div class="stroke-grid">',
        '    <div class="stroke-box">',
        '      <h4><span class="dot-indicator dot-print"></span>规范印刷体笔顺 (Print Strokes)</h4>',
        '      <p><b>大写 ' + item.letter + '：</b>' + item.printUpper + '</p>',
        '      <p><b>小写 ' + item.lower + '：</b>' + item.printLower + '</p>',
        '    </div>',
        '    <div class="stroke-box">',
        '      <h4><span class="dot-indicator dot-cursive"></span>连笔草书要诀 (Cursive Flow)</h4>',
        '      <p><b>大写起落：</b>' + item.cursiveUpper + '</p>',
        '      <p><b>小写连缀：</b>' + item.cursiveLower + '</p>',
        '    </div>',
        '  </div>',
        '  <div class="pitfall-box">',
        '    <span class="pitfall-icon">⚠️</span>',
        '    <div>',
        '      <b>中文学习者避坑秘籍：</b>' + item.pitfalls,
        '    </div>',
        '  </div>',
        '</div>'
      ].join("\n");

      var speakBtn = document.getElementById("btn-speak-letter");
      if (speakBtn) {
        speakBtn.addEventListener("click", function() {
          speakText(item.letter + ". " + item.word);
        });
      }

      var traceBtn = document.getElementById("btn-trace-letter");
      if (traceBtn) {
        traceBtn.addEventListener("click", function() {
          activeTraceText = item.letter + item.lower;
          var traceSelect = document.getElementById("canvas-trace-select");
          if (traceSelect) {
            traceSelect.value = item.letter;
          }
          switchTab("canvas");
        });
      }
    }

    /* 3. TAB 2: Cursive Rules & Word Gallery */
    function renderCursiveSection() {
      var rulesContainer = document.getElementById("cursive-rules-grid");
      if (rulesContainer) {
        rulesContainer.innerHTML = W.cursiveRules.map(function(r) {
          return [
            '<div class="cursive-rule-card">',
            '  <div class="rule-head">',
            '    <span class="rule-badge">' + r.badge + '</span>',
            '    <h4>' + r.title + '</h4>',
            '  </div>',
            '  <p class="rule-desc">' + r.desc + '</p>',
            r.example ? '  <p class="rule-example"><b>实例：</b><code>' + r.example + '</code></p>' : '',
            '  <p class="rule-tip">💡 ' + r.tip + '</p>',
            '</div>'
          ].join("\n");
        }).join("\n");
      }

      var wordsContainer = document.getElementById("cursive-words-grid");
      if (wordsContainer) {
        wordsContainer.innerHTML = W.sampleWords.map(function(w) {
          return [
            '<div class="cursive-word-card">',
            '  <div class="word-card-top">',
            '    <span class="word-tag">' + w.tag + '</span>',
            '    <button type="button" class="btn-icon-speak" data-word="' + w.word + '" title="听发音">',
            '      <svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>',
            '    </button>',
            '  </div>',
            '  <div class="cursive-word-preview cursive-font">' + w.word + '</div>',
            '  <p class="word-translation"><b>' + w.word + '</b> · ' + w.zh + '</p>',
            '  <p class="word-desc">' + w.desc + '</p>',
            '  <button type="button" class="btn btn-sm btn-ghost btn-word-trace" data-word="' + w.word + '">✍ 在画板临摹</button>',
            '</div>'
          ].join("\n");
        }).join("\n");

        wordsContainer.querySelectorAll(".btn-icon-speak").forEach(function(btn) {
          btn.addEventListener("click", function() {
            speakText(btn.dataset.word);
          });
        });

        wordsContainer.querySelectorAll(".btn-word-trace").forEach(function(btn) {
          btn.addEventListener("click", function() {
            activeTraceText = btn.dataset.word;
            traceFontMode = "cursive";
            var modeBtn = document.getElementById("canvas-font-mode");
            if (modeBtn) modeBtn.textContent = "字体: 连笔草书";
            var traceSelect = document.getElementById("canvas-trace-select");
            if (traceSelect) traceSelect.value = "custom";
            switchTab("canvas");
          });
        });
      }
    }

    /* 4. TAB 3: Common Pitfalls */
    function renderPitfallsSection() {
      var grid = document.getElementById("pitfalls-grid");
      if (grid) {
        grid.innerHTML = W.chinesePitfalls.map(function(p, i) {
          return [
            '<div class="pitfall-card">',
            '  <div class="pitfall-card-num">0' + (i + 1) + '</div>',
            '  <h4>' + p.title + '</h4>',
            '  <p class="pitfall-explain">' + p.zh + '</p>',
            '  <div class="pitfall-fix">',
            '    <b>✅ 破解之道：</b>' + p.fix,
            '  </div>',
            '</div>'
          ].join("\n");
        }).join("\n");
      }
    }

    /* 5. TAB 4: Interactive Canvas */
    var canvas = document.getElementById("practice-canvas");
    var ctx = canvas ? canvas.getContext("2d") : null;
    var isDrawing = false;
    var currentColor = "#18181b";
    var currentSize = 4;
    var strokes = []; // Array of strokes: [ { color, size, points: [ {x, y} ] } ]
    var currentStroke = null;

    function populateTraceSelect() {
      var sel = document.getElementById("canvas-trace-select");
      if (!sel) return;
      sel.innerHTML = "";
      
      var optGroupLetters = document.createElement("optgroup");
      optGroupLetters.label = "26个字母 A–Z";
      W.letters.forEach(function(item) {
        var opt = document.createElement("option");
        opt.value = item.letter;
        opt.textContent = item.letter + " " + item.lower + " (" + item.word + ")";
        if (item.letter === activeLetterChar) opt.selected = true;
        optGroupLetters.appendChild(opt);
      });
      sel.appendChild(optGroupLetters);

      var optGroupWords = document.createElement("optgroup");
      optGroupWords.label = "高频连笔词汇";
      W.sampleWords.forEach(function(item) {
        var opt = document.createElement("option");
        opt.value = "word:" + item.word;
        opt.textContent = item.word + " (" + item.zh + ")";
        optGroupWords.appendChild(opt);
      });
      sel.appendChild(optGroupWords);

      sel.addEventListener("change", function() {
        if (sel.value.indexOf("word:") === 0) {
          activeTraceText = sel.value.replace("word:", "");
          traceFontMode = "cursive";
          var modeBtn = document.getElementById("canvas-font-mode");
          if (modeBtn) modeBtn.textContent = "字体: 连笔草书";
        } else {
          var char = sel.value;
          activeLetterChar = char;
          activeTraceText = char + char.toLowerCase();
        }
        redrawCanvas();
      });
    }

    function resizeCanvas() {
      if (!canvas) return;
      var rect = canvas.getBoundingClientRect();
      var dpr = window.devicePixelRatio || 1;
      var w = rect.width || 900;
      var h = 380;
      
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    }

    function drawFourLineGuidelines(targetCtx, w, h) {
      // Draw 2 rows of 4-line 3-space guides
      var rows = 2;
      var rowH = h / rows;

      targetCtx.save();
      for (var r = 0; r < rows; r++) {
        var yTop = r * rowH + rowH * 0.16;
        var yMid = yTop + rowH * 0.24;
        var yBase = yMid + rowH * 0.24;
        var yBot = yBase + rowH * 0.24;

        // Space fills (subtle shading for middle zone)
        targetCtx.fillStyle = "rgba(184, 50, 42, 0.04)";
        targetCtx.fillRect(0, yMid, w, yBase - yMid);

        // Line 1: Top line (solid light)
        targetCtx.strokeStyle = "rgba(140, 140, 150, 0.4)";
        targetCtx.lineWidth = 1;
        targetCtx.setLineDash([]);
        targetCtx.beginPath();
        targetCtx.moveTo(0, yTop); targetCtx.lineTo(w, yTop);
        targetCtx.stroke();

        // Line 2: Mid line (dashed)
        targetCtx.strokeStyle = "rgba(140, 140, 150, 0.6)";
        targetCtx.setLineDash([6, 6]);
        targetCtx.beginPath();
        targetCtx.moveTo(0, yMid); targetCtx.lineTo(w, yMid);
        targetCtx.stroke();

        // Line 3: Baseline (solid accent red/dark)
        targetCtx.strokeStyle = "rgba(184, 50, 42, 0.75)";
        targetCtx.lineWidth = 1.8;
        targetCtx.setLineDash([]);
        targetCtx.beginPath();
        targetCtx.moveTo(0, yBase); targetCtx.lineTo(w, yBase);
        targetCtx.stroke();

        // Line 4: Bottom line (solid light)
        targetCtx.strokeStyle = "rgba(140, 140, 150, 0.4)";
        targetCtx.lineWidth = 1;
        targetCtx.beginPath();
        targetCtx.moveTo(0, yBot); targetCtx.lineTo(w, yBot);
        targetCtx.stroke();

        // Draw slant guide marks (65 degrees)
        targetCtx.strokeStyle = "rgba(140, 140, 150, 0.12)";
        targetCtx.lineWidth = 0.8;
        targetCtx.setLineDash([4, 6]);
        var slantGap = 120;
        for (var sx = 40; sx < w; sx += slantGap) {
          targetCtx.beginPath();
          var dx = (yBot - yTop) * 0.45; // ~66 degree slant
          targetCtx.moveTo(sx + dx, yTop);
          targetCtx.lineTo(sx, yBot);
          targetCtx.stroke();
        }
      }
      targetCtx.restore();
    }

    function drawTraceWatermark(targetCtx, w, h) {
      if (!isTraceEnabled || !activeTraceText) return;

      targetCtx.save();
      var rows = 2;
      var rowH = h / rows;

      for (var r = 0; r < rows; r++) {
        var yBase = r * rowH + rowH * 0.16 + rowH * 0.48; // Baseline Y
        
        targetCtx.textAlign = "left";
        targetCtx.textBaseline = "alphabetic";
        
        if (traceFontMode === "cursive") {
          targetCtx.font = "italic 700 " + Math.round(rowH * 0.52) + "px 'Caveat', 'Dancing Script', 'Edu SA Beginner', cursive";
        } else {
          targetCtx.font = "600 " + Math.round(rowH * 0.46) + "px 'Edu SA Beginner', 'Noto Sans SC', sans-serif";
        }

        // Multiple repetitions along the width
        var textToDraw = activeTraceText;
        var startX = 60;
        var stepX = Math.max(targetCtx.measureText(textToDraw).width + 70, 140);
        
        targetCtx.fillStyle = "rgba(184, 50, 42, 0.22)";
        for (var x = startX; x < w - 60; x += stepX) {
          targetCtx.fillText(textToDraw, x, yBase);
        }
      }
      targetCtx.restore();
    }

    function redrawCanvas() {
      if (!canvas || !ctx) return;
      var rect = canvas.getBoundingClientRect();
      var w = rect.width || 900;
      var h = 380;

      ctx.clearRect(0, 0, w, h);

      // Background paper color
      var isDark = document.documentElement.getAttribute("data-theme") === "dark";
      ctx.fillStyle = isDark ? "#1f1f23" : "#faf8f5";
      ctx.fillRect(0, 0, w, h);

      // 1. Draw 4-line 3-space guides
      drawFourLineGuidelines(ctx, w, h);

      // 2. Draw watermark trace
      drawTraceWatermark(ctx, w, h);

      // 3. Draw user's drawn strokes
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      strokes.forEach(function(stroke) {
        if (!stroke.points || stroke.points.length === 0) return;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.size;
        
        if (stroke.points.length === 1) {
          ctx.beginPath();
          ctx.arc(stroke.points[0].x, stroke.points[0].y, stroke.size / 2, 0, Math.PI * 2);
          ctx.fillStyle = stroke.color;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
          for (var i = 1; i < stroke.points.length - 1; i++) {
            var midX = (stroke.points[i].x + stroke.points[i + 1].x) / 2;
            var midY = (stroke.points[i].y + stroke.points[i + 1].y) / 2;
            ctx.quadraticCurveTo(stroke.points[i].x, stroke.points[i].y, midX, midY);
          }
          ctx.lineTo(stroke.points[stroke.points.length - 1].x, stroke.points[stroke.points.length - 1].y);
          ctx.stroke();
        }
      });
      ctx.restore();
    }

    function getCanvasPos(e) {
      var rect = canvas.getBoundingClientRect();
      var clientX = e.clientX;
      var clientY = e.clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    }

    if (canvas) {
      function startDraw(e) {
        e.preventDefault();
        isDrawing = true;
        var pos = getCanvasPos(e);
        currentStroke = {
          color: currentColor,
          size: currentSize,
          points: [pos]
        };
        strokes.push(currentStroke);
        redrawCanvas();
      }

      function moveDraw(e) {
        if (!isDrawing || !currentStroke) return;
        e.preventDefault();
        var pos = getCanvasPos(e);
        currentStroke.points.push(pos);
        redrawCanvas();
      }

      function endDraw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        isDrawing = false;
        currentStroke = null;
      }

      canvas.addEventListener("pointerdown", startDraw);
      canvas.addEventListener("pointermove", moveDraw);
      window.addEventListener("pointerup", endDraw);
      window.addEventListener("pointercancel", endDraw);

      // Color swatches
      var swatchContainer = document.getElementById("color-swatches");
      if (swatchContainer) {
        swatchContainer.querySelectorAll(".color-btn").forEach(function(b) {
          b.addEventListener("click", function() {
            swatchContainer.querySelectorAll(".color-btn").forEach(function(x) { x.classList.remove("active"); });
            b.classList.add("active");
            currentColor = b.dataset.color;
          });
        });
      }

      // Pen size slider
      var sizeSlider = document.getElementById("pen-size");
      if (sizeSlider) {
        sizeSlider.addEventListener("input", function() {
          currentSize = parseInt(sizeSlider.value, 10) || 4;
        });
      }

      // Undo button
      var undoBtn = document.getElementById("canvas-undo");
      if (undoBtn) {
        undoBtn.addEventListener("click", function() {
          if (strokes.length > 0) {
            strokes.pop();
            redrawCanvas();
          }
        });
      }

      // Clear button
      var clearBtn = document.getElementById("canvas-clear");
      if (clearBtn) {
        clearBtn.addEventListener("click", function() {
          strokes = [];
          redrawCanvas();
        });
      }

      // Toggle Trace
      var toggleTraceBtn = document.getElementById("canvas-toggle-trace");
      if (toggleTraceBtn) {
        toggleTraceBtn.addEventListener("click", function() {
          isTraceEnabled = !isTraceEnabled;
          toggleTraceBtn.textContent = "描红底样: " + (isTraceEnabled ? "开" : "关");
          toggleTraceBtn.classList.toggle("active", isTraceEnabled);
          redrawCanvas();
        });
      }

      // Font Mode (Print vs Cursive)
      var fontModeBtn = document.getElementById("canvas-font-mode");
      if (fontModeBtn) {
        fontModeBtn.addEventListener("click", function() {
          traceFontMode = traceFontMode === "cursive" ? "print" : "cursive";
          fontModeBtn.textContent = "字体: " + (traceFontMode === "cursive" ? "连笔草书" : "规范印刷体");
          redrawCanvas();
        });
      }

      // Save as PNG image
      var saveBtn = document.getElementById("canvas-save");
      if (saveBtn) {
        saveBtn.addEventListener("click", function() {
          // Export high resolution image
          var exportCanvas = document.createElement("canvas");
          exportCanvas.width = 1600;
          exportCanvas.height = 700;
          var expCtx = exportCanvas.getContext("2d");
          
          // White paper background
          expCtx.fillStyle = "#ffffff";
          expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

          // Draw guidelines and watermark
          drawFourLineGuidelines(expCtx, exportCanvas.width, exportCanvas.height);
          drawTraceWatermark(expCtx, exportCanvas.width, exportCanvas.height);

          // Scale and draw strokes
          var rect = canvas.getBoundingClientRect();
          var scaleX = exportCanvas.width / (rect.width || 900);
          var scaleY = exportCanvas.height / 380;

          expCtx.save();
          expCtx.lineCap = "round";
          expCtx.lineJoin = "round";
          strokes.forEach(function(stroke) {
            if (!stroke.points || stroke.points.length === 0) return;
            expCtx.strokeStyle = stroke.color;
            expCtx.lineWidth = stroke.size * scaleX;
            expCtx.beginPath();
            expCtx.moveTo(stroke.points[0].x * scaleX, stroke.points[0].y * scaleY);
            for (var i = 1; i < stroke.points.length - 1; i++) {
              var midX = (stroke.points[i].x + stroke.points[i + 1].x) / 2 * scaleX;
              var midY = (stroke.points[i].y + stroke.points[i + 1].y) / 2 * scaleY;
              expCtx.quadraticCurveTo(stroke.points[i].x * scaleX, stroke.points[i].y * scaleY, midX, midY);
            }
            expCtx.lineTo(stroke.points[stroke.points.length - 1].x * scaleX, stroke.points[stroke.points.length - 1].y * scaleY);
            expCtx.stroke();
          });
          expCtx.restore();

          // Title watermark on export
          expCtx.fillStyle = "#888888";
          expCtx.font = "bold 20px 'General Sans', sans-serif";
          expCtx.fillText("CNn1English · 英语规范书写与连笔临摹练字纸", 30, 40);

          var link = document.createElement("a");
          link.download = "CNn1English-Handwriting-" + (activeTraceText || "Practice") + ".png";
          link.href = exportCanvas.toDataURL("image/png");
          link.click();
        });
      }

      window.addEventListener("resize", function() {
        resizeCanvas();
        redrawCanvas();
      });
    }

    // Initialize all sub-components
    renderPicker();
    updateActiveLetter();
    renderCursiveSection();
    renderPitfallsSection();
    populateTraceSelect();
    resizeCanvas();
    redrawCanvas();
  }

  // Hook into DOMContentLoaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWritingModule);
  } else {
    initWritingModule();
  }

})();
