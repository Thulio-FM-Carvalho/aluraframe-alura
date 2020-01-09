//Classe que pega tudo que é comum
class View {

    //Recebendo como argumento o elemento do DOM que é a <div><\div>
    constructor(elemento) {
        this._elemento = elemento;
    }

    //innerHTML = Converte template string em elementos do DOM
    //Essa função é responsável por converter o html que está na função _template e  atribuir os valores no _elemento(propriedade)
    //update recebe um modelo (ListaNeciacoes)
    update(modelo){
        this._elemento.innerHTML = this._template(modelo); //_template também recebe um modelo (ListaNeciacoes)
    }
}