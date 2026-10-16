const fetchPosts = async (userId) => {
  const response = await fetch(
    `https://dummyjson.com/posts/user/${userId}?limit=10`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await response.json();
  return data.posts;
};

const UserPosts = async ({ userId }) => {
  const posts = await fetchPosts(userId);

  if (!posts.length) {
    return <p className="text-muted">No posts found for this user.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.id}
          className="hover-card rounded-2xl border border-border bg-surface p-5"
        >
          <h3 className="text-lg font-bold capitalize leading-snug">
            {post.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted">{post.body}</p>
        </article>
      ))}
    </div>
  );
};

export default UserPosts;
