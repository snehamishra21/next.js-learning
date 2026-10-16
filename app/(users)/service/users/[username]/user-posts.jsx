const fetchPosts = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

const UserPosts = async ({ userId }) => {
  const posts = await fetchPosts(userId);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 my-3">
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
