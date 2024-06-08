import { trocartema, verificartema } from "../../helpers/tema-helper.js"

const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaotema.addEventListener("click", () => {
    trocartema(body, botaotema)
})

verificartema(body, botaotema)

const assunto = localStorage.getItem("assunto")



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