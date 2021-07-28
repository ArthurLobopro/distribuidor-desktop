const { app, BrowserWindow} = require('electron')
import path from 'path'

require('./header/header-actions-main.js')

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

function createWindow () {
    const win = new BrowserWindow({
        width: 820,
        minWidth: 820,
        minHeight: 430,
        height: 800,
        frame: false,
        icon: path.join( __dirname, "../assets/atom_icon.png"),
        webPreferences: {
            nodeIntegration: true,
            // preload: path.join(__dirname, 'preload.js')
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    })
    win.setMenuBarVisibility(null)
    win.setTitle("Distribuidor Eletrônico Desktop")
    // win.loadFile('index.html')
    win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
// Faz com que o programa não inicie várias vezes durante a instalação
if (require('electron-squirrel-startup')){
    app.quit();
}