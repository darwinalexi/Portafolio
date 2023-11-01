let plus=document.getElementById("plus")
let minus=document.getElementById("minus")
let cantidad = document.getElementById("cantidad")
let subtotal=document.getElementById("subtotal")
let cantar= document.getElementById("cantiades")
valor = 4000
let auxiliar=new Intl.NumberFormat("de-DE").format(valor)

plus.addEventListener("click", function(){
let cant = document.getElementById("cantidad").innerHTML;
if (cant < 10 ) {
    cant++
    cantidad.innerHTML=cant
    cantar.innerHTML= cant+" coffes to buy"
}
opera =cant*valor
let auxiliar=new Intl.NumberFormat("de-DE").format(opera)
subtotal.innerHTML= auxiliar

})

minus.addEventListener("click", function(){
    let cant = document.getElementById("cantidad").innerHTML;
    if (cant=10) {
        cantidad.innerHTML="0";
        subtotal.innerHTML="0";
        cantar.innerHTML="0";
    }

 



})

    
            