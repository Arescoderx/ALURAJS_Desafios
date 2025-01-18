let sorteados = [];

function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  sorteados = [];
  let numero;
  let indice = ate - de + 1;

  if(quantidade > indice){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">ERRO O NUMERO DA QUANTIDADE É MAIOR QUE O INTERVALO</label>`;
    return
  }

  for (let i = 0; quantidade > i; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = obterNumeroAleatorio(de, ate);
    }

    sorteados.push(numero);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}.</label>`;
  alterarStatusBotao();
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("ate").value = "";
  document.getElementById("de").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
  alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
  return parseInt(Math.random() * (max - min + 1)) + min;
}

function ordenar() {
  for (let i = 0; i <= sorteados.length; i++) {
    for (let j = i + 1; j <= sorteados.length; j++)
      if (sorteados[i] > sorteados[j]) {
        let aux = sorteados[i];
        sorteados[i] = sorteados[j];
        sorteados[j] = aux;
      }
    let botaoOrdenar = document.getElementById("btn-ordenar");
    botaoOrdenar.classList.remove("container__botao");
    botaoOrdenar.classList.add("container__botao-desabilitado");
  }
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}.</label>`;
}

function alterarStatusBotao() {
  let botaoReinicar = document.getElementById("btn-reiniciar");
  let botaoSortear = document.getElementById("btn-sortear");
  let botaoOrdenar = document.getElementById("btn-ordenar");

  if (botaoReinicar.classList.contains("container__botao-desabilitado")) {
    botaoReinicar.classList.remove("container__botao-desabilitado");
    botaoReinicar.classList.add("container__botao");
    botaoOrdenar.classList.remove("container__botao-desabilitado");
    botaoOrdenar.classList.add("container__botao");
    botaoSortear.classList.remove("container__botao");
    botaoSortear.classList.add("container__botao-desabilitado");
  } else {
    botaoReinicar.classList.remove("container__botao");
    botaoReinicar.classList.add("container__botao-desabilitado");
    botaoOrdenar.classList.remove("container__botao");
    botaoOrdenar.classList.add("container__botao-desabilitado");
    botaoSortear.classList.remove("container__botao-desabilitado");
    botaoSortear.classList.add("container__botao");
  }
}
