let valorTotal = 0;
document.getElementById("lista-produtos").innerHTML =
  "Adicione Produtos no carrinho";
document.getElementById("valor-total").innerHTML = "R$ 0";

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidadeProduto = document.getElementById("quantidade").value;
  let preco = quantidadeProduto * valorUnitario;
  let carrinho = document.getElementById("lista-produtos");

  if (quantidadeProduto == null || quantidadeProduto == 0) {
    return;
  }

  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;

  valorTotal = valorTotal + preco;
  let compoTotal = document.getElementById("valor-total");

  compoTotal.textContent = `R$ ${valorTotal}`;

  document.getElementById("quantidade").value = "";
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = "Adicione Produtos no carrinho";
  let valorTotal = 0;
  document.getElementById("valor-total").innerHTML = "R$ 0";
}
