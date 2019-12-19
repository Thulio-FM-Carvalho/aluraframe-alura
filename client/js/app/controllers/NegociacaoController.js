//É por intermedio  controller que iremos capturar as ações de um usuário e fazer com que interajam com o model criando as instâncias de negociação
//O controller captura as ações do usuário
class NegociacaoController {

    //Buscando os elementos do DOM(HTML) e guardando nas propriedades da classe
    constructor() {

        //bind(document) = está associando o document ao querySelector 
        let $ =  document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    //Criando o método adiciona capturando os dados e criando uma negociação
    adiciona(evento) {
        event.preventDefault(); //Cancelando o comportamento padrão pra que a página não recaregue

            let data = DateHelper.textoParaData(this._inputData.value);

            //Instanciando a negociação
            let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            );

            console.log(negociacao);
            console.log(DateHelper.dataParaTexto(negociacao.data));
            
        
    }
}