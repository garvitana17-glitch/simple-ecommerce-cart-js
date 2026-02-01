 addEventListener("DOMContentLoaded",()=>{

   let products =  [
       { id : 1,nam : "Shoes" , price: 700 },
       { id : 2,nam : "watch" , price  : 900 }, //all are arrays so need to use [] and all have different array index so need to use comma to separate that. 
       { id : 3,nam : "Bag " ,  price :2000 }
   ];
 const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");  
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");
 
 let cart=[];

 products.forEach(product => {
 const productDiv= document.createElement("div")
 productDiv.classList.add("product")
 productDiv.innerHTML =`<span>${product.nam}-${product.price.toFixed(2)}</span>
 <button data-id="${product.id}">Add To Cart</button>`;  //every button will get unique id
        productList.appendChild(productDiv)
 });

 productList.addEventListener("click",(e)=>{
  if (e.target.tagName==='BUTTON'){
   const productId = parseInt(e.target.getAttribute('data-id'))
  const product = products.find(p=>p.id === productId)
  addToCart(product )       //products.find returns the first value of the array where the predicate is true
  }})

  function addToCart(product){
      cart.push(product)
      renderCart(); 
  }   
  function renderCart(){
   cartItems.innerText = "";
   let totalPrice = 0;
  
    if(cart.length>0){
    cartTotalMessage.classList.remove("hidden")
    emptyCartMessage.classList.add("hidden")
    
    cart.forEach((item,index) =>{
          totalPrice+=item.price;
      const cartItem = document.createElement('div')
      cartItem.classList.add ('cartproductlist')
     cartItem.innerHTML =  `<span> ${item.nam}-${item.price}</span> 
        <button data-id="${index.id}"> Remove </button>`
    cartItem.addEventListener("click",(e)=>{
  if (e.target.tagName==='BUTTON'){
       cart.pop();
        cart.pop();
    renderCart();-
  }
  })
     cartItems.appendChild(cartItem);
     totalPriceDisplay.textContent = `${totalPrice}`
     });
 }
   else{
   emptyCartMessage.classList.remove("hidden")
   totalPriceDisplay.textContent = `${0}`

    
   }
      }
 
    checkOutBtn.addEventListener('click',()=>{
     cart.length=0
        alert('you are checked out successfully');
        renderCart()
    }

    ) 
  
 
 
 

 


 
 













})
