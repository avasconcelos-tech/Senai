//1. Selecionamos o elemento (Aula 5)
const btn = document.querySelector('.btn-pedido');

const inputQtdLasanha = document.querySelector("#qtd-lasanha")

const textoPreco = document.querySelector("#preco-lasanha")

if(inputQtdLasanha && textoPreco){ //Verifica se tem o valor
    inputQtdLasanha.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total = Number(inputQtdLasanha.value) * precoUnitario
        textoPreco.textContent = `R$ ${total.toFixed(2)}`

        textoPreco.style.color = total > 150 ? "#c0392b" : "#f3641d"
    })

}

btn.addEventListener('click', function() {

console.log("O vigia detectou um clique no botão!");
btn.textContent = "Processando...";
});

