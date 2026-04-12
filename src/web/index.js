async function loadSettings() {
    try {
        // Look up one level into shared/constants
        const response = await fetch('../shared/constants/settings.json');
        const settings = await response.json();

        // Update the UI with the shared data
        document.querySelector('h1').innerText = `${settings.project_name}: Active`;
        document.title = settings.project_name;
        
        console.log("Web Engine: Shared settings loaded", settings);
    } catch (error) {
        console.error("Failed to load settings:", error);
    }
}

loadSettings();