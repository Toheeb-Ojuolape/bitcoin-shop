import React from "react";
import QRCode from "react-qr-code";
import "./invoice.css";
import InvoiceInput from "../Elements/Forms/InvoiceInput";
import { requestProvider } from "webln";

function invoice({ invoice }) {
  const payInvoice = async () => {
    await requestProvider()
    window.webln.sendPayment(invoice)
  }
  return (
    <div>
      <div className="invoice">
        <div>
          <QRCode
            size={100}
            style={{ height: "auto", maxWidth: "150px", width: "150px" }}
            value={invoice}
            viewBox={`0 0 256 256`}
            onClick={payInvoice}
          />
        </div>
      </div>
      <p className="invoice-text">Click the invoice to pay</p>
      <div>
        <InvoiceInput invoice={invoice}/>
      </div>
    </div>
  );
}

export default invoice;
