//Classe responsável por mostrar os resultados do model, que é a negociação
class NegociacoesView {
    
    //Recebendo como argumento o elemento do DOM que é a <div><\div>
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
            
            <tfoot>
            </tfoot>
        </table>
        `;
    }

    //innerHTML = Converte template string em elementos do DOM
    //Essa função é responsável por converter o html que está na função _template e  atribuir os valores no _elemento(propriedade)
    update(){
        this._elemento.innerHTML = this._template();
    }
}
