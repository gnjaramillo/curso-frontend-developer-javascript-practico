const menuEmail =document.querySelector('.navbar-email');
const destokMenu=document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
    destokMenu.classList.toggle('inactive') 	
}

/* Alternar clases: El método toggle() 
botones de mostrar/ocultar elementos. */

