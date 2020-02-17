const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let linkGit = document.querySelector("#link-git");

window.onload = () => {
    document.querySelector("#versao-electron").textContent = "Versão do Electron " + process.versions.electron;
    document.querySelector("#versao-node").textContent = "Versão do Node " + process.versions.node;
    document.querySelector("#versao-browser").textContent = "Versão do Chromium " + process.versions.chrome;
};

linkFechar.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre');
})

linkGit.addEventListener('click', () => {
    shell.openExternal('https://github.com/hicolazu');
});