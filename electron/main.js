const { app, BrowserWindow} = require('electron')
const path = require('path')

require('./header/header-actions-main.js')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        minWidth: 375,
        minHeight: 430,
        height: 800,
        frame: false,
        icon: path.join( __dirname, "../assets/atom_icon.png"),
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.setMenuBarVisibility(null)
    win.setTitle("Distribuidor Eletrônico Desktop")
    win.loadFile('index.html')
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
    return app.quit();
}