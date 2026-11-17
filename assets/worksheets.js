/* CNn1English - Worksheet Generator & Teacher Hub Controller */
(function () {
  "use strict";

  var worksheets = window.CN1_WORKSHEETS || [];
  var categories = window.CN1_WORKSHEET_CATEGORIES || [];

  var currentLevel = "all";
  var currentCategory = "all";
  var searchQuery = "";
  var activeWorksheet = worksheets[0] || null;

  // Teacher Customizer state
  var customOptions = {
    schoolName: "English Language Learning Center",
    className: "Class 1A",
    teacherName: "Teacher",
    includeZh: true,
    includeAnswerKey: true,
    separateKeyPage: true,
    studentMode: false
  };

  /* ---------- Theme Handling ---------- */
  function initTheme() {
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

    applyTheme(getTheme());
  }

  /* ---------- Filter & Search ---------- */
  function getFilteredWorksheets() {
    return worksheets.filter(function (w) {
      var matchLevel = currentLevel === "all" || w.level.toLowerCase() === currentLevel.toLowerCase();
      var matchCategory = currentCategory === "all" || w.category === currentCategory;
      var q = searchQuery.trim().toLowerCase();
      var matchSearch = !q ||
        w.title.toLowerCase().indexOf(q) !== -1 ||
        w.titleZh.indexOf(q) !== -1 ||
        w.desc.toLowerCase().indexOf(q) !== -1 ||
        w.category.toLowerCase().indexOf(q) !== -1 ||
        w.categoryZh.indexOf(q) !== -1 ||
        w.questions.some(function (quest) {
          return quest.prompt.toLowerCase().indexOf(q) !== -1;
        });
      return matchLevel && matchCategory && matchSearch;
    });
  }

  /* ---------- Render Worksheet Catalog Cards ---------- */
  function renderCatalog() {
    var container = document.getElementById("worksheet-grid");
    var countEl = document.getElementById("worksheet-count");
    if (!container) return;

    var filtered = getFilteredWorksheets();
    if (countEl) countEl.textContent = filtered.length;

    if (filtered.length === 0) {
      container.innerHTML = [
        '<div class="empty-state">',
        '  <p class="empty-icon">🔍</p>',
        '  <h3>No worksheets found</h3>',
        '  <p>Try resetting filters or search terms.</p>',
        '  <button type="button" class="btn btn-sm btn-ghost" id="btn-reset-filters">Reset Filters</button>',
        '</div>'
      ].join("");
      var resetBtn = document.getElementById("btn-reset-filters");
      if (resetBtn) {
        resetBtn.addEventListener("click", function () {
          currentLevel = "all";
          currentCategory = "all";
          searchQuery = "";
          var searchInput = document.getElementById("search-input");
          if (searchInput) searchInput.value = "";
          updateFilterButtons();
          renderCatalog();
        });
      }
      return;
    }

    container.innerHTML = filtered.map(function (w) {
      var isActive = activeWorksheet && activeWorksheet.id === w.id;
      return [
        '<div class="worksheet-card' + (isActive ? ' active-card' : '') + '" data-id="' + w.id + '">',
        '  <div class="card-top">',
        '    <span class="badge-level ' + w.level.toLowerCase() + '">' + w.level + '</span>',
        '    <span class="badge-category">' + w.categoryZh + '</span>',
        '    <span class="badge-count">' + w.questions.length + ' Qs</span>',
        '  </div>',
        '  <h4 class="card-title">' + w.title + '</h4>',
        '  <p class="card-title-zh">' + w.titleZh + '</p>',
        '  <p class="card-desc">' + w.desc + '</p>',
        '  <div class="card-actions">',
        '    <button type="button" class="btn btn-sm btn-primary btn-load-studio" data-id="' + w.id + '">',
        '      ⚙️ Customize & Print',
        '    </button>',
        '    <button type="button" class="btn btn-sm btn-ghost btn-quick-print" data-id="' + w.id + '">',
        '      🖨️ Quick Print',
        '    </button>',
        '  </div>',
        '</div>'
      ].join("");
    }).join("");

    container.querySelectorAll(".btn-load-studio").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var id = btn.dataset.id;
        loadWorksheetIntoStudio(id);
        var studio = document.getElementById("worksheet-studio");
        if (studio) studio.scrollIntoView({ behavior: "smooth" });
      });
    });

    container.querySelectorAll(".btn-quick-print").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var id = btn.dataset.id;
        loadWorksheetIntoStudio(id);
        setTimeout(function () { window.print(); }, 150);
      });
    });

    container.querySelectorAll(".worksheet-card").forEach(function (card) {
      card.addEventListener("click", function () {
        loadWorksheetIntoStudio(card.dataset.id);
      });
    });
  }

  function updateFilterButtons() {
    document.querySelectorAll(".level-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.level === currentLevel);
    });
    document.querySelectorAll(".category-pill").forEach(function (b) {
      b.classList.toggle("active", b.dataset.category === currentCategory);
    });
  }

  /* ---------- Load Worksheet into Studio & Preview ---------- */
  function loadWorksheetIntoStudio(id) {
    var found = worksheets.find(function (w) { return w.id === id; });
    if (!found) return;
    activeWorksheet = found;

    // Highlight card
    document.querySelectorAll(".worksheet-card").forEach(function (c) {
      c.classList.toggle("active-card", c.dataset.id === id);
    });

    // Populate studio inputs
    var titleInput = document.getElementById("studio-title");
    var instructionsInput = document.getElementById("studio-instructions");
    if (titleInput) titleInput.value = found.title + " · " + found.titleZh;
    if (instructionsInput) instructionsInput.value = found.instructions + (customOptions.includeZh ? " " + found.instructionsZh : "");

    renderWorksheetPreview();
  }

  /* ---------- Render Printable Preview Sheet ---------- */
  function renderWorksheetPreview() {
    var preview = document.getElementById("worksheet-preview");
    if (!preview || !activeWorksheet) return;

    var w = activeWorksheet;
    var title = document.getElementById("studio-title") ? document.getElementById("studio-title").value : (w.title + " · " + w.titleZh);
    var instructions = document.getElementById("studio-instructions") ? document.getElementById("studio-instructions").value : w.instructions;
    var school = customOptions.schoolName;
    var className = customOptions.className;
    var teacher = customOptions.teacherName;

    var questionsHtml = w.questions.map(function (q, idx) {
      var qNum = idx + 1;
      var promptText = q.prompt;

      if (w.type === "multiple-choice" && q.options) {
        var optionsHtml = q.options.map(function (opt, optIdx) {
          var label = String.fromCharCode(65 + optIdx); // A, B, C, D
          if (customOptions.studentMode) {
            return '<label class="student-opt-label"><input type="radio" name="q_' + qNum + '" value="' + opt + '"> <b>' + label + '.</b> ' + opt + '</label>';
          } else {
            return '<span class="print-option"><b>(' + label + ')</b> ' + opt + '</span>';
          }
        }).join(" ");

        return [
          '<div class="sheet-question" data-num="' + qNum + '">',
          '  <p class="sheet-q-prompt"><b>' + qNum + '.</b> ' + promptText + '</p>',
          '  <div class="sheet-q-options">' + optionsHtml + '</div>',
          customOptions.includeZh && q.explain ? '  <p class="sheet-q-hint">💡 考点提示：' + q.explain + '</p>' : '',
          '</div>'
        ].join("");
      } else {
        // Fill in blanks / sentence transformation
        return [
          '<div class="sheet-question" data-num="' + qNum + '">',
          '  <p class="sheet-q-prompt"><b>' + qNum + '.</b> ' + promptText + '</p>',
          customOptions.studentMode ?
            '  <input type="text" class="student-input" placeholder="Type your answer here..." data-num="' + qNum + '">' :
            '  <div class="sheet-write-line"><span>Answer: ____________________________________</span></div>',
          customOptions.includeZh && q.explain ? '  <p class="sheet-q-hint">💡 考点提示：' + q.explain + '</p>' : '',
          '</div>'
        ].join("");
      }
    }).join("");

    var answerKeyHtml = "";
    if (customOptions.includeAnswerKey) {
      var answersList = w.questions.map(function (q, idx) {
        return '<li><b>' + (idx + 1) + '.</b> <span class="ans-text">' + q.answer + '</span> — <small>' + q.explain + '</small></li>';
      }).join("");

      answerKeyHtml = [
        '<div class="sheet-answer-key' + (customOptions.separateKeyPage ? ' page-break-before' : '') + '">',
        '  <div class="key-header">',
        '    <h4>Teacher Answer Key & Explanations · 教师参考答案与考点解析</h4>',
        '    <p>Worksheet: ' + w.title + ' (' + w.level + ')</p>',
        '  </div>',
        '  <ol class="key-list">' + answersList + '</ol>',
        '</div>'
      ].join("");
    }

    preview.innerHTML = [
      '<div class="sheet-paper">',
      '  <div class="sheet-header">',
      '    <div class="sheet-school-info">',
      '      <h2 class="sheet-school-name">' + school + '</h2>',
      '      <p class="sheet-meta">Class: <u>' + className + '</u> &nbsp;&nbsp;|&nbsp;&nbsp; Teacher: <u>' + teacher + '</u> &nbsp;&nbsp;|&nbsp;&nbsp; Level: <u>' + w.level + ' (' + w.categoryZh + ')</u></p>',
      '    </div>',
      '    <div class="sheet-student-box">',
      '      <div class="student-row"><b>Name:</b> ___________________________</div>',
      '      <div class="student-row"><b>Date:</b> ___________________________</div>',
      '      <div class="student-score">Score: <b>______ / ' + w.questions.length + '</b></div>',
      '    </div>',
      '  </div>',
      '  <div class="sheet-title-banner">',
      '    <h3 class="sheet-title">' + title + '</h3>',
      '    <p class="sheet-instructions"><b>Instructions:</b> ' + instructions + '</p>',
      '  </div>',
      '  <div class="sheet-questions-body">' + questionsHtml + '</div>',
      customOptions.studentMode ? '  <div class="sheet-student-actions"><button type="button" class="btn btn-primary" id="btn-check-student-answers">Check My Answers 提交批改</button><span id="student-score-display"></span></div>' : '',
      answerKeyHtml,
      '  <div class="sheet-footer">',
      '    <span>CNn1English · Mandarin-English ESL Learning & Teaching Resources</span>',
      '    <span>Page 1 of 1</span>',
      '  </div>',
      '</div>'
    ].join("");

    // Wire up student mode grading if active
    if (customOptions.studentMode) {
      var checkBtn = document.getElementById("btn-check-student-answers");
      if (checkBtn) {
        checkBtn.addEventListener("click", gradeStudentWork);
      }
    }
  }

  function gradeStudentWork() {
    if (!activeWorksheet) return;
    var correctCount = 0;
    var total = activeWorksheet.questions.length;

    activeWorksheet.questions.forEach(function (q, idx) {
      var qNum = idx + 1;
      var qDiv = document.querySelector('.sheet-question[data-num="' + qNum + '"]');
      if (!qDiv) return;

      var isCorrect = false;
      if (activeWorksheet.type === "multiple-choice") {
        var checked = qDiv.querySelector('input[type="radio"]:checked');
        if (checked && checked.value.trim().toLowerCase() === q.answer.trim().toLowerCase()) {
          isCorrect = true;
        }
      } else {
        var input = qDiv.querySelector('.student-input');
        if (input) {
          var userVal = input.value.trim().toLowerCase();
          var acceptable = q.answer.toLowerCase().split("/").map(function (s) { return s.trim(); });
          if (acceptable.indexOf(userVal) !== -1 || q.answer.toLowerCase() === userVal) {
            isCorrect = true;
          }
        }
      }

      if (isCorrect) {
        correctCount++;
        qDiv.classList.add("graded-correct");
        qDiv.classList.remove("graded-wrong");
      } else {
        qDiv.classList.add("graded-wrong");
        qDiv.classList.remove("graded-correct");
      }
    });

    var scoreDisplay = document.getElementById("student-score-display");
    if (scoreDisplay) {
      scoreDisplay.innerHTML = '🎯 Your Score: <b>' + correctCount + ' / ' + total + '</b> (' + Math.round((correctCount / total) * 100) + '%)';
    }
  }

  /* ---------- Copy to Clipboard (Markdown / Plain Text) ---------- */
  function copyWorksheetMarkdown() {
    if (!activeWorksheet) return;
    var w = activeWorksheet;
    var lines = [];

    lines.push("# " + w.title);
    lines.push("## " + w.titleZh);
    lines.push("**Level:** " + w.level + " | **Topic:** " + w.category + " (" + w.categoryZh + ")");
    lines.push("**Instructions:** " + w.instructions);
    lines.push("");
    lines.push("Name: ______________________  Date: ______________  Score: ____ / " + w.questions.length);
    lines.push("");

    w.questions.forEach(function (q, idx) {
      lines.push((idx + 1) + ". " + q.prompt);
      if (q.options) {
        q.options.forEach(function (opt, optIdx) {
          lines.push("   (" + String.fromCharCode(65 + optIdx) + ") " + opt);
        });
      }
      lines.push("");
    });

    if (customOptions.includeAnswerKey) {
      lines.push("---");
      lines.push("### Answer Key & Explanations");
      w.questions.forEach(function (q, idx) {
        lines.push((idx + 1) + ". **" + q.answer + "** — " + q.explain);
      });
    }

    var text = lines.join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast("Worksheet copied to clipboard in Markdown! 练习纸已复制到剪贴板");
      }).catch(function () {
        fallbackCopyText(text);
      });
    } else {
      fallbackCopyText(text);
    }
  }

  function fallbackCopyText(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast("Worksheet copied! 练习纸已复制");
    } catch (err) {}
    document.body.removeChild(ta);
  }

  function showToast(msg) {
    var toast = document.getElementById("toast-msg");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-msg";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(function () { toast.classList.remove("show"); }, 2800);
  }

  /* ---------- Shuffle Questions ---------- */
  function shuffleWorksheetQuestions() {
    if (!activeWorksheet || !activeWorksheet.questions) return;
    var array = activeWorksheet.questions.slice();
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    activeWorksheet.questions = array;
    renderWorksheetPreview();
    showToast("Questions shuffled! 题目顺序已打乱");
  }

  /* ---------- Initialize UI Event Listeners ---------- */
  function init() {
    initTheme();

    // Render Categories bar
    var catBar = document.getElementById("category-pills");
    if (catBar) {
      catBar.innerHTML = categories.map(function (c) {
        return '<button type="button" class="category-pill' + (c.id === currentCategory ? ' active' : '') + '" data-category="' + c.id + '">' + c.icon + ' ' + c.name + '</button>';
      }).join("");

      catBar.querySelectorAll(".category-pill").forEach(function (b) {
        b.addEventListener("click", function () {
          currentCategory = b.dataset.category;
          updateFilterButtons();
          renderCatalog();
        });
      });
    }

    // Level buttons
    document.querySelectorAll(".level-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        currentLevel = b.dataset.level;
        updateFilterButtons();
        renderCatalog();
      });
    });

    // Search input
    var searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchQuery = searchInput.value;
        renderCatalog();
      });
    }

    // Studio Customizer inputs
    var schoolInput = document.getElementById("studio-school");
    if (schoolInput) {
      schoolInput.value = customOptions.schoolName;
      schoolInput.addEventListener("input", function () {
        customOptions.schoolName = schoolInput.value || "English Language Learning Center";
        renderWorksheetPreview();
      });
    }

    var classInput = document.getElementById("studio-class");
    if (classInput) {
      classInput.value = customOptions.className;
      classInput.addEventListener("input", function () {
        customOptions.className = classInput.value || "Class 1A";
        renderWorksheetPreview();
      });
    }

    var teacherInput = document.getElementById("studio-teacher");
    if (teacherInput) {
      teacherInput.value = customOptions.teacherName;
      teacherInput.addEventListener("input", function () {
        customOptions.teacherName = teacherInput.value || "Teacher";
        renderWorksheetPreview();
      });
    }

    var titleInput = document.getElementById("studio-title");
    if (titleInput) {
      titleInput.addEventListener("input", renderWorksheetPreview);
    }

    var instructionsInput = document.getElementById("studio-instructions");
    if (instructionsInput) {
      instructionsInput.addEventListener("input", renderWorksheetPreview);
    }

    // Checkboxes / Toggles
    var zhToggle = document.getElementById("toggle-zh");
    if (zhToggle) {
      zhToggle.checked = customOptions.includeZh;
      zhToggle.addEventListener("change", function () {
        customOptions.includeZh = zhToggle.checked;
        renderWorksheetPreview();
      });
    }

    var ansToggle = document.getElementById("toggle-answer-key");
    if (ansToggle) {
      ansToggle.checked = customOptions.includeAnswerKey;
      ansToggle.addEventListener("change", function () {
        customOptions.includeAnswerKey = ansToggle.checked;
        renderWorksheetPreview();
      });
    }

    var pageBreakToggle = document.getElementById("toggle-separate-page");
    if (pageBreakToggle) {
      pageBreakToggle.checked = customOptions.separateKeyPage;
      pageBreakToggle.addEventListener("change", function () {
        customOptions.separateKeyPage = pageBreakToggle.checked;
        renderWorksheetPreview();
      });
    }

    var studentModeToggle = document.getElementById("toggle-student-mode");
    if (studentModeToggle) {
      studentModeToggle.checked = customOptions.studentMode;
      studentModeToggle.addEventListener("change", function () {
        customOptions.studentMode = studentModeToggle.checked;
        renderWorksheetPreview();
      });
    }

    // Action buttons
    var printBtn = document.getElementById("btn-print-sheet");
    if (printBtn) {
      printBtn.addEventListener("click", function () {
        window.print();
      });
    }

    var copyBtn = document.getElementById("btn-copy-sheet");
    if (copyBtn) {
      copyBtn.addEventListener("click", copyWorksheetMarkdown);
    }

    var shuffleBtn = document.getElementById("btn-shuffle-sheet");
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", shuffleWorksheetQuestions);
    }

    // Initial render
    renderCatalog();
    if (worksheets.length > 0) {
      loadWorksheetIntoStudio(worksheets[0].id);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
