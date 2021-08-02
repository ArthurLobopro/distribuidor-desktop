import { app, BrowserWindow } from 'electron'
import path from 'path'

import './header/header-actions-main'

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

const assetsPath =
  process.env.NODE_ENV === 'production'
    ? process.resourcesPath
    : app.getAppPath()

function createWindow () {
    const iconPath = path.join(assetsPath, "/assets/atom_icon.png")

    const win = new BrowserWindow({
        width: 820,
        minWidth: 820,
        minHeight: 430,
        height: 800,
        frame: false,
        icon: iconPath,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY
        }
    })
    win.maximize()
    win.on('ready-to-show', () =>  win.show())
    win.setMenuBarVisibility(null)
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