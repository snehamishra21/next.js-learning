const URL = "https://jsonplaceholder.typicode.com/posts";

const ServerComponent = async () => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold">Server Component</h1>

      <p>This data is fetched on the server.</p>

      {data.map((post) => (
        <div key={post.id} className="border p-4 my-3">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ServerComponent;