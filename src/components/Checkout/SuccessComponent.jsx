import React from "react";
import success from "../../assets/icons/success.gif";

function SuccessComponent() {
  return (
    <div className="success-icon">
      <div>
        <img width="200px" src={success} alt="" />
        <h3>Payment made successfully</h3>
        <p>
          Your payment has been confirmed successfully and your products are on
          the way
        </p>
      </div>
    </div>
  );
}

export default SuccessComponent;
