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

      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>
      <Menu menu={menu} addToCart={addToCart} />

    </>
  );
};

export default App;
