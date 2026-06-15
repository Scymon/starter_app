import { THEMES } from '../shared/assets/themes.js';
// Reusable theme applicator (called from modal + init)
window.applyTheme = async function(mode = 'dark') {
  try {
    const res = await fetch('../shared/constants/settings.json');
    const settings = await res.json();
    const colors = THEMES[mode] || THEMES.dark;

    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    console.log(`⚡ Voltform: ${mode.toUpperCase()} theme applied`);
  } catch (e) {
    console.error('Failed to apply theme:', e);
  }
};
async function init() {
    try {
        // 1. Get the current mode from your settings
        const res = await fetch('../shared/constants/settings.json');
        const settings = await res.json();
        
        const mode = settings.active_theme || 'dark';
        const colors = THEMES[mode];

        // 2. Inject into CSS as variables (e.g., var(--bg))
        const root = document.documentElement;
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
        });

        // 3. Update the text
        document.title = settings.project_name;
        document.querySelector('h1').innerText = `${settings.project_name}: Active`;

        console.log(`Voltform: ${mode.toUpperCase()} engaged.`);
    } catch (e) {
        console.error("Failed to load themes:", e);
    }
}

init();