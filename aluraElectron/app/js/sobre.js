const { ipcRenderer, shell } = require('electron');
    const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let linkTwitter = document.querySelector("#link-git");
let versaoElectron = document.querySelector('#versao-electron');
let versaoNode = document.querySelector('#versao-node');

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
    versaoNode.textContent = process.versions.node;
}

linkFechar.addEventListener('click', function () {
    ipcRenderer.send('fechar-janela-sobre');
})

linkTwitter.addEventListener('click', function () {
    shell.openExternal("https://github.com/hicolazu");
})
