import { Suspense } from "react";

const URL = "https://dummyjson.com/posts?limit=12";

const Posts = async () => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {data.posts.map((post) => (
        <article
          key={post.id}
          className="hover-card rounded-2xl border border-border bg-surface p-5"
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Post #{post.id}
          </span>

          <h2 className="mt-3 text-lg font-bold capitalize leading-snug">
            {post.title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-muted">{post.body}</p>

          <div className="mt-4 flex gap-4 border-t border-border pt-3 text-xs font-medium text-muted">
            <span>{post.reactions.likes} likes</span>
            <span>{post.reactions.dislikes} dislikes</span>
            <span>{post.views} views</span>
          </div>
        </article>
      ))}
    </div>
  );
};

const ServerComponent = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="gradient-text text-3xl font-bold sm:text-4xl">
        Server Component
      </h1>

      <p className="mt-2 text-muted">
        Posts fetched on the server from DummyJSON.
      </p>

      <div className="mt-8">
        <Suspense
          fallback={
            <div className="flex flex-col items-center py-16">
              <div className="loader" />
              <p className="loading-text text-muted">Loading posts...</p>
            </div>
          }
        >
          <Posts />
        </Suspense>
      </div>
    </div>
  );
};

export default ServerComponent;
