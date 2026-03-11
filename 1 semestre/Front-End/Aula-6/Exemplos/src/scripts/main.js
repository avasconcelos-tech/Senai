console.log(window.location.href)

//Selecionando o título do site
const titulo = document.getElementById('titulo-site')

//Selecionando o título do card de nhoque
const saudacao = document.querySelector('#boas-vindas')

//Foto da lasanha
const fotoPrato1 = document.querySelector('#foto-destaque')

//card fa lasanha
const cardLasanha = document.querySelector('#card-lasanha')


const agora = new Date()
const hora = agora.getHours()

if(hora >= 1 && hora > 12){
    saudacao.textContent = "Bom dia!"
} else if (hora >= 12 && hora < 18){
    saudacao.textContent = "Boa tarde"
} else if(hora >-18 && hora <= 24){
    saudacao.textContent = "Boa noite!"
}
else{
    saudacao.textContent = "Hora do seu computador está com erro!"
}

fotoPrato1.alt = "Destaque do Dia: Lasanha Bolonhesa!"

titulo.style.color = "#FF5C00"

cardLasanha.classList.add('em-promocao')


