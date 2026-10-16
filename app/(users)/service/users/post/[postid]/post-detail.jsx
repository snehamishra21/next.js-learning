const fetchPost = async (postId) => {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return await response.json();
};

const PostDetail = async ({ params }) => {
  const { postid } = await params;

  const post = await fetchPost(postid);

  return (
    <article className="hover-card rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
        Post #{post.id}
      </span>

      <h2 className="mt-4 text-2xl font-bold capitalize leading-snug sm:text-3xl">
        {post.title}
      </h2>

      <p className="mt-4 leading-relaxed text-muted">{post.body}</p>

      <div className="mt-6 flex gap-4 border-t border-border pt-4 text-sm text-muted">
        <span>{post.reactions.likes} likes</span>
        <span>{post.reactions.dislikes} dislikes</span>
        <span>{post.views} views</span>
      </div>
    </article>
  );
};

export default PostDetail;
