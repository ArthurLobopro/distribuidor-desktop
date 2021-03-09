const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 1000,
        minWidth: 375,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setMenu(null)
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