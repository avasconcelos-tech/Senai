// --- SELEÇÃO DE ELEMENTOS (Seu código base) ---

// Busca o elemento único pelo ID. O DOM entrega o objeto completo da tag <header>.
const topo = document.getElementById("topo-loja");

const listaCards = document.getElementsByClassName("card");

// Busca todas as tags <a> do documento. 
const links = document.getElementsByTagName("a");


console.log("1. O elemento topo:", topo);
console.log("2. O primeiro card da lista:", listaCards[0]);
console.log("3. A lista completa de links:", links);
console.log("4. O endereço (URL) do primeiro link:", links[0].href);
console.log("5. A cor do cabeçalho:", topo.style.backgroundColor);

// Pega todos os estilos que o navegador calculou para o topo
const estilosReais = window.getComputedStyle(topo);
console.log("5. A cor real do cabeçalho (do CSS):", estilosReais.backgroundColor);


console.log("=== EXPLORANDO PROPRIEDADES VISUAIS ===");

console.log("Texto do cabeçalho:", topo.innerText); 
console.log("HTML interno do cabeçalho:", topo.innerHTML);

// O DOM permite acessar qualquer atributo (src, alt, value, etc.)
const fotoLasanha = listaCards[0].getElementsByTagName("img")[0];
console.log("URL da imagem do card:", fotoLasanha.src);

// offsetWidth e offsetHeight pegam a largura e altura real que o elemento ocupa na tela (em pixels).
console.log("Largura real do topo na tela:", topo.offsetWidth + "px");


// Útil para explicar lógica de menus. Verifica se o checkbox está marcado.
const checkbox = document.getElementById("bt_menu");
console.log("O menu lateral está ativado?:", checkbox.checked);

// Mostra todas as classes que o elemento possui.
console.log("Classes do card:", listaCards[0].classList);

// O console.log(topo) mostra a representação da árvore HTML (bonitinho para ler o código).
console.log("LOG do elemento (visão HTML):", topo);

// O console.dir(topo) mostra o elemento como um OBJETO JavaScript puro.
console.dir(topo);