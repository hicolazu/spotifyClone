const jsonFile = require("jsonfile-promised");
const fs = require('fs');

module.exports = {
    criaArquivoDoCurso(nomeArquivo, conteudoArquivo){
        return jsonFile.writeFile(nomeArquivo, conteudoArquivo, {spaces: 2})
            .then(() => console.log('Arquivo criado!'))
            .catch((err) => console.log(err));
    },
    salvaDados(nomeCurso, tempoEstudado){
        let pathCurso = __dirname + '/data/' + nomeCurso + '.json';
        if(fs.existsSync(pathCurso)){
            this.adicionaTempoAoCurso(pathCurso, tempoEstudado);
        } else{
            this.criaArquivoDoCurso(pathCurso, {})
                .then(() => {
                    this.adicionaTempoAoCurso(pathCurso, tempoEstudado);
                }) 
        }
    },
    adicionaTempoAoCurso(arquivoDoCurso, tempo){
        let dados = {
            ultimoEstudo: new Date().toString(),
            tempoEstudo: tempo
        } 
        
        jsonFile.writeFile(arquivoDoCurso, dados, {spaces: 2})
            .then(()=> {
                console.log('Tempo salvo com sucesso!')
            })
            .catch((err) => {
                console.log(err);
            })
    },
    pegaDados(curso){
        let pathCurso = __dirname + '/data/' + curso + ".json";
        return jsonFile.readFile(pathCurso);
    }
}