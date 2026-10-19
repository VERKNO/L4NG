/* C3KO app. Reads window.C3KO_DATA (js/data.js); see README.md for structure. */
(function () {
  "use strict";

  var DATA = window.C3KO_DATA;
  // Append each level's review lesson as its last, trackable topic.
  var REVIEWS = window.C3KO_REVIEWS || {};
  DATA.levels.forEach(function (L) {
    var r = REVIEWS[L.id];
    if (!r || L.topics.some(function (t) { return t.review; })) return;
    L.topics.push({ id: L.id.toLowerCase() + "-review", title: "Putting it all together", what: r.what, review: true, sentences: r.sentences });
  });
  var LS_KEY = "c3ko.progress.v1";      // { s: {topicId: 0|1|2}, n: {topicId: "note"}, t: updatedAtMs }
  var LS_OPEN = "c3ko.open.v1";         // list of expanded topic ids (convenience only)
  var PASS = 0.8;                       // share of "Known" topics needed to count a level as reached

  // ---------- language ----------
  // English UI text lives here; other languages come from js/lang-<code>.js (window.C3KO_LANG).
  var EN_UI = {
    tagline: "Czech grammar, A1 to C2. Mark each topic as you learn it.",
    estimated: "Estimated level", reached: "Reached {lv}", working: "Working on {lv} {name}",
    working_sub: "{known} of {total} {lv} topics known, {learning} in progress. A level counts as reached at {pass}% known.",
    all_reached: "All levels reached", all_reached_sub: "Every level is at least {pass}% known.",
    chip_known: "{known}/{total} known", count: "{known} known · {learning} learning · {total} topics",
    search: "Search topics, e.g. genitive, aby, půl",
    f_all: "All", f_new: "New", f_learning: "Learning", f_known: "Known",
    s_new: "New", s_learning: "Learning", s_known: "Known",
    expand_all: "Expand all", collapse_all: "Collapse all", sync_backup: "Sync & backup",
    what: "What it is", pattern: "Pattern", examples: "Examples", tip: "Tip", notes: "My notes",
    notes_ph: "Your own examples, mistakes to remember…",
    how_to: "How to use this", review_title: "Putting it all together", review_prefix: "Review · ",
    review_ph: "Write your own sentence using this level's grammar…", note_badge: "• note",
    empty: "No topics match. Clear the search or pick another filter.",
    footer: "Levels follow the usual CEFR order for Czech courses; exact placement varies between textbooks. A level counts as reached when 80% of its topics are marked Known.",
    gist_h: "Sync with GitHub",
    gist_intro: "Keep progress the same on your phone and computer. It's saved in a secret gist in your own GitHub account; nothing goes into the app's repository.",
    gist_step1: '<a href="https://github.com/settings/tokens/new?scopes=gist&amp;description=C3KO%20sync" target="_blank" rel="noopener">Create a GitHub token</a> with only the <b>gist</b> box ticked, and copy it.',
    gist_step2: "Paste it below and connect. Do this once on each device.",
    connect: "Connect", sync_now: "Sync now", disconnect: "Disconnect", backup_h: "Backup",
    backup_intro: "Progress saves automatically on this device{sync}. To move it without GitHub, copy this text and restore it on the other device.",
    copy: "Copy backup", restore: "Restore from text", reset: "Reset progress", reset_confirm: "Click again to erase all progress",
    copied: "Copied. Paste it somewhere safe.", selected: "Text selected. Press Ctrl+C / Cmd+C to copy.",
    restored: "Restored {s} statuses and {n} notes.", bad_backup: "That text isn't a valid backup. Paste the full text you copied earlier.",
    erased: "All progress erased.", claude_sync: " and in your claude.ai account",
    g_paste: "Paste your GitHub token first.", g_connecting: "Connecting…", g_syncing: "Syncing…",
    g_synced: "Synced with your GitHub gist. Last sync: {when}.", g_not_yet: "not yet",
    g_badtoken: "That token didn't work. Check that it has the gist permission and try again.",
    g_offline_connect: "Couldn't reach GitHub. Check your connection and try again.",
    g_auth: "GitHub rejected the token. Disconnect and connect again with a new token.",
    g_missing: "The sync gist was deleted on GitHub. Disconnect and connect again to create a new one.",
    g_offline: "Couldn't reach GitHub. Your changes are saved on this device and will sync when you're back online.",
    g_disconnected: "Disconnected. Progress stays on this device; the gist on GitHub is untouched.",
    lang_label: "Language",
    faq_h: "Common confusions", faq_intro: "The mix-ups learners make most often, with short answers and examples.",
    faq_related: "Related topics:",
    words_title: "Verbs in {lv}", words_intro: "Verbs used at this level, grouped by infinitive ending. Irregular means the present stem changes or the verb doesn't follow its group's pattern.",
    regular: "Regular", irregular: "Irregular", col_inf: "Infinitive", col_ja: "já", col_oni: "oni", col_past: "Past (on)",
    col_meaning: "Meaning", col_note: "Note", none: "—",
    exam_title: "Exam {lv}", exam_intro: "{n} multiple-choice questions picked at random from every skill in {lv}. Every exam is different.",
    exam_best: "Best score: {b} of {n} ({p}%)", start: "Start exam", check: "Check answers", answered: "{a} of {n} answered",
    score: "{c} of {n} correct ({p}%)", missed: "Skills to review", mark_missed: "Mark these as Learning", marked: "Marked as Learning.",
    new_exam: "New exam", correct_was: "Correct answer: {a}", unanswered: "Not answered", all_right: "Everything right. Well done!",
    skill: "Skill: {t}", exam_none: "The exam for this level is being written."
  };
  var LANGS = window.C3KO_LANG || {};
  var LS_LANG = "c3ko.lang";
  var lang = lsGet(LS_LANG) || (/^id\b/i.test(navigator.language || "") ? "id" : "en");
  if (lang !== "en" && !LANGS[lang]) lang = "en";
  var synced = false; // true when the claude.ai account sync is active

  function tr(s) {
    if (!s || lang === "en") return s;
    var d = LANGS[lang].t;
    return Object.prototype.hasOwnProperty.call(d, s) ? d[s] : s;
  }
  function ui(key, vars) {
    var d = lang !== "en" && LANGS[lang].ui && LANGS[lang].ui[key] !== undefined ? LANGS[lang].ui[key] : EN_UI[key];
    return String(d).replace(/\{(\w+)\}/g, function (m, k) { return vars && vars[k] !== undefined ? vars[k] : m; });
  }
  function labels() { return [ui("s_new"), ui("s_learning"), ui("s_known")]; }
  function L2(x) { return Array.isArray(x) ? (lang === "id" && x[1] ? x[1] : x[0]) : x; }
  function applyStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = ui(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) { el.innerHTML = ui(el.getAttribute("data-i18n-html")); });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", ui(el.getAttribute("data-i18n-ph"))); });
    var bi = document.getElementById("backup-intro");
    if (bi) bi.textContent = ui("backup_intro", { sync: synced ? ui("claude_sync") : "" });
    document.querySelectorAll('[data-act="lang"]').forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-v") === lang)); });
  }

  var state = { s: {}, n: {}, t: 0, x: {} };
  var open = {};
  var filter = "all";
  var query = "";
  var cloud = null; // { ref } when the claude.ai store is available

  // ---------- storage ----------
  function lsGet(key) { try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; } }
  function lsSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  function clean(raw) {
    var out = { s: {}, n: {}, t: 0, x: {} };
    if (!raw || typeof raw !== "object") return out;
    var s = raw.s || {}, n = raw.n || {};
    Object.keys(s).forEach(function (k) { var v = Number(s[k]); if (v === 1 || v === 2) out.s[k] = v; });
    Object.keys(n).forEach(function (k) { if (typeof n[k] === "string" && n[k].trim()) out.n[k] = n[k]; });
    out.t = Number(raw.t) || 0;
    if (raw.x && typeof raw.x === "object") Object.keys(raw.x).forEach(function (k) {
      var v = raw.x[k];
      if (v && typeof v.best === "number" && typeof v.total === "number") out.x[k] = { best: v.best, total: v.total, last: Number(v.last) || 0, t: Number(v.t) || 0 };
    });
    return out;
  }

  var saveTimer = null, saving = false, pending = false;
  function save() {
    state.t = Date.now();
    lsSet(LS_KEY, state);
    gist.schedulePush();
    if (!cloud) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(pushCloud, 800);
  }
  function pushCloud() {
    if (saving) { pending = true; return; }
    saving = true;
    cloud.ref.set({ s: state.s, n: state.n, t: state.t, x: state.x }).catch(function () {}).then(function () {
      saving = false;
      if (pending) { pending = false; pushCloud(); }
    });
  }

  function connectCloud() {
    if (!window.claude || typeof window.claude.use !== "function") return;
    Promise.all([window.claude.use("db"), window.claude.use("user")]).then(function (r) {
      var db = r[0], user = r[1];
      if (!db || !user) return null;
      return user.id().then(function (id) {
        if (!id) return;
        var ref = db.collection("data/users/" + id).doc("progress");
        return ref.get().then(function (snap) {
          cloud = { ref: ref };
          var remote = snap.exists ? clean(snap.data()) : null;
          if (remote && remote.t >= state.t) { state = remote; lsSet(LS_KEY, state); render(); }
          else if (state.t) pushCloud();
          synced = true; applyStatic();
        });
      });
    }).catch(function () {});
  }

  // ---------- optional sync to a secret GitHub gist (not used inside claude.ai) ----------
  var gist = (function () {
    var KEY = "c3ko.sync.v1";              // { token, gistId, last }
    var FILE = "c3ko-progress.json";
    var API = "https://api.github.com";
    var cfg = lsGet(KEY) || null;
    var timer = null, busy = false, again = false, dirty = false, lastMsg = null;

    function on() { return !!(cfg && cfg.token && cfg.gistId); }
    function call(method, path, body) {
      return fetch(API + path, {
        method: method,
        headers: {
          "Authorization": "Bearer " + cfg.token,
          "Accept": "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "Content-Type": "application/json"
        },
        body: body ? JSON.stringify(body) : undefined,
        cache: "no-store"
      }).then(function (r) {
        if (r.status === 401 || r.status === 403) throw { auth: true };
        if (r.status === 404) throw { missing: true };
        if (!r.ok) throw { status: r.status };
        return r.json();
      });
    }
    function stamp() { cfg.last = Date.now(); lsSet(KEY, cfg); lastMsg = null; show(); }
    function fail(e) {
      lastMsg = e && e.auth ? "g_auth" : e && e.missing ? "g_missing" : "g_offline";
      status(ui(lastMsg));
    }

    function push() {
      if (!on()) return Promise.resolve();
      if (busy) { again = true; return Promise.resolve(); }
      busy = true;
      var files = {}; files[FILE] = { content: JSON.stringify(state) };
      return call("PATCH", "/gists/" + cfg.gistId, { files: files })
        .then(function () { dirty = false; stamp(); }, function (e) { dirty = true; fail(e); })
        .then(function () { busy = false; if (again) { again = false; push(); } });
    }
    function pull() {
      if (!on()) return Promise.resolve();
      return call("GET", "/gists/" + cfg.gistId).then(function (g) {
        var f = g.files && g.files[FILE];
        var remote = f ? clean(JSON.parse(f.content || "{}")) : null;
        if (remote && remote.t > state.t) {
          state = remote; lsSet(LS_KEY, state); render(); stamp();
        } else if (dirty || !remote || state.t > remote.t) {
          return push();
        } else stamp();
      }).catch(fail);
    }
    function connect(token) {
      cfg = { token: token.trim() };
      status(ui("g_connecting"));
      return call("GET", "/gists?per_page=100").then(function (list) {
        var found = list.filter(function (g) { return g.files && g.files[FILE]; })[0];
        if (found) { cfg.gistId = found.id; lsSet(KEY, cfg); return pull(); }
        var files = {}; files[FILE] = { content: JSON.stringify(state) };
        return call("POST", "/gists", { description: "C3KO progress (used by the C3KO app)", public: false, files: files })
          .then(function (g) { cfg.gistId = g.id; lsSet(KEY, cfg); stamp(); });
      }).then(function () { show(); }, function (e) {
        cfg = null; lsSet(KEY, null); show();
        lastMsg = e && e.auth ? "g_badtoken" : "g_offline_connect";
        status(ui(lastMsg));
      });
    }
    function disconnect() {
      cfg = null;
      try { localStorage.removeItem(KEY); } catch (e) {}
      lastMsg = "g_disconnected";
      show(); status(ui(lastMsg));
    }

    function status(text) { var el = document.getElementById("gist-status"); if (el) el.textContent = text; }
    function show() {
      var box = document.getElementById("gist");
      if (!box) return;
      document.getElementById("gist-off").hidden = on();
      document.getElementById("gist-on").hidden = !on();
      var badge = document.getElementById("sync-badge");
      if (badge) badge.hidden = !on();
      if (lastMsg) status(ui(lastMsg));
      else if (on()) {
        var when = cfg.last ? new Date(cfg.last).toLocaleString(lang === "id" ? "id-ID" : [], { dateStyle: "medium", timeStyle: "short" }) : ui("g_not_yet");
        status(ui("g_synced", { when: when }));
      }
    }

    return {
      on: on, push: push, pull: pull, connect: connect, disconnect: disconnect, show: show, status: status,
      schedulePush: function () {
        if (!on()) return;
        dirty = true;
        clearTimeout(timer);
        timer = setTimeout(push, 1500);
      }
    };
  })();

  // ---------- helpers ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fold(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function st(id) { return state.s[id] || 0; }

  function levelStats(level) {
    var k = 0, l = 0;
    level.topics.forEach(function (t) { var v = st(t.id); if (v === 2) k++; else if (v === 1) l++; });
    return { known: k, learning: l, total: level.topics.length };
  }
  function estimate() {
    var reached = null, working = DATA.levels[0];
    for (var i = 0; i < DATA.levels.length; i++) {
      var s = levelStats(DATA.levels[i]);
      if (s.known / s.total >= PASS) { reached = DATA.levels[i]; working = DATA.levels[i + 1] || null; }
      else { working = DATA.levels[i]; break; }
    }
    return { reached: reached, working: working };
  }
  function bar(s) {
    return '<div class="bar" role="img" aria-label="' + s.known + ' known, ' + s.learning + ' learning of ' + s.total + '">' +
      '<i class="k" style="width:' + (100 * s.known / s.total) + '%"></i>' +
      '<i class="l" style="width:' + (100 * s.learning / s.total) + '%"></i></div>';
  }

  // ---------- render: summary ----------
  function renderSummary() {
    var e = estimate();
    var big = document.getElementById("est-big");
    var line = document.getElementById("est-line");
    var sub = document.getElementById("est-sub");
    big.textContent = e.reached ? e.reached.id : "–";
    if (e.working) {
      var ws = levelStats(e.working);
      line.textContent = (e.reached ? ui("reached", { lv: e.reached.id }) + " · " : "") + ui("working", { lv: e.working.id, name: tr(e.working.name) });
      sub.textContent = ui("working_sub", { known: ws.known, total: ws.total, lv: e.working.id, learning: ws.learning, pass: Math.round(PASS * 100) });
    } else {
      line.textContent = ui("all_reached");
      sub.textContent = ui("all_reached_sub", { pass: Math.round(PASS * 100) });
    }
    document.getElementById("levels").innerHTML = DATA.levels.map(function (L) {
      var s = levelStats(L);
      var cur = e.working && e.working.id === L.id ? " current" : "";
      return '<a class="chip' + cur + '" href="#' + L.id + '"><b>' + L.id + '</b>' + bar(s) +
        '<small>' + ui("chip_known", { known: s.known, total: s.total }) + '</small></a>';
    }).join("");
    DATA.levels.forEach(function (L) {
      var s = levelStats(L);
      var c = document.getElementById("count-" + L.id);
      var b = document.getElementById("bar-" + L.id);
      if (c) c.textContent = ui("count", { known: s.known, learning: s.learning, total: s.total });
      if (b) b.innerHTML = bar(s);
    });
  }

  // ---------- render: topics ----------
  function matches(t) {
    var v = st(t.id);
    if (filter === "new" && v !== 0) return false;
    if (filter === "learning" && v !== 1) return false;
    if (filter === "known" && v !== 2) return false;
    if (!query) return true;
    var hay = [t.title, tr(t.title), t.what, tr(t.what), patternText(t.pattern), t.tip || "", tr(t.tip) || "", state.n[t.id] || ""]
      .concat((t.sentences || []).map(function (s) { return s.en + " " + tr(s.en) + " " + s.parts.map(function (p) { return p[0] + " " + p[1] + " " + tr(p[1]); }).join(" "); }))
      .concat((t.examples || []).map(function (x) { return x.join(" ") + " " + tr(x[1]); })).join(" ");
    return fold(hay).indexOf(fold(query)) !== -1;
  }

  function statusHtml(t) {
    var v = st(t.id);
    return '<div class="status" role="group" aria-label="' + esc(tr(t.title)) + '">' +
      labels().map(function (lab, i) {
        return '<button type="button" data-act="status" data-id="' + t.id + '" data-v="' + i + '" aria-pressed="' + (v === i) + '">' + lab + '</button>';
      }).join("") + '</div>';
  }

  // Pattern cells: {x} marks the changing ending; "→" gets its own style.
  function cell(s) {
    return esc(s)
      .replace(/\{([^}]*)\}/g, '<b class="end">$1</b>')
      .replace(/ → /g, ' <span class="arr" aria-hidden="true">→</span> ');
  }
  function patternHtml(p) {
    if (typeof p === "string") return '<h3>' + ui("pattern") + '</h3><pre class="pattern">' + esc(p) + '</pre>';
    return p.map(function (b) {
      return '<figure class="ptable">' +
        '<figcaption>' + esc(b.title ? tr(b.title) : ui("pattern")) + '</figcaption>' +
        '<div class="scroll"><table><thead><tr>' +
        b.head.map(function (x) { return '<th scope="col">' + esc(tr(x)) + '</th>'; }).join("") +
        '</tr></thead><tbody>' +
        b.rows.map(function (r) {
          return '<tr>' + r.map(function (x, i) {
            return i === 0 ? '<th scope="row">' + cell(tr(x)) + '</th>' : '<td lang="cs">' + cell(tr(x)) + '</td>';
          }).join("") + '</tr>';
        }).join("") +
        '</tbody></table></div>' +
        (b.note ? '<p class="pnote">' + cell(tr(b.note)) + '</p>' : '') +
        '</figure>';
    }).join("");
  }
  function patternText(p) {
    if (!p) return "";
    if (typeof p === "string") return p;
    return p.map(function (b) {
      return [b.title || "", b.note || "", b.head.join(" ")].concat(b.rows.map(function (r) { return r.join(" "); })).join(" ");
    }).join(" ").replace(/[{}]/g, "");
  }

  function reviewHtml(t) {
    return '<ol class="sentences">' + t.sentences.map(function (s) {
      var line = s.parts.map(function (p, i) {
        return '<span class="part c' + (i % 5) + '">' + esc(p[0]) + '<sup>' + (i + 1) + '</sup></span>';
      }).join(" ");
      var rows = s.parts.map(function (p, i) {
        var t2 = p[2] ? findTopic(p[2]) : null;
        return '<li class="c' + (i % 5) + '"><span class="num">' + (i + 1) + '</span>' +
          '<div class="pt"><b lang="cs">' + esc(p[0]) + '</b><span>' + esc(tr(p[1])) + '</span>' +
          (t2 ? '<button type="button" class="goto" data-act="goto" data-id="' + t2.id + '">' + esc(tr(t2.title)) + ' →</button>' : '') +
          '</div></li>';
      }).join("");
      return '<li class="sentence"><p class="line" lang="cs">' + line + '</p>' +
        '<p class="en">' + esc(tr(s.en)) + '</p><ul class="parts">' + rows + '</ul></li>';
    }).join("") + '</ol>';
  }

  function panelHtml(t) {
    var h = '<div class="panel" id="panel-' + t.id + '">';
    if (t.review) {
      h += '<div><h3>' + ui("how_to") + '</h3><p>' + esc(tr(t.what)) + '</p></div>' + reviewHtml(t);
      h += '<div class="notes"><h3><label for="note-' + t.id + '">' + ui("notes") + '</label></h3>' +
        '<textarea id="note-' + t.id + '" data-act="note" data-id="' + t.id + '" placeholder="' + esc(ui("review_ph")) + '">' +
        esc(state.n[t.id] || "") + '</textarea></div>';
      return h + '</div>';
    }
    h += '<div><h3>' + ui("what") + '</h3><p>' + esc(tr(t.what)) + '</p></div>';
    if (t.pattern) h += '<div class="patterns">' + patternHtml(t.pattern) + '</div>';
    if (t.examples && t.examples.length) {
      h += '<div><h3>' + ui("examples") + '</h3><dl class="examples">' + t.examples.map(function (x) {
        return '<dt lang="cs">' + esc(x[0]) + '</dt><dd>' + esc(tr(x[1])) + '</dd>';
      }).join("") + '</dl></div>';
    }
    if (t.tip) h += '<div class="tip"><h3>' + ui("tip") + '</h3><p>' + esc(tr(t.tip)) + '</p></div>';
    h += '<div class="notes"><h3><label for="note-' + t.id + '">' + ui("notes") + '</label></h3>' +
      '<textarea id="note-' + t.id + '" data-act="note" data-id="' + t.id + '" placeholder="' + esc(ui("notes_ph")) + '">' +
      esc(state.n[t.id] || "") + '</textarea></div>';
    return h + '</div>';
  }

  function titleHtml(t) {
    return (t.review ? '<span class="rv">' + esc(ui("review_prefix")) + '</span>' + esc(ui("review_title")) : esc(tr(t.title))) +
      (state.n[t.id] ? '<span class="has-note">' + esc(ui("note_badge")) + '</span>' : '');
  }

  function topicHtml(t) {
    var isOpen = !!open[t.id];
    return '<li class="topic' + (t.review ? ' review' : '') + '" id="t-' + t.id + '" data-s="' + st(t.id) + '">' +
      '<div class="topic-row">' +
      '<button type="button" class="expand" data-act="toggle" data-id="' + t.id + '" aria-expanded="' + isOpen + '" aria-controls="panel-' + t.id + '">' +
      '<svg class="chev" viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1.5 6.5 5 3 8.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>' +
      '<span class="t">' + titleHtml(t) + '</span></button>' +
      statusHtml(t) + '</div>' +
      (isOpen ? panelHtml(t) : '') + '</li>';
  }

  // ---------- FAQ ----------
  var FAQ = window.C3KO_FAQ || [];
  var openX = lsGet("c3ko.openx.v1") || {}; // which FAQ / words / exam boxes are open (convenience only)
  function xOpen(key) { return openX[key] ? " open" : ""; }
  function renderFaq() {
    var box = document.getElementById("faq");
    if (!box) return;
    if (!FAQ.length) { box.hidden = true; return; }
    box.innerHTML = '<details class="xbox faqbox" data-x="faq"' + xOpen("faq") + '><summary><span class="xt">' + esc(ui("faq_h")) +
      '</span><span class="xn">' + FAQ.length + '</span></summary><p class="xintro">' + esc(ui("faq_intro")) + '</p>' +
      FAQ.map(function (f) {
        return '<details class="faq-item" data-x="faq-' + f.id + '"' + xOpen("faq-" + f.id) + '><summary>' + esc(L2(f.q)) + '</summary>' +
          '<div class="faq-body"><p>' + esc(L2(f.a)) + '</p>' +
          (f.ex && f.ex.length ? '<ul class="faq-ex">' + f.ex.map(function (e) {
            return '<li><b lang="cs">' + cell(e[0]) + '</b><span>' + esc(L2(e[1])) + '</span></li>';
          }).join("") + '</ul>' : '') +
          (f.topics && f.topics.length ? '<p class="faq-links">' + esc(ui("faq_related")) + ' ' + f.topics.map(function (id) {
            var t = findTopic(id);
            return t ? '<button type="button" class="goto" data-act="goto" data-id="' + id + '">' + esc(tr(t.title)) + '</button>' : '';
          }).join(" · ") + '</p>' : '') +
          '</div></details>';
      }).join("") + '</details>';
  }

  // ---------- words ----------
  var WORDS = window.C3KO_WORDS || {}, WGROUPS = window.C3KO_WORD_GROUPS || {};
  function wordsHtml(L) {
    var rows = WORDS[L.id];
    if (!rows || !rows.length) return "";
    var groups = Object.keys(WGROUPS).map(function (g) {
      var list = rows.filter(function (r) { return r[5] === g; });
      if (!list.length) return "";
      var part = function (irr) {
        var sub = list.filter(function (r) { return !!r[6] === irr; });
        if (!sub.length) return "";
        return '<h4>' + esc(ui(irr ? "irregular" : "regular")) + '</h4><div class="scroll"><table class="words"><thead><tr>' +
          ["col_inf", "col_ja", "col_oni", "col_past", "col_meaning", "col_note"].map(function (k) { return '<th scope="col">' + esc(ui(k)) + '</th>'; }).join("") +
          '</tr></thead><tbody>' + sub.map(function (r) {
            return '<tr><th scope="row" lang="cs">' + esc(r[0]) + '</th><td lang="cs">' + esc(r[1]) + '</td><td lang="cs">' + esc(r[2]) +
              '</td><td lang="cs">' + esc(r[3]) + '</td><td>' + esc(L2(r[4])) + '</td><td class="wnote">' + (r[7] ? esc(L2(r[7])) : '') + '</td></tr>';
          }).join("") + '</tbody></table></div>';
      };
      return '<section class="wgroup"><h3 class="wg" lang="cs">' + esc(L2(WGROUPS[g])) + '</h3>' + part(false) + part(true) + '</section>';
    }).join("");
    return '<details class="xbox" data-x="words-' + L.id + '"' + xOpen("words-" + L.id) + '><summary><span class="xt">' +
      esc(ui("words_title", { lv: L.id })) + '</span><span class="xn">' + rows.length + '</span></summary>' +
      '<p class="xintro">' + esc(ui("words_intro")) + '</p>' + groups + '</details>';
  }

  // ---------- exams ----------
  var EXAMS = window.C3KO_EXAMS || {};
  var exams = {}; // level id -> { qs: [...], picked: [], checked: bool } while the page is open
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function okey(x) { return Array.isArray(x) ? x.join("|") : String(x); }
  function buildExam(L) {
    var bank = EXAMS[L.id];
    var skills = L.topics.map(function (t) { return t.id; }).filter(function (id) { return bank[id] && bank[id].items.length; });
    var used = {}, qs = [];
    function add(skill) {
      var pool = bank[skill].items.filter(function (it, i) { return !used[skill + ":" + i]; });
      if (!pool.length) return false;
      var it = pool[Math.floor(Math.random() * pool.length)];
      used[skill + ":" + bank[skill].items.indexOf(it)] = true;
      var opts = shuffle([it[1]].concat(it[2].slice(0, 3)));
      qs.push({ skill: skill, also: it[3] || [], ask: bank[skill].ask, q: it[0], opts: opts, answer: opts.map(okey).indexOf(okey(it[1])) });
      return true;
    }
    skills.forEach(add);
    var guard = 0;
    while (qs.length < 10 && guard++ < 200) add(skills[Math.floor(Math.random() * skills.length)]);
    return { qs: shuffle(qs), picked: [], checked: false };
  }
  function promptHtml(q) {
    return esc(L2(q)).replace(/___/g, '<span class="blank">___</span>').replace(/\{([^}]*)\}/g, '<b class="end">$1</b>');
  }
  function examHtml(L) {
    var bank = EXAMS[L.id];
    var key = "exam-" + L.id;
    var best = state.x[L.id];
    var n = L.topics.length < 10 ? 10 : L.topics.length;
    var head = '<details class="xbox exam" data-x="' + key + '"' + xOpen(key) + '><summary><span class="xt">' + esc(ui("exam_title", { lv: L.id })) + '</span>' +
      (best ? '<span class="xn">' + best.best + '/' + best.total + '</span>' : '') + '</summary>';
    if (!bank) return head + '<p class="xintro">' + esc(ui("exam_none")) + '</p></details>';
    var ex = exams[L.id];
    var h = head + '<p class="xintro">' + esc(ui("exam_intro", { n: n, lv: L.id })) +
      (best ? ' ' + esc(ui("exam_best", { b: best.best, n: best.total, p: Math.round(100 * best.best / best.total) })) : '') + '</p>';
    if (!ex) return h + '<button type="button" class="tool primary" data-act="exam-start" data-id="' + L.id + '">' + esc(ui("start")) + '</button></details>';
    var correct = 0, missed = {};
    ex.qs.forEach(function (q, i) { if (ex.picked[i] === q.answer) correct++; else { missed[q.skill] = true; q.also.forEach(function (s) { missed[s] = true; }); } });
    if (ex.checked) {
      var p = Math.round(100 * correct / ex.qs.length);
      var ms = Object.keys(missed);
      h += '<div class="exam-result" role="status"><p class="score">' + esc(ui("score", { c: correct, n: ex.qs.length, p: p })) + '</p>' +
        (ms.length ? '<p class="xintro">' + esc(ui("missed")) + ':</p><p class="faq-links">' + ms.map(function (id) {
          var t = findTopic(id); return t ? '<button type="button" class="goto" data-act="goto" data-id="' + id + '">' + esc(t.review ? ui("review_title") : tr(t.title)) + '</button>' : '';
        }).join(" · ") + '</p><button type="button" class="tool" data-act="exam-mark" data-id="' + L.id + '">' + esc(ui("mark_missed")) + '</button>'
          : '<p>' + esc(ui("all_right")) + '</p>') + '</div>';
    }
    h += '<ol class="questions">' + ex.qs.map(function (q, i) {
      var picked = ex.picked[i];
      var state2 = ex.checked ? (picked === q.answer ? " right" : " wrong") : "";
      var t = findTopic(q.skill);
      return '<li class="question' + state2 + '"><p class="ask">' + esc(L2(q.ask)) + '</p><p class="prompt" lang="cs">' + promptHtml(q.q) + '</p>' +
        '<div class="opts" role="group">' + q.opts.map(function (o, j) {
          var cls = ex.checked ? (j === q.answer ? " is-answer" : (j === picked ? " is-wrong" : "")) : "";
          return '<button type="button" class="opt' + cls + '" data-act="exam-pick" data-id="' + L.id + '" data-q="' + i + '" data-v="' + j + '" aria-pressed="' + (picked === j) + '"' + (ex.checked ? ' disabled' : '') + '>' + esc(L2(o)) + '</button>';
        }).join("") + '</div>' +
        (ex.checked ? '<p class="qfoot">' + (picked === undefined ? esc(ui("unanswered")) + ' · ' : '') +
          (picked !== q.answer ? esc(ui("correct_was", { a: L2(q.opts[q.answer]) })) + ' · ' : '') +
          (t ? '<button type="button" class="goto" data-act="goto" data-id="' + t.id + '">' + esc(ui("skill", { t: t.review ? ui("review_title") : tr(t.title) })) + '</button>' : '') + '</p>' : '') +
        '</li>';
    }).join("") + '</ol>';
    var answered = ex.picked.filter(function (x) { return x !== undefined; }).length;
    h += '<div class="exam-foot">' + (ex.checked
      ? '<button type="button" class="tool primary" data-act="exam-start" data-id="' + L.id + '">' + esc(ui("new_exam")) + '</button>'
      : '<span class="xintro">' + esc(ui("answered", { a: answered, n: ex.qs.length })) + '</span><button type="button" class="tool primary" data-act="exam-check" data-id="' + L.id + '">' + esc(ui("check")) + '</button>') +
      '</div>';
    return h + '</details>';
  }
  function rerenderExam(levelId) {
    var el = document.querySelector('[data-x="exam-' + levelId + '"]');
    var L = DATA.levels.filter(function (x) { return x.id === levelId; })[0];
    if (!el || !L) return;
    var tmp = document.createElement("div");
    tmp.innerHTML = examHtml(L);
    el.replaceWith(tmp.firstChild);
  }

  function render() {
    var main = document.getElementById("main");
    var any = false;
    main.innerHTML = DATA.levels.map(function (L) {
      var list = L.topics.filter(matches);
      if (!list.length && (filter !== "all" || query)) return "";
      any = true;
      return '<section class="level" id="' + L.id + '" aria-labelledby="h-' + L.id + '">' +
        '<div class="level-head"><div class="title"><h2 id="h-' + L.id + '">' + L.id + ' <span>' + esc(tr(L.name)) + '</span></h2>' +
        '<span class="count" id="count-' + L.id + '"></span></div>' +
        '<p>' + esc(tr(L.goal)) + '</p><div id="bar-' + L.id + '"></div></div>' +
        '<ul class="topics">' + list.map(topicHtml).join("") + '</ul>' +
        (filter === "all" && !query ? '<div class="extras">' + wordsHtml(L) + examHtml(L) + '</div>' : '') + '</section>';
    }).join("");
    if (!any) main.innerHTML = '<p class="empty">' + esc(ui("empty")) + '</p>';
    renderSummary();
  }

  function rerenderTopic(id) {
    var li = document.getElementById("t-" + id);
    var t = findTopic(id);
    if (!li || !t) return;
    var tmp = document.createElement("ul");
    tmp.innerHTML = topicHtml(t);
    li.replaceWith(tmp.firstChild);
  }
  function findTopic(id) {
    for (var i = 0; i < DATA.levels.length; i++)
      for (var j = 0; j < DATA.levels[i].topics.length; j++)
        if (DATA.levels[i].topics[j].id === id) return DATA.levels[i].topics[j];
    return null;
  }

  // ---------- events ----------
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-act]");
    if (!b) return;
    var act = b.getAttribute("data-act"), id = b.getAttribute("data-id");
    if (act === "toggle") {
      open[id] = !open[id];
      if (!open[id]) delete open[id];
      lsSet(LS_OPEN, Object.keys(open));
      rerenderTopic(id);
      var nb = document.querySelector('#t-' + id + ' .expand'); if (nb) nb.focus();
    } else if (act === "goto") {
      open[id] = true;
      lsSet(LS_OPEN, Object.keys(open));
      if (!document.getElementById("t-" + id)) {
        // hidden by search or filter: clear them so the topic is visible
        query = ""; filter = "all";
        document.getElementById("search").value = "";
        document.querySelectorAll('[data-act="filter"]').forEach(function (x) { x.setAttribute("aria-pressed", String(x.getAttribute("data-v") === "all")); });
        render();
      } else rerenderTopic(id);
      var target = document.getElementById("t-" + id);
      if (target) {
        target.scrollIntoView({ block: "start", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        var eb = target.querySelector(".expand"); if (eb) eb.focus({ preventScroll: true });
      }
    } else if (act === "status") {
      var v = Number(b.getAttribute("data-v"));
      if (v) state.s[id] = v; else delete state.s[id];
      save();
      if (filter !== "all") render(); else { rerenderTopic(id); renderSummary(); }
      var sb = document.querySelector('#t-' + id + ' .status [data-v="' + v + '"]'); if (sb) sb.focus();
    } else if (act === "filter") {
      filter = b.getAttribute("data-v");
      document.querySelectorAll('[data-act="filter"]').forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      render();
    } else if (act === "expand-all" || act === "collapse-all") {
      open = {};
      if (act === "expand-all") document.querySelectorAll(".topic").forEach(function (li) { open[li.id.slice(2)] = true; });
      lsSet(LS_OPEN, Object.keys(open));
      render();
    } else if (act === "backup") {
      var p = document.getElementById("backup");
      p.hidden = !p.hidden;
      if (!p.hidden) { document.getElementById("backup-text").value = JSON.stringify(state); msg(""); }
    } else if (act === "copy") {
      var ta = document.getElementById("backup-text");
      ta.value = JSON.stringify(state);
      var done = function () { msg(ui("copied")); };
      try {
        navigator.clipboard.writeText(ta.value).then(done, function () { ta.select(); msg(ui("selected")); });
      } catch (e) { ta.select(); msg(ui("selected")); }
    } else if (act === "restore") {
      try {
        var parsed = clean(JSON.parse(document.getElementById("backup-text").value));
        state = parsed; save(); render();
        msg(ui("restored", { s: Object.keys(state.s).length, n: Object.keys(state.n).length }));
      } catch (e) { msg(ui("bad_backup")); }
    } else if (act === "gist-connect") {
      var tok = document.getElementById("gist-token").value.trim();
      if (!tok) { gist.status(ui("g_paste")); return; }
      b.disabled = true;
      gist.connect(tok).then(function () { b.disabled = false; document.getElementById("gist-token").value = ""; });
    } else if (act === "gist-sync") {
      gist.status(ui("g_syncing"));
      gist.pull();
    } else if (act === "gist-disconnect") {
      gist.disconnect();
    } else if (act === "reset") {
      if (b.getAttribute("data-armed") !== "1") {
        b.setAttribute("data-armed", "1"); b.textContent = ui("reset_confirm");
        setTimeout(function () { b.removeAttribute("data-armed"); b.textContent = ui("reset"); }, 4000);
        return;
      }
      state = { s: {}, n: {}, t: 0, x: {} }; save(); render();
      b.removeAttribute("data-armed"); b.textContent = ui("reset");
      msg(ui("erased"));
    } else if (act === "lang") {
      lang = b.getAttribute("data-v");
      lsSet(LS_LANG, lang);
      applyStatic(); renderFaq(); render(); gist.show();
    } else if (act === "exam-start") {
      var Ls = DATA.levels.filter(function (x) { return x.id === id; })[0];
      exams[id] = buildExam(Ls);
      rerenderExam(id);
      var first = document.querySelector('[data-x="exam-' + id + '"] .opt'); if (first) first.focus();
    } else if (act === "exam-pick") {
      var ex = exams[id]; if (!ex || ex.checked) return;
      var qi = Number(b.getAttribute("data-q"));
      ex.picked[qi] = Number(b.getAttribute("data-v"));
      b.parentNode.querySelectorAll(".opt").forEach(function (o) { o.setAttribute("aria-pressed", String(o === b)); });
      var cnt = document.querySelector('[data-x="exam-' + id + '"] .exam-foot .xintro');
      if (cnt) cnt.textContent = ui("answered", { a: ex.picked.filter(function (x) { return x !== undefined; }).length, n: ex.qs.length });
    } else if (act === "exam-check") {
      var ex2 = exams[id]; if (!ex2) return;
      ex2.checked = true;
      var c = ex2.qs.filter(function (q, i) { return ex2.picked[i] === q.answer; }).length;
      var prev = state.x[id];
      if (!prev || c / ex2.qs.length > prev.best / prev.total) state.x[id] = { best: c, total: ex2.qs.length, last: c, t: Date.now() };
      else { prev.last = c; prev.t = Date.now(); }
      save();
      rerenderExam(id);
      var box = document.querySelector('[data-x="exam-' + id + '"] .exam-result');
      if (box) box.scrollIntoView({ block: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    } else if (act === "exam-mark") {
      var ex3 = exams[id]; if (!ex3) return;
      ex3.qs.forEach(function (q, i) {
        if (ex3.picked[i] !== q.answer) [q.skill].concat(q.also).forEach(function (s2) { state.s[s2] = 1; });
      });
      save(); render();
      var mb = document.querySelector('[data-x="exam-' + id + '"] [data-act="exam-mark"]');
      if (mb) { mb.disabled = true; mb.textContent = ui("marked"); }
    }
  });

  // remember which FAQ / words / exam boxes are open
  document.addEventListener("toggle", function (ev) {
    var d = ev.target;
    if (!d.getAttribute || !d.getAttribute("data-x")) return;
    var k = d.getAttribute("data-x");
    if (d.open) openX[k] = true; else delete openX[k];
    lsSet("c3ko.openx.v1", openX);
  }, true);

  var noteTimer = {};
  document.addEventListener("input", function (ev) {
    var el = ev.target;
    if (el.id === "search") {
      query = el.value.trim();
      render();
      return;
    }
    if (el.getAttribute("data-act") === "note") {
      var id = el.getAttribute("data-id");
      var had = !!state.n[id];
      if (el.value.trim()) state.n[id] = el.value; else delete state.n[id];
      clearTimeout(noteTimer[id]);
      noteTimer[id] = setTimeout(save, 500);
      if (had !== !!state.n[id]) {
        var row = document.querySelector('#t-' + id + ' .expand .t');
        if (row) row.innerHTML = titleHtml(findTopic(id));
      }
    }
  });

  function msg(text) { document.getElementById("backup-msg").textContent = text; }

  // ---------- boot ----------
  state = clean(lsGet(LS_KEY));
  (lsGet(LS_OPEN) || []).forEach(function (id) { if (findTopic(id)) open[id] = true; });
  applyStatic();
  renderFaq();
  render();

  if (window.claude) {
    // Running as a claude.ai Artifact: progress syncs through the claude.ai account instead.
    var g = document.getElementById("gist"); if (g) g.hidden = true;
    connectCloud();
  } else {
    gist.show();
    gist.pull();
    document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible") gist.pull(); });
    window.addEventListener("online", function () { gist.pull(); });
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
      try { navigator.serviceWorker.register("sw.js").catch(function () {}); } catch (e) {}
    }
  }
})();
