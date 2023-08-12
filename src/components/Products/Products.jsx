import React from "react";
import Product from "./Product";

function Products({ products,addProduct }) {
  return (
    <div className="products">
      {products &&
        products.map((product, i) => <Product product={product} key={i} addProduct={addProduct} />)}
    </div>
  );
}

export default Products;
