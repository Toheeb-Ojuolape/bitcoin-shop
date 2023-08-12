import React from "react";
import cart from "../../../assets/icons/cart.svg";
import "./cart.css";

function Cart({showCheckout,products}) {
  return (
    <div onClick={showCheckout} className="relative pointer">
      {products.length != 0 && (
        <span className="cart-count">{products.length}</span>
      )}
      <img className="cart-img" src={cart} alt="cart" />
    </div>
  );
}

export default Cart;
