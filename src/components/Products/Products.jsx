import React from "react";
import ProductCategory from "./ProductCategory";

function Products({ products, addProduct }) {
  return (
    <div>
      <ProductCategory
        products={products}
        title={"All Products"}
        addProduct={addProduct}
      />

      {/* Devices products */}
      <ProductCategory
        products={products.filter((product)=>product.category==='device')}
        title={"Devices"}
        addProduct={addProduct}
      />

      <ProductCategory
        products={products.filter((product)=>product.category==='accessories')}
        title={"Accessories"}
        addProduct={addProduct}
      />

    </div>
  );
}

export default Products;
