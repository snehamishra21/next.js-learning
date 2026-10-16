const fetchPost = async (postId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};

const PostDetail = async ({ params }) => {
  const { postid } = await params;

  const post = await fetchPost(postid);

  return (
    <div>
      <h2 className="text-2xl font-semibold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
