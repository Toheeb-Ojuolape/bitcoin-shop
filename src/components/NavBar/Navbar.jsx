import React from "react";
import "./Navbar.css";
import Cart from "../Elements/Cart/Cart";
import logo from "../../assets/bitcoinlogo.png"

function Navbar({ showCheckout,products }) {
  return (
    <div className="navbar">
      <h1>My ฿itcoin Shop <img width="30px" src={logo}/></h1>
      <Cart products={products} showCheckout={showCheckout} />
    </div>
  );
}

export default Navbar;
