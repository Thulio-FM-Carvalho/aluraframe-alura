class Mensagem {
    //Passando como padrão o texto sem nada
    constructor(texto= "") {
        this._texto = texto;
    }

    //Método de acesso a mensagem
    get texto() {
        return this._texto;
    }   

    set texto(texto) {
        this._texto = texto;
    }


}