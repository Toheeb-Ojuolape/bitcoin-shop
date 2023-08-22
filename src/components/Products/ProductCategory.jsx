import React from "react";
import Product from "./Product";

function ProductCategory({ title, addProduct, products }) {
  return (
    <div className="product-category">
      <h2>{title}</h2>
      <div className="products">
        {products &&
          products.map((product, i) => (
            <Product product={product} key={i} addProduct={addProduct} />
          ))}
      </div>
    </div>
  );
}

export default ProductCategory;
