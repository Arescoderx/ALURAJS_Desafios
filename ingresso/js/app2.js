function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let qtd = parseInt(document.getElementById("qtd").value);

  if (tipo == "pista") {
    comprarTipo(qtd,"pista");
  }else if(tipo == "inferior"){
    comprarTipo(qtd,"inferior");
  }else{
    comprarTipo(qtd,"superior");
  }
}

function comprarTipo(qtd,tipo) {
    let qtdtipo = parseInt(document.getElementById(`qtd-${tipo}`).textContent);

    if (qtd > qtdtipo) {
        alert(`Quantidade indisponível para tipo ${tipo}`);
    } else {
        qtdtipo = qtdtipo - qtd;
        document.getElementById(`qtd-${tipo}`).textContent = qtdtipo;
        alert('Compra realizada com sucesso!');
    }
}