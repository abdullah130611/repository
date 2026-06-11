const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

cards.forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
card.classList.add("show");
}

});

});

document.addEventListener("mousemove",(e)=>{

document.body.style.backgroundPosition =
`${e.clientX/50}px ${e.clientY/50}px`;

});
