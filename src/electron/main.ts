import { app, BrowserWindow } from "electron";

app.on("ready", () =>{
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    mainWindow.loadFile(app.getAppPath() + '/dist-react/index.html');
})