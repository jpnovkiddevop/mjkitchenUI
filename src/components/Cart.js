import React from "react";
import { useKitchenContext } from "./App";

export default function Cart() {

  const { cart, removeFromCart, clearCart} = useKitchenContext()
  // Initialize a variable to store the total price and one for vat
  let totalPrice = 0;
  let vat = 0;
  let payableTotal = 0;

 if (Array.isArray(cart) ) {
   
    cart.forEach(function(item) {
         totalPrice += item.price

    });
         vat = 0.16 * totalPrice
         payableTotal = totalPrice + vat
} else {
    console.error("cart is not an array");
}


  const myCart = cart.map((item) => {
    return (
      <li key={item.id}>
        {item.name} - @ksh_{item.price}
                 <button className="button" onClick={() => removeFromCart(item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash btn-cart" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg></button>
      </li>
    );
  });

  const btnClass = cart.length > 0 ? "btn" : "hidden";

  return (
    <div className="trolley">
      <span>
        <h2 className="cart--title">.<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart trolley-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>.</h2>
      <div className="show">
        <p>Price: ksh_{totalPrice}</p>
        <p>vat: ksh_{vat}</p>
        <p>Total: ksh_{payableTotal}</p>
      </div>
      </span>
      {myCart}
      <button onClick={clearCart} className={btnClass}>
        clear cart
      </button>
    </div>
  );
}
