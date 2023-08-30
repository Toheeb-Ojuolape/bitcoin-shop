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
import io from "socket.io-client";
import { productList } from "../../utils/productList";
import handleError from "../../utils/handleError";
import { checkWebln } from "../../utils/checkWebln";

function Checkout({ products, closeCheckout, removeItem, removeAllProducts }) {
  const [loading, setLoading] = useState(false);
  const [invoice, setInvoice] = useState("");
  const [ispayment, setPayment] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [buyer, setBuyer] = useState({});
  const socket = io(import.meta.env.VITE_API_URL);

  useEffect(() => {
    socket.on("payment-verified", () => {
      setPaymentStatus(true);
      removeAllProducts();
    });
  }, []);

  const generateInvoice = async () => {
    try {
      setLoading(true);
      const response = await ajax.generateInvoice(buyer, productList(products));
      const weblnStatus = await checkWebln()
      if (weblnStatus) {
        alert("why are you running")
        setLoading(false);
        await window.webln.sendPayment(response.invoice.paymentRequest);
      } else {
        setLoading(false);
        setInvoice(response.invoice);
        setPayment(true);
      }
    } catch (error) {
      handleError(error.message);
      setLoading(false);
      setPayment(false);
    }
  };

  const setBuyerInfo = (payload) => {
    setBuyer(payload);
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
              <DetailsForm
                setDisabled={setDisabled}
                setBuyerInfo={setBuyerInfo}
              />
              {!disabled && (
                <OutlinedButton
                  width={"100%"}
                  loading={loading}
                  onClick={() => generateInvoice()}
                >
                  Pay Now
                </OutlinedButton>
              )}
            </div>
          )}

          {ispayment && !paymentStatus && invoice && (
            <Invoice goBack={goBack} invoice={invoice} />
          )}
        </div>
      )}

      {paymentStatus && <SuccessComponent />}
    </div>
  );
}

export default Checkout;
