import {cart, removeFromCart} from './cart.js';
import {products} from './products.js';

let cartSummaryHTML = '';


cart.forEach((cartItem) => {
  const productId = cartItem.productId;
  let matchingProduct;

products.forEach((product) => {
  if (product.id === productId){
    matchingProduct = product;
  }
  
});
cartSummaryHTML += 
`
 <div class="card-item-container js-cart-item-container-${matchingProduct.id}" >
        <div class="img-container">
          <img src="${matchingProduct.image}" />
        </div>
        <div class="card-item-about">
          <h3>${matchingProduct.name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <div class="price-container">
            <p>${matchingProduct.price}
            </p>
            <p>Quantity: ${cartItem.quantity}</p>
          </div>

          <div class="card-btn">
            <button class="mfc-btn" data-product-id="${matchingProduct.id}">move from card</button>
            <button class="deli-btn">Deliver</button>
          </div>
        </div>
      </div>
`;
document.querySelector('.cart-container').innerHTML = cartSummaryHTML;
});

document.querySelectorAll('.mfc-btn')
 .forEach((link)=>{
  link.addEventListener("click", ()=>{
    const productId = link.dataset.productId;
    removeFromCart(productId);

    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
  })
})



