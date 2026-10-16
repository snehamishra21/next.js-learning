import { Suspense } from "react";

const BlogContent = async ({ params }) => {
  const { slug } = await params;

  return (
    <div className="hover-card mt-6 rounded-2xl border border-border bg-surface p-6">
      <p className="text-sm text-muted">Slug</p>

      <p className="mt-1 break-all font-mono text-lg font-semibold">
        {slug?.join(" / ")}
      </p>
    </div>
  );
};

const Blog = (props) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="gradient-text text-3xl font-bold sm:text-4xl">Blog</h1>

      <Suspense
        fallback={
          <div className="flex flex-col items-center py-12">
            <div className="loader" />
            <p className="loading-text text-muted">Loading post...</p>
          </div>
        }
      >
        <BlogContent params={props.params} />
      </Suspense>
    </div>
  );
};

export default Blog;
