

// ────────────────────────────────────────────────────
// PARTE 3 (continuação) — Função auxiliar de preço
// ────────────────────────────────────────────────────
function atualizarPrecoCard(box) {
  const card = box.parentElement;
  const spanPreco = card.querySelector(".preco");
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
  const quantidade = Number(box.querySelector(".qtd-valor").textContent);
  const total = precoUnitario * quantidade;

  spanPreco.textContent = "R$ " + total.toFixed(2).replace(".", ",");
  spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";
}

// ────────────────────────────────────────────────────
// PARTE 6 — createElement + appendChild 
// ────────────────────────────────────────────────────

function adicionarItemAoResumo(nome, qtd, preco, cardOrigem) {
  const secaoResumo = document.querySelector("#secao-resumo");
  const listaResumo = document.querySelector("#lista-resumo");

  if (!secaoResumo || !listaResumo) return;

  secaoResumo.style.display = "block";

  const itemLi = document.createElement("li");
  itemLi.classList.add("item-resumo");

  const textoSpan = document.createElement("span");
  textoSpan.textContent = qtd + " x " + nome + " - " + preco;

  const btnRemover = document.createElement("button");
  btnRemover.textContent = "❌";
  btnRemover.classList.add("btn-remover");

  // ──────────────────────────────────────────────────
  // PARTE 7 — remove() 
  //──────────────────────────────────────────────────
  btnRemover.addEventListener("click", () => {
    itemLi.remove();

    const badge = cardOrigem.querySelector(".badge-adicionado");

    if (badge) badge.remove();

    if (listaResumo.children.length === 0) {
      secaoResumo.style.display = "none";
    }
  }); //fechou o evento de clique do botão remover ITEM

  itemLi.appendChild(textoSpan);
  itemLi.appendChild(btnRemover);
  listaResumo.appendChild(itemLi);
} // fechamento da função AdicionarItemAoResumo

// ────────────────────────────────────────────────────
// PARTE 7 (continuação) — Botão Limpar Tudo
//──────────────────────────────────────────────────
const btnLimpar = document.querySelector("#btn-limpar");

if (btnLimpar) {
  btnLimpar.addEventListener("click", () => {
    const listaResumo = document.querySelector("#lista-resumo");
    const secaoResumo = document.querySelector("#secao-resumo");

    document
      .querySelector(".badge-adicionado")
      .forEach((deletar) => deletar.remove());

    while (listaResumo.firstElementChild) {
      listaResumo.firstElementChild.remove();
    }

    secaoResumo.style.display = "none";
  });
}
