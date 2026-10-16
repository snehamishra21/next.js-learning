import { Suspense } from "react";
import ProductFilters from "./product-filters";

export const Products = ({ searchParams }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Products</h1>

      <Suspense fallback={<p>Loading filters...</p>}>
        <ProductFilters searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Products;
