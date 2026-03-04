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

