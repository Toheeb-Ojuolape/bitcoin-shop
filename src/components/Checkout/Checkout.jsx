import React, { useState } from "react";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import closeicon from "../../assets/icons/closeicon.svg";
import { sumAmount } from "../../utils/sumAmount";
import { standardAmountFormat } from "../../utils/amountFormatter";
import { OutlinedButton } from "../Elements/Buttons/Buttons";
import ajax from "../../ajax/ajax";
import Invoice from "../Invoice/invoice";

function Checkout({ products, closeCheckout, removeItem }) {
  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState("");
  
  const generateInvoice = async (amount) => {
    try {
      setLoading(true);
      const response = await ajax.generateInvoice(amount);
      setInvoice(response.invoice.paymentRequest);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  
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

      {products.length != 0 && (
        <div>
          <div className="total-checkout">
            <div>Total:</div>{" "}
            <div>
              <strong>{standardAmountFormat(sumAmount(products))}</strong>
            </div>
          </div>

          <div>
            <OutlinedButton
              width={"100%"}
              loading={loading}
              onClick={() => generateInvoice(sumAmount(products))}
            >
              Pay Now
            </OutlinedButton>
          </div>

          {invoice && <Invoice invoice={invoice} />}
        </div>
      )}
    </div>
  );
}

export default Checkout;
