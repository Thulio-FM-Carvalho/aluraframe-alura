//Classe responsável por mostrar os resultados do model, que é a negociação
class NegociacoesView {
    
    //Recebendo como argumento o elemento do DOM que é a <div><\div>
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
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

                //Para cada negociação, cria uma tr e td
                //.join() = colocando os elementos dentro de uma string
                ${model.negociacoes.map(function(negociacoes){
                    return `
                        <tr>
                            <td>${DateHelper.dataParaTexto(negociacoes.data)}</td>
                            <td>${negociacoes.quantidade}</td>
                            <td>${negociacoes.valor}</td>
                            <td>${negociacoes.volume}</td>
                        </tr>
                        `
                }).join("")}

            </tbody>
                <td colspan="3"></td>
                <td>${
                        model.negociacoes.reduce(function(total, negociacoes){
                            return total + negociacoes.volume;
                        }, 0.0)
                    }
                </td>
            <tfoot>

            </tfoot>
        </table>
        `;
    }

    //innerHTML = Converte template string em elementos do DOM
    //Essa função é responsável por converter o html que está na função _template e  atribuir os valores no _elemento(propriedade)
    //update recebe um model (moedelo)
    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}
