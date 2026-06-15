const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,        // TODO: migrate to contextIsolation + preload for production security
      contextIsolation: false
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../web/index.html'));

  // === Native Application Menu (cross-platform) ===
  const template = [
    { role: 'fileMenu' },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { type: 'separator' },
        {
          label: 'Preferences...',
          accelerator: process.platform === 'darwin' ? 'Cmd+,' : 'Ctrl+,',
          click: () => mainWindow.webContents.send('open-preferences')
        }
      ]
    },
    { role: 'viewMenu' },
    { role: 'windowMenu' }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Optional: receive saved prefs from renderer (future-proof for electron-store)
ipcMain.on('save-preferences', (event, prefs) => {
  console.log('✅ Preferences saved:', prefs);
  // TODO: later → write to shared/constants/settings.json or use electron-store
});