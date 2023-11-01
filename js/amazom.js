let abrir = document.getElementById("abrir")
let cerrar = document.getElementById("cerrar")

abrir.addEventListener("click", function(){
    let modal=document.getElementById("modal")
     if (modal.classList.contains("ocultar")) {
        modal.classList.remove("ocultar")
        modal.classList.add("modal")
     }
})
cerrar.addEventListener("click", function(){
    let modal=document.getElementById("modal")
    if (modal.classList.contains("modal")) {
    modal.classList.remove("modal")
    modal.classList.add("ocultar")
    }
})
