let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");

  if(amigo.value == ""){
    alert("Informe o nome do amigo")
    return
  }else if(amigos.includes(amigo.value)){
    alert("Nome já adicionado")
    return
  }

  amigos.push(amigo.value);
  amigo.value = "";
  document.getElementById("lista-amigos").textContent = amigos;
}

function sortear() {

    if(amigos.length < 4){
        alert("É preciso ter 4 ou mais pessoas para sortear")
        return
    }

  embaralha(amigos);

  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br/>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br/>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    // atribuição via destructuring
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
function obterNumeroAleatorio() {
  return parseInt(Math.random() * pessoaIncluidas.length + 1);
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";

}
