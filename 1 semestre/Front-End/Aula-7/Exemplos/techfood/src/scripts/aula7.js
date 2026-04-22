const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent =
        hora < 12
            ? "Bom dia! Qual o seu pedido?"
            : "Boa tarde! Confira nosso cardápio.";
}

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});

const main = document.querySelector('main')

main.addEventListener('click', (event) =>{

    const clicado = event.target

    //Adicionar e remover itens pedido
    if(clicado.classList.contains("btn-menos")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent)
        spanQtd.textContent = Math.max(1, valorAtual -1)
        atualizarPrecoCard(box)
        return
    }

    if(clicado.classList.contains("btn-mais")){
        const box = clicado.parentElement
        const spanQtd = box.querySelector(".qtd-valor")
        const valorAtual = Number(spanQtd.textContent) + 1
        atualizarPrecoCard(box)
        return
    }
     
   //solicitar pedido - Item
   
   if(clicado.classList.contains("btn-pedido")){
    event.preventDefault()

    const card = clicado.parentElement
    const nomePrato = card.querySelector("h3").textContent
    const quantidade = card.querySelector(".qtd-valor").textContent
    const precoExibido = card.querySelector(".preco").textContent

    clicado.textContent = "✅ Adicionado"
    clicado.style.backgroundColor = "#27ae60"
    clicado.disabled = true

    setTimeout(() =>{
        clicado.textContent = "Pedir agora"
        clicado.style.backgroundColor = ""
        clicado.disabled = false
    }, 1500)

    if(!card.querySelector(".badge-adicionado")){
        card.insertAdjacentHTML(
            "beforeend",
            "<span class= 'badge-adicionado'> ✅ No resumo</span>"
        )
    }

    //função para inseir as informações do prato ao resumo de itens so "carrinho".
    adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card)

   } //fechamento btn-pedido

}) //fechamento do ouvinte

function atualizarPrecoCard(box){
    const card = box.parentElement
    const spanPreco = card.querySelector(".preco")
    const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"))
    const quantidade = Number(box.querySelector(".qtd-valor").textContent)

    //Continua
}