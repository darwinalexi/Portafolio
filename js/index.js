let menu_hamburguesa=document.getElementById("hamburguesa");
let menu=document.getElementById("menu")

menu_hamburguesa.addEventListener("click", ()=>{
    if (menu.classList.contains("menu")) {
        menu.classList.remove("menu")
        menu.classList.add("menu1")
    }else if (menu.classList.contains("menu1")) {
        menu.classList.remove("menu1")
        menu.classList.add("menu")
    }
})

   


