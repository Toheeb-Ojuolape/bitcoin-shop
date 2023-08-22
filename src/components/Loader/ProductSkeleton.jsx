import React from "react";
import SkeletonLoader from "./Skeleton";

function ProductSkeleton() {
  return (
    <div className="product">
      <SkeletonLoader width={"260px"} height={"230px"} border={"10px"} />
      <div>
        <div className="skeleton-title">
          <SkeletonLoader width={"90%"} height={"16px"} />
        </div>
        <p><SkeletonLoader width={"90px"} height={"10px"} /></p>
      </div>
      <SkeletonLoader height={"50px"} width={"100%"} border={"10px"}/>
    </div>
  );
}

export default ProductSkeleton;
