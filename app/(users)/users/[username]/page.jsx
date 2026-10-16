import { Suspense } from "react";
import SingleProfilePost from "./single-profile-post";

const fetchUser = async (username) => {
  const response = await fetch("https://dummyjson.com/users?limit=0");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return data.users.find(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
};

const ProfileLoader = async ({ params }) => {
  const { username } = await params;

  const user = fetchUser(username);

  return <SingleProfilePost user={user} />;
};

const UserPage = ({ params }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="gradient-text text-3xl font-bold sm:text-4xl">User</h1>

      <div className="mt-8">
        <Suspense
          fallback={
            <div className="flex flex-col items-center py-16">
              <div className="loader" />
              <p className="loading-text text-muted">Loading user...</p>
            </div>
          }
        >
          <ProfileLoader params={params} />
        </Suspense>
      </div>
    </div>
  );
};

export default UserPage;
