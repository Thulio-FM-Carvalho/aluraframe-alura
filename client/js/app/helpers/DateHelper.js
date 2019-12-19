//Classe responsável por trabalhar a data
class DateHelper {
    
    constructor() {
        throw new Error("Essa classe não pode ser instanciada pois os métodos são estáticos.")
    }
    
    //Deixando os métodos estáticos para que eles possam ser acessados sem serem instânciados
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto){

        //Fazendo uma verificação 
        //Se a data digitada não bater com esse regex, diga o erro
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error("A data deve estar no formato aaaa-mm-dd");
        }

        return new Date(...texto.split("-").map(function(item, indice){ return item - indice % 2}));
    }

}