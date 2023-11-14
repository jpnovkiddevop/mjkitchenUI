import React, { useState } from "react";
import { data } from "./data";
import Menu from "./Menu";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";

const KitchenContext = React.createContext();

function App() {
  const [menu, setMenu] = useState(data);
  const [cart, setCart] = useState([]);
  console.log(setMenu);
  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const removeFromCart = (item) => {
    const updateCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updateCart);
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <KitchenContext.Provider value={{ clearCart, removeFromCart, cart, addToCart, menu }}>
      <Navbar />  
      <Welcome />
      {cart.length > 0 && <Cart />}
      <Menu />
    </KitchenContext.Provider>
  );
}

export function useKitchenContext() {
  return React.useContext(KitchenContext);
}

export default App;









