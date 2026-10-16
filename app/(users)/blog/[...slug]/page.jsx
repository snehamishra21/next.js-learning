const Blog = async (props) => {
  const { slug } = await props.params;
  console.log("sluf");

  return (
    <div>
      <h1 className="text-3xl font-bold">Blog</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default Blog;