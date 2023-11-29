let hamburger=document.getElementById("hamburger-menu")
let information=document.getElementById("information")
let items=document.getElementById("items")
let opciones = document.getElementById("items")
let encendedor = document.getElementById("encendedor")
let rueda=document.getElementById("rueda")

encendedor.addEventListener("click", ()=>{
if (rueda.classList.contains("rueda")) {
    rueda.classList.remove("rueda")
    rueda.classList.add("rueda1")
} else if (rueda.classList.contains("rueda1")) {
    rueda.classList.remove("rueda1")
    rueda.classList.add("rueda")
}
    if (opciones.classList.contains("itemnull")) {
        opciones.classList.remove("itemnull")
        opciones.classList.add("item")
    }else  if (opciones.classList.contains("item")) {
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

   


