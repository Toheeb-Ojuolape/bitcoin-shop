import React from "react";
import Product from "./Product";

function Products({ products, addProduct }) {
  return (
    <div>
      <div className="product-category">
        <h2>All Products</h2>
        <div className="products">
          {products &&
            products.map((product, i) => (
              <Product product={product} key={i} addProduct={addProduct} />
            ))}
        </div>
      </div>

      {/* Devices products */}
      <div className="product-category">
        <h2>Phones</h2>
        <div className="products">
          {products &&
            products
              .filter((product) => product.category === "device")
              .map((product, i) => (
                <Product product={product} key={i} addProduct={addProduct} />
              ))}
        </div>
      </div>

      <div className="product-category">
        <h2>Accessories</h2>
        <div className="products">
          {products &&
            products
              .filter((product) => product.category === "accessories")
              .map((product, i) => (
                <Product product={product} key={i} addProduct={addProduct} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
