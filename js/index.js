let hamburger=document.getElementById("hamburger-menu")
let information=document.getElementById("information")
let items=document.getElementById("items")
let  arriba = document.getElementById("arriba")
let opciones = document.getElementById("items")
let abajo = document.getElementById("abajo")
let cerrar = document.getElementById("cerrar")

abajo.addEventListener("click", ()=>{
    if (opciones.classList.contains("itemnull")) {
        opciones.classList.remove("itemnull")
        opciones.classList.add("item")
    }
})
arriba.addEventListener("click", () =>{
    if (opciones.classList.contains("item")) {
        opciones.classList.remove("item")
        opciones.classList.add("itemnull")
    }
})

hamburger.addEventListener("click", function(){
    if (information.classList.contains("box-null")) {
        information.classList.remove("box-null")
        information.classList.add("box")
    }else  if (information.classList.contains("box")) {
        information.classList.remove("box")
        information.classList.add("box-null")
    }
})

   


