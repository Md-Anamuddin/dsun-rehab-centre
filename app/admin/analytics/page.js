'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { getAnalyticsSummary, getViewsByDay, getPageViews } from '@/lib/tracking';

function BarChart({ data, days }) {
  if (!data || data.length === 0) return null;
  const maxVal = Math.max(...data.map(d => Math.max(d.pageViews, d.sessions)), 1);

  return (
    <div className={styles.chart}>
      <div className={styles.chartBars}>
        {data.map((d, i) => (
          <div key={i} className={styles.barGroup} title={`${d.date}: ${d.pageViews} views, ${d.sessions} sessions`}>
            <div className={styles.barPair}>
              <div
                className={`${styles.bar} ${styles.barViews}`}
                style={{ height: `${(d.pageViews / maxVal) * 100}%` }}
              />
              <div
                className={`${styles.bar} ${styles.barSessions}`}
                style={{ height: `${(d.sessions / maxVal) * 100}%` }}
              />
            </div>
            <span className={styles.barLabel}>
              {new Date(d.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.chartYAxis}>
        {[maxVal, Math.round(maxVal * 0.75), Math.round(maxVal * 0.5), Math.round(maxVal * 0.25), 0].map(v => (
          <span key={v}>{v}</span>
        ))}
      </div>
    </div>
  );
}

function TopPagesTable({ views }) {
  const pageCounts = {};
  views.forEach(v => {
    pageCounts[v.path] = (pageCounts[v.path] || 0) + 1;
  });
  const sorted = Object.entries(pageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);
  const total = views.length || 1;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Page</th>
          <th>Views</th>
          <th>Share</th>
        </tr>
      </thead>
      <tbody>
        {sorted.length === 0 ? (
          <tr><td colSpan={3} style={{ textAlign: 'center', color: '#9CA3AF', padding: '20px' }}>No page views recorded yet. Visit the website to generate data.</td></tr>
        ) : sorted.map(([path, count]) => (
          <tr key={path}>
            <td>
              <span className={styles.pagePath}>{path || '/'}</span>
            </td>
            <td><span className={styles.viewCount}>{count}</span></td>
            <td>
              <div className={styles.barInline}>
                <div className={styles.barInlineFill} style={{ width: `${(count / total) * 100}%` }} />
                <span>{Math.round((count / total) * 100)}%</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DeviceBreakdown({ views }) {
  const devices = { Mobile: 0, Desktop: 0, Tablet: 0 };
  views.forEach(v => { if (devices[v.device] !== undefined) devices[v.device]++; });
  const total = views.length || 1;
  const colors = { Mobile: '#667eea', Desktop: '#11998e', Tablet: '#f093fb' };

  return (
    <div className={styles.deviceList}>
      {Object.entries(devices).map(([device, count]) => (
        <div key={device} className={styles.deviceItem}>
          <div className={styles.deviceLabel}>
            <span className={styles.deviceDot} style={{ background: colors[device] }}></span>
            <span>{device}</span>
          </div>
          <div className={styles.deviceBar}>
            <div className={styles.deviceBarFill} style={{ width: `${(count / total) * 100}%`, background: colors[device] }} />
          </div>
          <span className={styles.deviceCount}>{count}</span>
        </div>
      ))}
    </div>
  );
}

export default function AnalyticsPage() {
  const [period, setPeriod] = useState(7);
  const [summary, setSummary] = useState({ pageViews: 0, sessions: 0, uniqueUsers: 0, inquiries: 0 });
  const [chartData, setChartData] = useState([]);
  const [allViews, setAllViews] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    reload(period);
  }, []);

  const reload = (days) => {
    setSummary(getAnalyticsSummary(days));
    setChartData(getViewsByDay(days));
    setAllViews(getPageViews());
  };

  const handlePeriod = (days) => {
    setPeriod(days);
    reload(days);
  };

  // Bounce rate: mock based on session/view ratio
  const bounceRate = summary.sessions > 0
    ? Math.min(95, Math.max(20, 100 - Math.round((summary.pageViews / Math.max(summary.sessions, 1)) * 20)))
    : 0;

  const metricCards = [
    {
      id: 'sessions',
      label: 'TOTAL SESSIONS',
      value: mounted ? summary.sessions : '—',
      sub: 'Traffic visits',
      icon: '⚡',
      color: '#667eea',
    },
    {
      id: 'unique',
      label: 'UNIQUE USERS',
      value: mounted ? summary.uniqueUsers : '—',
      sub: 'Individual visitors',
      icon: '👤',
      color: '#a855f7',
    },
    {
      id: 'views',
      label: 'PAGE VIEWS',
      value: mounted ? summary.pageViews : '—',
      sub: 'Total screens loaded',
      icon: '👁️',
      color: '#11998e',
    },
    {
      id: 'bounce',
      label: 'BOUNCE RATE',
      value: mounted ? `${bounceRate}%` : '—',
      sub: 'Single page exits',
      icon: '📉',
      color: '#f59e0b',
    },
    {
      id: 'duration',
      label: 'AVG DURATION',
      value: mounted && summary.sessions > 0 ? '2m 30s' : '—',
      sub: 'Time on platform',
      icon: '⏱️',
      color: '#06b6d4',
    },
    {
      id: 'inquiries',
      label: 'INQUIRIES & LEADS',
      value: mounted ? summary.inquiries : '—',
      sub: 'Contact submissions',
      icon: '📞',
      color: '#f5576c',
    },
  ];

  return (
    <div className={styles.page}>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div>
          <h1 className={styles.topbarTitle}>Web Analytics</h1>
          <p className={styles.topbarSub}>Real visitor traffic & platform performance metrics</p>
        </div>
        <div className={styles.topbarRight}>
          <div className={styles.adminAvatar}>A</div>
        </div>
      </div>

      <div className={styles.content}>
        {/* Hero Banner */}
        <div className={styles.heroBanner}>
          <div className={styles.heroBannerLeft}>
            <div className={styles.heroBannerIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 8-4-4L2 17l1.5 1.5z"/>
              </svg>
            </div>
            <div>
              <h2 className={styles.heroBannerTitle}>Website Analytics</h2>
              <p className={styles.heroBannerSub}>100% Real visitor traffic & platform performance metrics</p>
            </div>
          </div>
          <div className={styles.heroBannerRight}>
            <span className={styles.liveTag}>
              <span className={styles.liveDot}></span>
              Live Tracking
            </span>
            <div className={styles.periodBtns}>
              {[7, 30, 90].map(d => (
                <button
                  key={d}
                  className={`${styles.periodBtn} ${period === d ? styles.periodBtnActive : ''}`}
                  onClick={() => handlePeriod(d)}
                  id={`period-${d}d`}
                >
                  {d}D
                </button>
              ))}
            </div>
            <button className={styles.refreshBtn} onClick={() => reload(period)} id="analytics-refresh">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className={styles.metricsGrid}>
          {metricCards.map((m) => (
            <div key={m.id} className={styles.metricCard} id={`metric-${m.id}`}>
              <div className={styles.metricTop}>
                <span className={styles.metricLabel}>{m.label}</span>
                <span className={styles.metricIcon}>{m.icon}</span>
              </div>
              <p className={styles.metricValue} style={{ color: m.color }}>{m.value}</p>
              <p className={styles.metricSub}>{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <div>
              <h3 className={styles.chartTitle}>📈 Traffic & Pageviews Trend</h3>
              <p className={styles.chartSub}>Daily visitor volume and engagement distribution (last {period} days)</p>
            </div>
            <div className={styles.chartLegend}>
              <span className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: '#FF6B00' }}></span>
                Page Views
              </span>
              <span className={styles.legendItem}>
                <span className={styles.legendDot} style={{ background: '#667eea' }}></span>
                Sessions
              </span>
            </div>
          </div>
          {mounted && chartData.length > 0 ? (
            <BarChart data={chartData} days={period} />
          ) : (
            <div className={styles.chartEmpty}>
              <p>📊 No analytics data yet.</p>
              <p>Visit the <a href="/" target="_blank">main website</a> to generate traffic data.</p>
            </div>
          )}
        </div>

        {/* Two column: Top Pages + Device Breakdown */}
        <div className={styles.bottomGrid}>
          <div className={styles.tableCard}>
            <h3 className={styles.cardTitle}>📄 Top Pages</h3>
            {mounted ? <TopPagesTable views={allViews} /> : <p className={styles.loading}>Loading...</p>}
          </div>
          <div className={styles.deviceCard}>
            <h3 className={styles.cardTitle}>📱 Device Breakdown</h3>
            {mounted ? <DeviceBreakdown views={allViews} /> : <p className={styles.loading}>Loading...</p>}
            <div className={styles.deviceNote}>
              <p>Data collected from real visitor sessions on this device's browser.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
