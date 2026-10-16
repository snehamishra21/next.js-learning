"use client";

import { use } from "react";

const SingleProfilePost = ({ user: userPromise }) => {
  const user = use(userPromise);

  if (!user) {
    return <p className="text-gray-600">User not found</p>;
  }

  return <h1>user: {user.username}</h1>;
};

export default SingleProfilePost;
