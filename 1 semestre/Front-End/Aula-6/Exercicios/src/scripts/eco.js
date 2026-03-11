const inputPapel = document.querySelector("#input-papel");
const resultadoAgua = document.querySelector("#txt-resultado strong");

if (inputPapel && resultadoAgua) {
  inputPapel.addEventListener("input", () => {
   
    const kg = Number(inputPapel.value);

   
    const totalAgua = kg * 10;

   
    resultadoAgua.textContent = totalAgua;
  });
}


const btnVideo = document.querySelector("#btn-video");
const thumbnail = document.querySelector("#thumb-video");

if (btnVideo && thumbnail) {
  btnVideo.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    thumbnail.style.display = "none";

   
    btnVideo.textContent = "A reproduzir...";
    btnVideo.style.backgroundColor = "#555";
    btnVideo.disabled = true;
  });
}


const todosBotoes = document.querySelectorAll(".btn-leitura");

todosBotoes.forEach((botao) => {
 
  if (botao.id !== "btn-video") {
    botao.addEventListener("mouseover", () => {
      botao.style.backgroundColor = "#27ae60";
      botao.style.transform = "scale(1.05)";
    });

    botao.addEventListener("mouseout", () => {
      botao.style.backgroundColor = "#1b5e20"; 
      botao.style.transform = "scale(1)";
    });

    botao.addEventListener("click", (event) => {
      event.preventDefault();
      alert("A redirecionar para o artigo completo...");
    });
  }
});