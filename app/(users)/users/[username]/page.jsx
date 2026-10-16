import { Suspense } from "react";
import SingleProfilePost from "./single-profile-post";

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

const ProfileLoader = async ({ params }) => {
  const { username } = await params;

  const user = fetchUser(username);

  return <SingleProfilePost user={user} />;
};

const UserPage = ({ params }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">User</h1>

      <Suspense fallback={<p>Loading user...</p>}>
        <ProfileLoader params={params} />
      </Suspense>
    </div>
  );
};

export default UserPage;
