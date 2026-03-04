/* ==========================================================
   AULA 5: DOM - SELEÇÃO E MANIPULAÇÃO ESTÁTICA
   ========================================================== */

console.log("URL da página (via window):", window.location.href);
console.log("Título da aba (via document):", document.title);

const tituloPrincipal = document.getElementById('titulo-site');

const saudacao = document.querySelector('#boas-vindas'); // ID (#)
const primeiroBotao = document.querySelector('.btn-pedido'); // Classe (.)

const nomeLasanha = document.querySelector('#card-lasanha h3');


const cardDestaque = document.querySelector('.card:nth-of-type(1)');

const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

const todosOsCards = document.querySelectorAll('.card');
console.log("Total de cards na vitrine:", todosOsCards.length);


const horaAtual = new Date().getHours();
saudacao.textContent = (horaAtual < 12) ? "Bom dia! Veja nossas massas." : "Boa tarde! Que tal uma pizza?";

// VERSÃO STANDARD (Tradicional):
imgLasanha.setAttribute('title', 'Nossa famosa massa artesanal');

// VERSÃO MODERNA (Acesso Direto à Propriedade)
imgLasanha.src = "src/images/lasanha-destaque.jpg"; // Altera o caminho da imagem
imgLasanha.alt = "Foto da Lasanha Bolonhesa em Destaque"; // Altera o texto alternativo

tituloPrincipal.style.color = "#e67e22"; 
tituloPrincipal.style.borderBottom = "3px solid #2c3e50";
 
cardDestaque.classList.add('em-promocao');

console.log("Manipulação DOM Aula 5: Concluída com sucesso!");