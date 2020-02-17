const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const data = require('./data');

let mainWindow;

app.on('ready', () => {
  console.log('Aplicacao iniciada!');

  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'app', 'index.html'));
})

app.on('window-all-closed', () => {
  console.log("Aplicacao encerrada!");
  app.quit();
})

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null){
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 220,
            alwaysOnTop: true,
            webPreferences: {
              nodeIntegration: true
            }
        });
        sobreWindow.on('closed', () => {
            sobreWindow = null;
        })
    }
    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
  sobreWindow.close();
});

ipcMain.on('curso-parado', (curso, tempoEstudado) => {
  data.salvaDados(curso, tempoEstudado);
})




