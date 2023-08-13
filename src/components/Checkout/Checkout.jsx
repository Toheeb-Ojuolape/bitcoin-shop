import React, { useState, useEffect } from "react";
import "./Checkout.css";
import CheckoutItem from "./CheckoutItem";
import closeicon from "../../assets/icons/closeicon.svg";
import { sumAmount } from "../../utils/sumAmount";
import { standardAmountFormat } from "../../utils/amountFormatter";
import { OutlinedButton } from "../Elements/Buttons/Buttons";
import ajax from "../../ajax/ajax";
import Invoice from "../Invoice/invoice";
import DetailsForm from "../Elements/Forms/DetailsForm";
import SuccessComponent from "./SuccessComponent";

function Checkout({ products, closeCheckout, removeItem }) {
  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState("");
  const [ispayment, setPayment] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(false);

  const generateInvoice = async (amount) => {
    try {
      setLoading(true);
      const response = await ajax.generateInvoice(amount);
      setInvoice(response.invoice);
      setLoading(false);
      setPayment(true);
      listenToInvoice(response.invoice);
    } catch (error) {
      setLoading(false);
      setPayment(false);
    }
  };

  const listenToInvoice = (invoice) => {
    const paymentInvoice = invoice
    const id = setInterval(async () => {
      console.log(paymentInvoice)
      const status = await ajax.listenToInvoice(paymentInvoice);
      setPaymentStatus(status);
    }, 5000);

    if (paymentStatus) {
      clearInterval(id);
    }
  };

  const goBack = () => {
    setPayment(false);
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

          {!ispayment && (
            <div>
              <DetailsForm setDisabled={setDisabled} />
              {!disabled && (
                <OutlinedButton
                  width={"100%"}
                  loading={loading}
                  onClick={() => generateInvoice(sumAmount(products))}
                >
                  Pay Now
                </OutlinedButton>
              )}
            </div>
          )}

          {ispayment && invoice && (
            <Invoice goBack={goBack} invoice={invoice} />
          )}

          {paymentStatus && <SuccessComponent />}
        </div>
      )}
    </div>
  );
}

export default Checkout;
