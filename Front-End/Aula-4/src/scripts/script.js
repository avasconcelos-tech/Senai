const tempoAgora = new Date()

const hora = tempoAgora.getHours()

const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')
const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

console.log("Hoje é dia: " + dataFormatada)
console.log("Horário: " + horaFormatada)

console.log("Só a hora: " + hora)

if(hora > 12 && hora < 18){
alert("Boa tarde!")
} else {
    (hora >= 19)
    alert("Boa noite!")
}
