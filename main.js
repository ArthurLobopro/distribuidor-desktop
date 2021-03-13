const { app, BrowserWindow } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        minWidth: 375,
        minHeight: 430,
        height: 800,
        titleBarStyle: "hidden",
        icon: __dirname + "/midia/atom_icon.png",
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.setIcon(__dirname + "/midia/atom_icon.png")
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