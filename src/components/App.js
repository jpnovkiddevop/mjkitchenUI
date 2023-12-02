import React, { useState } from "react";
import { data } from "./data";
import Menu from "./Menu";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fetch from "./Fetch";

const KitchenContext = React.createContext();

function App() {
  // eslint-disable-next-line
  const [menu, setMenu] = useState(data);
  const [cart, setCart] = useState([]);
  const [loyals, setLoyals] = useState(false)

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

  const menuClass = loyals || cart.length > 0 ? "menu-items2":"menu-items"

  return (

    
      <KitchenContext.Provider value={{ clearCart, removeFromCart, cart, addToCart, menu , menuClass}}>

        <Navbar />  

        <section className="container myContainer">
          <Welcome />
          <button onClick={() => setLoyals(!loyals)} className="btn-loyals btn-sm">toggle loyals</button>
          {loyals && <Fetch/>}
          {cart.length > 0 && <Cart />}
          <Menu />
        </section>
        <Footer />

      </KitchenContext.Provider>


    
  );
}

export function useKitchenContext() {
  return React.useContext(KitchenContext);
}

export default App;









