import { Suspense } from "react";
import UserPosts from "./user-posts";

const fetchUser = async (username) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();
    return users.find((user) => user.username === username);
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

const UserDetail = async ({ params }) => {
  const { username } = await params;

  const user = await fetchUser(username);

  if (!user) {
    return (
      <p className="text-gray-600">
        User &quot;{username}&quot; not found
      </p>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">
        {user.username} &middot; {user.email}
      </p>

      <h3 className="text-xl font-semibold mt-6">Posts by {user.name}</h3>

      <Suspense fallback={<p>Loading posts...</p>}>
        <UserPosts userId={user.id} />
      </Suspense>
    </div>
  );
};

export default UserDetail;
