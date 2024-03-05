const menuEmail =document.querySelector('.navbar-email');
const destokMenu=document.querySelector('.desktop-menu');
const iconMenuMobile =document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

/* Alternar clases: El método toggle() 
botones de mostrar/ocultar elementos. */



menuEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
    destokMenu.classList.toggle('inactive') 	
}




iconMenuMobile.addEventListener('click', toggMobileMenu);

function toggMobileMenu(){
    mobileMenu.classList.toggle('inactive') 	
}

