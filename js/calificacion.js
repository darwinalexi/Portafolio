let porcentaje1= document.getElementById("valor1").value
let porcentaje2= document.getElementById("valor2").value
let porcentaje3= document.getElementById("valor3").value
let porcentaje4= document.getElementById("valor4").value
let porcentaje5= document.getElementById("valor5").value

let grafica1= document.getElementById("grafica1")
let grafica2= document.getElementById("grafica2")
let grafica3= document.getElementById("grafica3")
let grafica4= document.getElementById("grafica4")
let grafica5= document.getElementById("grafica5")

let total=parseInt(porcentaje1.value)+parseInt(porcentaje2.value)+parseInt(porcentaje3.value)
                +parseInt(porcentaje4.value)+parseInt(porcentaje5.value)

let porcentaje6=(porcentaje6/100)*total
let porcentaje1grafica=porcentaje6*2
grafica1.style.width= porcentaje1grafica.toString()+"px"
