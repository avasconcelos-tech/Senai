// /* ==========================================================
  //  AULA 07: DOM AVANÇADO - PROJETO ECOCYCLE
  //  Gabarito dos Exercícios //



// Simulador de água
const inputPapel = document.querySelector("#input-papel");
const resultadoAgua = document.querySelector("#txt-resultado strong");

if (inputPapel && resultadoAgua) {
  inputPapel.addEventListener("input", () => {
    const kg = Number(inputPapel.value);
    resultadoAgua.textContent = kg * 10;
  });
}

// Controlo do vídeo
const btnVideo = document.querySelector("#btn-video");
const thumbnail = document.querySelector("#thumb-video");

if (btnVideo && thumbnail) {
  btnVideo.addEventListener("click", (event) => {
    event.preventDefault();
    thumbnail.style.display = "none";
    btnVideo.textContent = "A reproduzir...";
    btnVideo.style.backgroundColor = "#555";
    btnVideo.disabled = true;
  });
}

const lista = document.querySelector("#lista-noticias");

// a) Quantidade de cards
console.log("Total de cards:", lista.children.length);

// b) Primeiro card recebe destaque
const primeiroCard = lista.firstElementChild;
primeiroCard.classList.add("noticia-destaque");

// c) Segundo card (irmão seguinte) tem o título alterado
const segundoCard = primeiroCard.nextElementSibling;
if (segundoCard) {
  segundoCard.querySelector("h2").textContent = "Notícia em Alta";
}


function adicionarNoticia(titulo, descricao) {
  const novoCard = document.createElement("article");
  novoCard.classList.add("card-noticia");

  novoCard.innerHTML =
    "<h2>" + titulo + "</h2>" +
    "<p class='desc'>" + descricao + "</p>" +
    "<button class='btn-leitura'>Leia Mais</button>";

  lista.prepend(novoCard);
}


// Parte B — Botão de duplicar (fixo na página via JS)
const btnDuplicar = document.createElement("button");
btnDuplicar.textContent = "Duplicar Primeira Notícia";
btnDuplicar.id = "btn-duplicar";
document.querySelector("main").insertAdjacentElement("afterbegin", btnDuplicar);

btnDuplicar.addEventListener("click", () => {
  const original = lista.firstElementChild;
  if (!original) return;

  const copia = original.cloneNode(true);

  // Altera o título da cópia para diferenciar
  const tituloCopia = copia.querySelector("h2");
  if (tituloCopia) {
    tituloCopia.textContent = "[CÓPIA] " + tituloCopia.textContent;
  }

  lista.appendChild(copia);
});


const formSugestao = document.querySelector("#form-sugestao");

if (formSugestao) {
  formSugestao.addEventListener("submit", (event) => {
    event.preventDefault();

    const campoTitulo = document.querySelector("#input-titulo");
    const campoDesc = document.querySelector("#input-desc");

    const titulo = campoTitulo.value.trim();
    const descricao = campoDesc.value.trim();

    // Validação básica: não adicionar se os campos estiverem vazios
    if (!titulo || !descricao) {
      alert("Preencha o título e a descrição antes de adicionar!");
      return;
    }

    adicionarNoticia(titulo, descricao);

    // Limpa os campos após o envio
    campoTitulo.value = "";
    campoDesc.value = "";
  });
}

lista.addEventListener("click", (event) => {
  const clicado = event.target;

  // Clique em .btn-leitura → expande/recolhe o card
  if (clicado.classList.contains("btn-leitura") && clicado.id !== "btn-video") {
    event.preventDefault();

    const card = clicado.parentElement;
    card.classList.toggle("card-expandido");

    // Altera o texto do botão conforme o estado
    clicado.textContent = card.classList.contains("card-expandido")
      ? "Fechar"
      : "Leia Mais";
  }

  // Clique em .btn-remover → remove o card inteiro
  if (clicado.classList.contains("btn-remover")) {
    const card = clicado.parentElement;
    card.remove();
  }
});