//Classe responsável por mostrar os resultados do model, que é a negociação
class NegociacoesView extends View {

    constructor(elemento){
        super(elemento);
    }

    //Função responsável por mostrar os dados arrumados em uma tabela
    //template recebe um modelo

    // --> Para cada negociação, cria uma tr e td <!--
    // --> .join() = colocando os elementos dentro de uma string <!--
    
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

    
}
