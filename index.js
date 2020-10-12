const 
navMenu      = document.getElementById ('nav-menu'),
toggleMenu  = document.getElementById ('nav-toggle'),
closeMenu   = document.getElementById ('nav-close');

toggleMenu.addEventListener ('click', ()=> {
    navMenu.classList.toggle ('show')
});

closeMenu.addEventListener ('click', ()=> {
    navMenu.classList.remove ('show')
});

//navbar sticky effect
window.addEventListener('scroll',function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


