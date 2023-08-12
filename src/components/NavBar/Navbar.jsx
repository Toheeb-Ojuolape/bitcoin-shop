import React from "react";
import "./Navbar.css";
import Cart from "../Elements/Cart/Cart";

function Navbar({ showCheckout,products }) {
  return (
    <div className="navbar">
      <h2>My Bitcoin Shop</h2>
      <Cart products={products} showCheckout={showCheckout} />
    </div>
  );
}

export default Navbar;
