"use client";

import {use} from "react";

const SingleProfilePost = (props) => {
  const user = use(props.user);
  console.log(user);

  return (
    <h1>
      user: {user.username}, postId: {props.postId} 
    </h1>
  );
}:
export default SingleProfilePost;