const ProductFilters = async ({ searchParams }) => {
  const { category, sort, page } = await searchParams;

  return (
    <ul>
      <li>category: {category ?? "all"}</li>
      <li>sort: {sort ?? "default"}</li>
      <li>page: {page ?? 1}</li>
    </ul>
  );
};

export default ProductFilters;
