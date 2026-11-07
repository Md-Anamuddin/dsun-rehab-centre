/**
 * tracking.js
 * Client-side tap & page-view tracking stored in localStorage.
 * Used by admin Contact Taps and Web Analytics pages.
 */

const TAPS_KEY = 'dsun_contact_taps';
const PAGEVIEWS_KEY = 'dsun_pageviews';
const SESSION_KEY = 'dsun_sessions';

// ─────────────────────────────────────────
// Contact Tap Tracking
// ─────────────────────────────────────────

/**
 * Log a contact tap (whatsapp | call | email)
 * @param {'whatsapp'|'call'|'email'} type
 * @param {string} [page] - current page URL
 */
export function logTap(type, page) {
  if (typeof window === 'undefined') return;
  const taps = getTaps();
  const device = window.innerWidth < 768 ? 'Mobile' : 'Desktop';
  const tap = {
    id: Date.now() + Math.random().toString(36).slice(2),
    type,             // 'whatsapp' | 'call' | 'email'
    page: page || window.location.pathname,
    device,
    timestamp: new Date().toISOString(),
    date: new Date().toISOString().split('T')[0],
  };
  taps.unshift(tap);
  // Keep max 200 entries
  const trimmed = taps.slice(0, 200);
  localStorage.setItem(TAPS_KEY, JSON.stringify(trimmed));
}

export function getTaps() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(TAPS_KEY) || '[]');
  } catch { return []; }
}

export function clearTaps() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TAPS_KEY);
}

// ─────────────────────────────────────────
// Aggregate helpers
// ─────────────────────────────────────────

export function getTapSummary() {
  const taps = getTaps();
  const today = new Date().toISOString().split('T')[0];

  const totals = { whatsapp: 0, call: 0, email: 0 };
  const todayCount = { whatsapp: 0, call: 0, email: 0 };

  taps.forEach((t) => {
    if (totals[t.type] !== undefined) {
      totals[t.type]++;
      if (t.date === today) todayCount[t.type]++;
    }
  });

  return { totals, todayCount, total: taps.length, todayTotal: Object.values(todayCount).reduce((a, b) => a + b, 0) };
}

/**
 * Get taps grouped by date, for the last N days
 */
export function getTapsByDay(days = 30) {
  const taps = getTaps();
  const map = {};

  // Pre-fill last N days
  for (let i = 0; i < days; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    map[key] = { date: key, whatsapp: 0, call: 0, email: 0, total: 0 };
  }

  taps.forEach((t) => {
    if (map[t.date]) {
      if (t.type === 'whatsapp') map[t.date].whatsapp++;
      else if (t.type === 'call') map[t.date].call++;
      else if (t.type === 'email') map[t.date].email++;
      map[t.date].total++;
    }
  });

  return Object.values(map).sort((a, b) => b.date.localeCompare(a.date));
}

// ─────────────────────────────────────────
// Page View Tracking
// ─────────────────────────────────────────

export function logPageView(path) {
  if (typeof window === 'undefined') return;
  const views = getPageViews();
  const session = getOrCreateSession();
  const view = {
    id: Date.now() + Math.random().toString(36).slice(2),
    path: path || window.location.pathname,
    timestamp: new Date().toISOString(),
    date: new Date().toISOString().split('T')[0],
    device: window.innerWidth < 768 ? 'Mobile' : window.innerWidth < 1024 ? 'Tablet' : 'Desktop',
    sessionId: session.id,
  };
  views.unshift(view);
  localStorage.setItem(PAGEVIEWS_KEY, JSON.stringify(views.slice(0, 500)));
}

export function getPageViews() {
  if (typeof window === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(PAGEVIEWS_KEY) || '[]');
  } catch { return []; }
}

function getOrCreateSession() {
  if (typeof window === 'undefined') return { id: 'ssr' };
  let session = null;
  try { session = JSON.parse(sessionStorage.getItem('dsun_session')); } catch {}
  if (!session) {
    session = { id: Date.now().toString(36) + Math.random().toString(36).slice(2), start: Date.now() };
    sessionStorage.setItem('dsun_session', JSON.stringify(session));
    // Log new session
    const sessions = JSON.parse(localStorage.getItem(SESSION_KEY) || '[]');
    sessions.unshift({ ...session, date: new Date().toISOString().split('T')[0] });
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessions.slice(0, 500)));
  }
  return session;
}

export function getSessions() {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || '[]'); } catch { return []; }
}

export function getAnalyticsSummary(days = 7) {
  const views = getPageViews();
  const sessions = getSessions();
  const taps = getTaps();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().split('T')[0];

  const filteredViews = views.filter(v => v.date >= cutoffStr);
  const filteredSessions = sessions.filter(s => {
    const d = new Date(s.start).toISOString().split('T')[0];
    return d >= cutoffStr;
  });
  const filteredTaps = taps.filter(t => t.date >= cutoffStr);

  const uniqueSessionIds = new Set(filteredSessions.map(s => s.id));

  return {
    pageViews: filteredViews.length,
    sessions: filteredSessions.length,
    uniqueUsers: uniqueSessionIds.size,
    inquiries: filteredTaps.length,
  };
}

export function getViewsByDay(days = 7) {
  const views = getPageViews();
  const sessions = getSessions();
  const map = {};

  for (let i = 0; i < days; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = d.toISOString().split('T')[0];
    map[key] = { date: key, pageViews: 0, sessions: 0 };
  }

  views.forEach((v) => { if (map[v.date]) map[v.date].pageViews++; });
  sessions.forEach((s) => {
    const d = new Date(s.start).toISOString().split('T')[0];
    if (map[d]) map[d].sessions++;
  });

  return Object.values(map).sort((a, b) => a.date.localeCompare(b.date));
}
