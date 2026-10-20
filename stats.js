/* L4NG anonymous usage counts.
 * Counters live on Abacus (abacus.jasoncameron.dev, free, no account, CORS), namespace NS.
 * No cookies, no IDs, no personal data: only counters are increased.
 *   v-all / v-dYYYYMMDD     visits (once per browser session per page) total / per UTC day
 *   u-all                   visitors (once per browser, first visit)
 *   c-<CC>                  visitors per country, guessed from the device time zone (XX = unknown)
 *   p-<page>                visits per page (home, c3ko, 3ngl, e5pa, fr4n, d3ut)
 *   p-<app>-ui-<en|id>      app visits per interface language
 *   e-<app>-<event>         app events: ui-first-<lang>, exam-<lv>-start|pass|fail, sync-on, install
 * Used by: L4NG index.html (page "home") and every app (index.html loads ../stats.js on the public site).
 * API: L4STATS.event(app, name)  ·  L4STATS.get(key) → Promise<number|null>
 */
(function () {
  var NS = "verkno-l4ng", API = "https://abacus.jasoncameron.dev/";
  var TZ = {
    "Asia/Jakarta": "ID", "Asia/Pontianak": "ID", "Asia/Makassar": "ID", "Asia/Jayapura": "ID",
    "Europe/Prague": "CZ", "Europe/Bratislava": "SK", "Europe/Berlin": "DE", "Europe/Vienna": "AT", "Europe/Zurich": "CH",
    "Europe/Amsterdam": "NL", "Europe/Brussels": "BE", "Europe/Luxembourg": "LU", "Europe/Paris": "FR", "Europe/Madrid": "ES",
    "Europe/Lisbon": "PT", "Europe/Rome": "IT", "Europe/London": "GB", "Europe/Dublin": "IE", "Europe/Warsaw": "PL",
    "Europe/Budapest": "HU", "Europe/Copenhagen": "DK", "Europe/Stockholm": "SE", "Europe/Oslo": "NO", "Europe/Helsinki": "FI",
    "Europe/Kyiv": "UA", "Europe/Kiev": "UA", "Europe/Istanbul": "TR", "Europe/Moscow": "RU", "Europe/Athens": "GR", "Europe/Bucharest": "RO",
    "Asia/Singapore": "SG", "Asia/Kuala_Lumpur": "MY", "Asia/Manila": "PH", "Asia/Bangkok": "TH", "Asia/Ho_Chi_Minh": "VN",
    "Asia/Tokyo": "JP", "Asia/Seoul": "KR", "Asia/Shanghai": "CN", "Asia/Hong_Kong": "HK", "Asia/Taipei": "TW", "Asia/Kolkata": "IN",
    "Asia/Calcutta": "IN", "Asia/Dubai": "AE", "Asia/Riyadh": "SA", "Asia/Dili": "TL",
    "Australia/Sydney": "AU", "Australia/Melbourne": "AU", "Australia/Brisbane": "AU", "Australia/Perth": "AU", "Australia/Adelaide": "AU",
    "Pacific/Auckland": "NZ", "America/New_York": "US", "America/Chicago": "US", "America/Denver": "US", "America/Los_Angeles": "US",
    "America/Phoenix": "US", "America/Toronto": "CA", "America/Vancouver": "CA", "America/Mexico_City": "MX", "America/Sao_Paulo": "BR",
    "America/Bogota": "CO", "America/Argentina/Buenos_Aires": "AR", "America/Lima": "PE", "America/Santiago": "CL",
    "Africa/Cairo": "EG", "Africa/Lagos": "NG", "Africa/Johannesburg": "ZA", "Africa/Nairobi": "KE"
  };
  // countries shown on the landing page (one lookup each, so keep the list short)
  var SHOWN = ["ID", "CZ", "DE", "AT", "NL", "SK", "PL", "GB", "FR", "ES", "SG", "MY", "AU", "US", "XX"];

  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return v === undefined ? "1" : null; } }
  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return v === undefined ? "1" : null; } }
  function day(d) { d = d || new Date(); return d.toISOString().slice(0, 10).replace(/-/g, ""); }
  function country() {
    var tz = ""; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) {}
    return TZ[tz] || "XX";
  }
  function clean(s) { return String(s).toLowerCase().replace(/[^a-z0-9_.-]/g, "-").slice(0, 60); }

  // requests go one after another (Abacus allows 30 per 10 s per visitor); a 429 waits and retries once
  var queue = [], busy = false;
  function run() {
    if (busy || !queue.length) return;
    busy = true;
    var job = queue.shift();
    fetch(API + job.op + "/" + NS + "/" + job.key, { cache: "no-store" })
      .then(function (r) {
        if (r.status === 429 && !job.retried) { job.retried = true; queue.unshift(job); return new Promise(function (ok) { setTimeout(ok, 10500); }).then(function () { return "retry"; }); }
        return r.ok ? r.json().then(function (j) { return typeof j.value === "number" ? j.value : null; }) : (r.status === 404 ? 0 : null);
      })
      .catch(function () { return null; })
      .then(function (v) { busy = false; if (v !== "retry") job.done(v); run(); });
  }
  function call(op, key) { return new Promise(function (done) { queue.push({ op: op, key: clean(key), done: done }); run(); }); }
  function hit(key) { return call("hit", key); }
  function get(key) { return call("get", key); }

  // one visit per page per browser session
  function visit(page, lang) {
    page = clean(page);
    if (ss("l4s.v." + page)) return;
    ss("l4s.v." + page, "1");
    hit("v-all"); hit("v-d" + day()); hit("p-" + page);
    if (lang) hit("p-" + page + "-ui-" + clean(lang));
    if (!ls("l4s.seen")) { ls("l4s.seen", "1"); hit("u-all"); hit("c-" + country()); }
  }
  function event(app, name) { hit("e-" + clean(app) + "-" + clean(name)); }

  window.L4STATS = { visit: visit, event: event, get: get, hit: hit, day: day, SHOWN: SHOWN };
})();
