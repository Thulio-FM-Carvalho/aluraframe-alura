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
        this._listaNegociacoes = new ListaNegociacoes(); //Adicioando no construtor uma lista de negociações, agora é um propriedade
       
        //Adicionando no construtor a view, fazendo dela uma propriedade
        //Passando como parâmetro o elemento do DOM, que é a <div><\div> 
        this._negociacoesView = new NegociacoesView($("#negociacoesView")); 
        
        //Função que atualiza e mostra a view e coloca uma lista de negociações nela
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($("#mensagemView"));
        this._mensagemView.update(this._mensagem);
    }

    //Criando o método adiciona capturando os dados e criando uma negociação
    adiciona(evento) {
        
        event.preventDefault(); //Cancelando o comportamento padrão pra que a página não recaregue

        this._listaNegociacoes.adiciona(this._criaNegociacao()); //Adicionando a negociação em uma lista de negociações 

        this._mensagem.texto = "Negociação adicionada com sucesso!"; //Mensagem de notificação após adicionar uma negociação
        this._mensagemView.update(this._mensagem);
        
        //Função que atualiza e mostra a view e coloca uma lista de negociações nela
        this._negociacoesView.update(this._listaNegociacoes);
        
        console.log(this._listaNegociacoes.negociacoes);
        

        this._limpaFormulario(); //Limpando formulário       
    }
    
    //Método reponsável por criar negociação
    _criaNegociacao(){
        
        let data = DateHelper.textoParaData(this._inputData.value);

        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }

    //Método reponsável por limpar formulário
    _limpaFormulario(){
        this._inputData.value = "";
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}