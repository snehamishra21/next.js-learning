import { Suspense } from "react";
import Image from "next/image";
import UserPosts from "./user-posts";

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

const UserDetail = async ({ params }) => {
  const { username } = await params;

  const user = await fetchUser(username);

  if (!user) {
    return (
      <p className="rounded-xl border border-border bg-surface p-4 text-muted">
        User &quot;{username}&quot; not found. Try a username like{" "}
        <code className="font-semibold text-primary">emilys</code>.
      </p>
    );
  }

  return (
    <div>
      <div className="hover-card flex flex-col items-center gap-5 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-start">
        <Image
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          width={96}
          height={96}
          className="rounded-full ring-4 ring-primary/30"
        />

        <div>
          <h2 className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h2>

          <p className="mt-1 text-muted">
            {user.username} &middot; {user.email}
          </p>

          <p className="mt-1 text-sm text-muted">
            {user.address?.city}, {user.address?.country} &middot;{" "}
            {user.phone}
          </p>
        </div>
      </div>

      <h3 className="mt-10 text-xl font-semibold">
        Posts by {user.firstName}
      </h3>

      <div className="mt-4">
        <Suspense
          fallback={
            <div className="flex flex-col items-center py-12">
              <div className="loader" />
              <p className="loading-text text-muted">Loading posts...</p>
            </div>
          }
        >
          <UserPosts userId={user.id} />
        </Suspense>
      </div>
    </div>
  );
};

export default UserDetail;
