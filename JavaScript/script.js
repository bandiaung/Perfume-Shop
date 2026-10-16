
import{cart, addToCart} from './cart.js';
import{products} from './products.js';




const buyButtons = document.querySelectorAll(".buy-button");
const addCart = document.querySelector('.add-to-cart');


function updateCartQuantity(){
      let cartQuantity = 0;


     cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });


    if (addCart){
      addCart.innerHTML = cartQuantity;
    }
}

   buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
  const productId = button.dataset.productId;

   addToCart(productId);
   updateCartQuantity();
  });
  
});


