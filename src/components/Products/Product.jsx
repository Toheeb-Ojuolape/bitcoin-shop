import React from "react";
import { PrimaryButton } from "../Elements/Buttons/Buttons";
import "./Products.css";
import { standardAmountFormat } from "../../utils/amountFormatter";

function Product({ product, addProduct }) {
  return (
    <div className="product">
      <img width={"250px"} src={product.thumbnail} />
      <div>
        <div className="product-title">{product.title}</div>
        <p>{standardAmountFormat(product.price)}</p>
      </div>
      <PrimaryButton onClick={() => addProduct(product)}>
        Add to cart
      </PrimaryButton>
    </div>
  );
}

export default Product;
