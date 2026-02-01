document.addEventListener("DOMContentLoaded", ()=>{

    const products = [
        {id : 1, name : "Product 1", price: 29.99},
        {id : 2, name : "Product 2", price: 19.99},
        {id : 3, name : "Product 3", price: 59.99},
    ];

    const cart=[]

    const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");
 

  products.forEach(product=> {    //FOR ALL THE PRODUCTS THIS 4 STEPS WILL TAKE PLACE IS FUNCTION OF FOREACH FUNCTION
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML =`<span>${product.name}- $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add To Cart</button>`;  //every button will get unique id
     productList.appendChild(productDiv)
})
 
productList.addEventListener('click',(e)=>{
  if (e.target.tagName==='BUTTON'){                      //through one of attribute love to see the product id so through 
   const productId =parseInt( e.target.getAttribute('data-id'))  //its type is string as we have seen in console so we will change in integer as data-id is in interger form                                                //proct id can filter my products or array which is needed and will add that element into the cart
  const product = products.find(p=>p.id === productId)
  addToCart(product )                 //products.find returns the first value of the array where the predicate is true
}                                                       //if p.id matches the product id just above that is only element i want to return
})

})



