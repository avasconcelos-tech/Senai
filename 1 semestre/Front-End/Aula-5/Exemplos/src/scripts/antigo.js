const topo = document.getElementById("topo-loja");

const listaCards = document.getElementsByClassName("card");
 
const links = document.getElementsByTagName("a");

console.log("1. O elemento topo:", topo);
console.log("2. O primeiro card da lista:", listaCards[0]);
console.log("3. A lista completa de links:", links);
console.log("4. O endereço (URL) do primeiro link:", links[0].href);
console.log("5. A cor do cabeçalho:", topo.style.backgroundColor);

const estilosReais = window.getComputedStyle(topo);
console.log("5. A cor real do cabeçalho (do CSS):", estilosReais.backgroundColor);


console.log("=== EXPLORANDO PROPRIEDADES VISUAIS ===");

console.log("Texto do cabeçalho:", topo.innerText); 
console.log("HTML interno do cabeçalho:", topo.innerHTML);

const fotoLasanha = listaCards[0].getElementsByTagName("img")[0];
console.log("URL da imagem do card:", fotoLasanha.src);

console.log("Largura real do topo na tela:", topo.offsetWidth + "px");

const checkbox = document.getElementById("bt_menu");
console.log("O menu lateral está ativado?:", checkbox.checked);

console.log("Classes do card:", listaCards[0].classList);

console.log("LOG do elemento (visão HTML):", topo);

console.dir(topo);