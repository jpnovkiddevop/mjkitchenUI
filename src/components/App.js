import React, { useState } from "react";
import { data } from "./data";
import Menu from "./Menu";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';


const KitchenContext = React.createContext();

function App() {
  // eslint-disable-next-line
  const [menu, setMenu] = useState(data);
  const [cart, setCart] = useState([]);
 
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
    <section className="container">
      <KitchenContext.Provider value={{ clearCart, removeFromCart, cart, addToCart, menu }}>
        <Navbar />  
        <Welcome />
        {cart.length > 0 && <Cart />}
        <Menu />
      </KitchenContext.Provider>
    </section>
  );
}

export function useKitchenContext() {
  return React.useContext(KitchenContext);
}

export default App;









