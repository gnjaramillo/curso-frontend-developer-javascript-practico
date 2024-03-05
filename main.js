const menuEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const iconMenuMobile =document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');

/* Alternar clases: El método toggle() 
botones de mostrar/ocultar elementos. */



// menuEmail.addEventListener('click', toggDesktopMenu);

// function toggDesktopMenu(){
//     const isAsideClose=aside.classList.contains('inactive')
//     if (!isAsideClose){
//         aside.classList.add('inactive')
//     }
    
//         desktopMenu.classList.toggle('inactive') 	
// }



// iconMenuMobile.addEventListener('click', toggMobileMenu);

// function toggMobileMenu(){
//     const isAsideClose=aside.classList.contains('inactive')
//     if (!isAsideClose){
//         aside.classList.add('inactive')
//     }
    
//         mobileMenu.classList.toggle('inactive') 	
    
// }



// menuCarritoIcon.addEventListener('click', toggCarritoAside);

// function toggCarritoAside() {
//     // Verifica si el menú móvil está cerrado
//     const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    
//     // Verifica si el menú de escritorio está cerrado
//     const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

//     if (!isMobileMenuClose) {
//         // Si el menú móvil está abierto, lo oculta al hacer clic en el icono del carrito
//         mobileMenu.classList.add('inactive');
//     } else if (!isDesktopMenuClose) {
//         // Si el menú de escritorio está abierto, lo oculta al hacer clic en el icono del carrito
//         desktopMenu.classList.add('inactive');
//     } else {
//         // Si tanto el menú móvil como el de escritorio están cerrados, alterna la visibilidad del menú aside al hacer clic en el carrito
//         aside.classList.toggle('inactive');
//     }
// }

//OTRA FORMA DE HACERLO....

iconMenuMobile.addEventListener('click', function() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    closeAllMenus();
    if (isMobileMenuClosed) {
        mobileMenu.classList.remove('inactive');
    } else {
        mobileMenu.classList.add('inactive');
    }
});

menuCarritoIcon.addEventListener('click', function() {
    const isAsideClosed = aside.classList.contains('inactive');
    closeAllMenus();
    if (isAsideClosed) {
        aside.classList.remove('inactive');
    } else {
        aside.classList.add('inactive');
    }
});

menuEmail.addEventListener('click', function() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    closeAllMenus();
    if (isDesktopMenuClosed) {
        desktopMenu.classList.remove('inactive');
    } else {
        desktopMenu.classList.add('inactive');
    }
});

// la clase inactive los oculta porque tiene la propiedad display none en css
function closeAllMenus() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    // Agrega aquí cualquier otro menú que necesite cerrarse cuando se abra uno nuevo
}







