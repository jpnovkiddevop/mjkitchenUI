import React from "react";

export default function Menu({menu, addToCart, addToPrice}) {
    
      const myMenu = menu.map((item) => <div><ul key={item.id} className="myMenu">
        Type: {item.type}
        <li>Name: {item.name}</li>
        <li>Price: {item.price}</li>
        <li>Quantity: {item.quantity}</li>
   </ul>
      <button className="button" onClick={() => addToCart(item)}>add to cart</button>
   </div>)

   return (
        <>
           <div>
             <span><h2 className="menu--title">Menu</h2></span>
             <div className="container">
             {myMenu}
             </div>
            </div> 

        </>
    )
}