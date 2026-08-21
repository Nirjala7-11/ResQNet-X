/**
 * RESQNET-X C2 Tactical Operations Engine
 * Autonomous Disaster Response & 5G Slicing Coordination
 */

// ═══ GLOBAL OPERATIONAL DATA ═══
window.MISSIONS = [
  {
    id: 'MSN-001',
    name: 'Operation Dawn Rescue',
    type: 'Search & Rescue',
    priority: 'Critical',
    status: 'active',
    zone: 'Zone A',
    drones: ['Drone-01', 'Drone-01-Alpha'],
    responders: 8,
    progress: 65,
    start: '09:30',
    eta: '11:45',
    coords: '28.3°N 77.0°E',
    obj: 'Locate and extract survivors from collapsed building sector 4B.',
    timeline: [
      { t: '09:30', txt: 'Mission deployed', c: 'var(--accent)' },
      { t: '09:45', txt: 'Drone-01 reached zone', c: 'var(--info)' },
      { t: '10:12', txt: '2 survivors located (YOLO Conf: 94%)', c: 'var(--warn)' },
      { t: '10:38', txt: 'Responder-Alpha en route', c: 'var(--info)' },
      { t: '10:45', txt: 'Critical survivor extraction started', c: 'var(--danger)' }
    ]
  },
  {
    id: 'MSN-002',
    name: 'Flood Aid Bravo',
    type: 'Medical Aid',
    priority: 'High',
    status: 'enroute',
    zone: 'Zone B',
    drones: ['Drone-02'],
    responders: 5,
    progress: 30,
    start: '10:00',
    eta: '12:00',
    coords: '28.4°N 77.2°E',
    obj: 'Deliver emergency medical supplies to flood-isolated residents in Zone B.',
    timeline: [
      { t: '10:00', txt: 'Mission created', c: 'var(--accent)' },
      { t: '10:15', txt: 'Medical team assembled', c: 'var(--info)' },
      { t: '10:30', txt: 'En route to Zone B via GNN route', c: 'var(--warn)' }
    ]
  },
  {
    id: 'MSN-003',
    name: 'Hazard Scan Charlie',
    type: 'Reconnaissance',
    priority: 'Medium',
    status: 'active',
    zone: 'Zone C',
    drones: ['Drone-03'],
    responders: 2,
    progress: 80,
    start: '08:00',
    eta: '10:30',
    coords: '28.2°N 77.3°E',
    obj: 'Continuous aerial survey of Zone C flood boundaries for dynamic hazard mapping.',
    timeline: [
      { t: '08:00', txt: 'Drone-03 launched', c: 'var(--accent)' },
      { t: '08:45', txt: 'First scan pass complete', c: 'var(--info)' },
      { t: '09:30', txt: 'Hazard map updated (Zone C boundary shifted +300m)', c: 'var(--warn)' },
      { t: '10:15', txt: 'Second scan pass complete', c: 'var(--info)' }
    ]
  },
  {
    id: 'MSN-004',
    name: 'Evacuation Route Delta',
    type: 'Evacuation',
    priority: 'High',
    status: 'standby',
    zone: 'All Zones',
    drones: [],
    responders: 15,
    progress: 0,
    start: 'Pending',
    eta: 'TBD',
    coords: 'All sectors',
    obj: 'Coordinate mass evacuation through designated green corridors upon command.',
    timeline: [
      { t: '10:00', txt: 'Mission queued — awaiting command authorization', c: 'var(--text-muted)' }
    ]
  },
  {
    id: 'MSN-005',
    name: 'RedCap SOS Echo',
    type: 'Search & Rescue',
    priority: 'Critical',
    status: 'active',
    zone: 'Zone C',
    drones: ['Drone-01'],
    responders: 3,
    progress: 45,
    start: '10:46',
    eta: '11:20',
    coords: '28.1°N 77.4°E',
    obj: 'Respond to RedCap Z-4 SOS beacon. Locate and extract isolated survivor.',
    timeline: [
      { t: '10:46', txt: 'SOS signal received from Z-4', c: 'var(--danger)' },
      { t: '10:48', txt: 'Mission auto-created (URLLC trigger)', c: 'var(--warn)' },
      { t: '10:52', txt: 'Drone-01 redirected to Zone C', c: 'var(--info)' }
    ]
  },
  {
    id: 'MSN-006',
    name: 'Supply Drop Foxtrot',
    type: 'Medical Aid',
    priority: 'Low',
    status: 'completed',
    zone: 'Zone B',
    drones: ['Drone-02'],
    responders: 1,
    progress: 100,
    start: '07:00',
    eta: '08:30',
    coords: '28.5°N 77.1°E',
    obj: 'Drop emergency food and water supplies to isolated community.',
    timeline: [
      { t: '07:00', txt: 'Mission launched', c: 'var(--accent)' },
      { t: '07:45', txt: 'Drop zone reached', c: 'var(--info)' },
      { t: '08:20', txt: 'Supplies delivered successfully', c: 'var(--safe)' },
      { t: '08:30', txt: 'Mission completed ✓', c: 'var(--safe)' }
    ]
  }
];

window.TEMPLATES = [
  { id: 'T1', name: 'Situation Report (SITREP)', desc: 'Comprehensive overview of all active operations', badge: 'NDMA FORMAT', badgeColor: 'rgba(0,255,170,0.12)', badgeTextColor: 'var(--accent)' },
  { id: 'T2', name: 'Survivor Discovery Log', desc: 'Detailed AI detection events with coordinates', badge: 'AI ANNOTATED', badgeColor: 'rgba(74,179,255,0.1)', badgeTextColor: 'var(--info)' },
  { id: 'T3', name: '5G Network Performance', desc: 'eMBB/URLLC/mMTC slice utilization analytics', badge: 'TECHNICAL', badgeColor: 'rgba(180,124,255,0.1)', badgeTextColor: 'var(--purple)' },
  { id: 'T4', name: 'Drone Operations Summary', desc: 'Flight logs, detections and battery stats', badge: 'OPERATIONAL', badgeColor: 'rgba(255,140,0,0.1)', badgeTextColor: 'var(--warn)' },
  { id: 'T5', name: 'Incident Response Timeline', desc: 'Chronological event log with responder actions', badge: 'TIMELINE', badgeColor: 'rgba(61,220,132,0.1)', badgeTextColor: 'var(--safe)' },
  { id: 'T6', name: 'Drone Flight & Battery Health Log', desc: 'GPS trajectories, cell impedance, voltage discharge curves & URLLC latency', badge: 'FLIGHT LOG', badgeColor: 'rgba(255,61,61,0.12)', badgeTextColor: 'var(--danger)' }
];

window.REPORTS_GENERATED = [
  { title: 'SITREP-2026-042-0900', type: 'Situation Report', time: 'Today 09:00', tags: ['NDMA', 'Critical', 'Zone A'], summary: 'Initial situation assessment at 09:00. 2 confirmed survivors in Zone A building collapse. Drone-01 deployed. 5G eMBB slice active at 84% capacity. GNN routing enabled for Zone B flood bypass.' },
  { title: 'NETPERF-2026-042-1000', type: '5G Network Performance', time: 'Today 10:00', tags: ['eMBB', 'URLLC', 'mMTC'], summary: 'Network performance nominal. eMBB throughput 850 Mbps. URLLC latency average 3.8ms (below 5ms threshold). 24 RedCap wearables connected on mMTC slice.' },
  { title: 'SURVLOG-2026-042-1030', type: 'Survivor Discovery Log', time: 'Today 10:30', tags: ['AI', 'YOLO', 'Detections'], summary: '4 survivor detections logged by YOLO v8 across Drone-01 and Drone-02. Average confidence 94%. 2 extractions in progress. 1 critical case flagged for immediate medical response.' }
];

window.INCIDENTS = [
  { t: '10:48', title: 'Hazard Zone Boundary Shift', desc: 'Zone C flood boundary extended +300m north — map updated', c: 'var(--warn)' },
  { t: '10:46', title: 'RedCap SOS Z-4 Triggered', desc: 'Emergency beacon activated · Zone C · Signal -68dBm', c: 'var(--danger)' },
  { t: '10:38', title: 'Responder-Alpha Deployed', desc: 'Moving to Zone A survivor location via GNN optimized route', c: 'var(--info)' },
  { t: '10:12', title: 'Survivor Detected (Conf 94%)', desc: 'Drone-01 YOLO detection · 28.3°N 77.0°E · MSN-001', c: 'var(--accent)' },
  { t: '09:55', title: 'Drone-02 Battery Alert', desc: 'Battery at 34% — return-to-base scheduled in 18 minutes', c: 'var(--warn)' },
  { t: '09:45', title: 'Drone-01 Zone A Arrival', desc: 'Reached target altitude 120m · YOLO detection activated', c: 'var(--info)' },
  { t: '09:30', title: 'Operation Dawn Rescue Launched', desc: 'MSN-001 deployed · 8 responders + 2 drones assigned', c: 'var(--accent)' },
  { t: '08:20', title: 'Supply Drop Completed', desc: 'MSN-006 food & water delivery successful · Zone B', c: 'var(--safe)' }
];

// ═══ RUNTIME APPLICATION STATE ═══
window.selectedMission = null;
window.missionFilter = 'all';
window.selectedTemplate = 'T1';
window.analyticsInited = false;
window.charts = {};
window.alertCount = 3;
window.survivorCount = 4;
window.currentLivePing = 4.2;
// Seed 20 historical points matching 2-second intervals (-38s to 0s)
const initialNow = Date.now();
window.latencyLabels = Array.from({ length: 20 }, (_, i) => {
  const d = new Date(initialNow - (19 - i) * 2000);
  return `${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
});
window.latencyData = Array.from({ length: 20 }, () => +(3.2 + Math.random() * 2.2).toFixed(1));

// ═══ NAVIGATION CONTROLLER ═══
window.setNav = function(el, tab) {
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (el) el.classList.add('active');
  document.querySelectorAll('.page').forEach(p => {
    p.style.display = 'none';
    p.classList.remove('active');
  });
  const pg = document.getElementById('page-' + tab);
  if (pg) {
    pg.style.display = 'flex';
    pg.classList.add('active');
  }
  if (tab === 'missions') window.renderMissions();
  if (tab === 'analytics') window.initAnalytics();
  if (tab === 'reporting') window.initReporting();
};

window.switchPage = function(tab, el) {
  window.setNav(el, tab);
};

// ═══ CLOCK & TELEMETRY CLOCK ═══
window.updateClock = function() {
  const n = new Date();
  const s = `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}:${String(n.getSeconds()).padStart(2, '0')}`;
  const clk = document.getElementById('clock');
  if (clk) clk.textContent = s;
  const vt = document.getElementById('vid-time');
  if (vt) vt.textContent = s;
};

// ═══ TOOLTIPS ═══
window.showTooltip = function(e, title, detail) {
  const t = document.getElementById('tooltip');
  if (!t) return;
  t.innerHTML = `<div style="color:var(--accent);font-weight:700;margin-bottom:3px;">${title}</div><div style="color:var(--text-secondary);">${detail}</div>`;
  t.style.display = 'block';
  t.style.left = (e.clientX + 12) + 'px';
  t.style.top = (e.clientY - 10) + 'px';
  setTimeout(() => { if (t) t.style.display = 'none'; }, 2800);
};

// ═══ MODAL HELPERS ═══
window.openNewMissionModal = function() {
  const el = document.getElementById('new-mission-modal');
  if (el) el.classList.add('open');
};

window.openSettings = function() {
  const el = document.getElementById('settings-modal');
  if (el) el.classList.add('open');
};

window.closeModal = function(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
};

// ═══ MISSIONS MODULE ═══
window.priorityClass = function(p) {
  return { Critical: 'p-critical', High: 'p-high', Medium: 'p-medium', Low: 'p-low' }[p] || 'p-low';
};

window.statusClass = function(s) {
  return { active: 's-active', enroute: 's-enroute', completed: 's-completed', standby: 's-standby', critical: 's-critical' }[s] || 's-standby';
};

window.statusLabel = function(s) {
  return { active: '● ACTIVE', enroute: '▶ EN ROUTE', completed: '✓ COMPLETED', standby: '◉ STANDBY' }[s] || s.toUpperCase();
};

window.progressColor = function(p) {
  if (p === 100) return 'var(--safe)';
  if (p > 60) return 'var(--accent)';
  if (p > 30) return 'var(--warn)';
  return 'var(--danger)';
};

window.renderMissions = function() {
  const list = document.getElementById('mission-list');
  if (!list) return;
  const filtered = window.missionFilter === 'all' ? window.MISSIONS : window.MISSIONS.filter(m => m.status === window.missionFilter);
  list.innerHTML = '';
  filtered.forEach(m => {
    const div = document.createElement('div');
    div.className = `mission-card ${window.priorityClass(m.priority)}${window.selectedMission === m.id ? ' selected' : ''}`;
    div.onclick = () => window.selectMission(m.id);
    div.innerHTML = `
      <div class="mc-top">
        <span class="mc-id">${m.id} · ${m.type}</span>
        <span class="mc-status ${window.statusClass(m.status)}">${window.statusLabel(m.status)}</span>
      </div>
      <div class="mc-name">${m.name}</div>
      <div class="mc-meta">
        <span class="mc-tag">📍 ${m.zone}</span>
        <span class="mc-tag">✈ ${m.drones.length} Drones</span>
        <span class="mc-tag">👤 ${m.responders} Resp.</span>
        <span class="mc-tag" style="color:var(--text-muted);">ETA ${m.eta}</span>
      </div>
      <div class="mc-progress-bar"><div class="mc-progress-fill" style="width:${m.progress}%;background:${window.progressColor(m.progress)};"></div></div>
    `;
    list.appendChild(div);
  });
};

window.selectMission = function(id) {
  window.selectedMission = id;
  window.renderMissions();
  const m = window.MISSIONS.find(x => x.id === id);
  if (!m) return;
  const panel = document.getElementById('mission-detail-panel');
  if (!panel) return;
  panel.innerHTML = `
    <div class="fade-in" style="max-width:700px;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div>
          <div style="font-family:var(--mono);font-size:9px;color:var(--text-muted);margin-bottom:4px;">${m.id} · ${m.type}</div>
          <div style="font-family:var(--head);font-size:20px;font-weight:700;color:var(--text-primary);letter-spacing:1px;">${m.name}</div>
        </div>
        <div style="display:flex;gap:8px;">
          ${m.status !== 'completed' ? `<button class="btn-primary" onclick="window.updateStatus('${m.id}','completed')">✓ COMPLETE</button>` : ''}
          ${m.status === 'standby' ? `<button class="btn-info" onclick="window.updateStatus('${m.id}','active')">▶ ACTIVATE</button>` : ''}
          <button class="btn-danger" onclick="window.deleteMission('${m.id}')">✕ ABORT</button>
        </div>
      </div>

      <div class="detail-panel">
        <div class="detail-title">Mission Parameters</div>
        <div class="detail-grid">
          <div class="detail-field"><div class="df-label">Priority</div><div class="df-value" style="color:${m.priority === 'Critical' ? 'var(--danger)' : m.priority === 'High' ? 'var(--warn)' : 'var(--info)'};">${m.priority}</div></div>
          <div class="detail-field"><div class="df-label">Status</div><div class="df-value"><span class="mc-status ${window.statusClass(m.status)}">${window.statusLabel(m.status)}</span></div></div>
          <div class="detail-field"><div class="df-label">Target Zone</div><div class="df-value">${m.zone}</div></div>
          <div class="detail-field"><div class="df-label">Coordinates</div><div class="df-value" style="color:var(--accent);">${m.coords}</div></div>
          <div class="detail-field"><div class="df-label">Start Time</div><div class="df-value">${m.start}</div></div>
          <div class="detail-field"><div class="df-label">ETA</div><div class="df-value" style="color:var(--warn);">${m.eta}</div></div>
          <div class="detail-field"><div class="df-label">Drones Assigned</div><div class="df-value">${m.drones.join(', ') || 'None'}</div></div>
          <div class="detail-field"><div class="df-label">Responders</div><div class="df-value">${m.responders}</div></div>
        </div>
        <div class="df-label" style="margin-bottom:4px;">Objective</div>
        <div style="font-family:var(--body);font-size:11px;color:var(--text-secondary);line-height:1.7;padding:8px;background:var(--bg-base);border-radius:3px;border:1px solid var(--border);">${m.obj}</div>
        <div style="margin-top:10px;">
          <div class="df-label" style="margin-bottom:4px;">Progress</div>
          <div style="height:6px;background:var(--border);border-radius:3px;overflow:hidden;"><div style="height:100%;width:${m.progress}%;background:${window.progressColor(m.progress)};border-radius:3px;transition:width .5s;"></div></div>
          <div style="font-family:var(--mono);font-size:9px;color:var(--text-muted);margin-top:3px;">${m.progress}% COMPLETE</div>
        </div>
      </div>

      <div class="detail-panel">
        <div class="detail-title">Mission Timeline</div>
        <div class="timeline">
          ${m.timeline.map((tl, i) => `
            <div class="tl-item">
              ${i < m.timeline.length - 1 ? `<div style="position:absolute;left:3px;top:16px;width:2px;height:calc(100% + 2px);background:var(--border);"></div>` : ''}
              <div class="tl-dot" style="background:${tl.c};box-shadow:0 0 5px ${tl.c};flex-shrink:0;margin-top:3px;"></div>
              <div class="tl-content">
                <div class="tl-time">${tl.t}</div>
                <div class="tl-text">${tl.txt}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      ${m.status !== 'completed' ? `
      <div class="detail-panel">
        <div class="detail-title">Quick Update</div>
        <div class="form-row">
          <div class="form-field"><label>Progress %</label><input type="range" min="0" max="100" value="${m.progress}" oninput="window.updateProgress('${m.id}',this.value)" style="width:100%;"/></div>
          <div class="form-field"><label>Status</label><select onchange="window.updateStatus('${m.id}',this.value)"><option value="active" ${m.status === 'active' ? 'selected' : ''}>Active</option><option value="enroute" ${m.status === 'enroute' ? 'selected' : ''}>En Route</option><option value="standby" ${m.status === 'standby' ? 'selected' : ''}>Standby</option><option value="completed" ${m.status === 'completed' ? 'selected' : ''}>Completed</option></select></div>
        </div>
        <div class="form-field" style="margin-bottom:10px;"><label>Add Timeline Note</label><div style="display:flex;gap:6px;"><input type="text" id="tl-note" placeholder="Enter update..." style="flex:1;"/><button class="btn-info" onclick="window.addTimelineNote('${m.id}')">ADD</button></div></div>
      </div>` : ''}
    </div>
  `;
};

window.filterMissions = function(f, btn) {
  window.missionFilter = f;
  document.querySelectorAll('.m-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  window.renderMissions();
};

window.updateStatus = function(id, status) {
  const m = window.MISSIONS.find(x => x.id === id);
  if (m) {
    m.status = status;
    if (status === 'completed') m.progress = 100;
  }
  window.renderMissions();
  if (window.selectedMission === id) window.selectMission(id);
};

window.updateProgress = function(id, val) {
  const m = window.MISSIONS.find(x => x.id === id);
  if (m) m.progress = parseInt(val, 10);
  window.renderMissions();
};

window.addTimelineNote = function(id) {
  const m = window.MISSIONS.find(x => x.id === id);
  const inp = document.getElementById('tl-note');
  if (!m || !inp || !inp.value.trim()) return;
  const now = new Date();
  m.timeline.push({
    t: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`,
    txt: inp.value.trim(),
    c: 'var(--info)'
  });
  inp.value = '';
  window.selectMission(id);
};

window.deleteMission = function(id) {
  if (!confirm('Abort mission ' + id + '?')) return;
  const idx = window.MISSIONS.findIndex(x => x.id === id);
  if (idx > -1) window.MISSIONS.splice(idx, 1);
  window.selectedMission = null;
  window.renderMissions();
  const panel = document.getElementById('mission-detail-panel');
  if (panel) {
    panel.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:10px;color:var(--text-muted);"><span style="font-family:var(--mono);font-size:10px;letter-spacing:1px;">MISSION ABORTED</span></div>`;
  }
};

window.submitNewMission = function() {
  const nameInp = document.getElementById('m-name');
  if (!nameInp || !nameInp.value.trim()) {
    alert('Please enter a mission name.');
    return;
  }
  const name = nameInp.value.trim();
  const id = 'MSN-' + String(window.MISSIONS.length + 1).padStart(3, '0');
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  const typeEl = document.getElementById('m-type');
  const priorityEl = document.getElementById('m-priority');
  const zoneEl = document.getElementById('m-zone');
  const droneEl = document.getElementById('m-drone');
  const respEl = document.getElementById('m-resp');
  const coordsEl = document.getElementById('m-coords');
  const objEl = document.getElementById('m-obj');

  window.MISSIONS.unshift({
    id,
    name,
    type: typeEl ? typeEl.value : 'Search & Rescue',
    priority: priorityEl ? priorityEl.value : 'High',
    status: 'active',
    zone: zoneEl ? zoneEl.value : 'Zone A',
    drones: droneEl ? Array.from(droneEl.selectedOptions).map(o => o.value) : ['Drone-01'],
    responders: respEl ? parseInt(respEl.value, 10) || 2 : 2,
    progress: 0,
    start: timeStr,
    eta: 'TBD',
    coords: coordsEl && coordsEl.value ? coordsEl.value : '28.3°N 77.1°E',
    obj: objEl && objEl.value ? objEl.value : 'Mission objective pending.',
    timeline: [{ t: timeStr, txt: 'Mission created and deployed', c: 'var(--accent)' }]
  });

  window.closeModal('new-mission-modal');
  window.renderMissions();
};

// ═══ ANALYTICS MODULE ═══
window.initAnalytics = function() {
  if (window.analyticsInited) return;
  window.analyticsInited = true;
  if (typeof Chart === 'undefined') return;

  const opts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: 'rgba(26,46,72,0.5)' }, ticks: { color: '#3d5470', font: { family: 'Share Tech Mono', size: 8 } } },
      y: { grid: { color: 'rgba(26,46,72,0.5)' }, ticks: { color: '#3d5470', font: { family: 'Share Tech Mono', size: 8 } } }
    }
  };
  const noScaleOpts = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };

  const detEl = document.getElementById('chart-detections');
  if (detEl) {
    const detLabels = ['09:00', '09:10', '09:20', '09:30', '09:40', '09:50', '10:00', '10:10', '10:20', '10:30', '10:40', '10:50'];
    const detData = [1, 2, 1, 3, 4, 2, 5, 6, 4, 7, 5, 8];
    window.charts.detections = new Chart(detEl, {
      type: 'line',
      data: {
        labels: detLabels,
        datasets: [{
          data: detData,
          borderColor: '#00ffaa',
          backgroundColor: 'rgba(0,255,170,0.08)',
          borderWidth: 2,
          tension: .4,
          fill: true,
          pointBackgroundColor: '#00ffaa',
          pointRadius: 3,
          pointHoverRadius: 5
        }]
      },
      options: { ...opts, scales: { ...opts.scales, y: { ...opts.scales.y, beginAtZero: true } } }
    });
  }

  const zoneEl = document.getElementById('chart-zones');
  if (zoneEl) {
    window.charts.zones = new Chart(zoneEl, {
      type: 'doughnut',
      data: {
        labels: ['Zone A', 'Zone B', 'Zone C'],
        datasets: [{
          data: [6, 5, 3],
          backgroundColor: ['rgba(255,61,61,0.7)', 'rgba(255,140,0,0.7)', 'rgba(61,220,132,0.7)'],
          borderColor: ['#ff3d3d', '#ff8c00', '#3ddc84'],
          borderWidth: 1
        }]
      },
      options: { ...noScaleOpts, cutout: '65%' }
    });
  }

  const netEl = document.getElementById('chart-network');
  if (netEl) {
    const netLabels = Array.from({ length: 10 }, (_, i) => '-' + (9 - i) + 'm');
    window.charts.network = new Chart(netEl, {
      type: 'line',
      data: {
        labels: netLabels,
        datasets: [
          { label: 'eMBB', data: Array.from({ length: 10 }, () => Math.round(700 + Math.random() * 200)), borderColor: '#4ab3ff', borderWidth: 1.5, tension: .4, fill: false, pointRadius: 0 },
          { label: 'URLLC', data: Array.from({ length: 10 }, () => Math.round(50 + Math.random() * 40)), borderColor: '#ff8c00', borderWidth: 1.5, tension: .4, fill: false, pointRadius: 0 },
          { label: 'mMTC', data: Array.from({ length: 10 }, () => Math.round(200 + Math.random() * 100)), borderColor: '#00ffaa', borderWidth: 1.5, tension: .4, fill: false, pointRadius: 0 }
        ]
      },
      options: {
        ...opts,
        plugins: {
          legend: { display: true, labels: { color: '#7a96b4', font: { family: 'Share Tech Mono', size: 8 }, boxWidth: 10 } }
        }
      }
    });
  }

  const effEl = document.getElementById('chart-efficiency');
  if (effEl) {
    const teams = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];
    window.charts.efficiency = new Chart(effEl, {
      type: 'bar',
      data: {
        labels: teams,
        datasets: [{
          data: [3, 5, 2, 4, 3],
          backgroundColor: ['rgba(0,255,170,0.4)', 'rgba(74,179,255,0.4)', 'rgba(255,140,0,0.4)', 'rgba(0,255,170,0.4)', 'rgba(180,124,255,0.4)'],
          borderColor: ['#00ffaa', '#4ab3ff', '#ff8c00', '#00ffaa', '#b47cff'],
          borderWidth: 1
        }]
      },
      options: { ...opts, scales: { ...opts.scales, y: { ...opts.scales.y, beginAtZero: true, ticks: { ...opts.scales.y.ticks, stepSize: 1 } } } }
    });
  }

  const latEl = document.getElementById('chart-latency');
  if (latEl) {
    window.charts.latency = new Chart(latEl, {
      type: 'line',
      data: {
        labels: [...window.latencyLabels],
        datasets: [
          {
            label: 'Live URLLC Ping (ms)',
            data: [...window.latencyData],
            borderColor: '#ff8c00',
            backgroundColor: 'rgba(255,140,0,0.12)',
            borderWidth: 2,
            tension: 0.35,
            fill: true,
            pointBackgroundColor: '#ff8c00',
            pointBorderColor: '#0a1424',
            pointBorderWidth: 1,
            pointRadius: 2.5,
            pointHoverRadius: 5
          },
          {
            label: '5ms SLA Threshold',
            data: Array(window.latencyLabels.length).fill(5),
            borderColor: 'rgba(255,61,61,0.65)',
            borderWidth: 1.5,
            borderDash: [5, 4],
            fill: false,
            pointRadius: 0
          }
        ]
      },
      options: {
        ...opts,
        animation: {
          duration: 400,
          easing: 'easeOutQuad'
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
              color: '#7a96b4',
              font: { family: 'Share Tech Mono', size: 8 },
              boxWidth: 10,
              padding: 4
            }
          },
          tooltip: {
            backgroundColor: 'rgba(10,20,36,0.95)',
            titleFont: { family: 'Share Tech Mono', size: 10 },
            bodyFont: { family: 'Share Tech Mono', size: 9 },
            borderColor: 'rgba(255,140,0,0.5)',
            borderWidth: 1,
            callbacks: {
              label: function(ctx) {
                if (ctx.datasetIndex === 0) return ` Ping: ${ctx.parsed.y} ms`;
                return ` SLA Target: 5.0 ms`;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(26,46,72,0.5)' },
            ticks: {
              color: '#3d5470',
              font: { family: 'Share Tech Mono', size: 8 },
              maxTicksLimit: 7
            }
          },
          y: {
            grid: { color: 'rgba(26,46,72,0.5)' },
            min: 0,
            max: 8,
            ticks: {
              color: '#3d5470',
              font: { family: 'Share Tech Mono', size: 8 },
              stepSize: 2,
              callback: function(v) { return v + 'ms'; }
            }
          }
        }
      }
    });
  }

  window.buildHeatmap();

  // Real-time dynamic loop for analytics and latency chart (2s sync)
  if (!window.analyticsInterval) {
    window.analyticsInterval = setInterval(() => {
      // Dynamic ping calculation (centered on 3.8ms with realistic jitter and occasional burst)
      const isBurst = Math.random() < 0.12;
      const newPing = isBurst ? +(4.9 + Math.random() * 1.8).toFixed(1) : +(3.1 + Math.random() * 1.7).toFixed(1);
      window.currentLivePing = newPing;

      // Update global header & latency widgets across app
      const lel = document.getElementById('latency');
      if (lel) lel.textContent = newPing + 'ms';
      const liveBadgeVal = document.getElementById('analytics-live-ping-val');
      if (liveBadgeVal) liveBadgeVal.textContent = newPing + 'ms';

      // Update rolling time and data queues
      const now = new Date();
      const timeLabel = `${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
      
      window.latencyLabels.shift();
      window.latencyLabels.push(timeLabel);
      
      window.latencyData.shift();
      window.latencyData.push(newPing);

      // Real-time Chart.js Line Chart Update
      if (window.charts.latency) {
        window.charts.latency.data.labels = [...window.latencyLabels];
        window.charts.latency.data.datasets[0].data = [...window.latencyData];
        window.charts.latency.data.datasets[1].data = Array(window.latencyLabels.length).fill(5);
        window.charts.latency.update();
      }

      // Continuous detection chart scroll
      if (window.charts.detections) {
        const d = window.charts.detections.data.datasets[0].data;
        d.shift();
        d.push(Math.round(2 + Math.random() * 8));
        window.charts.detections.update('none');
      }
    }, 2000);
  }
};

window.buildHeatmap = function() {
  const cols = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'C3'];
  const rows = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7'];
  const colEl = document.getElementById('heat-cols');
  const gridEl = document.getElementById('heat-grid');
  if (!colEl || !gridEl) return;
  colEl.innerHTML = cols.map(c => `<div class="heat-label">${c}</div>`).join('');
  gridEl.innerHTML = '';
  rows.forEach((r, ri) => cols.forEach((c, ci) => {
    const v = Math.random();
    const clr = v > 0.7 ? `rgba(255,61,61,${0.4 + v * 0.5})` : v > 0.4 ? `rgba(255,140,0,${0.3 + v * 0.4})` : v > 0.2 ? `rgba(0,255,170,${0.2 + v * 0.3})` : `rgba(26,46,72,0.4)`;
    const cell = document.createElement('div');
    cell.className = 'heat-cell';
    cell.style.background = clr;
    cell.title = `${c}-${r}: Risk ${Math.round(v * 100)}%`;
    cell.onclick = (event) => window.showTooltip(event, `Sector ${c}-${r}`, `Risk Level: ${Math.round(v * 100)}% · ${v > 0.7 ? 'CRITICAL' : v > 0.4 ? 'MODERATE' : 'LOW'}`);
    gridEl.appendChild(cell);
  }));
};

// ═══ REPORTING & INCIDENT LOGS ═══
window.initReporting = function() {
  window.renderTemplates();
  window.renderReports();
  window.renderIncidents();
};

window.renderTemplates = function() {
  const el = document.getElementById('template-list');
  if (!el || el.children.length > 0) return;
  window.TEMPLATES.forEach(t => {
    const div = document.createElement('div');
    div.className = `template-card${t.id === window.selectedTemplate ? ' selected' : ''}`;
    div.onclick = () => {
      window.selectedTemplate = t.id;
      document.querySelectorAll('.template-card').forEach(x => x.classList.remove('selected'));
      div.classList.add('selected');
    };
    div.innerHTML = `<div class="tc-name">${t.name}</div><div class="tc-desc">${t.desc}</div><div class="tc-badge" style="background:${t.badgeColor};color:${t.badgeTextColor};border:1px solid ${t.badgeTextColor}33;">${t.badge}</div>`;
    el.appendChild(div);
  });
};

window.renderReports = function() {
  const el = document.getElementById('reports-container');
  if (!el) return;
  el.innerHTML = '';
  window.REPORTS_GENERATED.forEach(r => {
    el.innerHTML += `
    <div class="report-card">
      <div class="rc-header"><div><div class="rc-title">${r.title}</div><div style="font-family:var(--mono);font-size:9px;color:var(--text-muted);margin-top:2px;">${r.type}</div></div><div class="rc-time">${r.time}</div></div>
      <div class="rc-meta">${r.tags.map(t => `<span class="rc-tag">${t}</span>`).join('')}</div>
      <div class="rc-summary">${r.summary}</div>
      <div class="rc-actions">
        <button class="btn-primary" style="font-size:8px;" onclick="window.viewReport('${r.title}')">↗ VIEW</button>
        <button class="btn-info" style="font-size:8px;" onclick="window.downloadReport('${r.title}')">⬇ DOWNLOAD</button>
        <button class="btn-danger" style="font-size:8px;" onclick="this.closest('.report-card').remove()">✕ DELETE</button>
      </div>
    </div>`;
  });
};

window.renderIncidents = function() {
  const el = document.getElementById('incident-log');
  if (!el || el.children.length > 0) return;
  window.INCIDENTS.forEach(inc => {
    const div = document.createElement('div');
    div.className = 'il-item';
    div.innerHTML = `<div class="il-time">${inc.t}</div><div class="il-dot" style="background:${inc.c};box-shadow:0 0 4px ${inc.c};"></div><div class="il-content"><div class="il-title">${inc.title}</div><div class="il-desc">${inc.desc}</div></div>`;
    el.appendChild(div);
  });
};

window.generateReport = function() {
  const t = window.TEMPLATES.find(x => x.id === window.selectedTemplate);
  if (!t) return;
  const now = new Date();
  const stamp = `${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
  const newRep = {
    title: `${t.id === 'T1' ? 'SITREP' : t.id === 'T2' ? 'SURVLOG' : t.id === 'T3' ? 'NETPERF' : t.id === 'T4' ? 'DRONELOG' : 'TIMELINE'}-2026-042-${stamp}`,
    type: t.name,
    time: 'Just now',
    tags: ['GENERATED', 'LIVE'],
    summary: `Auto-generated ${t.name} at ${stamp}. All active zones included. ${window.MISSIONS.filter(m => m.status === 'active').length} active missions. AI detection confidence avg: 92%. 5G slices nominal.`
  };
  window.REPORTS_GENERATED.unshift(newRep);
  const rc = document.getElementById('report-count');
  if (rc) rc.textContent = window.REPORTS_GENERATED.length + ' REPORTS';
  window.renderReports();
  
  const il = document.getElementById('incident-log');
  if (il) {
    const div = document.createElement('div');
    div.className = 'il-item fade-in';
    div.innerHTML = `<div class="il-time">${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}</div><div class="il-dot" style="background:var(--accent);box-shadow:0 0 4px var(--accent);"></div><div class="il-content"><div class="il-title">Report Generated: ${newRep.title}</div><div class="il-desc">${t.name} · Auto-export queued</div></div>`;
    il.prepend(div);
  }
  window.showToast('Report Compiled', `Created new report <b>${newRep.title}</b>`, '#', newRep.title + '.pdf');
};

// ═══ EXPORT & PREVIEW ENGINE ═══
window.currentExportType = 'report';
window.currentExportReportTitle = '';
window.currentExportFormat = 'pdf';
window.currentDroneFormat = 'mp4';
window.lastExportedFileUrl = '';
window.lastExportedFileName = '';

window.showToast = function(title, message, fileUrl, fileName) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const id = 'toast-' + Date.now();
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.id = id;
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    </div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
      <div class="toast-actions">
        <a class="toast-link" href="${fileUrl}" download="${fileName}" onclick="event.stopPropagation()">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Open / Download File (${fileName.split('.').pop().toUpperCase()})
        </a>
      </div>
    </div>
    <div class="toast-close" onclick="this.parentElement.remove()">✕</div>
  `;
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentElement) toast.remove(); }, 9000);
};

window.openExportModal = function(type, target) {
  window.currentExportType = type;
  if (type === 'report') {
    if (target === 'T6' || window.selectedTemplate === 'T6') {
      window.openDroneFlightLogModal();
      return;
    }
    if (typeof target === 'string' && target.startsWith('T')) {
      const tmpl = window.TEMPLATES.find(x => x.id === target) || window.TEMPLATES[0];
      window.currentExportReportTitle = tmpl.name;
      const tEl = document.getElementById('export-modal-title');
      const sEl = document.getElementById('export-modal-subtitle');
      if (tEl) tEl.textContent = `Export: ${tmpl.name}`;
      if (sEl) sEl.textContent = `${tmpl.desc} · NDMA Standard`;
    } else {
      window.currentExportReportTitle = target || (window.REPORTS_GENERATED[0] ? window.REPORTS_GENERATED[0].title : 'SITREP-2026-042');
      if (window.currentExportReportTitle.includes('FLIGHTLOG') || window.currentExportReportTitle.includes('Battery')) {
        window.openDroneFlightLogModal();
        return;
      }
      const tEl = document.getElementById('export-modal-title');
      const sEl = document.getElementById('export-modal-subtitle');
      if (tEl) tEl.textContent = `Export Report: ${window.currentExportReportTitle}`;
      if (sEl) sEl.textContent = `National Disaster Response Portal · Encrypted 5G Export`;
    }
    window.updateReportPreview();
    const modal = document.getElementById('export-report-modal');
    if (modal) modal.classList.add('open');
  } else if (type === 'drone') {
    window.openDroneExportModal();
  }
};

window.previewCurrentTemplate = function() {
  window.openExportModal('report', window.selectedTemplate);
};

window.viewReport = function(title) {
  window.openExportModal('report', title);
};

window.downloadReport = function(title) {
  window.openExportModal('report', title);
};

window.selectReportFormat = function(fmt, el) {
  window.currentExportFormat = fmt;
  document.querySelectorAll('#report-format-pills .format-pill').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  window.updateReportPreview();
};

window.getReportPayload = function(format) {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  const title = window.currentExportReportTitle || 'RESQNET-SITREP-2026';
  
  if (format === 'json') {
    return JSON.stringify({
      resqnet_version: "2.4.1-SANDBOX",
      organization: "National Disaster Management Authority (NDMA)",
      telecom_partner: "Department of Telecommunications (DoT) 100 5G Labs",
      report_title: title,
      generated_at: `${dateStr}T${timeStr}Z`,
      sector: "28.3°N 77.1°E",
      network_slice_telemetry: {
        eMBB_throughput_mbps: 840,
        urllc_latency_ms: +(document.getElementById('latency') ? document.getElementById('latency').textContent.replace('ms', '') : 4.2),
        mmtc_connected_devices: 24,
        uptime_pct: 99.97
      },
      tactical_summary: {
        survivors_located: window.survivorCount,
        critical_alerts_active: window.alertCount,
        active_missions: window.MISSIONS.filter(m => m.status === 'active').length,
        drones_airborne: 3
      },
      missions: window.MISSIONS,
      incident_logs: window.INCIDENTS
    }, null, 2);
  } else if (format === 'csv') {
    let csv = "ID,NAME,TYPE,PRIORITY,STATUS,ZONE,COORDINATES,PROGRESS_PCT,START_TIME,ETA,DRONES,RESPONDERS\n";
    window.MISSIONS.forEach(m => {
      csv += `"${m.id}","${m.name}","${m.type}","${m.priority}","${m.status}","${m.zone}","${m.coords}","${m.progress}%","${m.start}","${m.eta}","${m.drones.join(';')}","${m.responders}"\n`;
    });
    csv += "\nINCIDENT_LOGS\nTIMESTAMP,TITLE,SEVERITY_COLOR,DETAILS\n";
    window.INCIDENTS.forEach(i => {
      csv += `"${i.t}","${i.title}","${i.c}","${i.desc}"\n`;
    });
    return csv;
  } else if (format === 'txt') {
    return `========================================================================
RESQNET-X NATIONAL DISASTER RESPONSE SITUATION REPORT
GOVERNMENT OF INDIA · NDMA / DoT 5G EXPERIMENTAL SANDBOX
========================================================================
Report Document : ${title}
Timestamp       : ${dateStr} ${timeStr} UTC+05:30
Geographic Grid : 28.3°N, 77.1°E (Zone A / Zone B / Zone C)
System Status   : SYSTEM NOMINAL · 5G SLICES (eMBB / URLLC / mMTC) ACTIVE

--- EXECUTIVE OPERATIONAL METRICS ---
• Confirmed Survivors Located : ${window.survivorCount}
• Active Critical Alerts      : ${window.alertCount}
• URLLC Latency               : ${document.getElementById('latency') ? document.getElementById('latency').textContent : '4.2ms'}
• Active Slices               : eMBB (840 Mbps), URLLC (<5ms), mMTC (24 IoT Beacons)
• Airborne Edge AI Drones     : Drone-01 (YOLO v8), Drone-02, Drone-03

--- ACTIVE DEPLOYED MISSIONS ---
${window.MISSIONS.map(m => `[${m.id}] ${m.name.padEnd(28)} | ${m.priority.padEnd(8)} | Zone: ${m.zone.padEnd(8)} | Progress: ${String(m.progress).padStart(3)}% | Status: ${m.status.toUpperCase()}`).join('\n')}

--- RECENT INCIDENT CHRONOLOGY ---
${window.INCIDENTS.map(i => `[${i.t}] ${i.title.padEnd(30)} : ${i.desc}`).join('\n')}

========================================================================
Authorized by: ResQNet-X Autonomous C2 Engine (NDMA Validated)
========================================================================`;
  } else {
    // PDF text / formatted representation
    return `╔══════════════════════════════════════════════════════════════════════╗
║  RESQNET-X NATIONAL DISASTER RESPONSE · NDMA TACTICAL SITREP         ║
║  DOCUMENT ID: ${title.padEnd(52)} ║
║  GEN TIME   : ${dateStr} ${timeStr} IST          SECTOR: 28.3°N 77.1°E ║
╚══════════════════════════════════════════════════════════════════════╝

[1] 5G EDGE INTELLIGENCE & SLICING TELEMETRY:
    • eMBB Live Video Feed     : 1080p@60fps YOLO v8 AI Real-Time Stream
    • URLLC Mission-Critical   : Latency ${document.getElementById('latency') ? document.getElementById('latency').textContent : '4.2ms'} (Target <5ms)
    • mMTC Survivor Wearables  : 24 RedCap Smart Beacons Tracked
    • GNN Path Optimization    : Active Route Corridor via Zone B Safe Waypoint

[2] SURVIVOR & CASUALTY SITUATION:
    • Total Survivors Located  : ${window.survivorCount} Confirmed
    • High Risk Extractions    : 2 in Progress (MSN-001 & MSN-005)
    • AI Model Confidence      : YOLO v8 Avg 94.2% | DeepSORT Track: Nominal

[3] DISASTER OPERATION ROSTER:
${window.MISSIONS.map(m => `    • ${m.id} [${m.priority.toUpperCase()}] ${m.name} -> ${m.zone} (${m.progress}% Complete)`).join('\n')}

[4] VERIFICATION & AUTHENTICATION:
    Digital Signature: SHA256:${Array.from({ length: 32 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}
    NDMA Secure Gateway · Ready for Export & Print`;
  }
};

window.updateReportPreview = function() {
  const box = document.getElementById('report-preview-box');
  const formatLabel = document.getElementById('export-preview-format');
  const sizeLabel = document.getElementById('export-filesize');
  const downloadBtn = document.getElementById('export-download-btn');
  if (!box) return;
  
  const payload = window.getReportPayload(window.currentExportFormat);
  box.textContent = payload;
  
  const byteLength = new Blob([payload]).size;
  const approxSize = (byteLength / 1024).toFixed(1) + ' KB';
  if (sizeLabel) sizeLabel.textContent = `~${approxSize}`;
  if (formatLabel) formatLabel.textContent = `${window.currentExportFormat.toUpperCase()} / READY`;
  if (downloadBtn) downloadBtn.textContent = `⬇ DOWNLOAD REPORT (${window.currentExportFormat.toUpperCase()})`;
};

window.executeReportExport = function() {
  const content = window.getReportPayload(window.currentExportFormat);
  const now = new Date();
  const timeStamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
  const cleanTitle = (window.currentExportReportTitle || 'RESQNET_SITREP').replace(/[^a-zA-Z0-9_-]/g, '_');
  const fileName = `${cleanTitle}_${timeStamp}.${window.currentExportFormat}`;
  
  let mime = 'text/plain';
  if (window.currentExportFormat === 'json') mime = 'application/json';
  else if (window.currentExportFormat === 'csv') mime = 'text/csv';
  else if (window.currentExportFormat === 'pdf') mime = 'application/pdf';

  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  window.lastExportedFileUrl = url;
  window.lastExportedFileName = fileName;

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  window.closeModal('export-report-modal');
  window.showToast(
    'Report Exported Successfully',
    `File <b>${fileName}</b> generated and saved to your device download folder.`,
    url,
    fileName
  );
};

window.printReportPreview = function() {
  const content = window.getReportPayload('txt');
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>${window.currentExportReportTitle || 'RESQNET-X SITREP'}</title>
          <style>
            body { font-family: monospace; padding: 25px; background: #fff; color: #000; line-height: 1.4; white-space: pre-wrap; }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 250);
  } else {
    window.executeReportExport();
  }
};

// ═══ DRONE FEED EXPORT ═══
window.openDroneExportModal = function(mode) {
  const clockEl = document.getElementById('clock');
  const modalTime = document.getElementById('drone-modal-time');
  if (clockEl && modalTime) modalTime.textContent = clockEl.textContent;
  window.updateDronePreview();
  const modal = document.getElementById('export-drone-modal');
  if (modal) modal.classList.add('open');
};

window.selectDroneFormat = function(fmt, el) {
  window.currentDroneFormat = fmt;
  document.querySelectorAll('#drone-format-pills .format-pill').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  window.updateDronePreview();
};

window.updateDronePreview = function() {
  const feedArea = document.getElementById('drone-feed-preview-area');
  const jsonBox = document.getElementById('drone-json-preview-box');
  const info = document.getElementById('drone-export-info');
  const downloadBtn = document.getElementById('drone-download-btn');
  
  if (window.currentDroneFormat === 'json') {
    if (feedArea) feedArea.style.display = 'none';
    if (jsonBox) jsonBox.style.display = 'block';
    const jsonPayload = JSON.stringify({
      drone_id: "DRONE-01-ALPHA",
      stream_source: "5G eMBB Slicing 1000Mbps",
      resolution: "1920x1080@60fps",
      fov: "84 deg",
      altitude_m: 124.5,
      gps: { lat: 28.31204, lon: 77.02115 },
      yolo_v8_detections: [
        { class: "person", confidence: 0.982, bbox: [154, 108, 576, 810], zone: "Zone B", thermal_signature_c: 36.8 },
        { class: "person", confidence: 0.978, bbox: [1380, 86, 1720, 756], zone: "Zone C", thermal_signature_c: 37.1 }
      ],
      hazard_alerts: ["Flood boundary proximity 15m"]
    }, null, 2);
    if (jsonBox) jsonBox.textContent = jsonPayload;
    if (info) info.textContent = `YOLO JSON Telemetry (~2.1 KB)`;
  } else {
    if (feedArea) feedArea.style.display = 'block';
    if (jsonBox) jsonBox.style.display = 'none';
    if (info) {
      if (window.currentDroneFormat === 'mp4') info.textContent = `1080p 60fps MP4 Video Buffer (~14.2 MB)`;
      else if (window.currentDroneFormat === 'webm') info.textContent = `1080p 60fps WebM Ultra-Low Latency (~10.8 MB)`;
      else if (window.currentDroneFormat === 'png') info.textContent = `1920x1080 Hi-Res Raw AI Snapshot (~3.4 MB)`;
    }
  }
  if (downloadBtn) {
    downloadBtn.textContent = `⬇ EXPORT & DOWNLOAD FEED (${window.currentDroneFormat.toUpperCase()})`;
  }
};

window.executeDroneExport = function() {
  const now = new Date();
  const timeStamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
  const fileName = `DRONE01_FEED_ZONE_B_${timeStamp}.${window.currentDroneFormat}`;
  
  let blob;
  if (window.currentDroneFormat === 'json') {
    const jsonBox = document.getElementById('drone-json-preview-box');
    const data = jsonBox ? jsonBox.textContent : '{}';
    blob = new Blob([data], { type: 'application/json' });
  } else if (window.currentDroneFormat === 'png') {
    const canvas = document.createElement('canvas');
    canvas.width = 1280;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');
    
    const grad = ctx.createLinearGradient(0, 0, 1280, 720);
    grad.addColorStop(0, '#0a1424');
    grad.addColorStop(0.5, '#070e1a');
    grad.addColorStop(1, '#050912');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 720);
    
    ctx.strokeStyle = 'rgba(26,46,72,0.4)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1280; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 720); ctx.stroke(); }
    for (let y = 0; y < 720; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1280, y); ctx.stroke(); }
    
    ctx.strokeStyle = '#4ab3ff';
    ctx.lineWidth = 3;
    ctx.strokeRect(100, 80, 380, 540);
    ctx.fillStyle = '#4ab3ff';
    ctx.font = '16px monospace';
    ctx.fillText('PERSON: 98% (ZONE B) · THERMAL: 36.8°C', 100, 70);
    
    ctx.strokeStyle = '#3ddc84';
    ctx.lineWidth = 3;
    ctx.strokeRect(780, 60, 360, 520);
    ctx.fillStyle = '#3ddc84';
    ctx.fillText('PERSON: 98% (SAFE CORRIDOR) · THERMAL: 37.1°C', 780, 50);
    
    ctx.fillStyle = '#00ffaa';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('RESQNET-X DRONE-01 · LIVE 5G eMBB FEED', 30, 40);
    ctx.font = '14px monospace';
    ctx.fillText(`TIMESTAMP: ${now.toISOString()} | GPS: 28.312°N 77.021°E | 1080p 60fps`, 30, 690);

    canvas.toBlob((b) => {
      const url = URL.createObjectURL(b);
      window.triggerDownload(url, fileName);
    }, 'image/png');
    window.closeModal('export-drone-modal');
    return;
  } else {
    const mockContent = `RESQNET-X 5G eMBB HIGH DEFINITION VIDEO FEED STREAM RECORDING
DRONE ID: DRONE-01-ALPHA
RESOLUTION: 1920x1080 60FPS H.265/HEVC ENCODED
LOCATION: 28.3°N 77.1°E ZONE B SECTOR
DETECTIONS: 2 SURVIVORS FLAGGED (CONF: 98%)
TIMESTAMP: ${now.toISOString()}
NDMA C2 MISSION VALIDATED`;
    blob = new Blob([mockContent], { type: window.currentDroneFormat === 'mp4' ? 'video/mp4' : 'video/webm' });
  }

  const url = URL.createObjectURL(blob);
  window.triggerDownload(url, fileName);
  window.closeModal('export-drone-modal');
};

window.triggerDownload = function(url, fileName) {
  window.lastExportedFileUrl = url;
  window.lastExportedFileName = fileName;

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  window.showToast(
    'Drone Feed Exported',
    `Exported feed <b>${fileName}</b> has been downloaded to your system.`,
    url,
    fileName
  );
};

window.exportPDF = function() {
  window.openExportModal('report', window.selectedTemplate);
  window.selectReportFormat('pdf', document.querySelector('#report-format-pills .format-pill:nth-child(1)'));
};

window.exportCSV = function() {
  window.openExportModal('report', window.selectedTemplate);
  window.selectReportFormat('csv', document.querySelector('#report-format-pills .format-pill:nth-child(2)'));
};

window.exportJSON = function() {
  window.openExportModal('report', window.selectedTemplate);
  window.selectReportFormat('json', document.querySelector('#report-format-pills .format-pill:nth-child(3)'));
};

// ═══ FULLSCREEN VIDEO WORKSPACE CONTROLLER ═══
window.currentActiveDroneCam = 'drone1';

window.DRONE_FLEET = {
  drone1: {
    id: 'Drone-01',
    name: 'Drone-01 (YOLO v8 Optical)',
    zone: 'Zone A',
    bat: 78,
    flightTime: '24m flight remaining',
    alt: '124.5m',
    spd: '44.8 km/h',
    ping: '3.8ms',
    lat: '28.31204°N',
    lon: '77.02115°E',
    status: 'safe',
    stream: '5G-eMBB-STREAM-01',
    detections: [
      { label: 'PERSON: 98% (SURVIVOR #1) · 36.8°C', boxClass: 'det-blue', style: 'left:18%;top:22%;width:24%;height:58%;' },
      { label: 'PERSON: 98% (SURVIVOR #2) · 37.1°C', boxClass: 'det-green', style: 'left:58%;top:20%;width:22%;height:54%;' }
    ]
  },
  drone_alpha: {
    id: 'Drone-01-Alpha',
    name: 'Drone-01-Alpha (FLIR Thermal IR)',
    zone: 'Zone B',
    bat: 91,
    flightTime: '32m flight remaining',
    alt: '95.0m',
    spd: '38.2 km/h',
    ping: '3.2ms',
    lat: '28.34502°N',
    lon: '77.10421°E',
    status: 'safe',
    stream: '5G-eMBB-STREAM-01-ALPHA',
    detections: [
      { label: 'THERMAL SIGNATURE: 38.4°C (SURVIVOR)', boxClass: 'det-blue', style: 'left:30%;top:28%;width:26%;height:52%;' }
    ]
  },
  drone2: {
    id: 'Drone-02',
    name: 'Drone-02 (Recon & S&R)',
    zone: 'Zone A / RTB Corridor',
    bat: 18,
    flightTime: '4m TO EMERGENCY LANDING',
    alt: '68.0m',
    spd: '52.0 km/h',
    ping: '2.9ms',
    lat: '28.29801°N',
    lon: '76.99504°E',
    status: 'critical',
    rtb: true,
    stream: '5G-URLLC-STREAM-02-RTB',
    detections: [
      { label: 'LANDING PAD ALPHA: 100% · RTB VECTOR', boxClass: 'det-green', style: 'left:38%;top:35%;width:25%;height:45%;' }
    ]
  },
  drone3: {
    id: 'Drone-03',
    name: 'Drone-03 (Hazard Survey)',
    zone: 'Zone C',
    bat: 31,
    flightTime: '8m flight remaining',
    alt: '140.2m',
    spd: '41.0 km/h',
    ping: '4.5ms',
    lat: '28.21045°N',
    lon: '77.30122°E',
    status: 'warning',
    stream: '5G-eMBB-STREAM-03',
    detections: [
      { label: 'FLOOD BOUNDARY SHIFT: +0.3m', boxClass: 'det-blue', style: 'left:25%;top:30%;width:40%;height:50%;' }
    ]
  }
};

window.toggleVideoFullscreen = function(isOpen) {
  const overlay = document.getElementById('video-fullscreen-overlay');
  if (!overlay) return;
  if (isOpen) {
    overlay.classList.add('active');
    window.selectDroneCamera(window.currentActiveDroneCam || 'drone1');
    const clock = document.getElementById('clock');
    const fsClock = document.getElementById('fs-bottom-clock');
    if (clock && fsClock) fsClock.textContent = clock.textContent + ' UTC+05:30';
  } else {
    overlay.classList.remove('active');
  }
};

// Global escape key listener for fullscreen and modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const fsOverlay = document.getElementById('video-fullscreen-overlay');
    if (fsOverlay && fsOverlay.classList.contains('active')) {
      window.toggleVideoFullscreen(false);
    } else {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  }
});

window.selectDroneCamera = function(camKey) {
  window.currentActiveDroneCam = camKey;
  const drone = window.DRONE_FLEET[camKey] || window.DRONE_FLEET.drone1;

  // Update Fullscreen buttons
  const cam1Btn = document.getElementById('fs-cam-btn-1');
  const camAlphaBtn = document.getElementById('fs-cam-btn-alpha');
  const cam2Btn = document.getElementById('fs-cam-btn-2');
  if (cam1Btn) cam1Btn.classList.toggle('active', camKey === 'drone1');
  if (camAlphaBtn) camAlphaBtn.classList.toggle('active', camKey === 'drone_alpha');
  if (cam2Btn) cam2Btn.classList.toggle('active', camKey === 'drone2');

  // Update Fullscreen HUD values
  const fsTitle = document.getElementById('fs-drone-title');
  if (fsTitle) fsTitle.textContent = `${drone.id.toUpperCase()} · LIVE 5G EDGE AI FEED (${drone.zone})`;

  const fsBatBadge = document.getElementById('fs-drone-battery-badge');
  if (fsBatBadge) {
    fsBatBadge.className = `bat-pill ${drone.status === 'critical' ? 'critical' : drone.status === 'warning' ? 'warn' : 'safe'}`;
    fsBatBadge.textContent = `🔋 ${drone.bat}% ${drone.status === 'critical' ? 'CRITICAL RTB' : drone.status === 'warning' ? 'LOW' : 'NOMINAL'}`;
  }

  const fsCoords = document.getElementById('fs-geo-coords');
  if (fsCoords) fsCoords.textContent = `LAT: ${drone.lat} · LON: ${drone.lon} · ELEV: ${drone.alt}`;

  const fsAlt = document.getElementById('fs-telemetry-alt');
  const fsSpd = document.getElementById('fs-telemetry-spd');
  const fsPing = document.getElementById('fs-telemetry-ping');
  const fsBat = document.getElementById('fs-telemetry-bat');
  const fsFeed = document.getElementById('fs-bottom-feed-name');

  if (fsAlt) fsAlt.textContent = drone.alt;
  if (fsSpd) fsSpd.textContent = drone.spd;
  if (fsPing) fsPing.textContent = drone.ping;
  if (fsBat) {
    fsBat.textContent = `${drone.bat}% (${drone.flightTime})`;
    fsBat.style.color = drone.status === 'critical' ? 'var(--danger)' : drone.status === 'warning' ? 'var(--warn)' : 'var(--safe)';
  }
  if (fsFeed) fsFeed.textContent = drone.stream;

  // Update Right panel title & tag
  const rpTitle = document.getElementById('right-panel-drone-title');
  const rpBatTag = document.getElementById('rp-drone-bat-tag');
  if (rpTitle) rpTitle.textContent = `${drone.id.toUpperCase()} · ${drone.model.toUpperCase()}`;
  if (rpBatTag) {
    rpBatTag.textContent = `🔋 ${drone.bat}%`;
    rpBatTag.style.color = drone.status === 'critical' ? 'var(--danger)' : drone.status === 'warning' ? 'var(--warn)' : 'var(--accent)';
  }

  // Update Fullscreen Detection Bounding Boxes
  const detContainer = document.getElementById('fs-detection-container');
  if (detContainer && drone.detections) {
    detContainer.innerHTML = drone.detections.map(d => `
      <div class="detection-box ${d.boxClass}" style="${d.style};pointer-events:auto;">
        <div class="det-label">${d.label}</div>
      </div>
    `).join('');
  }

  // If drone is critical, trigger toast reminder if not shown recently
  if (drone.status === 'critical' && !window.drone02AlertToastShown) {
    window.drone02AlertToastShown = true;
    window.showToast(
      '⚡ DRONE BATTERY ALERT: DRONE-02',
      `Drone-02 battery critical (${drone.bat}%). Autonomous Return-to-Base (RTB) vector active via URLLC corridor.`
    );
  }
};

window.toggleFullscreenBbox = function(show) {
  const container = document.getElementById('fs-detection-container');
  if (container) container.style.display = show ? 'block' : 'none';
};

window.toggleFullscreenThermal = function(show) {
  const bg = document.getElementById('fs-stream-bg');
  if (!bg) return;
  if (show) {
    bg.style.background = 'radial-gradient(ellipse at center, #2e0854 0%, #15002b 60%, #05000f 100%)';
    window.showToast('FLIR Thermal Mode Engaged', 'Displaying false-color infrared signatures and heat differentials.');
  } else {
    bg.style.background = 'radial-gradient(ellipse at center, #0e1e38 0%, #061020 60%, #030812 100%)';
  }
};

window.toggleFullscreenCrosshair = function(show) {
  const ch = document.getElementById('fs-crosshair-element');
  const cp = document.getElementById('fs-compass-tape');
  if (ch) ch.style.display = show ? 'block' : 'none';
  if (cp) cp.style.display = show ? 'flex' : 'none';
};

window.captureFullscreenSnapshot = function() {
  const now = new Date();
  const timeStamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
  const fileName = `RESQNET_AI_SNAPSHOT_${window.currentActiveDroneCam.toUpperCase()}_${timeStamp}.png`;

  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  const grad = ctx.createLinearGradient(0, 0, 1920, 1080);
  grad.addColorStop(0, '#0a1424');
  grad.addColorStop(0.5, '#070e1a');
  grad.addColorStop(1, '#050912');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1920, 1080);

  ctx.strokeStyle = 'rgba(0,255,170,0.15)';
  ctx.lineWidth = 1;
  for (let x = 0; x < 1920; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 1080); ctx.stroke(); }
  for (let y = 0; y < 1080; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1920, y); ctx.stroke(); }

  // Draw overlay annotations
  const drone = window.DRONE_FLEET[window.currentActiveDroneCam] || window.DRONE_FLEET.drone1;
  ctx.fillStyle = '#00ffaa';
  ctx.font = 'bold 28px sans-serif';
  ctx.fillText(`RESQNET-X ${drone.name.toUpperCase()} · HIGH-RES AI SNAPSHOT`, 40, 60);

  ctx.font = '16px monospace';
  ctx.fillStyle = '#7890a8';
  ctx.fillText(`TIMESTAMP: ${now.toISOString()} | 5G eMBB 850Mbps | GPS: ${drone.lat} ${drone.lon} | BATTERY: ${drone.bat}%`, 40, 1030);

  // Bounding boxes
  ctx.strokeStyle = '#4ab3ff';
  ctx.lineWidth = 3;
  ctx.strokeRect(340, 240, 460, 620);
  ctx.fillStyle = '#4ab3ff';
  ctx.font = 'bold 20px monospace';
  ctx.fillText('PERSON: 98% (SURVIVOR #1) · THERMAL: 36.8°C', 340, 225);

  ctx.strokeStyle = '#3ddc84';
  ctx.lineWidth = 3;
  ctx.strokeRect(1100, 210, 420, 580);
  ctx.fillStyle = '#3ddc84';
  ctx.fillText('PERSON: 98% (SURVIVOR #2) · THERMAL: 37.1°C', 1100, 195);

  canvas.toBlob((b) => {
    const url = URL.createObjectURL(b);
    window.triggerDownload(url, fileName);
  }, 'image/png');
};

// ═══ DRONE BATTERY TELEMETRY & ALERTS CONTROLLER ═══
window.triggerDroneBatteryAlertModal = function(droneName, batteryPct) {
  const modal = document.getElementById('drone-battery-modal');
  const title = document.getElementById('bat-modal-drone-name');
  const pill = document.getElementById('bat-modal-pct-pill');
  const meter = document.getElementById('bat-modal-meter');
  const subtitle = document.getElementById('bat-modal-subtitle');
  const duration = document.getElementById('bat-modal-duration');
  const dist = document.getElementById('bat-modal-dist');

  if (title) title.textContent = `${droneName} (Critical Power Alert)`;
  if (subtitle) subtitle.textContent = `${droneName} · Automated 5G URLLC Power Telemetry`;
  if (pill) {
    pill.textContent = `⚡ ${batteryPct}% REMAINING`;
    pill.className = `bat-pill ${batteryPct <= 20 ? 'critical' : 'warn'}`;
  }
  if (meter) {
    meter.style.width = batteryPct + '%';
    meter.style.background = batteryPct <= 20 ? 'var(--danger)' : 'var(--warn)';
  }
  if (duration) duration.textContent = batteryPct <= 20 ? '4.2 minutes' : '8.5 minutes';
  if (dist) dist.textContent = batteryPct <= 20 ? '1.4 km to Landing Pad Alpha' : '2.8 km to Base';

  if (modal) modal.classList.add('open');
};

window.confirmRTBAction = function() {
  window.closeModal('drone-battery-modal');
  window.showToast(
    '⚡ RTB Protocol Confirmed',
    'Drone-02 autonomous return-to-base authorized. Priority URLLC slice corridor locked at 2.9ms latency.'
  );

  // Add event to incident log if present
  const il = document.getElementById('incident-log');
  if (il) {
    const now = new Date();
    const t = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const div = document.createElement('div');
    div.className = 'il-item fade-in';
    div.innerHTML = `<div class="il-time">${t}</div><div class="il-dot" style="background:var(--danger);box-shadow:0 0 4px var(--danger);"></div><div class="il-content"><div class="il-title">Drone-02 RTB Authorized (18% Battery)</div><div class="il-desc">Corridor 5G URLLC safe vector active · ETA 4 min to Sector Landing Pad Alpha</div></div>`;
    il.prepend(div);
  }
};

window.triggerDroneRTBCommand = function(droneId) {
  window.showToast(
    `⚡ RTB Command Issued: ${droneId}`,
    `${droneId} acknowledging command. Reorienting to home base landing coordinates.`
  );
};

// ═══ DRONE FLIGHT LOG HISTORY & BATTERY HEALTH DATA GENERATOR ═══
window.currentFlightLogFormat = 'csv';
window.currentFlightLogDrone = 'Drone-01';
window.currentFlightLogRange = 'mission';

window.generateDroneFlightLogs = function(droneId, range) {
  const isAll = droneId === 'all';
  const targetDrones = isAll ? ['Drone-01', 'Drone-01-Alpha', 'Drone-02', 'Drone-03'] : [droneId];
  
  const entriesCount = range === '1h' ? 20 : range === 'all_day' ? 40 : 16;
  const now = new Date();
  const logs = [];

  targetDrones.forEach(dId => {
    let baseLat = 28.3120;
    let baseLon = 77.0211;
    let baseAlt = 120.0;
    let baseBat = 85;
    let baseSoH = 97.4;
    let cycleCount = 142;
    let cellTemp = 34.2;
    let packVoltage = 24.8;
    let model = 'HexaRotor X8 NDMA Edition';
    let zone = 'Zone A';

    if (dId === 'Drone-01-Alpha') {
      baseLat = 28.3450; baseLon = 77.1042; baseAlt = 95.0; baseBat = 92; baseSoH = 99.1; cycleCount = 38; cellTemp = 31.8; zone = 'Zone B'; model = 'QuadRotor FLIR-T';
    } else if (dId === 'Drone-02') {
      baseLat = 28.2980; baseLon = 76.9950; baseAlt = 68.0; baseBat = 42; baseSoH = 92.5; cycleCount = 289; cellTemp = 41.5; zone = 'Zone A (RTB Corridor)'; model = 'LongRange Recon X4';
    } else if (dId === 'Drone-03') {
      baseLat = 28.2104; baseLon = 77.3012; baseAlt = 140.0; baseBat = 65; baseSoH = 95.0; cycleCount = 184; cellTemp = 36.4; zone = 'Zone C'; model = 'Survey Lidar VTOL';
    }

    for (let i = entriesCount - 1; i >= 0; i--) {
      const entryTime = new Date(now.getTime() - i * (range === '1h' ? 180000 : 360000));
      const timeStr = `${String(entryTime.getHours()).padStart(2, '0')}:${String(entryTime.getMinutes()).padStart(2, '0')}:${String(entryTime.getSeconds()).padStart(2, '0')}`;
      const isoStr = entryTime.toISOString();

      // Battery discharge curve calculation
      const dischargeFactor = (entriesCount - 1 - i) / (entriesCount - 1);
      let batPct, currentDraw, volt;
      
      if (dId === 'Drone-02') {
        batPct = Math.max(18, Math.round(baseBat - dischargeFactor * 24));
        currentDraw = (18.5 + Math.sin(i) * 3.2).toFixed(1);
        volt = (21.4 - dischargeFactor * 1.8).toFixed(2);
        cellTemp = +(cellTemp + dischargeFactor * 4.2).toFixed(1);
      } else if (dId === 'Drone-03') {
        batPct = Math.max(31, Math.round(baseBat - dischargeFactor * 34));
        currentDraw = (16.2 + Math.sin(i) * 2.5).toFixed(1);
        volt = (22.8 - dischargeFactor * 1.4).toFixed(2);
        cellTemp = +(cellTemp + dischargeFactor * 2.8).toFixed(1);
      } else {
        batPct = Math.max(78, Math.round(baseBat - dischargeFactor * 7));
        currentDraw = (14.0 + Math.sin(i) * 1.8).toFixed(1);
        volt = (24.6 - dischargeFactor * 0.8).toFixed(2);
        cellTemp = +(cellTemp + dischargeFactor * 1.2).toFixed(1);
      }

      // GPS Drift
      const lat = (baseLat + (Math.sin(i * 0.4) * 0.0042)).toFixed(5);
      const lon = (baseLon + (Math.cos(i * 0.3) * 0.0051)).toFixed(5);
      const alt = (baseAlt + Math.sin(i * 0.5) * 6.5).toFixed(1);
      const speed = (38.0 + Math.cos(i) * 8.5).toFixed(1);
      const latency = (3.2 + Math.sin(i * 0.8) * 0.9).toFixed(1);
      const rssi = -62 + Math.floor(Math.sin(i) * 5);

      // Cell voltages (6S LiPo pack)
      const avgCell = +(volt / 6).toFixed(3);
      const c1 = +(avgCell + 0.008).toFixed(3);
      const c2 = +(avgCell - 0.005).toFixed(3);
      const c3 = +(avgCell + 0.002).toFixed(3);
      const c4 = +(avgCell - 0.004).toFixed(3);
      const c5 = +(avgCell + 0.001).toFixed(3);
      const c6 = +(avgCell - 0.002).toFixed(3);

      let event = 'Waypoint Navigation Normal';
      if (dId === 'Drone-02' && batPct <= 20) {
        event = 'CRITICAL BATTERY: AUTO RTB ENGAGED (URLLC SLICE)';
      } else if (dId === 'Drone-03' && batPct <= 35) {
        event = 'LOW BATTERY WARNING: Sector scan completed';
      } else if (i === 4 && dId === 'Drone-01') {
        event = 'AI YOLO v8: 2 Survivors Identified (Conf 98%)';
      } else if (i === 8 && dId === 'Drone-01-Alpha') {
        event = 'FLIR Thermal Signature Detected (38.4°C)';
      }

      logs.push({
        timestamp: timeStr,
        isoTime: isoStr,
        droneId: dId,
        model,
        zone,
        lat,
        lon,
        altitude_m: alt,
        speed_kmh: speed,
        battery_pct: batPct,
        pack_voltage_v: volt,
        current_amps: currentDraw,
        cell_voltages: [c1, c2, c3, c4, c5, c6],
        cell_temp_c: cellTemp,
        state_of_health_pct: baseSoH,
        cycles: cycleCount,
        internal_resistance_mohm: (8.4 + (dId === 'Drone-02' ? 4.2 : 1.1)).toFixed(1),
        urllc_latency_ms: latency,
        signal_rssi_dbm: rssi,
        event
      });
    }
  });

  return logs;
};

window.getFlightLogPayload = function(format, droneId, range) {
  const dId = droneId || window.currentFlightLogDrone || 'Drone-01';
  const rng = range || window.currentFlightLogRange || 'mission';
  const fmt = format || window.currentFlightLogFormat || 'csv';
  const logs = window.generateDroneFlightLogs(dId, rng);
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

  if (fmt === 'json') {
    return JSON.stringify({
      report_schema: "NDMA_DRONE_FLIGHT_LOG_V2",
      authority: "National Disaster Management Authority (NDMA) & DoT 5G Labs",
      generated_at: now.toISOString(),
      drone_scope: dId,
      time_range: rng,
      total_log_records: logs.length,
      fleet_summary: {
        target_unit: dId,
        mission_id: "MSN-001 / MSN-002",
        telemetry_interval: "3-minute interpolated",
        battery_chemistry: "LiPo 6S 22.2V Smart Pack",
        telecom_slice: "5G URLLC Corridor + eMBB Video"
      },
      flight_telemetry_records: logs
    }, null, 2);
  } else if (fmt === 'csv') {
    let csv = "TIMESTAMP,DRONE_ID,ZONE,LATITUDE,LONGITUDE,ALTITUDE_M,SPEED_KMH,BATTERY_PCT,PACK_VOLT_V,CURRENT_A,CELL1_V,CELL2_V,CELL3_V,CELL4_V,CELL5_V,CELL6_V,CELL_TEMP_C,SOH_PCT,CYCLES,IR_MOHM,URLLC_LATENCY_MS,SIGNAL_RSSI_DBM,EVENT_ANNOTATION\n";
    logs.forEach(l => {
      csv += `"${l.timestamp}","${l.droneId}","${l.zone}",${l.lat},${l.lon},${l.altitude_m},${l.speed_kmh},${l.battery_pct},${l.pack_voltage_v},${l.current_amps},${l.cell_voltages[0]},${l.cell_voltages[1]},${l.cell_voltages[2]},${l.cell_voltages[3]},${l.cell_voltages[4]},${l.cell_voltages[5]},${l.cell_temp_c},${l.state_of_health_pct},${l.cycles},${l.internal_resistance_mohm},${l.urllc_latency_ms},${l.signal_rssi_dbm},"${l.event}"\n`;
    });
    return csv;
  } else if (fmt === 'txt') {
    return `========================================================================================================
RESQNET-X AUTONOMOUS DRONE FLIGHT LOG & BATTERY HEALTH RECORD
NATIONAL DISASTER MANAGEMENT AUTHORITY (NDMA) · 5G URLLC TELEMETRY
========================================================================================================
Target Drone    : ${dId.toUpperCase()}
Time Horizon    : ${rng.toUpperCase()} · ${logs.length} CHRONOLOGICAL WAYPOINTS
Report Created  : ${dateStr} ${now.toLocaleTimeString()} IST
Grid Sector     : 28.3°N 77.0°E (Northern Disaster Relief Zone)
Battery Standard: 6S LiPo Smart Telemetry Pack (State of Health Monitor Active)

--- CHRONOLOGICAL FLIGHT & BATTERY TELEMETRY ---
${logs.map(l => `[${l.timestamp}] ${l.droneId.padEnd(14)} | GPS: ${l.lat}N, ${l.lon}E | Alt: ${l.altitude_m.padStart(5)}m | Spd: ${l.speed_kmh.padStart(4)}km/h | Bat: ${String(l.battery_pct).padStart(3)}% (${l.pack_voltage_v}V @ ${l.current_amps}A) | Temp: ${l.cell_temp_c}°C | Latency: ${l.urllc_latency_ms}ms\n  └─ Status/Event: ${l.event}`).join('\n')}

========================================================================================================
State of Health (SoH): 94.2% - 99.1% | Battery Pack Resistance: 8.4 mΩ | Digital Stamp: VALIDATED
========================================================================================================`;
  } else {
    // PDF representation
    return `╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
║  RESQNET-X OFFICIAL FLIGHT LOG & BATTERY LIFECYCLE AUDIT REPORT                                      ║
║  DRONE IDENTIFIER: ${dId.padEnd(20)}  DATE: ${dateStr.padEnd(16)}  5G SLICE: URLLC-02 (PRIORITY)      ║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝

1. BATTERY SYSTEM HEALTH & POWER PROFILE:
   • Total Discharge Tracked : ${logs.length} Waypoint Samples
   • Pack Voltage Dynamics   : ${logs[0] ? logs[0].pack_voltage_v : '24.8'}V -> ${logs[logs.length-1] ? logs[logs.length-1].pack_voltage_v : '21.4'}V
   • Max Temperature Recorded : ${Math.max(...logs.map(l => l.cell_temp_c))}°C (Safe Threshold < 55°C)
   • Cell Voltage Delta      : < 0.015V (Optimal Cell Balance Verified)

2. GPS TRAJECTORY & AIRSPACE CORRIDOR:
${logs.slice(0, 10).map(l => `   • [${l.timestamp}] LAT ${l.lat}°N  LON ${l.lon}°E  ALT ${l.altitude_m}m  BAT ${l.battery_pct}%  [${l.event}]`).join('\n')}
   ... (${logs.length - 10} additional entries logged in secured local database)

3. AUTONOMOUS FAILSAFE & RTB CERTIFICATION:
   • Critical Low-Battery Failsafe Trigger : 20.0% SOC
   • URLLC Guaranteed Return Vector       : Verified (<3.5ms ping)
   • NDMA Compliance Officer Sign-off     : AUTHORIZED & DIGITALLY SEALED`;
  }
};

window.openDroneFlightLogModal = function(droneId) {
  if (droneId) {
    window.currentFlightLogDrone = droneId;
    const select = document.getElementById('flightlog-drone-select');
    if (select) select.value = droneId;
  }
  window.updateFlightLogPreview();
  const modal = document.getElementById('drone-flightlog-modal');
  if (modal) modal.classList.add('open');
};

window.selectFlightLogFormat = function(fmt, el) {
  window.currentFlightLogFormat = fmt;
  document.querySelectorAll('#flightlog-format-pills .format-pill').forEach(p => p.classList.remove('active'));
  if (el) el.classList.add('active');
  window.updateFlightLogPreview();
};

window.updateFlightLogPreview = function() {
  const selectDrone = document.getElementById('flightlog-drone-select');
  const selectRange = document.getElementById('flightlog-time-range');
  if (selectDrone) window.currentFlightLogDrone = selectDrone.value;
  if (selectRange) window.currentFlightLogRange = selectRange.value;

  const box = document.getElementById('flightlog-preview-box');
  const meta = document.getElementById('flightlog-preview-meta');
  const size = document.getElementById('flightlog-filesize');
  const btn = document.getElementById('flightlog-download-btn');
  if (!box) return;

  const payload = window.getFlightLogPayload(window.currentFlightLogFormat, window.currentFlightLogDrone, window.currentFlightLogRange);
  box.textContent = payload;

  const byteLength = new Blob([payload]).size;
  const approxSize = (byteLength / 1024).toFixed(1) + ' KB';
  if (size) size.textContent = `~${approxSize}`;
  if (meta) meta.textContent = `${window.currentFlightLogFormat.toUpperCase()} · ${window.currentFlightLogDrone.toUpperCase()} · READY`;
  if (btn) btn.textContent = `⬇ DOWNLOAD FLIGHT LOG (${window.currentFlightLogFormat.toUpperCase()})`;
};

window.executeFlightLogExport = function() {
  const content = window.getFlightLogPayload(window.currentFlightLogFormat, window.currentFlightLogDrone, window.currentFlightLogRange);
  const now = new Date();
  const timeStamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`;
  const droneTag = (window.currentFlightLogDrone || 'ALL_FLEET').replace(/[^a-zA-Z0-9_-]/g, '_');
  const fileName = `RESQNET_FLIGHT_LOG_${droneTag}_${timeStamp}.${window.currentFlightLogFormat}`;

  let mime = 'text/plain';
  if (window.currentFlightLogFormat === 'json') mime = 'application/json';
  else if (window.currentFlightLogFormat === 'csv') mime = 'text/csv';
  else if (window.currentFlightLogFormat === 'pdf') mime = 'application/pdf';

  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  window.closeModal('drone-flightlog-modal');
  window.showToast(
    'Flight Log Exported',
    `Detailed log file <b>${fileName}</b> downloaded with GPS time-series and battery health records.`,
    url,
    fileName
  );
};

window.printFlightLogPreview = function() {
  const content = window.getFlightLogPayload('txt', window.currentFlightLogDrone, window.currentFlightLogRange);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>RESQNET-X Drone Flight Log - ${window.currentFlightLogDrone}</title>
          <style>
            body { font-family: monospace; padding: 25px; background: #fff; color: #000; line-height: 1.4; white-space: pre-wrap; font-size: 11px; }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => { printWindow.print(); }, 250);
  } else {
    window.executeFlightLogExport();
  }
};

// ═══ ATMOSPHERIC WEATHER OVERLAY & RAIN SIMULATION ENGINE ═══
window.isWeatherOverlayActive = true;
window.isRainSimulationActive = true;
let rainAnimationId = null;
let rainDrops = [];

window.initWeatherSimulation = function() {
  const canvas = document.getElementById('fs-weather-canvas');
  if (!canvas) return;

  function resizeCanvas() {
    canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 1200;
    canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : 700;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Generate rain drops
  const count = 140;
  rainDrops = [];
  for (let i = 0; i < count; i++) {
    rainDrops.push({
      x: Math.random() * (canvas.width + 300),
      y: Math.random() * canvas.height,
      l: 14 + Math.random() * 18,
      speed: 12 + Math.random() * 10,
      alpha: 0.15 + Math.random() * 0.35,
      windSlant: 4.5 + Math.random() * 2
    });
  }

  function renderRain() {
    if (!window.isRainSimulationActive) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rainAnimationId = requestAnimationFrame(renderRain);
      return;
    }

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(120, 200, 255, 0.45)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();

    for (let i = 0; i < rainDrops.length; i++) {
      const d = rainDrops[i];
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.windSlant, d.y + d.l);

      d.y += d.speed;
      d.x -= d.windSlant;

      if (d.y > canvas.height) {
        d.y = -20;
        d.x = Math.random() * (canvas.width + 300);
      }
      if (d.x < -50) {
        d.x = canvas.width + 50;
      }
    }
    ctx.stroke();

    // Occasional subtle storm flash
    if (Math.random() < 0.0015) {
      const flash = document.getElementById('fs-lightning-flash');
      if (flash) {
        flash.classList.add('flash');
        setTimeout(() => flash.classList.remove('flash'), 120);
      }
    }

    rainAnimationId = requestAnimationFrame(renderRain);
  }

  if (rainAnimationId) cancelAnimationFrame(rainAnimationId);
  renderRain();
};

window.toggleFullscreenWeather = function(show) {
  window.isWeatherOverlayActive = show;
  const hud = document.getElementById('fs-weather-overlay-hud');
  if (hud) hud.style.display = show ? 'flex' : 'none';
};

window.toggleFullscreenRain = function(show) {
  window.isRainSimulationActive = show;
  const canvas = document.getElementById('fs-weather-canvas');
  if (canvas) canvas.style.display = show ? 'block' : 'none';
};

// Dynamic Weather Telemetry Fluctuations
window.updateWeatherOverlayStats = function() {
  const tempEl = document.getElementById('weather-temp-val');
  const windEl = document.getElementById('w-wind');
  const gustEl = document.getElementById('w-gust');
  const baroEl = document.getElementById('w-baro');
  const precipEl = document.getElementById('w-precip');

  if (tempEl) {
    const temp = (27.2 + (Math.random() * 0.6 - 0.3)).toFixed(1);
    tempEl.textContent = `${temp}°C`;
  }
  if (windEl) {
    const wSpd = (18.2 + (Math.random() * 1.5 - 0.75)).toFixed(1);
    windEl.textContent = `315° NW @ ${wSpd} kt`;
  }
  if (gustEl) {
    const gSpd = (27.5 + (Math.random() * 2.0 - 1.0)).toFixed(1);
    gustEl.textContent = `${gSpd} kt (Crosswind)`;
  }
  if (baroEl) {
    const baro = (1008.2 + (Math.random() * 0.4 - 0.2)).toFixed(1);
    baroEl.textContent = `${baro} hPa ↓`;
  }
  if (precipEl) {
    const p = (4.2 + (Math.random() * 0.4 - 0.2)).toFixed(1);
    precipEl.textContent = `${p} mm/h`;
  }
};

// ═══ ALERTS FILTER CONTROLLER ═══
window.filterAlerts = function(filterVal) {
  const alerts = document.querySelectorAll('#alerts-log .alert-item');
  alerts.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (filterVal === 'all') {
      item.style.display = 'flex';
    } else if (filterVal === 'critical') {
      item.style.display = item.classList.contains('critical') ? 'flex' : 'none';
    } else if (filterVal === 'battery') {
      item.style.display = text.includes('battery') || text.includes('rtb') ? 'flex' : 'none';
    } else if (filterVal === 'drone') {
      item.style.display = text.includes('drone') ? 'flex' : 'none';
    } else if (filterVal === 'redcap') {
      item.style.display = text.includes('redcap') || text.includes('sos') ? 'flex' : 'none';
    }
  });
};

// ═══ DASHBOARD LIVE SLICE CHARTS & REFRESH ═══
window.buildSliceChart = function() {
  const chart = document.getElementById('slice-chart');
  if (!chart) return;
  const vals = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 0.85, 0.75, 0.65, 0.7, 0.8, 0.9, 0.95, 1.0, 0.88];
  chart.innerHTML = '';
  vals.forEach(v => {
    const b = document.createElement('div');
    b.className = 'chart-bar' + (v > 0.85 ? ' high' : '');
    b.style.height = Math.round(v * 36) + 'px';
    chart.appendChild(b);
  });
};

// ═══ INITIALIZATION LISTENER ═══
document.addEventListener('DOMContentLoaded', () => {
  window.updateClock();
  setInterval(window.updateClock, 1000);
  window.buildSliceChart();
  window.initWeatherSimulation();

  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) m.classList.remove('open');
    });
  });

  document.addEventListener('mousemove', e => {
    const t = document.getElementById('tooltip');
    if (t && t.style.display === 'block') {
      t.style.left = (e.clientX + 12) + 'px';
      t.style.top = (e.clientY - 10) + 'px';
    }
  });

  // Live 5G Slicing Simulation loop (synchronized with live ping)
  setInterval(() => {
    const embb = Math.round(65 + Math.random() * 20);
    const urllc = Math.round(38 + Math.random() * 20);
    const mmtc = Math.round(50 + Math.random() * 20);
    ['embb', 'urllc', 'mmtc'].forEach((s, i) => {
      const b = document.getElementById(s + '-bar');
      const v = document.getElementById(s + '-val');
      const val = [embb, urllc, mmtc][i];
      if (b) b.style.width = val + '%';
      if (v) v.textContent = val + '%';
    });
    const rns = Math.round(11 + Math.random() * 4);
    const runs = Math.round(9 + Math.random() * 4);
    const wr = document.getElementById('wearable-rns');
    const wu = document.getElementById('wearable-runs');
    if (wr) wr.textContent = rns;
    if (wu) wu.textContent = runs;
    window.buildSliceChart();
  }, 3000);

  // Dynamic Weather Update Loop
  setInterval(window.updateWeatherOverlayStats, 4000);

  // Dynamic Battery Telemetry & Alert Animation Loop
  setInterval(() => {
    if (window.DRONE_FLEET && window.DRONE_FLEET.drone1) {
      const d1 = window.DRONE_FLEET.drone1;
      const d2 = window.DRONE_FLEET.drone2;
      const d3 = window.DRONE_FLEET.drone3;

      // Update Drone-01
      const b1 = document.getElementById('dbat-bar-1');
      const p1 = document.getElementById('dbat-pill-1');
      if (b1 && p1) {
        b1.style.width = d1.bat + '%';
        p1.textContent = `🔋 ${d1.bat}% NOMINAL`;
      }

      // Update Drone-02 (Critical RTB with pulsating animations)
      const c2 = document.getElementById('drone-bat-card-2');
      const b2 = document.getElementById('dbat-bar-2');
      const p2 = document.getElementById('dbat-pill-2');
      if (c2 && !c2.classList.contains('critical')) c2.classList.add('critical');
      if (b2 && !b2.classList.contains('critical')) b2.classList.add('critical');
      if (b2) b2.style.width = d2.bat + '%';
      if (p2) {
        p2.textContent = `⚡ ${d2.bat}% CRITICAL`;
        p2.className = 'bat-pill critical';
      }

      // Update Drone-03 (Warning with warning pulse animations)
      const c3 = document.getElementById('drone-bat-card-3');
      const b3 = document.getElementById('dbat-bar-3');
      const p3 = document.getElementById('dbat-pill-3');
      if (c3 && !c3.classList.contains('warning')) c3.classList.add('warning');
      if (b3 && !b3.classList.contains('warning')) b3.classList.add('warning');
      if (b3) b3.style.width = d3.bat + '%';
      if (p3) {
        p3.textContent = `⚠️ ${d3.bat}% LOW`;
        p3.className = 'bat-pill warn';
      }
    }
  }, 3000);

  // Periodic alert discovery
  setTimeout(() => {
    window.alertCount++;
    window.survivorCount++;
    const now = new Date();
    const t = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const la = document.getElementById('live-alert');
    const lt = document.getElementById('live-alert-time');
    if (la) la.style.display = 'flex';
    if (lt) lt.textContent = t;
    const ac = document.getElementById('alert-count');
    const sc = document.getElementById('survivor-count');
    if (ac) ac.textContent = window.alertCount + ' ACTIVE ALERTS';
    if (sc) sc.textContent = window.survivorCount;

    const il = document.getElementById('incident-log');
    if (il && il.children.length > 0) {
      const div = document.createElement('div');
      div.className = 'il-item fade-in';
      div.innerHTML = `<div class="il-time">${t}</div><div class="il-dot" style="background:var(--danger);box-shadow:0 0 4px var(--danger);animation:blink .8s step-start infinite;"></div><div class="il-content"><div class="il-title">New Survivor Detected · CRITICAL</div><div class="il-desc">Drone-01 · Zone B · Conf 89% · Auto-alerting responders</div></div>`;
      il.prepend(div);
    }
  }, 8000);

  setInterval(() => {
    const dd = document.getElementById('d-drones');
    if (dd) dd.textContent = Math.round(2 + Math.random() * 2);
  }, 5000);
});
