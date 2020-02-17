const moment = require('moment');
const {ipcRenderer} = require('electron');

let segundos;
let timer;
let tempo;

module.exports = {
    iniciar(el){
        tempo = moment.duration(el.textContent);
        segundos = tempo.asSeconds();
        clearInterval(timer);
        timer = setInterval(() => {
            segundos++;
            el.textContent = this.segundosParaTempo(segundos);
        }, 1000);
    },

    parar(curso){
        clearInterval(timer);
        let tempoEstudado = this.segundosParaTempo(segundos);
        ipcRenderer.send('curso-parado', curso, tempoEstudado);
    },

    segundosParaTempo(segundos){
        return moment().startOf('day').seconds(segundos).format('HH:mm:ss');
    }
}