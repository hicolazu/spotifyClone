const { ipcRenderer } = require('electron');
const timer = require('./timer');

const data = require('../../data');

let linkSobre = document.querySelector('#link-sobre');
let botaoPlay = document.querySelector('.botao-play');
let tempo = document.querySelector('.tempo');
let curso = document.querySelector('.curso');

windows.onload = () => {
    data.pegaDados(curso.textContent)
        .then(dados => {
            tempo.textContent = dados.tempoEstudo;
        });
};

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];
let play = false;
botaoPlay.addEventListener('click', () => {
    imgs.reverse();
    if (play == true){
        timer.parar(curso);
        play = false;
    }
    else {
        timer.iniciar(tempo);
        play = true;
    }
    botaoPlay.src = imgs[0];
});

linkSobre.addEventListener('click' , function(){
    ipcRenderer.send('abrir-janela-sobre');
});
