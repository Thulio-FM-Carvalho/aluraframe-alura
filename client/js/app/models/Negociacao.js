//Classe modelo
class Negociacao {

    //Definindo o construtor da classe
    constructor(data, quantidade, valor){

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //Congelando as propriedades do construtor para que não nenhuma delas possa ser modificada

    }

    //Métodos acesso aos dados da negociação
     get volume() {
         return this._quantidade * this._valor;
     }

     get data() {
         return new Date(this._data.getTime());
     }

     get quantidade() {
         return this._quantidade;
     }

     get valor() {
         return this._valor;
     }

}