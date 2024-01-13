let ver= document.getElementById("segundo")
let flechar= document.getElementById("arriba")
let flechaa=document.getElementById("abajo")

let soporte =document.querySelector(".soporte")
let soporte1=document.querySelector(".soporte1")
ver.addEventListener("click", ()=>{
    if (soporte.classList.contains("desaparecer")) {
        soporte.classList.remove("desaparecer")
        soporte.classList.add("soporte")
    }
    else if(soporte.classList.contains("soporte")) {
    soporte.classList.remove("soprte")
    soporte.classList.add("desaparecer")
}
if (soporte1.classList.contains("soporte1")) {
    soporte1.classList.remove("soporte1")
    soporte1.classList.add("desaparecer")
}else if (soporte1.classList.contains("desaparecer")) {
    soporte1.classList.remove("desaparecer")
    soporte1.classList.add("soporte1")
}

if (soporte.classList.contains("soporte") && soporte1.classList.contains("soporte1")) {
    ver.innerHTML="Ver menos"
    flechar.classList.add("fa-chevron-up")
    if (flechaa.classList.contains("fa-chevron-down")) {
        flechaa.classList.remove("fa-chevron-down")
        flechaa.classList.add("desaparecer")
    }
   
}else if (soporte.classList.contains("desaparecer") && soporte1.classList.contains("desaparecer")) {
    ver.innerHTML="Ver mas"
    flechaa.classList.add("fa-chevron-down")
    if (flechar.classList.contains("fa-chevron-up")) {
        flechar.classList.remove("fa-chevron-up")
        flechar.classList.add("desaparecer")
    }
}
});
let caracteistica1=document.getElementById("caracteristica1")
let caracteistica2=document.getElementById("caracteristica2")
let capacidad=document.getElementById("capacidad")

caracteistica1.addEventListener("mouseover", ()=>{
    capacidad.innerHTML="Capacidad de 16GB DE RAM"
})
caracteistica2.addEventListener("mouseover", ()=>{
    capacidad.innerHTML="Capacidad de 32GB DE RAM"
})

let busca=document.getElementById("busca")
let main_content=document.getElementById("main_content")
busca.addEventListener("click", () => {
    if (main_content.classList.contains("borde") &&main_content.classList.contains("rebus") ) {
        main_content.classList.remove("borde");
    }else  if (main_content.classList.contains("rebus")) {
        main_content.classList.add("borde");
    }
});

