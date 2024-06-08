import { trocartema, verificartema } from "../../helpers/tema-helper.js"



const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaotema.addEventListener("click", () => {
    trocartema(body, botaotema)
})

verificartema(body, botaotema)