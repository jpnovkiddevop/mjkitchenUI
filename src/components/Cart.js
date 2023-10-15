import React from "react";

export default function Cart({cart, removeFromCart, clearCart}) {
    
    const myCart = cart.map((item) => (
       <li key={item.id}>
         {item.name}-{item.price}
         <button className="button" onClick={() => removeFromCart(item)}>Remove from cart</button>
        </li>
    ))

    const btnClass = cart.length > 0 ? "btn" : "hidden";
    return (
      
       
        <div className="trolley" >
          <span><h2 className="cart--title">Cart</h2></span>
          {myCart}
          <button onClick={clearCart} className={btnClass}>clear cart</button>

        </div>
     
    )
}