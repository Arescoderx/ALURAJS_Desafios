let qtdpista = 100
let qtdsuperior = 200
let qtdinferior = 400

document.getElementById(qtd-inferior) = qtdinferior
function comprar(){
    let quantidade = document.getElementById("qtd").value;
    let tipoIngresso = document.getElementById("tipo-ingresso").value;

    if(tipoIngresso == "inferior"){
        if(quantidade > qtdinferior){
            alert("Voce está querendo comprar uma quantidade maior que a de ingressos disponiveis")
            return
        }
        qtdinferior = qtdinferior - quantidade;
        document.getElementById('qtd-inferior').innerHTML = qtdinferior

    }else if(tipoIngresso == "superior"){
        if(quantidade > qtdsuperior){
            alert("Voce está querendo comprar uma quantidade maior que a de ingressos disponiveis")
            return
        }
        qtdsuperior = qtdsuperior - quantidade;
        document.getElementById('qtd-superior').innerHTML = qtdsuperior

    }else{
        if(quantidade > qtdpista){
            alert("Voce está querendo comprar uma quantidade maior que a de ingressos disponiveis")
            return
        }
        qtdpista = qtdpista - quantidade;
        document.getElementById("qtd-pista").innerHTML = qtdpista

    }
}