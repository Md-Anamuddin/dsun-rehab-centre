'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { getTapSummary, getTapsByDay, getTaps, clearTaps } from '@/lib/tracking';

function formatTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleString('en-IN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
}

function TapIcon({ type }) {
  if (type === 'whatsapp') return (
    <div className={styles.tapIconWA}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </div>
  );
  if (type === 'call') return (
    <div className={styles.tapIconCall}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    </div>
  );
  return (
    <div className={styles.tapIconEmail}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    </div>
  );
}

export default function ContactTapsPage() {
  const [summary, setSummary] = useState({ totals: { whatsapp: 0, call: 0, email: 0 }, total: 0, todayTotal: 0, todayCount: { whatsapp: 0, call: 0, email: 0 } });
  const [byDay, setByDay] = useState([]);
  const [recentTaps, setRecentTaps] = useState([]);
  const [period, setPeriod] = useState('7D');
  const [mounted, setMounted] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const days = period === '7D' ? 7 : period === '30D' ? 30 : period === '90D' ? 90 : 365;

  useEffect(() => {
    setMounted(true);
    reload();
  }, []);

  const reload = () => {
    setSummary(getTapSummary());
    setByDay(getTapsByDay(days));
    setRecentTaps(getTaps());
  };

  useEffect(() => {
    if (mounted) setByDay(getTapsByDay(days));
  }, [period, mounted]);

  const handleClear = () => {
    clearTaps();
    reload();
    setShowClearConfirm(false);
  };

  const filteredTaps = filterType === 'all'
    ? recentTaps
    : recentTaps.filter(t => t.type === filterType);

  const activeDays = byDay.filter(d => d.total > 0).length;

  return (
    <div className={styles.page}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div>
          <h1 className={styles.topbarTitle}>Contact Taps</h1>
          <p className={styles.topbarSub}>WhatsApp & Phone call tracking analytics</p>
        </div>
        <div className={styles.topbarRight}>
          <span className={styles.liveTag}>
            <span className={styles.liveDot}></span>
            Live intent tracking
          </span>
          <div className={styles.adminAvatar}>A</div>
        </div>
      </div>

      <div className={styles.content}>
        {/* Hero Header */}
        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderLeft}>
            <div className={styles.pageHeaderIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <h2 className={styles.pageHeaderTitle}>Contact & Call Tap Analytics</h2>
              <p className={styles.pageHeaderSub}>Daily date-wise breakdown of user clicks on WhatsApp, Call, and Email buttons.</p>
            </div>
          </div>
          <div className={styles.pageHeaderActions}>
            <div className={styles.periodBtns}>
              {['7D', '30D', '90D', 'ALL'].map(p => (
                <button
                  key={p}
                  className={`${styles.periodBtn} ${period === p ? styles.periodBtnActive : ''}`}
                  onClick={() => setPeriod(p)}
                  id={`tap-period-${p}`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button className={styles.refreshBtn} onClick={reload} id="taps-refresh">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className={styles.summaryGrid}>
          <div className={styles.summaryCard} id="tap-summary-whatsapp">
            <div className={styles.summaryCardTop}>
              <span className={styles.summaryLabel} style={{ color: '#25D366' }}>WHATSAPP TAPS</span>
              <div className={styles.summaryCardIcon} style={{ color: '#25D366' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
            </div>
            <p className={styles.summaryValue}>{mounted ? summary.totals.whatsapp : '—'}</p>
            <p className={styles.summarySubValue}>Total</p>
            <p className={styles.summaryToday}>+{mounted ? summary.todayCount.whatsapp : 0} logged today</p>
          </div>

          <div className={styles.summaryCard} id="tap-summary-call">
            <div className={styles.summaryCardTop}>
              <span className={styles.summaryLabel} style={{ color: '#FF6B00' }}>PHONE CALLS</span>
              <div className={styles.summaryCardIcon} style={{ color: '#FF6B00' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
            </div>
            <p className={styles.summaryValue}>{mounted ? summary.totals.call : '—'}</p>
            <p className={styles.summarySubValue}>Total</p>
            <p className={styles.summaryToday}>+{mounted ? summary.todayCount.call : 0} logged today</p>
          </div>

          <div className={styles.summaryCard} id="tap-summary-email">
            <div className={styles.summaryCardTop}>
              <span className={styles.summaryLabel} style={{ color: '#667eea' }}>EMAIL CLICKS</span>
              <div className={styles.summaryCardIcon} style={{ color: '#667eea' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>
            <p className={styles.summaryValue}>{mounted ? summary.totals.email : '—'}</p>
            <p className={styles.summarySubValue}>Total</p>
            <p className={styles.summaryToday}>+{mounted ? summary.todayCount.email : 0} logged today</p>
          </div>

          <div className={`${styles.summaryCard} ${styles.summaryCardDark}`} id="tap-summary-total">
            <div className={styles.summaryCardTop}>
              <span className={styles.summaryLabel} style={{ color: 'rgba(255,255,255,0.6)' }}>TOTAL BUTTON TAPS</span>
              <div className={styles.summaryCardIcon} style={{ color: '#FF6B00' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 8-4-4L2 17l1.5 1.5z"/>
                </svg>
              </div>
            </div>
            <p className={styles.summaryValue} style={{ color: 'white' }}>{mounted ? summary.total : '—'}</p>
            <p className={styles.summarySubValue} style={{ color: 'rgba(255,255,255,0.5)' }}>All Taps</p>
            <p className={styles.summaryToday} style={{ color: '#25D366' }}>+{mounted ? summary.todayTotal : 0} logged today</p>
          </div>
        </div>

        {/* Day-by-Day Table */}
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderLeft}>
              <span>📅</span>
              <h3 className={styles.tableTitle}>Day-by-Day Tap Breakdown</h3>
            </div>
            <span className={styles.activeDays}>{mounted ? activeDays : 0} active day(s)</span>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>DATE</th>
                  <th>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#25D366' }}>💬</span>
                      WHATSAPP TAPS
                    </div>
                  </th>
                  <th>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#FF6B00' }}>📞</span>
                      PHONE CALLS
                    </div>
                  </th>
                  <th>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#667eea' }}>✉️</span>
                      EMAIL CLICKS
                    </div>
                  </th>
                  <th>DAY TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {!mounted ? (
                  <tr><td colSpan={5} className={styles.emptyRow}>Loading...</td></tr>
                ) : byDay.filter(d => d.total > 0).length === 0 ? (
                  <tr>
                    <td colSpan={5} className={styles.emptyRow}>
                      No taps recorded yet. When visitors click WhatsApp or Call buttons on your website, they'll appear here.
                    </td>
                  </tr>
                ) : byDay.map(d => (
                  <tr key={d.date} className={d.total === 0 ? styles.zeroRow : ''}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span className={styles.dateDot} style={{ background: d.total > 0 ? '#FF6B00' : '#E5E7EB' }}></span>
                        <span className={styles.dateCell}>{d.date}</span>
                      </div>
                    </td>
                    <td>
                      <span className={styles.tapBadge} style={{ background: 'rgba(37,211,102,0.12)', color: '#16A34A' }}>
                        {d.whatsapp}
                      </span>
                    </td>
                    <td>
                      <span className={styles.tapBadge} style={{ background: 'rgba(255,107,0,0.12)', color: '#EA580C' }}>
                        {d.call}
                      </span>
                    </td>
                    <td>
                      <span className={styles.tapBadge} style={{ background: 'rgba(102,126,234,0.12)', color: '#4F46E5' }}>
                        {d.email}
                      </span>
                    </td>
                    <td>
                      <span className={styles.totalBadge} style={{ background: d.total > 0 ? '#0F1117' : '#F3F4F6', color: d.total > 0 ? 'white' : '#9CA3AF' }}>
                        {d.total}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Tap Stream */}
        <div className={styles.streamCard}>
          <div className={styles.streamHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#9CA3AF">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              <h3 className={styles.streamTitle}>Recent Tap Stream (Latest 50 Interactions)</h3>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Filter */}
              <div className={styles.filterBtns}>
                {['all', 'whatsapp', 'call'].map(f => (
                  <button
                    key={f}
                    className={`${styles.filterBtn} ${filterType === f ? styles.filterBtnActive : ''}`}
                    onClick={() => setFilterType(f)}
                    id={`filter-${f}`}
                  >
                    {f === 'all' ? 'All' : f === 'whatsapp' ? '💬 WhatsApp' : '📞 Call'}
                  </button>
                ))}
              </div>
              {mounted && recentTaps.length > 0 && (
                <button
                  className={styles.clearBtn}
                  onClick={() => setShowClearConfirm(true)}
                  id="clear-taps-btn"
                >
                  🗑️ Clear All
                </button>
              )}
            </div>
          </div>

          {/* Clear Confirm */}
          {showClearConfirm && (
            <div className={styles.confirmBox}>
              <p>⚠️ Are you sure you want to delete all tap data? This cannot be undone.</p>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className={styles.confirmYes} onClick={handleClear} id="confirm-clear-yes">Yes, Clear All</button>
                <button className={styles.confirmNo} onClick={() => setShowClearConfirm(false)} id="confirm-clear-no">Cancel</button>
              </div>
            </div>
          )}

          <div className={styles.streamList}>
            {!mounted ? (
              <div className={styles.streamEmpty}>Loading...</div>
            ) : filteredTaps.slice(0, 50).length === 0 ? (
              <div className={styles.streamEmpty}>
                No taps recorded yet. When visitors click WhatsApp or Call buttons on your website, they'll appear here in real-time.
              </div>
            ) : filteredTaps.slice(0, 50).map((tap) => (
              <div key={tap.id} className={styles.streamItem}>
                <TapIcon type={tap.type} />
                <div className={styles.streamItemContent}>
                  <p className={styles.streamItemTitle}>
                    {tap.type === 'whatsapp' ? 'WhatsApp Tap' : tap.type === 'call' ? 'Phone Call Tap' : 'Email Click'}
                    {' '}
                    <span className={styles.streamItemPage}>{tap.page}</span>
                  </p>
                  <p className={styles.streamItemSub}>
                    <span className={styles.deviceTag}>{tap.device}</span>
                    <span>•</span>
                    <span>{formatTime(tap.timestamp)}</span>
                  </p>
                </div>
                <span className={styles.streamItemDate}>{tap.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
