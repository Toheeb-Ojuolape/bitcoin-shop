import React from "react";
import ProductCategory from "./ProductCategory";

function Products({ products, addProduct,loading }) {
  return (
    <div>
      <ProductCategory
        products={products}
        title={"All Products"}
        addProduct={addProduct}
        loading={loading}
      />

      {/* Devices products */}
      <ProductCategory
        products={products.filter((product)=>product.category==='device')}
        title={"Devices"}
        addProduct={addProduct}
        loading={loading}
      />

      <ProductCategory
        products={products.filter((product)=>product.category==='accessories')}
        title={"Accessories"}
        addProduct={addProduct}
        loading={loading}
      />

    </div>
  );
}

export default Products;
