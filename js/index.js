let hamburger=document.getElementById("hamburger-menu")

let information=document.getElementById("information")

hamburger.addEventListener("click", function(){
    if (information.classList.contains("box-null")) {
        information.classList.remove("box-null")
        information.classList.add("box")
    }else  if (information.classList.contains("box")) {
        information.classList.remove("box")
        information.classList.add("box-null")
    }
})

   


