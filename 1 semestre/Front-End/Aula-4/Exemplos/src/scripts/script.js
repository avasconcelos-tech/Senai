// const tempoAgora = new Date()

// const hora = tempoAgora.getHours()

// const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')

// const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

// console.log("Hoje é dia: " + dataFormatada)
// console.log("Horário: " + horaFormatada)

// console.log("Só a hora: " + hora)


// if(hora >= 12 && hora < 18){
// alert("Boa tarde!")
// } else if (hora >= 18 && hora < 6 ) { 
//     alert("Boa noite!")
// }


//==============================================
//EXEMPLO DE CLASSE 01 //
//==============================================
// class Prato{
//     constructor(nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }

//     exibirComMoeda(total){
//         // return "R$" + this.preco.toFixed(2)
//         return "R$" + total.toFixed(2)
//     }
// }

// const lasanha = new Prato("Lasanha Bolonhesa", 45.00)

// let qtd = prompt("Simulação: Quantas unidades de: " + lasanha.nome + " Você deseja?")

// let total = lasanha.preco * qtd

// alert("Resumo da Simulação: \n Prato: " + lasanha.nome + "\nTotal: " + lasanha.exibirComMoeda(total))

// alert()

//==============================================
//EXEMPLO DE CLASSE 02 
//==============================================

// class Prato{
//     constructor(nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }

//     exibirComMoeda(resultado){
//         if(resultado) {
//             return "R$" + resultado.toFixed(2)
//         } else {
//             return "R$" + this.preco.toFixed(2)
//         }
//     }
// }

// const lasanha = new Prato("Lasanha Bolonhesa", 45.00)

// let qtd = prompt("Simulação: Quantas unidades de: " + lasanha.nome + " Você deseja?")

// let total = lasanha.preco * qtd

// alert("Resumo da Simulação: \n Prato: " + lasanha.nome + "\nTotal: " + lasanha.exibirComMoeda(total))

// alert()

//==============================================
//EXEMPLO DE CLASSE 03 
//==============================================

class Prato{
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    exibirComMoeda(resultado){
        if(resultado) {
            return "R$" + resultado.toFixed(2)
        } else {
            return "R$" + this.preco.toFixed(2)
        }
    }
}

alert("Restaurante Sabor e Saber!")

const cliente = prompt("Para um atendimento personalizado. Digite seu nome: ")

let clienteFormatado = cliente.trim().toUpperCase()

alert("Bem vindo " + clienteFormatado + " ao restaurante Sabor e Saber" )

