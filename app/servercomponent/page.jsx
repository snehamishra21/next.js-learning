import { Suspense } from "react";

const URL = "https://jsonplaceholder.typicode.com/posts";

const Posts = async () => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  return (
    <div>
      {data.map((post) => (
        <div key={post.id} className="border p-4 my-3">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

const ServerComponent = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Server Component</h1>

      <Suspense fallback={<p>Loading posts...</p>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default ServerComponent;