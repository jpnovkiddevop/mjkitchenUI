import React, { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Cart from "./Cart";


function App() {
  const [menu, setMenu] = useState(data)
  const [cart, setCart] = useState([])

  console.log(setMenu)

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id)
    return setCart([...updatedCart])
  }

  const clearCart = () => {
    setCart([])
  }
  
  return (
    <>
     <div stle={{display:"grid"}}>
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
      <hr style={{backgroundColor:"red"}}></hr>
      <div style={{border:"1px solid steelblue",margin:"2.3em",borderRadius:".77em"}}><Menu menu={menu} addToCart={addToCart} /></div>
      
    </div>
    </>
  );
};

export default App;
