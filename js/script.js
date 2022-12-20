const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

const header = document.querySelector('.header');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if (top >= 5) {
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}