//Classe modelo responsável por criar um modelo de lista de negociações que irá encapsular a regra de negócio
class ListaNegociacoes {
    
    //criando um array de negociações
    constructor(){
        this._negociacoes = []    
    }

    //Método reposnável por receber a negociação do controller e colocar no array
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    //Método de acesso
    //.concat cria uma cópia do array das negociações
    get negociacoes(){
        return [].concat(this._negociacoes);
    }
}