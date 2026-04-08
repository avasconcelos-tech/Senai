// Missão 1: Recepção do Cliente
const saudacao = document.querySelector('#saudacao-pizzaria');

const horaAtual = new Date().getHours();
saudacao.textContent = (horaAtual < 12) ? "Bom dia! Pizza no café da manhã?" : (horaAtual >= 12 || horaAtual < 18) ? "Boa tarde! Que tal uma fatia agora?" : "Boa noite! A fornalha está quente, faça seu pedido!";

// Missão 2: Destaque do Chef
const bannerPromocao = document.querySelector('#banner-promocao');


bannerPromocao.addEventListener('mouseover', () => {
    classList.add("#fatia-destaque")
    bannerPromocao.style.backgroundColor = '#e67e22'
});

bannerPromocao.addEventListener('mouseout', () => {
    classList.remove("#fatia-destaque")
     bannerPromocao.style.backgroundColor = '#95a5a6'
});

// Missão 3: Calculadora de Rodízio
const inputQtdPessoas = document.querySelector("#qtd-pessoas")

const total1 = document.querySelector("#total-pagar")

if(inputQtdPessoas && total1){ 
    inputQtdPessoas.addEventListener("input", () =>{
        const precoUnitario = 45.0
        const total = Number(inputQtdPessoas.value) * precoUnitario
        total1.textContent = `R$ ${total.toFixed(2)}`
    })
}

// Missão 4: Montar a Pizza 
const btnAdicionar = document.querySelector('#btn-adicionar');
const saborPizza = document.querySelector('#sabor-pizza');
const listaPedidos = document.querySelector('#lista-pedidos');

btnAdicionar.addEventListener('click', () => {

})

if(btnAdicionar <= 0 || value ==""){
    
}

// Missão 5: Cancelar Pedido
const btnCancelar = document.querySelector('#btn-cancelar');

btnCancelar.addEventListener('click', () => {
    lista-pedidos.addEventListener() ; 
});