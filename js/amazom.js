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

let imagen1=document.getElementById("imagen1")
let imagen2=document.getElementById("imagen2")
let imagen3=document.getElementById("imagen3")
let imagen4=document.getElementById("imagen4")
let imagen5=document.getElementById("imagen5")

let caja1=document.getElementById("box-imagen1")
let caja2=document.getElementById("box-imagen2")
let caja3=document.getElementById("box-imagen3")
let caja4=document.getElementById("box-imagen4")
let caja5=document.getElementById("box-imagen5")

let imagenp=document.getElementById("imagen-principal")

let fotos=document.getElementById("fotos")
let videos=document.getElementById("videos")





fotos.addEventListener("click", function(){
    let principal=document.getElementById("principal")
    if (fotos.classList.contains("fotos")) {
        fotos.classList.remove("fotos")
        fotos.classList.add("fotos-listo")
    }
     if( videos.classList.contains("videos-listo")){
        videos.classList.remove("videos-listo")
        videos.classList.add("videos")
                
    }
    if (principal.classList.contains("main")) {
        principal.classList.remove("main")
        principal.classList.add("main-ocultar")
    }
})
videos.addEventListener("click", function(){
    if (videos.classList.contains("videos")) {
        videos.classList.remove("videos")
        videos.classList.add("videos-listo")
    }
       if(fotos.classList.contains("fotos-listo")){
        fotos.classList.remove("fotos-listo")
        fotos.classList.add("fotos")
                
    }
    
})

/*asi se selecciona para poder cambiar de imanngen al dar click */
imagen1.addEventListener("click", function(){
    imagenp.setAttribute("src","../img/articulo/aurora1.jpg")
    caja1.classList.add("imagen1")
})
imagen2.addEventListener("click", function(){
    imagenp.setAttribute("src","../img/articulo/daurora2.jpg")
    caja2.classList.add("imagen2")
})
imagen3.addEventListener("click", function(){
    imagenp.setAttribute("src","../img/articulo/aurora3.jpg")
    caja1.classList.add("imagen3")
})
imagen4.addEventListener("click", function(){
    imagenp.setAttribute("src","../img/articulo/aurora4.jpg")
    caja1.classList.add("imagen3")
})

imagen5.addEventListener("click", function(){
    imagenp.setAttribute("src","../img/articulo/auroar.jpg")
    caja1.classList.add("imagen3")
})




