(function () {
  "use strict";
  var D = window.CN1;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg>';

  /* ---------- Speech ---------- */
  var lang = "en-US";
  var rateInput = $("#rate");
  function pickVoice() {
    if (!("speechSynthesis" in window)) return null;
    var voices = speechSynthesis.getVoices();
    return voices.find(function (v) { return v.lang === lang; }) ||
           voices.find(function (v) { return v.lang && v.lang.indexOf("en") === 0; }) || null;
  }
  function speak(text) {
    if (!("speechSynthesis" in window)) {
      showToast("你的浏览器不支持朗读 · Speech isn't supported in this browser");
      return;
    }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/\(.*?\)/g, "").split(" / ")[0]);
    u.lang = lang;
    u.rate = parseFloat(rateInput ? rateInput.value : 0.9);
    var v = pickVoice();
    if (v) u.voice = v;
    speechSynthesis.speak(u);
  }
  if ("speechSynthesis" in window) speechSynthesis.onvoiceschanged = function () {};

  document.querySelectorAll(".accent-toggle [data-lang]").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.dataset.lang;
      document.querySelectorAll(".accent-toggle [data-lang]").forEach(function (x) {
        x.setAttribute("aria-checked", x === b ? "true" : "false");
      });
    });
  });

  var toast;
  function showToast(msg) {
    if (!toast) { toast = el("div", "toast"); toast.setAttribute("role", "status"); document.body.appendChild(toast); }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toast.classList.remove("show"); }, 2600);
  }

  /* ---------- Word of the day ---------- */
  var day = Math.floor(Date.now() / 86400000);
  var w = D.words[day % D.words.length];
  $("#wotd-word").textContent = w.w;
  $("#wotd-ipa").textContent = w.ipa;
  $("#wotd-zh").textContent = w.zh;
  $("#wotd-ex").textContent = "“" + w.ex + "”";
  $("#wotd-speak").addEventListener("click", function () { speak(w.w + ". " + w.ex); });

  /* ---------- Sounds ---------- */
  var grid = $("#sound-grid");
  D.sounds.forEach(function (s) {
    var c = el("article", "sound");
    var pairs = s.pairs.map(function (p) {
      return '<li><button type="button" class="word" data-say="' + esc(p[0]) + '">' + esc(p[0]) +
        '</button><span class="vs">vs</span><button type="button" class="word" data-say="' + esc(p[1]) + '">' + esc(p[1]) + "</button></li>";
    }).join("");
    c.innerHTML =
      '<div class="sound-head"><h3>' + esc(s.title) + '</h3><span class="ipa">' + esc(s.ipa) + "</span></div>" +
      '<p class="sound-zh">' + esc(s.zh) + "</p>" +
      '<p class="sound-en">' + esc(s.en) + "</p>" +
      '<ul class="pairs">' + pairs + "</ul>";
    grid.appendChild(c);
  });
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-say]");
    if (!t) return;
    e.stopPropagation();
    speak(t.dataset.say);
    t.classList.add("ping");
    setTimeout(function () { t.classList.remove("ping"); }, 400);
  });

  /* ---------- Phrase cards ---------- */
  var tabs = $("#phrase-tabs"), cards = $("#phrase-cards");
  var cats = Object.keys(D.phrases);
  function renderCards(cat) {
    cards.innerHTML = "";
    D.phrases[cat].forEach(function (p) {
      var c = el("div", "flip");
      c.innerHTML =
        '<button type="button" class="flip-inner" aria-label="' + esc(p[0]) + ' — 翻开 flip">' +
          '<span class="face front"><span class="face-tag">中文</span><span class="face-text zh-text">' + esc(p[0]) + '</span><span class="face-hint">点击翻开 · Tap to flip</span></span>' +
          '<span class="face back"><span class="face-tag">English</span><span class="face-text">' + esc(p[1]) + "</span></span>" +
        "</button>" +
        '<button type="button" class="speak mini" data-say="' + esc(p[1]) + '" aria-label="Listen: ' + esc(p[1]) + '">' + ICON + "</button>";
      c.querySelector(".flip-inner").addEventListener("click", function () {
        c.classList.toggle("flipped");
        if (c.classList.contains("flipped")) speak(p[1]);
      });
      cards.appendChild(c);
    });
  }
  cats.forEach(function (cat, i) {
    var b = el("button", "tab", esc(cat));
    b.type = "button";
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", i === 0 ? "true" : "false");
    b.addEventListener("click", function () {
      tabs.querySelectorAll(".tab").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      renderCards(cat);
    });
    tabs.appendChild(b);
  });
  renderCards(cats[0]);

  /* ---------- Grammar ---------- */
  var gl = $("#grammar-list");
  D.grammar.forEach(function (g, i) {
    var d = el("details", "g-item");
    if (i === 0) d.open = true;
    d.innerHTML =
      '<summary><span class="g-num">' + String(i + 1).padStart(2, "0") + '</span><span class="g-title">' + esc(g.t) +
      '<small>' + esc(g.e) + '</small></span><span class="g-plus" aria-hidden="true"></span></summary>' +
      '<div class="g-body"><p>' + esc(g.zh) + "</p>" +
      '<div class="compare"><p class="bad"><b>✗</b> ' + esc(g.wrong) + '</p>' +
      '<p class="good"><b>✓</b> ' + esc(g.right) +
      ' <button type="button" class="speak mini" data-say="' + esc(g.right) + '" aria-label="Listen">' + ICON + "</button></p></div></div>";
    gl.appendChild(d);
  });

  /* ---------- Fixes ---------- */
  var fl = $("#fix-list");
  D.fixes.forEach(function (f) {
    var r = el("div", "fix");
    r.innerHTML =
      '<p class="fix-bad"><span>✗</span>' + esc(f[0]) + "</p>" +
      '<p class="fix-good"><span>✓</span>' + esc(f[1]) +
      ' <button type="button" class="speak mini light" data-say="' + esc(f[1]) + '" aria-label="Listen">' + ICON + "</button></p>" +
      '<p class="fix-why">' + esc(f[2]) + "</p>";
    fl.appendChild(r);
  });

  /* ---------- Quiz ---------- */
  var qi = 0, score = 0, answered = false;
  var Q = D.quiz;
  var qEl = $("#quiz-q"), oEl = $("#quiz-options"), xEl = $("#quiz-explain"), nEl = $("#quiz-next");
  function renderQ() {
    answered = false;
    var q = Q[qi];
    $("#quiz-progress").textContent = "第 " + (qi + 1) + " 题 / " + Q.length;
    $("#quiz-score").textContent = "得分 Score: " + score;
    $("#quiz-bar").style.width = (qi / Q.length * 100) + "%";
    qEl.textContent = q.q;
    oEl.innerHTML = "";
    xEl.hidden = true; nEl.hidden = true;
    var order = q.o.map(function (_, i) { return i; });
    for (var k = order.length - 1; k > 0; k--) { var r = Math.floor(Math.random() * (k + 1)); var t = order[k]; order[k] = order[r]; order[r] = t; }
    order.forEach(function (i, pos) {
      var o = q.o[i];
      var b = el("button", "opt", '<span class="opt-key">' + "ABC"[pos] + "</span>" + esc(o));
      b.type = "button";
      b.dataset.idx = i;
      b.addEventListener("click", function () { choose(i, b); });
      oEl.appendChild(b);
    });
  }
  function choose(i, b) {
    if (answered) return;
    answered = true;
    var q = Q[qi];
    var btns = oEl.querySelectorAll(".opt");
    btns.forEach(function (x) {
      x.disabled = true;
      if (+x.dataset.idx === q.a) x.classList.add("correct");
    });
    if (i === q.a) { score++; xEl.className = "quiz-explain ok"; xEl.innerHTML = "<b>正确 Correct！</b> " + esc(q.x); }
    else { b.classList.add("wrong"); xEl.className = "quiz-explain no"; xEl.innerHTML = "<b>再想想 Not quite.</b> " + esc(q.x); }
    $("#quiz-score").textContent = "得分 Score: " + score;
    xEl.hidden = false;
    nEl.hidden = false;
    nEl.textContent = qi === Q.length - 1 ? "查看结果 See result" : "下一题 Next";
    nEl.focus({ preventScroll: true });
  }
  function finish() {
    $("#quiz-bar").style.width = "100%";
    $("#quiz-progress").textContent = "完成 Done";
    var pct = score / Q.length;
    var msg = pct === 1 ? "太棒了！满分。Perfect score!" : pct >= 0.7 ? "很好！继续加油。Great work — keep going!" : "不错的开始，再复习一下上面的内容吧。A good start — review the sections above and try again.";
    qEl.textContent = "你答对了 " + score + " / " + Q.length + " 题";
    oEl.innerHTML = '<p class="quiz-final">' + esc(msg) + "</p>";
    xEl.hidden = true;
    nEl.textContent = "再做一次 Try again";
    nEl.hidden = false;
    qi = -1;
  }
  nEl.addEventListener("click", function () {
    if (qi === -1) { qi = 0; score = 0; renderQ(); return; }
    if (qi === Q.length - 1) { finish(); return; }
    qi++; renderQ();
  });
  renderQ();
})();
