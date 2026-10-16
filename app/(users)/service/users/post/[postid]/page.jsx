import { Suspense } from "react";
import PostDetail from "./post-detail";

const PostPage = ({ params }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Post</h1>

      <Suspense fallback={<p>Loading post...</p>}>
        <PostDetail params={params} />
      </Suspense>
    </div>
  );
};

export default PostPage;
