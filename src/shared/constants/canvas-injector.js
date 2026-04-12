// shared/js/canvas-injector.js
// ── V-FORM CANVAS INJECTOR ──
// Fully modular — works with your exact #ui-canvas structure

export const CanvasInjector = {
  container: null,

  init() {
    this.container = document.getElementById('ui-canvas');
    if (!this.container) {
      console.warn('🧬 #ui-canvas not found');
      return;
    }
    console.log('%c🧬 CANVAS INJECTOR INITIALIZED — ready for live components', 'color:#d04d4d; font-family:Orbitron; font-size:13px;');
  },

  // Inject any reusable component
  inject(componentId) {
    if (!this.container) return;

    const templates = {
      statusCard: `
        <div class="feature-card" style="position:absolute; top:60px; left:60px; width:320px;">
          <div class="card-header">STATUS: NOMINAL</div>
          <h3>Cluster #2841</h3>
          <p>8 nodes • 99.9% uptime • Build v2.4.1 live</p>
          <button class="btn-slate" onclick="this.style.opacity='0.6'; this.textContent='DEPLOYING...'">DEPLOY NOW</button>
        </div>`,

      terminalLog: `
        <div class="terminal-log" style="position:absolute; top:180px; right:60px; width:420px;">
          <div class="log-header">SYSTEM LOG</div>
          <pre style="font-size:12px; line-height:1.4;">08:14:02 [OK] Cluster initialized – 8 nodes
08:14:22 [OK] Deploy complete – v2.4.1 live
08:14:24 [ERR] Node eu-west-3 unreachable
08:14:39 [OK] Failover complete – 7/7 active</pre>
        </div>`,

      featureGrid: `
        <div class="feature-grid" style="position:absolute; bottom:80px; left:50%; transform:translateX(-50%); display:flex; gap:16px;">
          <div class="feature-card"><span class="badge live">LIVE</span> Auto Deploy</div>
          <div class="feature-card"><span class="badge beta">BETA</span> Edge Routing</div>
          <div class="feature-card"><span class="badge stable">STABLE</span> Rollback</div>
        </div>`
    };

    if (templates[componentId]) {
      this.container.insertAdjacentHTML('beforeend', templates[componentId]);
      console.log(`✅ Injected → ${componentId}`);
    }
  },

  // One-click demo (clears placeholder first)
  demoInject() {
    // Remove the empty notification once
    const empty = this.container.querySelector('.empty-notif');
    if (empty) empty.remove();

    this.inject('statusCard');
    this.inject('terminalLog');
    this.inject('featureGrid');
  }
};

// Auto-init
if (typeof window !== 'undefined') {
  window.CanvasInjector = CanvasInjector;   // expose globally for onclick
  window.addEventListener('load', () => CanvasInjector.init());
}