(function () {
  "use strict";
  var D = window.CN1;
  var L = window.CN1_LESSONS || {};
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

  /* ---------- Theme (Dark / Light Mode) ---------- */
  (function themeController() {
    var toggleBtns = document.querySelectorAll(".theme-toggle");

    function getTheme() {
      return document.documentElement.getAttribute("data-theme") || "light";
    }

    function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("cn1_theme", theme); } catch (e) {}
      toggleBtns.forEach(function (btn) {
        var isDark = theme === "dark";
        btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        btn.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
        var textEl = btn.querySelector(".theme-toggle-text");
        if (textEl) textEl.textContent = isDark ? "Light" : "Dark";
      });
    }

    toggleBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = getTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
      });
    });

    // Sync initial UI
    applyTheme(getTheme());

    // Listen for OS scheme changes if user hasn't set an explicit preference
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
        try {
          if (!localStorage.getItem("cn1_theme")) {
            applyTheme(e.matches ? "dark" : "light");
          }
        } catch (err) {}
      });
    }
  })();

  /* ---------- Speech ---------- */
  var lang = "en-US";
  var rateInput = $("#rate");
  function pickVoice() {
    if (!("speechSynthesis" in window)) return null;
    var voices = speechSynthesis.getVoices();
    return voices.find(function (v) { return v.lang === lang; }) ||
           voices.find(function (v) { return v.lang && v.lang.indexOf("en") === 0; }) || null;
  }
  function speak(text, onEnd, customRate) {
    if (!("speechSynthesis" in window)) {
      showToast("你的浏览器不支持朗读 · Speech isn't supported in this browser");
      if (onEnd) onEnd();
      return;
    }
    speechSynthesis.cancel();
    var clean = text.replace(/\(.*?\)/g, "").split(" / ")[0];
    var u = new SpeechSynthesisUtterance(clean);
    u.lang = lang;
    u.rate = customRate != null ? customRate : parseFloat(rateInput ? rateInput.value : 0.9);
    var v = pickVoice();
    if (v) u.voice = v;
    if (onEnd) {
      u.onend = onEnd;
      u.onerror = onEnd;
    }
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

  /* ---------- Quiz & Mistake Notebook ---------- */
  (function quizModule() {
    var rawQuiz = D.quiz || [];
    var qEl = $("#quiz-q"), oEl = $("#quiz-options"), xEl = $("#quiz-explain");
    var nEl = $("#quiz-next"), removeMistakeBtn = $("#quiz-remove-mistake");
    var progressEl = $("#quiz-progress"), scoreEl = $("#quiz-score"), barEl = $("#quiz-bar");
    var modeLabelEl = $("#quiz-mode-label"), mistakesCountEl = $("#quiz-mistakes-count");
    var modeBtns = document.querySelectorAll(".quiz-mode-bar .mode-btn");

    var currentMode = "standard"; // standard | all | mistakes
    var Q = [];
    var qi = 0, score = 0, answered = false;

    // Helper: LocalStorage Mistakes Management
    function getMistakes() {
      try {
        var m = localStorage.getItem("cn1_mistakes");
        return m ? JSON.parse(m) : [];
      } catch (e) {
        return [];
      }
    }

    function saveMistake(q) {
      if (!q || !q.q) return;
      var list = getMistakes();
      var exists = list.some(function (item) { return item.q === q.q; });
      if (!exists) {
        list.push(q);
        try { localStorage.setItem("cn1_mistakes", JSON.stringify(list)); } catch (e) {}
      }
      updateMistakesCount();
    }

    function removeMistake(questionText) {
      var list = getMistakes();
      list = list.filter(function (item) { return item.q !== questionText; });
      try { localStorage.setItem("cn1_mistakes", JSON.stringify(list)); } catch (e) {}
      updateMistakesCount();
    }

    function updateMistakesCount() {
      var count = getMistakes().length;
      if (mistakesCountEl) mistakesCountEl.textContent = count;
    }
    updateMistakesCount();

    function prepareQuestions(mode) {
      if (mode === "mistakes") {
        return getMistakes().slice();
      }
      if (mode === "all") {
        return rawQuiz.slice();
      }
      // standard: 10 random questions
      var pool = rawQuiz.slice();
      for (var k = pool.length - 1; k > 0; k--) {
        var r = Math.floor(Math.random() * (k + 1));
        var temp = pool[k]; pool[k] = pool[r]; pool[r] = temp;
      }
      return pool.slice(0, 10);
    }

    function startQuiz(mode) {
      currentMode = mode || "standard";
      modeBtns.forEach(function (b) {
        b.classList.toggle("active", b.dataset.mode === currentMode);
      });

      Q = prepareQuestions(currentMode);
      qi = 0;
      score = 0;

      if (modeLabelEl) {
        if (currentMode === "mistakes") modeLabelEl.textContent = "错题复习 Review";
        else if (currentMode === "all") modeLabelEl.textContent = "全量测验 (36题) All";
        else modeLabelEl.textContent = "随机 10 题 Random 10";
      }

      if (currentMode === "mistakes" && Q.length === 0) {
        renderEmptyMistakes();
        return;
      }

      renderQ();
    }

    function renderEmptyMistakes() {
      if (progressEl) progressEl.textContent = "错题本空空如也";
      if (scoreEl) scoreEl.textContent = "";
      if (barEl) barEl.style.width = "0%";
      qEl.textContent = "🎉 没有任何错题记录！";
      oEl.innerHTML = '<div class="quiz-empty-box"><p>太棒了！你的错题本目前是空的。<br>在普通测验中做错的题目会自动记录在这里供你复习。</p></div>';
      xEl.hidden = true;
      nEl.hidden = false;
      nEl.textContent = "开始随机测验 Start Quiz";
      if (removeMistakeBtn) removeMistakeBtn.hidden = true;
      qi = -2; // special flag for empty
    }

    function renderQ() {
      answered = false;
      var q = Q[qi];
      if (!q) return;

      if (progressEl) progressEl.textContent = "第 " + (qi + 1) + " 题 / " + Q.length;
      if (scoreEl) scoreEl.textContent = "得分 Score: " + score;
      if (barEl) barEl.style.width = (qi / Q.length * 100) + "%";

      if (currentMode === "mistakes") {
        qEl.innerHTML = '<span class="quiz-badge-review">错题本复习</span><br>' + esc(q.q);
      } else {
        qEl.textContent = q.q;
      }

      oEl.innerHTML = "";
      xEl.hidden = true;
      nEl.hidden = true;
      if (removeMistakeBtn) removeMistakeBtn.hidden = true;

      // Randomize option display order
      var order = q.o.map(function (_, i) { return i; });
      for (var k = order.length - 1; k > 0; k--) {
        var r = Math.floor(Math.random() * (k + 1));
        var t = order[k]; order[k] = order[r]; order[r] = t;
      }

      order.forEach(function (idx, pos) {
        var optText = q.o[idx];
        var b = el("button", "opt", '<span class="opt-key">' + "ABC"[pos] + "</span>" + esc(optText));
        b.type = "button";
        b.dataset.idx = idx;
        b.addEventListener("click", function () { choose(idx, b); });
        oEl.appendChild(b);
      });
    }

    function choose(selectedIdx, b) {
      if (answered) return;
      answered = true;
      var q = Q[qi];
      var btns = oEl.querySelectorAll(".opt");
      btns.forEach(function (x) {
        x.disabled = true;
        if (+x.dataset.idx === q.a) x.classList.add("correct");
      });

      if (selectedIdx === q.a) {
        score++;
        xEl.className = "quiz-explain ok";
        xEl.innerHTML = "<b>正确 Correct！</b> " + esc(q.x);
        // If reviewing mistakes, offer one-click removal
        if (currentMode === "mistakes" && removeMistakeBtn) {
          removeMistakeBtn.hidden = false;
          removeMistakeBtn.textContent = "✓ 已掌握，移出错题本 Remove from Mistakes";
          removeMistakeBtn.onclick = function () {
            removeMistake(q.q);
            removeMistakeBtn.textContent = "✓ 已移出错题本 Removed!";
            removeMistakeBtn.disabled = true;
          };
        }
      } else {
        b.classList.add("wrong");
        xEl.className = "quiz-explain no";
        xEl.innerHTML = "<b>再想想 Not quite.</b> " + esc(q.x);
        // Automatically save mistake to review notebook
        saveMistake(q);
      }

      if (scoreEl) scoreEl.textContent = "得分 Score: " + score;
      xEl.hidden = false;
      nEl.hidden = false;
      nEl.textContent = qi === Q.length - 1 ? "查看结果 See result" : "下一题 Next";
      nEl.focus({ preventScroll: true });
    }

    function finish() {
      if (barEl) barEl.style.width = "100%";
      if (progressEl) progressEl.textContent = "完成 Done";
      var pct = score / Q.length;
      var msg = pct === 1 ? "太棒了！满分。Perfect score! All answers correct!"
        : pct >= 0.7 ? "很好！继续加油。Great work — you're making steady progress!"
        : "不错的尝试！错题已收录在错题本中，随时可以针对性巩固复习。";
      qEl.textContent = "你答对了 " + score + " / " + Q.length + " 题";
      oEl.innerHTML = '<p class="quiz-final">' + esc(msg) + "</p>";
      xEl.hidden = true;
      if (removeMistakeBtn) removeMistakeBtn.hidden = true;
      nEl.textContent = "再测一次 Try again";
      nEl.hidden = false;
      qi = -1;
    }

    if (nEl) {
      nEl.addEventListener("click", function () {
        if (qi === -2) { startQuiz("standard"); return; }
        if (qi === -1) { startQuiz(currentMode); return; }
        if (qi === Q.length - 1) { finish(); return; }
        qi++;
        renderQ();
      });
    }

    modeBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.dataset.mode;
        startQuiz(mode);
      });
    });

    startQuiz("standard");
  })();

  /* ---------- Vocabulary (A1 & A2) ---------- */
  (function vocab() {
    var rawA1 = window.CN1_A1 || [];
    var rawA2 = window.CN1_A2 || [];
    if (!rawA1.length && !rawA2.length) return;

    var countA1El = $("#tab-count-a1");
    var countA2El = $("#tab-count-a2");
    if (countA1El) countA1El.textContent = rawA1.length;
    if (countA2El) countA2El.textContent = rawA2.length;

    var level = "a1";
    function getRaw(lvl) { return lvl === "a2" ? rawA2 : rawA1; }
    function mapList(lvl) {
      return getRaw(lvl).map(function (r, i) {
        return {
          id: lvl + "-" + i,
          lvl: lvl,
          w: r[0],
          p: r[1],
          zh: r[2],
          ex: r[3],
          n: r[4] || "",
          key: r[0].replace(/^to /, "").replace(/^the /, "")
        };
      });
    }

    var V = mapList(level);
    var POS = { n: "名词 noun", v: "动词 verb", adj: "形容词 adj", adv: "副词 adv", prep: "介词 prep", num: "数词 number", det: "限定词 det", pron: "代词 pron", conj: "连词 conj", interj: "感叹词 interj" };

    function storeKey(lvl) { return "cn1-" + lvl + "-known"; }
    var known = {};
    function loadKnown(lvl) {
      try { known = JSON.parse(localStorage.getItem(storeKey(lvl)) || "{}"); } catch (e) { known = {}; }
    }
    loadKnown(level);
    function saveKnown() { try { localStorage.setItem(storeKey(level), JSON.stringify(known)); } catch (e) {} }

    var state = { q: "", letter: "", pos: "", hideKnown: false, limit: 48 };
    var grid = $("#vocab-grid"), count = $("#vocab-count"), more = $("#vocab-more");
    var posSel = $("#vocab-pos");
    var lettersEl = $("#vocab-letters");

    function updateProgress() {
      var k = V.filter(function (x) { return known[x.w + "|" + x.p]; }).length;
      $("#vocab-total").textContent = V.length;
      $("#vp-total").textContent = V.length;
      $("#vp-known").textContent = k;
      $("#vp-bar").style.width = (V.length ? (k / V.length * 100) : 0) + "%";
    }
    function isKnown(x) { return !!known[x.w + "|" + x.p]; }
    function setKnown(x, v) {
      if (v) known[x.w + "|" + x.p] = 1;
      else delete known[x.w + "|" + x.p];
      saveKnown();
      updateProgress();
    }

    function buildPosFilter() {
      var posKeys = {};
      V.forEach(function (x) {
        x.p.split(" / ").forEach(function (k) {
          k = k.split(" ")[0];
          if (POS[k]) posKeys[k] = 1;
        });
      });
      posSel.innerHTML = '<option value="">全部词性 All types</option>' + Object.keys(POS).filter(function (k) { return posKeys[k]; }).map(function (k) { return '<option value="' + k + '">' + POS[k] + "</option>"; }).join("");
      posSel.value = state.pos || "";
    }
    posSel.addEventListener("change", function () { state.pos = posSel.value; state.limit = 48; render(); });

    function buildLetters() {
      lettersEl.innerHTML = "";
      var L = [];
      V.forEach(function (x) { var c = x.key[0].toUpperCase(); if (L.indexOf(c) < 0) L.push(c); });
      L.sort();
      [""].concat(L).forEach(function (c) {
        var b = el("button", "letter", c || "全部 All");
        b.type = "button";
        b.setAttribute("aria-pressed", c === state.letter ? "true" : "false");
        b.addEventListener("click", function () {
          state.letter = c; state.limit = 48;
          lettersEl.querySelectorAll(".letter").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
          render();
        });
        lettersEl.appendChild(b);
      });
    }

    // Level tabs
    document.querySelectorAll(".level-tabs [data-level]").forEach(function (b) {
      b.addEventListener("click", function () {
        var newLevel = b.dataset.level;
        if (newLevel === level) return;
        level = newLevel;
        loadKnown(level);
        V = mapList(level);
        state.letter = "";
        state.pos = "";
        state.q = "";
        state.hideKnown = false;
        state.limit = 48;
        if ($("#vocab-search")) $("#vocab-search").value = "";
        if ($("#vocab-unknown")) $("#vocab-unknown").checked = false;
        document.querySelectorAll(".level-tabs [data-level]").forEach(function (x) {
          var sel = x.dataset.level === level;
          x.classList.toggle("active", sel);
          x.setAttribute("aria-selected", sel ? "true" : "false");
        });
        buildPosFilter();
        buildLetters();
        updateProgress();
        render();
        nextDrill();
      });
    });

    var t;
    $("#vocab-search").addEventListener("input", function (e) {
      clearTimeout(t);
      t = setTimeout(function () { state.q = e.target.value.trim().toLowerCase(); state.limit = 48; render(); }, 120);
    });
    $("#vocab-unknown").addEventListener("change", function (e) { state.hideKnown = e.target.checked; state.limit = 48; render(); });
    more.addEventListener("click", function () { state.limit += 48; render(); });

    function filtered() {
      return V.filter(function (x) {
        if (state.letter && x.key[0].toUpperCase() !== state.letter) return false;
        if (state.pos && x.p.split(/[ \/]+/).indexOf(state.pos) < 0) return false;
        if (state.hideKnown && isKnown(x)) return false;
        if (state.q) return x.w.toLowerCase().indexOf(state.q) >= 0 || x.zh.indexOf(state.q) >= 0;
        return true;
      });
    }
    function render() {
      var list = filtered();
      grid.innerHTML = "";
      if (!list.length) {
        grid.innerHTML = '<p class="vocab-empty">没有找到单词。试试别的关键词？<br><span class="en-note">No words match. Try a different search or filter.</span></p>';
      }
      list.slice(0, state.limit).forEach(function (x) {
        var c = el("article", "vw" + (isKnown(x) ? " is-known" : ""));
        c.innerHTML =
          '<div class="vw-top"><button type="button" class="vw-word" aria-label="Listen: ' + esc(x.w) + '">' + esc(x.w) + ICON + "</button>" +
          '<span class="vw-pos" title="' + esc(x.p) + '">' + esc(x.p) + "</span></div>" +
          '<p class="vw-zh">' + esc(x.zh) + (x.n ? ' <span class="vw-sense">(' + esc(x.n) + ")</span>" : "") + "</p>" +
          '<p class="vw-ex">' + esc(x.ex) + "</p>" +
          '<label class="vw-known"><input type="checkbox"' + (isKnown(x) ? " checked" : "") + "> 认识 I know this</label>";
        c.querySelector(".vw-word").addEventListener("click", function () { speak(x.w.replace(/^to /, "") + ". " + x.ex); });
        c.querySelector("input").addEventListener("change", function (e) {
          setKnown(x, e.target.checked);
          c.classList.toggle("is-known", e.target.checked);
        });
        grid.appendChild(c);
      });
      var shown = Math.min(list.length, state.limit);
      count.textContent = "显示 " + shown + " / " + list.length + " 个单词 · Showing " + shown + " of " + list.length;
      more.hidden = list.length <= state.limit;
    }

    buildPosFilter();
    buildLetters();
    updateProgress();
    render();

    // Drill
    var cur, streak = 0, done = false;
    var optsEl = $("#drill-opts");
    function pick() {
      var pool = V.filter(function (x) { return !isKnown(x); });
      if (!pool.length) pool = V;
      return pool[Math.floor(Math.random() * pool.length)];
    }
    function nextDrill() {
      done = false;
      cur = pick();
      if (!cur) return;
      $("#drill-en").textContent = cur.w;
      $("#drill-pos").textContent = cur.p + (cur.n ? " · " + cur.n : "");
      $("#drill-ex").textContent = "";
      var main = cur.p.split(" ")[0];
      var same = V.filter(function (x) { return x !== cur && x.zh !== cur.zh && x.p.split(" ")[0] === main; });
      if (same.length < 3) same = V.filter(function (x) { return x !== cur && x.zh !== cur.zh; });
      var opts = [cur];
      while (opts.length < 4 && opts.length < V.length) {
        var o = same[Math.floor(Math.random() * same.length)];
        if (o && opts.indexOf(o) < 0) opts.push(o);
        else break;
      }
      opts.sort(function () { return Math.random() - 0.5; });
      optsEl.innerHTML = "";
      opts.forEach(function (o, i) {
        var b = el("button", "opt", '<span class="opt-key">' + "ABCD"[i] + "</span>" + esc(o.zh));
        b.type = "button";
        b.addEventListener("click", function () {
          if (done) return; done = true;
          optsEl.querySelectorAll(".opt").forEach(function (x) { x.disabled = true; });
          if (o === cur) {
            b.classList.add("correct"); streak++;
            setKnown(cur, true);
            render();
          } else {
            b.classList.add("wrong"); streak = 0;
            var cBtn = optsEl.querySelectorAll(".opt")[opts.indexOf(cur)];
            if (cBtn) cBtn.classList.add("correct");
          }
          $("#drill-streak").textContent = streak;
          $("#drill-ex").textContent = "例句 Example: " + cur.ex;
          speak(cur.w.replace(/^to /, ""));
        });
        optsEl.appendChild(b);
      });
    }
    $("#drill-speak").addEventListener("click", function () { if (cur) speak(cur.w.replace(/^to /, "")); });
    $("#drill-next").addEventListener("click", nextDrill);
    nextDrill();
  })();

  /* ---------- Dialogues Module ---------- */
  (function dialoguesModule() {
    var list = (L.dialogues || []);
    if (!list.length) return;
    var currentIdx = 0;
    var tabsEl = $("#dialogue-tabs");
    var titleEl = $("#dialogue-title");
    var badgeEl = $("#dialogue-badge");
    var descEl = $("#dialogue-desc");
    var flowEl = $("#dialogue-flow");
    var notesGrid = $("#dialogue-notes-grid");
    var toggleZh = $("#dialogue-toggle-zh");
    var playAllBtn = $("#dialogue-play-all");
    var isPlayingAll = false;
    var playTimeout = null;

    function renderTabs() {
      tabsEl.innerHTML = "";
      list.forEach(function (d, i) {
        var b = el("button", "dialogue-tab" + (i === currentIdx ? " active" : ""));
        b.type = "button";
        b.textContent = d.title;
        b.addEventListener("click", function () {
          if (isPlayingAll) stopPlayAll();
          currentIdx = i;
          renderTabs();
          renderDialogue();
        });
        tabsEl.appendChild(b);
      });
    }

    function renderDialogue() {
      var d = list[currentIdx];
      if (!d) return;
      titleEl.textContent = d.title + " · " + d.titleEn;
      badgeEl.textContent = d.badge;
      descEl.textContent = d.desc;

      flowEl.innerHTML = "";
      d.lines.forEach(function (line, idx) {
        var bubble = el("div", "d-bubble role-" + line.role);
        bubble.dataset.idx = idx;
        var rInfo = d.roles[line.role] || { name: line.role };
        bubble.innerHTML =
          '<span class="d-bubble-role">' + esc(rInfo.name) + '</span>' +
          '<div class="d-bubble-content">' +
            '<p class="d-bubble-en">' + esc(line.en) + '</p>' +
            '<p class="d-bubble-zh' + (toggleZh && !toggleZh.checked ? ' hidden' : '') + '">' + esc(line.zh) + '</p>' +
          '</div>' +
          '<button type="button" class="d-bubble-btn" aria-label="Listen: ' + esc(line.en) + '">' + ICON + '</button>';

        bubble.querySelector(".d-bubble-btn").addEventListener("click", function (e) {
          e.stopPropagation();
          highlightAndSpeak(bubble, line.en);
        });
        bubble.addEventListener("click", function () {
          highlightAndSpeak(bubble, line.en);
        });
        flowEl.appendChild(bubble);
      });

      // Notes
      notesGrid.innerHTML = "";
      (d.notes || []).forEach(function (n) {
        var c = el("div", "note-card");
        c.innerHTML = '<p class="note-term">' + esc(n.term) + '</p><p class="note-zh">' + esc(n.zh) + '</p>';
        notesGrid.appendChild(c);
      });
    }

    function highlightAndSpeak(bubble, text, onEnd) {
      document.querySelectorAll(".d-bubble").forEach(function (b) { b.classList.remove("active-speaking"); });
      bubble.classList.add("active-speaking");
      speak(text, function () {
        bubble.classList.remove("active-speaking");
        if (onEnd) onEnd();
      });
    }

    function stopPlayAll() {
      isPlayingAll = false;
      if (speechSynthesis) speechSynthesis.cancel();
      clearTimeout(playTimeout);
      if (playAllBtn) playAllBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg> 连续朗读 Play All';
      document.querySelectorAll(".d-bubble").forEach(function (b) { b.classList.remove("active-speaking"); });
    }

    function startPlayAll() {
      isPlayingAll = true;
      if (playAllBtn) playAllBtn.innerHTML = '⏹ 停止播放 Stop';
      var d = list[currentIdx];
      var bubbles = flowEl.querySelectorAll(".d-bubble");
      var i = 0;
      function next() {
        if (!isPlayingAll || i >= d.lines.length) {
          stopPlayAll();
          return;
        }
        var line = d.lines[i];
        var bubble = bubbles[i];
        i++;
        highlightAndSpeak(bubble, line.en, function () {
          if (!isPlayingAll) return;
          playTimeout = setTimeout(next, 700);
        });
      }
      next();
    }

    if (playAllBtn) {
      playAllBtn.addEventListener("click", function () {
        if (isPlayingAll) stopPlayAll();
        else startPlayAll();
      });
    }

    if (toggleZh) {
      toggleZh.addEventListener("change", function () {
        flowEl.querySelectorAll(".d-bubble-zh").forEach(function (z) {
          z.classList.toggle("hidden", !toggleZh.checked);
        });
      });
    }

    renderTabs();
    renderDialogue();
  })();

  /* ---------- Reading Comprehension Module ---------- */
  (function readingModule() {
    var passages = (L.readings || []);
    if (!passages.length) return;
    var currentIdx = 0;
    var tabsEl = $("#reading-tabs");
    var titleEl = $("#passage-title");
    var titleZhEl = $("#passage-title-zh");
    var tagsEl = $("#passage-tags");
    var bodyEl = $("#passage-body");
    var vocabGrid = $("#passage-vocab-grid");
    var quizList = $("#passage-quiz-list");
    var toggleZh = $("#passage-toggle-zh");
    var readAllBtn = $("#passage-read-all");
    var isReadingAll = false;

    function renderTabs() {
      tabsEl.innerHTML = "";
      passages.forEach(function (p, i) {
        var b = el("button", "reading-tab" + (i === currentIdx ? " active" : ""));
        b.type = "button";
        b.textContent = p.titleZh + " (" + p.level + ")";
        b.addEventListener("click", function () {
          if (isReadingAll) stopReadAll();
          currentIdx = i;
          renderTabs();
          renderPassage();
        });
        tabsEl.appendChild(b);
      });
    }

    function renderPassage() {
      var p = passages[currentIdx];
      if (!p) return;
      titleEl.textContent = p.title;
      titleZhEl.textContent = p.titleZh;

      tagsEl.innerHTML =
        '<span class="p-tag">' + esc(p.level) + '</span>' +
        '<span class="p-tag">' + esc(p.time) + '</span>' +
        (p.tags || []).map(function (t) { return '<span class="p-tag">' + esc(t) + '</span>'; }).join("");

      bodyEl.innerHTML = "";
      p.paragraphs.forEach(function (para, idx) {
        var div = el("div", "passage-para");
        div.dataset.idx = idx;
        div.innerHTML =
          '<p class="para-en">' + esc(para.en) + '</p>' +
          '<p class="para-zh' + (toggleZh && !toggleZh.checked ? ' hidden' : '') + '">' + esc(para.zh) + '</p>' +
          '<span class="para-speak-hint">' + ICON + '点击朗读本段 Tap to listen</span>';
        div.addEventListener("click", function () {
          highlightParaAndSpeak(div, para.en);
        });
        bodyEl.appendChild(div);
      });

      // Vocab
      vocabGrid.innerHTML = "";
      (p.vocab || []).forEach(function (v) {
        var card = el("div", "pv-item");
        card.innerHTML =
          '<div class="pv-w"><span>' + esc(v.w) + '</span><button type="button" aria-label="Listen">' + ICON + '</button></div>' +
          '<span class="pv-pos">' + esc(v.p) + '</span>' +
          '<span class="pv-zh">' + esc(v.zh) + '</span>';
        card.querySelector("button").addEventListener("click", function (e) {
          e.stopPropagation();
          speak(v.w);
        });
        vocabGrid.appendChild(card);
      });

      // Quiz
      quizList.innerHTML = "";
      (p.questions || []).forEach(function (q, qIdx) {
        var qCard = el("div", "pq-card");
        qCard.innerHTML =
          '<p class="pq-q">' + (qIdx + 1) + '. ' + esc(q.q) + '</p>' +
          '<div class="pq-options"></div>' +
          '<p class="pq-explain" hidden></p>';
        var optContainer = qCard.querySelector(".pq-options");
        var explainEl = qCard.querySelector(".pq-explain");

        q.options.forEach(function (optText, optIdx) {
          var btn = el("button", "pq-opt");
          btn.type = "button";
          btn.innerHTML = '<span class="opt-key">' + "ABC"[optIdx] + '</span> ' + esc(optText);
          btn.addEventListener("click", function () {
            optContainer.querySelectorAll(".pq-opt").forEach(function (b) { b.disabled = true; });
            if (optIdx === q.answer) {
              btn.classList.add("correct");
              explainEl.innerHTML = "<b>✓ 正确 Correct!</b> " + esc(q.explain);
            } else {
              btn.classList.add("wrong");
              optContainer.querySelectorAll(".pq-opt")[q.answer].classList.add("correct");
              explainEl.innerHTML = "<b>✗ 解析 Note:</b> " + esc(q.explain);
            }
            explainEl.hidden = false;
          });
          optContainer.appendChild(btn);
        });
        quizList.appendChild(qCard);
      });
    }

    function highlightParaAndSpeak(div, text, onEnd) {
      document.querySelectorAll(".passage-para").forEach(function (p) { p.classList.remove("speaking"); });
      div.classList.add("speaking");
      speak(text, function () {
        div.classList.remove("speaking");
        if (onEnd) onEnd();
      });
    }

    function stopReadAll() {
      isReadingAll = false;
      if (speechSynthesis) speechSynthesis.cancel();
      if (readAllBtn) readAllBtn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/></svg> 朗读全篇 Listen';
      document.querySelectorAll(".passage-para").forEach(function (p) { p.classList.remove("speaking"); });
    }

    function startReadAll() {
      isReadingAll = true;
      if (readAllBtn) readAllBtn.innerHTML = '⏹ 停止播放 Stop';
      var p = passages[currentIdx];
      var paras = bodyEl.querySelectorAll(".passage-para");
      var i = 0;
      function next() {
        if (!isReadingAll || i >= p.paragraphs.length) {
          stopReadAll();
          return;
        }
        var para = p.paragraphs[i];
        var div = paras[i];
        i++;
        highlightParaAndSpeak(div, para.en, function () {
          if (!isReadingAll) return;
          setTimeout(next, 600);
        });
      }
      next();
    }

    if (readAllBtn) {
      readAllBtn.addEventListener("click", function () {
        if (isReadingAll) stopReadAll();
        else startReadAll();
      });
    }

    if (toggleZh) {
      toggleZh.addEventListener("change", function () {
        bodyEl.querySelectorAll(".para-zh").forEach(function (z) {
          z.classList.toggle("hidden", !toggleZh.checked);
        });
      });
    }

    renderTabs();
    renderPassage();
  })();

  /* ---------- Listening Drills Module ---------- */
  (function listeningModule() {
    var drills = (L.listening || []);
    if (!drills.length) return;
    var currentIdx = 0;
    var navEl = $("#listening-nav");
    var categoryEl = $("#lc-category");
    var counterEl = $("#lc-counter");
    var titleEl = $("#lc-title");
    var promptEl = $("#lc-prompt");
    var questionEl = $("#lc-question");
    var playBtn = $("#lc-play-btn");
    var slowBtn = $("#lc-slow-btn");
    var optionsEl = $("#lc-options");
    var feedbackEl = $("#lc-feedback");
    var transcriptEl = $("#lc-transcript");
    var tipEl = $("#lc-tip");
    var nextBtn = $("#lc-next-btn");

    function renderNav() {
      navEl.innerHTML = "";
      drills.forEach(function (d, i) {
        var b = el("button", "ln-btn" + (i === currentIdx ? " active" : ""));
        b.type = "button";
        b.textContent = (i + 1) + ". " + d.title;
        b.addEventListener("click", function () {
          currentIdx = i;
          renderNav();
          renderDrill();
        });
        navEl.appendChild(b);
      });
    }

    function renderDrill() {
      var d = drills[currentIdx];
      if (!d) return;
      categoryEl.textContent = d.category;
      counterEl.textContent = (currentIdx + 1) + " / " + drills.length;
      titleEl.textContent = d.title;
      promptEl.textContent = d.prompt;
      questionEl.textContent = d.question;
      transcriptEl.textContent = d.transcript;
      tipEl.innerHTML = esc(d.tip);
      feedbackEl.hidden = true;

      optionsEl.innerHTML = "";
      d.options.forEach(function (optText, optIdx) {
        var btn = el("button", "lc-opt");
        btn.type = "button";
        btn.innerHTML = '<span class="opt-key">' + "ABC"[optIdx] + '</span> ' + esc(optText);
        btn.addEventListener("click", function () {
          optionsEl.querySelectorAll(".lc-opt").forEach(function (b) { b.disabled = true; });
          if (optIdx === d.answer) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("wrong");
            optionsEl.querySelectorAll(".lc-opt")[d.answer].classList.add("correct");
          }
          feedbackEl.hidden = false;
        });
        optionsEl.appendChild(btn);
      });
    }

    function playAudio(isSlow) {
      var d = drills[currentIdx];
      if (!d) return;
      var rate = isSlow ? 0.75 : 0.95;
      speak(d.audio, null, rate);
    }

    if (playBtn) playBtn.addEventListener("click", function () { playAudio(false); });
    if (slowBtn) slowBtn.addEventListener("click", function () { playAudio(true); });
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        currentIdx = (currentIdx + 1) % drills.length;
        renderNav();
        renderDrill();
      });
    }

    renderNav();
    renderDrill();
  })();

  /* ---------- Phrasal Verbs & Idioms Module ---------- */
  (function phrasalVerbsModule() {
    var pvs = L.phrasalVerbs || [];
    var drills = L.phrasalDrills || [];
    if (!pvs.length) return;

    var tabsEl = $("#phv-tabs");
    var searchEl = $("#phv-search");
    var gridEl = $("#phv-grid");
    var drillBodyEl = $("#phv-drill-body");
    var drillNextBtn = $("#phv-drill-next");

    var currentParticle = "all";
    var query = "";

    var categories = [
      { id: "all", label: "全部 All (" + pvs.length + ")" },
      { id: "up", label: "UP 彻底/向上" },
      { id: "off", label: "OFF 离开/分离" },
      { id: "out", label: "OUT 探究/耗尽" },
      { id: "down", label: "DOWN 降低/减缓" },
      { id: "other", label: "OTHER 常用搭配/习语" }
    ];

    function renderTabs() {
      if (!tabsEl) return;
      tabsEl.innerHTML = "";
      categories.forEach(function (cat) {
        var b = el("button", "tab-btn" + (cat.id === currentParticle ? " active" : ""));
        b.type = "button";
        b.textContent = cat.label;
        b.addEventListener("click", function () {
          currentParticle = cat.id;
          renderTabs();
          renderCards();
        });
        tabsEl.appendChild(b);
      });
    }

    function renderCards() {
      if (!gridEl) return;
      gridEl.innerHTML = "";
      var filtered = pvs.filter(function (item) {
        var matchParticle = currentParticle === "all" || item.particle === currentParticle;
        if (!matchParticle) return false;
        if (!query) return true;
        var q = query.toLowerCase();
        return item.phrase.toLowerCase().indexOf(q) !== -1 ||
          item.zh.indexOf(q) !== -1 ||
          item.ex.toLowerCase().indexOf(q) !== -1;
      });

      if (!filtered.length) {
        gridEl.innerHTML = '<p class="drill-empty" style="grid-column: 1/-1; text-align: center; color: var(--muted); padding: 30px;">没有找到匹配的短语 No matching phrases found.</p>';
        return;
      }

      filtered.forEach(function (item) {
        var card = el("article", "phv-card");
        var top = el("div", "phv-card-top");
        var phraseEl = el("h3", "phv-phrase", esc(item.phrase));
        var tagEl = el("span", "phv-tag " + item.particle, esc(item.category));
        top.appendChild(phraseEl);
        top.appendChild(tagEl);

        var zhEl = el("p", "phv-zh", esc(item.zh));
        var logicEl = el("div", "phv-logic", "<b>💡 隐喻逻辑：</b>" + esc(item.logic));
        var tipEl = el("div", "phv-tip", "<b>⚠️ 搭配要点：</b>" + esc(item.tip));

        var exBox = el("div", "phv-ex-box");
        var exRow = el("div", "phv-ex-en-row");
        var exEn = el("p", "phv-ex-en", esc(item.ex));
        var speakBtn = el("button", "phv-speak-btn");
        speakBtn.type = "button";
        speakBtn.setAttribute("aria-label", "Listen to " + item.phrase);
        speakBtn.innerHTML = ICON;
        speakBtn.addEventListener("click", function () {
          speak(item.phrase + ". " + item.ex);
        });

        exRow.appendChild(exEn);
        exRow.appendChild(speakBtn);

        var exZh = el("p", "phv-ex-zh", esc(item.exZh));
        exBox.appendChild(exRow);
        exBox.appendChild(exZh);

        card.appendChild(top);
        card.appendChild(zhEl);
        card.appendChild(logicEl);
        card.appendChild(tipEl);
        card.appendChild(exBox);

        gridEl.appendChild(card);
      });
    }

    if (searchEl) {
      searchEl.addEventListener("input", function () {
        query = searchEl.value.trim();
        renderCards();
      });
    }

    // Mini Drill Logic
    var drillIdx = 0;
    function renderDrill() {
      if (!drillBodyEl || !drills.length) return;
      var d = drills[drillIdx];
      if (!d) return;

      drillBodyEl.innerHTML = "";
      var card = el("div", "phv-drill-card");
      var prompt = el("p", "phv-drill-prompt", "提示：" + esc(d.prompt));
      var sentence = el("p", "phv-drill-sentence", esc(d.sentence).replace("______", "<u>______</u>"));
      var optsGrid = el("div", "phv-drill-opts");
      var feedback = el("div", "phv-drill-feedback");
      feedback.hidden = true;

      var answered = false;
      d.options.forEach(function (opt, idx) {
        var b = el("button", "phv-opt-btn", esc(opt));
        b.type = "button";
        b.addEventListener("click", function () {
          if (answered) return;
          answered = true;
          optsGrid.querySelectorAll(".phv-opt-btn").forEach(function (btn, i) {
            btn.disabled = true;
            if (i === d.answer) btn.classList.add("correct");
          });

          if (idx === d.answer) {
            feedback.className = "phv-drill-feedback ok";
            feedback.innerHTML = "<b>正确 Correct！</b> " + esc(d.explanation);
          } else {
            b.classList.add("wrong");
            feedback.className = "phv-drill-feedback no";
            feedback.innerHTML = "<b>答案是 " + esc(d.options[d.answer]) + "。</b> " + esc(d.explanation);
          }
          feedback.hidden = false;
        });
        optsGrid.appendChild(b);
      });

      card.appendChild(prompt);
      card.appendChild(sentence);
      card.appendChild(optsGrid);
      card.appendChild(feedback);
      drillBodyEl.appendChild(card);
    }

    if (drillNextBtn) {
      drillNextBtn.addEventListener("click", function () {
        drillIdx = (drillIdx + 1) % drills.length;
        renderDrill();
      });
    }

    renderTabs();
    renderCards();
    renderDrill();
  })();
})();
