import { trocartema, verificartema } from "../../helpers/tema-helper.js"

const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")
const botaoJogarNovamente = document.querySelector("main button")

botaotema.addEventListener("click", () => {
    trocartema(body, botaotema)
})

botaoJogarNovamente.addEventListener("click", JogarNovamente)

verificartema(body, botaotema)

function alterarAssunto() {
    const divIcone = document.querySelector(".assunto_icone")
    const iconeimg = document.querySelector(".assunto_icone img")
    const assuntotitulo = document.querySelector(".assunto h1")   
   
    divIcone.classList.add(assunto.toLowerCase())
    iconeimg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeimg.setAttribute("alt", `icone de ${assunto}`)
    assuntotitulo.innerText = assunto
}   

alterarAssunto() 

function inserirResultado() {
    const sectionPontuacao = document.querySelector(".pontucao")
    const divAssunto = document.querySelector(".assunto")
    const pontos = localStorage.getItem("pontos")

    sectionPontuacao.innerHTML =`
         ${divAssunto.outerHTML}

        <strong>${pontos}</strong>

        <p>de 10</p>
        `
}

function JogarNovamente() {
    localStorage.removeItem("pontos")
    localStorage.removeItem("assunto")

    window.location.href = "../../index.html"
}

inserirResultado()