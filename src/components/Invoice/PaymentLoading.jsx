import React from "react";


function PaymentLoading(invoice) {

  return (
    <div className="pending-payment">
      <div>
        <div className="spinner"></div>
        <div>Waiting for payment...</div>
      </div>
    </div>
  );
}

export default PaymentLoading;
