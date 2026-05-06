




const btnLimpar = document.querySelector("#btn-limpar")

if(btnLimpar){
  btnLimpar.addEventListener("click", ()=>{
    const listaResumo = document.querySelector("#lista-resumo")
    const secaoResumo = document.querySelector("#secao-resumo")

    document.querySelectorAll(".badge-adicionado").forEach((b) => b.remove())


    while(listaResumo.firstElementChild){
      listaResumo.firstElementChild.remove()
    }

    secaoResumo.style.display = "none"

  })
}