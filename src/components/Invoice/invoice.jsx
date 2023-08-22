import React from "react";
import QRCode from "react-qr-code";
import "./invoice.css";
import InvoiceInput from "../Elements/Forms/InvoiceInput";
import { requestProvider } from "webln";
import PaymentLoading from "./PaymentLoading";
import backIcon from "../../assets/icons/back-icon.svg";


function invoice({ invoice, goBack }) {
  const payInvoice = async () => {
    await requestProvider();
    window.webln.sendPayment(invoice.paymentRequest);
  };
  return (
    <div>
      <img onClick={goBack} src={backIcon} width={"20px"}></img>
      <div  onClick={payInvoice} className="invoice">
        <div>
          <QRCode
            size={100}
            style={{ height: "auto", maxWidth: "150px", width: "150px" }}
            value={invoice.paymentRequest}
            viewBox={`0 0 256 256`}
           
          />
        </div>
      </div>
      <p className="invoice-text">Click the invoice to pay</p>
      <div>
        <InvoiceInput invoice={invoice.paymentRequest} />
      </div>

      <PaymentLoading invoice={invoice} />
    </div>
  );
}

export default invoice;
