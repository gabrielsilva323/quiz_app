import { trocartema, verificartema } from "../../helpers/tema-helper.js"

const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")
const assunto = localStorage.getItem("assunto")

let quiz = {}
let pontos = 0
let pergunta = 1
let resposta = ""
let idInputResposta = ""
let respostaCorretaid = ""

botaotema.addEventListener("click", () => {
    trocartema(body, botaotema)
})

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


async function buscarPerguntas() {
    const urlDados = "../../data.json"

     await fetch(urlDados).then(resposta => resposta.json()).then(dados => {
        dados.quizzes.forEach(dado => {
           if (dado.title === assunto) {
             quiz = dado
           } 
        })
    })

    console.log(quiz)
}


function  montarPergunta() {
    const main = document.querySelector("main")

    main.innerHTML = ` <section class="pergunta">
           <div>
             <p>Questão ${pergunta} de 10</p>

             <h2>${quiz.questions[pergunta-1].question}</h2>
           </div>
             
            <div class="barra_progresso">
                  <div style="width: ${pergunta * 10}%"></div>
            </div>
        </section>

        <section class="alternativas">
            <form action="">
                <label for="alternativa_a">
                    <input type="radio" id="alternativa_a" name="alternativa"  values="${alterarSinais(quiz.questions[pergunta-1].options[0])}">
                
                   <div>
                     <span>A</span>
                     ${alterarSinais(quiz.questions[pergunta-1].options[0])}
                   </div>
                </label>

                <label for="alternativa_b">
                    <input type="radio" id="alternativa_b"  name="alternativa" values=" ${alterarSinais(quiz.questions[pergunta-1].options[1])}">
                
                    <div>
                        <span>B</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[1])}
                    </div>
                </label>
            
                <label for="alternativa_c">
                    <input type="radio" id="alternativa_c"  name="alternativa" values=" ${alterarSinais(quiz.questions[pergunta-1].options[2])}">
                
                    <div>
                        <span>C</span>
                        ${alterarSinais(quiz.questions[pergunta-1].options[2])}
                    </div>
                </label>
            
                <label for="alternativa_d">
                    <input type="radio" id="alternativa_d"  name="alternativa" values=" ${alterarSinais(quiz.questions[pergunta-1].options[3])}">
                
                    <div>
                        <span>D</span>
                         ${alterarSinais(quiz.questions[pergunta-1].options[3])}
                    </div>
                </label>
             </form>
            
             <button>Responder</button>

        </section>
        `
}

function alterarSinais(texto) {
     return texto.replace(/</g , "&lt;").replace(/>/g, "&gt;")
}

    function guardarResposta(evento) {
        resposta = evento.target.value
        idInputResposta = evento.target.id

        const botaoEnviar = document.querySelector(".alternativas button")
        botaoEnviar.addEventListener("click", validarResposta)
}

     function validarResposta() {
        const botaoEnviar = document.querySelector(".alternativas button")
        botaoEnviar.innerText = "proxima"
        botaoEnviar.removeEventListener("click", validarResposta)

        if (pergunta === 10) {
            botaoEnviar.innerText = "Finalizar"
            botaoEnviar.addEventListener("click", fializar)
        } else {
            botaoEnviar.addEventListener("click",proximaPergunta)
        }

        if (resposta === quiz.questions[pergunta-1].answer) {
         document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "correta")
         pontos = pontos + 1
        } else {
            document.querySelector(`label[for='${idInputResposta}']`).setAttribute("id", "errada")  
            document.querySelector(`label[for='${respostaCorretaid}']`).setAttribute("id", "correta")
        }
    
        pergunta = pergunta + 1        
}

      function Finalizar() {
        localStorage.setItem("pontos", pontos)

        window.location.href = "../resultado/resultado.html"
      }

      function proximaPergunta() {
        montarPergunta()
        adicionarEventoInput()
}
 
  function adicionarEventoInput() {
    const inputResposta = document.querySelectorAll(".alternativas input")
    inputResposta.forEach(input => {
     input.addEventListener("click", guardarResposta)
   
       if (input.value === quiz.questions[pergunta-1].answer) {
         respostaCorretaid.input.id
       }
    })
  }

    async function iniciar () {
    alterarAssunto()
   await buscarPerguntas()
    montarPergunta()
    adicionarEventoInput()
}

iniciar()