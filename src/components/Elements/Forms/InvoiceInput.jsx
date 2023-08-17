import React from "react";
import "./Forms.css";
import copyicon from "../../../assets/icons/copyicon.svg";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function InvoiceInput({ invoice }) {
  const copyInvoice = () => {
    navigator.clipboard.writeText(invoice);
    toast.success("Invoice copied to clipboard");
  };
  return (
    <div onClick={copyInvoice} className="invoiceContainer">
      <Toaster />
      <span>{invoice && invoice.slice(0, 20)+"..."}</span>
      <img
        className="copyIcon"
        onClick={copyInvoice}
        src={copyicon}
        alt="copyicon"
        width={"15px"}
      />
    </div>
  );
}

export default InvoiceInput;
