/* ==========================================================
   AULA 5: DOM - SELEÇÃO E MANIPULAÇÃO ESTÁTICA
   ========================================================== */

// 1. HIERARQUIA GLOBAL 
// window: Representa a janela do navegador (o "Pai" de tudo).
// document: Representa o seu HTML (o "Filho" focado no conteúdo).
console.log("URL da página (via window):", window.location.href);
console.log("Título da aba (via document):", document.title);


// 2. SELETORES "OLD SCHOOL" 
// getElementById: Busca rápida e exclusiva por ID.
const tituloPrincipal = document.getElementById('titulo-site');


// 3. SELETORES "NEW SCHOOL" - querySelector 
// O padrão moderno que utiliza seletores CSS para encontrar elementos.

// A) Seleção Simples (ID e Classe)
const saudacao = document.querySelector('#boas-vindas'); // ID (#)
const primeiroBotao = document.querySelector('.btn-pedido'); // Classe (.)

// B) Seleção por Hierarquia (Pai > Filho)
const nomeLasanha = document.querySelector('#card-lasanha h3');

// C) Seleção por Posição (Pseudo-classes)
const cardDestaque = document.querySelector('.card:nth-of-type(1)');

// D) Seleção por Atributo
const imgLasanha = document.querySelector('img[alt="Lasanha Tech"]');

// 4. SELETORES DE COLEÇÃO 
// querySelectorAll: Captura todos os itens de uma vez e gera uma NodeList (lista).
const todosOsCards = document.querySelectorAll('.card');
console.log("Total de cards na vitrine:", todosOsCards.length);

// 5. MANIPULAÇÃO DE CONTEÚDO 
const horaAtual = new Date().getHours();
saudacao.textContent = (horaAtual < 12) ? "Bom dia! Veja nossas massas." : "Boa tarde! Que tal uma pizza?";

// 6. MANIPULAÇÃO DE ATRIBUTOS 
// Existem duas formas de alterar atributos como src, alt, title e href.

// VERSÃO STANDARD (Tradicional):
imgLasanha.setAttribute('title', 'Nossa famosa massa artesanal');

// VERSÃO MODERNA (Acesso Direto à Propriedade):
// POR QUE: Mais curto, legível e preferido por desenvolvedores experientes.
imgLasanha.src = "src/images/lasanha-destaque.jpg"; // Altera o caminho da imagem
imgLasanha.alt = "Foto da Lasanha Bolonhesa em Destaque"; // Altera o texto alternativo


// 7. MANIPULAÇÃO DE ESTILO - MÉTODO "CRU" (.style) 
tituloPrincipal.style.color = "#e67e22"; 
tituloPrincipal.style.borderBottom = "3px solid #2c3e50";


// 8. MANIPULAÇÃO DE ESTILO - MÉTODO PROFISSIONAL (.classList) 
cardDestaque.classList.add('em-promocao');

console.log("Manipulação DOM Aula 5: Concluída com sucesso!");