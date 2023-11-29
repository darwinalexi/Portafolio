let ver_mas = document.getElementById("segundo")
let flechab= document.getElementById("abajo")
let flechaa=document.getElementById("abajo")

let soporte =document.querySelector(".soporte")
let soporte1=document.querySelector(".soporte1")
soporte.addEventListener("click", ()=>{
    alert("va")
})
ver_mas.addEventListener("click", ()=>{
if (soporte.classList.contains("soporte")) {
    soporte.classList.remove("soporte")
    soporte.classList.add("desaparecer")
    ver_mas.classList.add("verm")
    ver_mas.innerHTML="Ver mas"
}else if (soporte.classList.contains("desaparecer")) {
    soporte.classList.remove("desaparecer")
    soporte.classList.add("soporte")
    ver_mas.innerHTML="Ver menos"
}
if (soporte1.classList.contains("soporte1")) {
    soporte1.classList.remove("soporte1")
    soporte1.classList.add("desaparecer")
    ver_mas.classList.add("verm")
   
}else if (soporte1.classList.contains("desaparecer")) {
    soporte1.classList.remove("desaparecer")
    soporte1.classList.add("soporte1")
}

});
