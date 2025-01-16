function sortear() {

  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let indice = ate - de + 1;
  let sorteados = [];
  let numero;

  if (quantidade > indice) {
    alert("Erro ao tentar executar");
  } else {
    for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate);

      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
      }

      sorteados.push(numero);
    }

    let resutlado = document.getElementById("resultado");
    resutlado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}.</label>`;
    alterarStatusBotao();
}
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}


function reiniciar(){
    document.getElementById('quantidade').value = 0;
    document.getElementById('ate').value = 0;
    document.getElementById('de').value = 0;
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}
