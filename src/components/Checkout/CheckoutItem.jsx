import React from "react";
import { standardAmountFormat } from "../../utils/amountFormatter";
import closeicon from "../../assets/icons/closeicon.svg";

function CheckoutItem({ product, index,removeItem }) {
  return (
    <div className="checkout-item">
      <div className="flex">
        <img
          className="checkout-image"
          src={product.thumbnail}
          alt="checkout-image"
        />
        <div className="checkout-item-title">{product.title}</div>
      </div>
      <div className="flex justify-between">
        <div className="checkout-product-price">
          {standardAmountFormat(product.price)}
        </div>
        <img
          onClick={() => removeItem(index)}
          width={"21px"}
          src={closeicon}
          alt="closeicon"
        />
      </div>
    </div>
  );
}

export default CheckoutItem;
