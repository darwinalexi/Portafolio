function validar(){
    let puntuacion=document.getElementById("puntuacion").value
    let estralla1 =document.getElementById("estrella1")
    let estralla2 =document.getElementById("estrella2")
    let estralla3 =document.getElementById("estrella3")
    let estralla4 =document.getElementById("estrella4")
    let estralla5 =document.getElementById("estrella5")
    if (puntuacion > 6 || puntuacion < 0 ) {
        alert("numero invalido")
    }else if (puntuacion = 1) {
        
    }
    
}