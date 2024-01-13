let hamburger=document.getElementById("hamburger-menu")
let information=document.getElementById("information")
let items=document.getElementById("items")
let opciones = document.getElementById("items")



hamburger.addEventListener("click", function(){
    if (information.classList.contains("box-null")) {
        information.classList.remove("box-null")
        information.classList.add("box")
    }else  if (information.classList.contains("box")) {
        information.classList.remove("box")
        information.classList.add("box-null")
    }

 
        if (opciones.classList.contains("item")) {
            opciones.classList.remove("item")
            opciones.classList.add("itemnull")
        } else if (opciones.classList.contains("itemnull")) {
            opciones.classList.remove("itemnull")
            opciones.classList.add("item")
        } 
})

   


