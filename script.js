import { trocartema, verificartema } from "./helpers/tema-helper.js"



const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaotema.addEventListener("click", () => {
    trocartema(body, botaotema)
})

verificartema(body, botaotema)

const botoesAssunto = document.querySelectorAll(".assuntos button")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento) {
    const classeBotao = evento.target.className
    const assunto = document.querySelector(`.${classeBotao} span`).innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}