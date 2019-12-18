//Listando todos os campo da página  
var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")
];

console.log(campos);

//trazendo o tbody pro js
var tbody = document.querySelector("table tbody");

//Pegando a classe form, adicionando um evento a ele  do tipo submit e passando uma function de ação para quando alguém clicar no formulário
document.querySelector(".form").addEventListener("submit", function(event) {

    event.preventDefault(); //evitando que a página recarregue após o click do input

    //criando a tr (linha)
    var tr = document.createElement("tr");
    
    //para cada item do array, cria a td
    campos.forEach(function(campo){
        
        //td = table data (celula)
        var td = document.createElement("td");
        td.textContent = campo.value; //o conteúdo será o valor do campo

        tr.appendChild(td); //Adicionando td como filho da tr
    });

    var tdVolume = document.createElement("td"); //Criando o tdVolume
    tdVolume.textContent = campos[1].value * campos[2].value;   //O conteúdo de texto do tdVolume é o valor do campo 1 x campo 2

    tr.appendChild(tdVolume);

    tbody.appendChild(tr); //Acicionando o tr como filha do tbody

    //limpando os campos
    campos[0].value = "";
    campos[1].value = "1";
    campos[2].value = "0";

    campos[0].focus();

});
