import React from 'react'
import cart from "../../assets/icons/cart.svg"
import "./Navbar.css"

function Navbar() {
  return (
    <div class="navbar">
        <h2>My Bitcoin Shop</h2>
        <img src={cart}/>
    </div>
  )
}

export default Navbar