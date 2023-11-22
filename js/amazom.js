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
let caja6=document.getElementById("box-imagen6")
let caja7=document.getElementById("box-imagen7")
let caja8=document.getElementById("box-imagen8")

let imagenp=document.getElementById("imagen-principal")

let fotos=document.getElementById("fotos")
let videos=document.getElementById("videos")


let fotoscuerpo=document.getElementById("fotos-cuerpo")

videos.addEventListener("click", function(){
    fotoscuerpo.classList.add("fotos-ocultar")
    if (imagenp.classList.contains("articulo")) {
        imagenp.classList.remove("articulo")
        imagenp.classList.add("imagenprincipal")
    }
})

fotos.addEventListener("click",  function(){
    fotoscuerpo.classList.remove("fotos-ocultar")
    if (imagenp.classList.contains("imagenprincipal")) {
        imagenp.classList.remove("imagenprincipal")
        imagenp.classList.add("articulo")
    }
})

//se da estilo a texto y video
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
let miniatura1=document.getElementById("mini1")
let miniatura2=document.getElementById("mini2")
let miniatura3=document.getElementById("mini3")
let miniatura4=document.getElementById("mini4")
let miniatura5=document.getElementById("mini5")
miniatura1.addEventListener("mousemove", function(){
    abrir.setAttribute("src","../img/articulo/auroar.jpg")
    caja1.classList.add("imagen1")
})
miniatura2.addEventListener("mousemove", function(){
    abrir.setAttribute("src","../img/articulo/aurora1.jpg")
    caja2.classList.add("imagen2")
})
miniatura3.addEventListener("mousemove", function(){
    abrir.setAttribute("src","../img/articulo/aurora3.jpg")
    caja1.classList.add("imagen3")
})
miniatura4.addEventListener("mousemove", function(){
    abrir.setAttribute("src","../img/articulo/aurora4.jpg")
    caja1.classList.add("imagen3")
})

miniatura5.addEventListener("mousemove", function(){
   
    abrir.setAttribute("src","../img/articulo/daurora2.jpg")
    caja1.classList.add("imagen3")
})

let muestra1=document.getElementById("muestra1")
let muestra2=document.getElementById("muestra2")
let muestra3=document.getElementById("muestra3")

muestra1.addEventListener("mousemove", () =>{
    abrir.setAttribute("src","../img/articulo/muestra1.jpg")
})
muestra2.addEventListener("mousemove", ()=>{
abrir.setAttribute("src","../img/articulo/muestra2.jpg")
})

muestra3.addEventListener("mousemove", ()=>{
    abrir.setAttribute("src","../img/articulo/muestra3.jpg")
})

let estrella1=document.getElementById("estrella1")
let estrella2=document.getElementById("estrella2")
let estrella3=document.getElementById("estrella3")
let estrella4=document.getElementById("estrella4")
let estrella5=document.getElementById("estrella5")

let puntos = 5
let valor = document.getElementById("valor")
valor.innerHTML="Estrellas "+puntos
