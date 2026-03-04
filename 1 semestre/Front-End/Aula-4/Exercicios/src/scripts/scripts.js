//==============================================
//EXERCÍCIO 1 - Personalizador de Acesso  (Strings e Interação)
//==============================================

// const nome = prompt ("Digite seu nome: ")
// const sobrenome = prompt ("Digite seu sobrenome: ")


// let nomeFormatado = nome.trim().toUpperCase()
// let sobrenomeFormatado = sobrenome.trim().toUpperCase()

// alert("Seu nome completo é: " + nomeFormatado + " " + sobrenomeFormatado )



//==============================================
//EXERCÍCIO 2 - Calculadora de Divisão de Conta (Aritméticos)
//==============================================

// const valor = prompt ("Qual é o valor total da conta? ")
// const qtd = prompt ("Qual é a quantidade de pessoas na mesa? ")

// let total = valor / qtd


// alert("Cada amigo deve pagar: R$" + total)

//==============================================
//EXERCÍCIO 3 - Validador de Promoção (Lógicos e Relacionais)
//==============================================

// const valor = prompt("Digite o valor da compra: ")
// const cupom = prompt("Você tem cupom?")

// if(valor >= 150 || cupom.toLowerCase() === "sim") {
//     console.log("Frete Grátis Liberado")
// } else {
//     console.log("Frete Pago")
// }

//==============================================
//EXERCÍCIO 4 - Sorteador de Brindes (Math)
//==============================================

// const num = prompt("Escolha um número de 1 a 10: ")

// const sistema = Math.random() * 10

// if(num === sistema.toFixed(0)){
//     console.log( "Parabéns, você ganhou um brinde!")
// } else {
//     console.log("Que pena, o número sorteado foi: " + sistema.toFixed(0))
// }

// alert(`O número sorteado foi: ${sistema.toFixed(0)}`)

//==============================================
//EXERCÍCIO 5 - Gestão de Frota (Orientação a Objetos)
//==============================================

class Veiculo{
    constructor(modelo,marca,ano){
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
    }

    idadeVeiculo(anoAtual){
        
    }
}