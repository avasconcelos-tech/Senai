document.addEventListener("DOMContentLoaded", function () {
  renderizarPedidos();
  configurarLimparPedidos();
  configurarEnviarCozinha(); // NEW — envia carrinho para a API
  configurarVerConta();      // NEW — abre/recolhe o painel da conta da mesa
  configurarFecharConta();   // NEW — encerra a sessão da mesa e volta ao início
});

function renderizarPedidos() {
  const lista        = document.querySelector("#lista-pedidos");
  const spanTotal    = document.querySelector("#valor-total");
  const spanResumo   = document.querySelector("#valor-total-resumo");
  const spanContador = document.querySelector("#contador-itens");

  if (!lista) return;

  // Conta da mesa: acumulado de pedidos já enviados à cozinha nesta sessão.
  // sessionStorage persiste enquanto a aba estiver aberta — cada mesa é uma sessão.
  const totalMesa = parseFloat(sessionStorage.getItem("techfood_total_mesa") || "0");

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  if (pedidos.length === 0) {
    lista.innerHTML =
      "<li class='pedido-vazio'>Nenhum item ainda. Acesse o " +
      "<a href='index.html'>Cardápio</a> para adicionar! 😊</li>";
    // Carrinho vazio: resumo vai a zero, mas o Total Geral da mesa permanece
    if (spanResumo)   spanResumo.textContent   = "R$ 0,00";
    if (spanTotal)    spanTotal.textContent    = `R$ ${totalMesa.toFixed(2).replace(".", ",")}`;
    if (spanContador) spanContador.textContent = "0 itens";
    return;
  }

  lista.innerHTML = "";
  let totalCarrinho = 0;

  pedidos.forEach(function (pedido, indice) {
    // createElement + appendChild — Aula 7, mesmo padrão.
    const li = document.createElement("li");
    li.classList.add("item-pedido");

    const textoSpan = document.createElement("span");
    textoSpan.innerHTML =
      `<strong>${pedido.nome}</strong>` +
      ` — ${pedido.quantidade}x` +
      ` R$ ${pedido.preco.toFixed(2).replace(".", ",")}` +
      ` = <span class='subtotal-item'>R$ ${pedido.subtotal.toFixed(2).replace(".", ",")}</span>`;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "✕";
    btnRemover.classList.add("btn-remover-item");

    // remove do array pelo índice, salva e re-renderiza
    btnRemover.addEventListener("click", function () {
      const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
      lista.splice(indice, 1);
      localStorage.setItem("techfood_pedidos", JSON.stringify(lista));
      renderizarPedidos();
    });

    li.appendChild(textoSpan);
    li.appendChild(btnRemover);
    lista.appendChild(li);
    totalCarrinho += pedido.subtotal;
  });

  // Resumo (topo): só o que está no carrinho agora
  if (spanResumo) spanResumo.textContent = `R$ ${totalCarrinho.toFixed(2).replace(".", ",")}`;

  // Total Geral (rodapé): conta da mesa — acumulado enviado + carrinho atual
  const totalGeral = totalMesa + totalCarrinho;
  if (spanTotal) spanTotal.textContent = `R$ ${totalGeral.toFixed(2).replace(".", ",")}`;

  const totalItens = pedidos.reduce(function (acc, p) { return acc + p.quantidade; }, 0);
  if (spanContador) {
    spanContador.textContent = `${totalItens} ${totalItens === 1 ? "item" : "itens"}`;
  }
}

function configurarLimparPedidos() {
  const btn = document.querySelector("#btn-limpar-pedidos");
  if (!btn) return;

  btn.addEventListener("click", function () {
    // Apaga só o carrinho — o Total Geral acumulado da mesa permanece intacto
    localStorage.removeItem("techfood_pedidos");
    renderizarPedidos();
  });
}

function configurarEnviarCozinha() {
  const btn = document.querySelector("#btn-enviar-cozinha");
  if (!btn) return;

  btn.addEventListener("click", async function () {
    const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

    if (pedidos.length === 0) {
      alert("Adicione itens ao pedido antes de enviar!");
      return;
    }

    const cliente = sessionStorage.getItem("techfood_cliente") || "Cliente";

    // Monta o array de itens no formato que o back-end exige
    const itens = pedidos.map(function (p) {
      return { produto_id: p.produto_id, quantidade: p.quantidade };
    });

    btn.disabled    = true;
    btn.textContent = "Enviando...";

    try {
      await criarPedido(cliente, itens); // HTTP POST → http://localhost:3000/pedidos

      // Acumula o total do carrinho atual na conta da mesa.
      // reduce() soma todos os subtotais do carrinho atual.
      // Depois de somar, o pedido já foi enviado — será cobrado.
      const totalCarrinho = pedidos.reduce(function (acc, p) { return acc + p.subtotal; }, 0);
      const totalMesa     = parseFloat(sessionStorage.getItem("techfood_total_mesa") || "0");
      sessionStorage.setItem("techfood_total_mesa", (totalMesa + totalCarrinho).toString());

      // Salva os itens no histórico da sessão para o painel "Ver Conta da Mesa".
      // Acumula — cada "Enviar para Cozinha" adiciona ao array existente.
      const historico = JSON.parse(sessionStorage.getItem("techfood_historico") || "[]");
      pedidos.forEach(function (p) {
        historico.push({ nome: p.nome, quantidade: p.quantidade, preco: p.preco, subtotal: p.subtotal });
      });
      sessionStorage.setItem("techfood_historico", JSON.stringify(historico));

      // Limpa o carrinho e re-renderiza — o Total Geral virá do totalMesa
      // acumulado no sessionStorage, então não vai a zero.
      localStorage.removeItem("techfood_pedidos");
      renderizarPedidos();

      btn.textContent           = "✓ Pedido Enviado!";
      btn.style.backgroundColor = "#27ae60";

      setTimeout(function () {
        btn.textContent           = "🍳 Enviar para Cozinha";
        btn.style.backgroundColor = "";
        btn.disabled              = false;
      }, 2500);

    } catch (erro) {
      // UX: o botão exibe o erro e se re-habilita para o usuário tentar novamente
      // sem precisar recarregar a página. Diferente do cardápio (onde não há retry),
      // aqui a falha pode ser transitória (rede instável, servidor reiniciando).
      btn.textContent           = "Erro! Tente novamente";
      btn.style.backgroundColor = "#e74c3c";
      btn.disabled              = false;

      setTimeout(function () {
        btn.textContent           = "🍳 Enviar para Cozinha";
        btn.style.backgroundColor = "";
      }, 2500);
    }
  });
}

function configurarVerConta() {
  const btnAbrir = document.querySelector("#btn-ver-conta");
  const painel   = document.querySelector("#painel-conta");
  if (!btnAbrir || !painel) return;

  btnAbrir.addEventListener("click", function () {
    const visivel = painel.style.display !== "none";
    if (visivel) {
      painel.style.display = "none";
      btnAbrir.textContent = "📋 Ver Conta da Mesa";
    } else {
      renderizarContaMesa();
      painel.style.display = "block";
      btnAbrir.textContent = "▲ Recolher";
    }
  });
}

function configurarFecharConta() {
  const btnAbrir     = document.querySelector("#btn-fechar-conta");
  const modal        = document.querySelector("#modal-fechar-conta");
  const btnCancelar  = document.querySelector("#btn-cancelar-fechar");
  const btnConfirmar = document.querySelector("#btn-confirmar-fechar");

  if (!btnAbrir || !modal) return;

  // Abre o modal estilizado — substitui o confirm() nativo
  btnAbrir.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  // Cancelar — fecha o modal sem fazer nada
  if (btnCancelar) {
    btnCancelar.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Confirmar — zera a sessão completa da mesa e volta ao cardápio
  if (btnConfirmar) {
    btnConfirmar.addEventListener("click", function () {
      sessionStorage.removeItem("techfood_cliente");    // força modal de nome de novo
      sessionStorage.removeItem("techfood_total_mesa"); // zera o Total Geral
      sessionStorage.removeItem("techfood_historico");  // limpa o painel da conta
      localStorage.removeItem("techfood_pedidos");      // descarta carrinho não enviado

      // global.js detecta ausência de techfood_cliente e exibe o modal de boas-vindas
      window.location.href = "index.html";
    });
  }
}

function renderizarContaMesa() {
  const lista = document.querySelector("#lista-conta");
  if (!lista) return;

  const historico = JSON.parse(sessionStorage.getItem("techfood_historico") || "[]");

  if (historico.length === 0) {
    lista.innerHTML =
      "<li class='pedido-vazio'>" +
        "Nenhum pedido enviado à cozinha ainda.<br>" +
        "Adicione itens no Cardápio e clique em <strong>Enviar para Cozinha</strong>." +
      "</li>";
    return;
  }

  lista.innerHTML = "";
  historico.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("item-pedido");
    li.innerHTML =
      `<strong>${item.nome}</strong>` +
      ` — ${item.quantidade}x` +
      ` R$ ${item.preco.toFixed(2).replace(".", ",")}` +
      ` = <span class='subtotal-item'>R$ ${item.subtotal.toFixed(2).replace(".", ",")}</span>`;
    lista.appendChild(li);
  });
}

function gerarBotaoStatus(pedidoId, statusAtual) {
  const proximo = {
    pendente: { label: "▶ Iniciar preparo",    status: "preparo"  },
    preparo:  { label: "✓ Marcar como pronto", status: "pronto"   },
    pronto:   { label: "🛵 Marcar entregue",   status: "entregue" },
    entregue: null,
  };

  const acao = proximo[statusAtual];
  if (!acao) return "<span class='entregue-label'>✓ Concluído</span>";

  return `<button class='btn-status' onclick='avancarStatus(${pedidoId}, "${acao.status}")'>${acao.label}</button>`;
}

async function avancarStatus(pedidoId, novoStatus) {
  try {
    // ── FETCH API em ação — PATCH /pedidos/:id/status ──────────────────────
    // atualizarStatusPedido() (api.js) envia só o campo "status" — isso é PATCH.
    // PATCH = atualização parcial (só o que mudou). PUT = substituição total.
    await atualizarStatusPedido(pedidoId, novoStatus); // HTTP PATCH → /pedidos/:id/status
    renderizarPedidos();
  } catch (erro) {
    alert(`Erro ao atualizar status: ${erro.message}`);
  }
}