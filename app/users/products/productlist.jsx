"use client";

import { useSearchParams } from "next/navigation";

const ProductList = () => {
  const searchParams = useSearchParams();

  console.log("inside:", searchParams);

  const page = searchParams.get("page");
  const category = searchParams.get("category");

  return (
    <div>
      <h1>Client - {category}</h1>
      <p>Page - {page}</p>
    </div>
  );
};

export default ProductList;