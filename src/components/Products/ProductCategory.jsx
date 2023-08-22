import React from "react";
import Product from "./Product";
import ProductSkeleton from "../Loader/ProductSkeleton";

function ProductCategory({ title, addProduct, products,loading }) {
  return (
    <div className="product-category">
      <h2>{title}</h2>
      <div className="products">
        {loading && (
          <>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </>
        )}

        {products &&
          products.map((product, i) => (
            <Product product={product} key={i} addProduct={addProduct} />
          ))}
      </div>
    </div>
  );
}

export default ProductCategory;
