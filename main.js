const menuEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const iconMenuMobile =document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');
const cardsContainer =document.querySelector('.cards-container');

/* Alternar clases: El método toggle() 
botones de mostrar/ocultar elementos. */

menuEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
    desktopMenu.classList.toggle('inactive') 
    aside.classList.add('inactive')
    mobileMenu.classList.add('inactive') 	
}


iconMenuMobile.addEventListener('click', toggMobileMenu);

function toggMobileMenu(){
    mobileMenu.classList.toggle('inactive') 
    aside.classList.add('inactive')   
    desktopMenu.classList.add('inactive');
}

menuCarritoIcon.addEventListener('click', toggCarritoAside);

function toggCarritoAside() {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        aside.classList.toggle('inactive');
    
}

const productList=[];
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},

{
    name:'camara',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name:'compu',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


/*
   <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
         </div>
        </div>
    </div>
*/

/* construir el anterior elemento html llamado product-card con js , lo encapsulo en una fn*/

function renderProducts(arr){

    for (product of productList){
        productCard= document.createElement('div');
        productCard.classList.add('product-card');
     
        //product={name, price, image}
     
        const productImg=document.createElement('img');
        productImg.setAttribute('src', product.image);
     
        const productInfo =document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p')
        productPrice.innerText ='$'+ product.price;
        const productName = document.createElement('p')
        productName.innerText=product.name
     
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
     
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productImgCart)
     
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
     
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
     
        cardsContainer.appendChild(productCard)
     }
}

renderProducts(productList); //la funcion recibe un parametro arr que en este caso seria mi 
//lista de productos

