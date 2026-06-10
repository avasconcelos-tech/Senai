document.addEventListener("DOMContentLoaded", function () {
  solicitarNomeCliente();
  exibirBoasVindas();
  exibirNomeCliente();
  exibirDataFooter(); // NEW
  fecharMenuAoNavegar(); // NEW
});

function solicitarNomeCliente(){
    if(sessionStorage.getItem("techfood_cliente")) return;

    const modal = document.getElementById("modal-boas-vindas");

    if(modal) modal.style.display = "flex"

    const btnConfirmar = document.getElementById("btn-confirmar-nome")
    const inputNome = document.getElementById("input-nome-cliente")

    if(!btnConfirmar || !inputNome) return;

    btnConfirmar.addEventListener("click", function(){
        const nome = inputNome.value.trim();
        if(!nome){
            inputNome.focus();
            return;
        }

        sessionStorage.setItem("techfood_cliente", nome);
        modal.style.display = "none";
        exibirNomeCliente();
    });

    inputNome.addEventListener("keydown", function(e) {
        if(e.key === "Enter") btnConfirmar.click();
    });

    setTimeout( function(){
        inputNome.focus();
    }, 100);
}



function exibirBoasVindas() {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const horaExata = hora + minutos / 60;

  let saudacao;
  if (horaExata >= 5 && horaExata < 12) {
    saudacao = "☀️ Bom dia!";
  } else if (horaExata >= 12 && horaExata < 18) {
    saudacao = "🌤️ Boa tarde!";
  } else {
    saudacao = "🌙 Boa noite!";
  }

  const elemSaudacao = document.querySelector("#boas-vindas");
  if (elemSaudacao) elemSaudacao.textContent = saudacao;
}

function exibirNomeCliente() {
  const nome = sessionStorage.getItem("techfood_cliente");
  const elem = document.querySelector("#boas-vindas");
  if (!elem || !nome) return;

  if (elem.textContent.includes(nome)) return;

  const saudacao = elem.textContent.trim().replace(/!$/, "");
  elem.textContent = `${saudacao}, ${nome}!`;
}

function exibirDataFooter() {
  const elemFooter = document.querySelector("#data-hora-footer");
  if (!elemFooter) return;

  const agora = new Date();
  const dataFormatada = agora.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  elemFooter.textContent = dataFormatada;
}

function fecharMenuAoNavegar() {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  if (!isMobile) return;

  const linksMenu = document.querySelectorAll("#menu a");
  linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
      const checkbox = document.querySelector("#bt_menu");
      if (checkbox) checkbox.checked = false;
    });
  });
}
