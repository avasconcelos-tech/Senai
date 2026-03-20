const btnCurtir = document.querySelector('#btn-curtir');
const contadorElemento = document.querySelector('#contador');
const btnReset = document.querySelector('#btn-reset');
let curtidas = 0;

btnCurtir.addEventListener('click', () => {
    curtidas++;
    contadorElemento.textContent = curtidas; 
});

const campoTexto = document.querySelector('#campo-texto');
const previewTexto = document.querySelector('#preview-texto');

campoTexto.addEventListener('input', () => {
    previewTexto.textContent = `Digitando: ${campoTexto.value}`;
});

const caixaCor = document.querySelector('#caixa-cor');

caixaCor.addEventListener('mouseenter', () => {
    caixaCor.style.backgroundColor = '#3498db'; 
});

caixaCor.addEventListener('mousesair', () => {
    caixaCor.style.backgroundColor = '#95a5a6'; 
});


btnReset.addEventListener('click', () => {
    curtidas = 0; //Zera a variável das curtidas

    contadorElemento.textContent = "0"; //Atualiza o número no HTML

    campoTexto.value = ""; //Limpa o que foi digitado no input
    
    previewTexto.textContent = "Digitando: ..."; //Reseta a frase do preview
});