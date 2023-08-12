import React from "react";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import closeicon from "../../assets/icons/closeicon.svg";
import { sumAmount } from "../../utils/sumAmount";
import { standardAmountFormat } from "../../utils/amountFormatter";
import {OutlinedButton} from "../Elements/Buttons/Buttons";

function Checkout({ products, closeCheckout, removeItem }) {
  return (
    <div className="checkout">
      <div className="flex justify-between">
        <h3>Checkout</h3>
        <div onClick={closeCheckout}>
          <img width={"25px"} src={closeicon} alt="closeicon" />
        </div>
      </div>
      {products.map((product, index) => (
        <div key={index}>
          <CheckoutItem
            product={product}
            index={index}
            removeItem={removeItem}
          />
        </div>
      ))}

      {products && (
        <div>
        <div className="total-checkout">
          <div>Total:</div>{" "}
          <div>
            <strong>{standardAmountFormat(sumAmount(products))}</strong>
          </div>
        </div>

        <div>
          <OutlinedButton>
            Pay Now
          </OutlinedButton>
        </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
