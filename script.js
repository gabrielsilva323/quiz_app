let tema = "claro"

const botaotema = document.querySelector(".tema button")
botaotema.addEventListener("click", trocartema)

const body = document.querySelector("body")

function trocartema() {
   if (localStorage.getItem("tema")) {
    tema = localStorage.getItem("tema")
   }


    if (tema === "claro") {
       body.classList.add("escuro")
       localStorage.setItem("tema", "escuro")
    } else {
        body.classList.remove("escuro")
        localStorage.setItem("tema", "claro")
    }
}

 function verificartema() {
    if (localStorage.getItem("tema")) {
        tema = localStorage.getItem("tema")
    }

    if (tema === "escuro") {
        body.classList.add("escuro")
    }
 }

 verificartema()