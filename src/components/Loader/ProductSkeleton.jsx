import React from "react";
import SkeletonLoader from "./Skeleton";

function ProductSkeleton() {
  return (
    <div className="product skeleton-product">
      <SkeletonLoader width={"100%"} height={"230px"} border={"10px"} />
      <div>
        <div className="skeleton-title">
          <SkeletonLoader width={"90%"} height={"16px"} />
        </div>
        <div class="paragraph"><SkeletonLoader width={"90px"} height={"10px"} /></div>
      </div>
      <SkeletonLoader height={"40px"} width={"100%"} border={"10px"}/>
    </div>
  );
}

export default ProductSkeleton;
