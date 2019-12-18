//É por intermedio  controller que iremos capturar as ações de um usuário e fazer com que interajam com o model criando as instâncias de negociação
//O controller captura as ações do usuário
class NegociacaoController {

    //Criando o método adiciona passando o evento
    adiciona(evento) {
        event.preventDefault(); //Cancelando o comportamento padrão pra que a página não recaregue
        alert("Chamei ação no controller")
    }
}