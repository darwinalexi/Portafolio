
function calback(entries) {
console.log("llaando el calback")
}
const options={
    root:null,
    rootMargin:'0px',
    threshold: 0
}
const observer = new IntersectionObserver(calback,options);
const elemnt= document.querySelector('profesion');
observer.observe(profesion);
  