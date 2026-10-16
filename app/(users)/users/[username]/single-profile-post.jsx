"use client";

import { use } from "react";
import Image from "next/image";

const SingleProfilePost = ({ user: userPromise }) => {
  const user = use(userPromise);

  if (!user) {
    return (
      <p className="rounded-xl border border-border bg-surface p-4 text-muted">
        User not found. Try a username like <code className="font-semibold text-primary">emilys</code>.
      </p>
    );
  }

  return (
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
          @{user.username} &middot; {user.email}
        </p>

        <p className="mt-1 text-sm text-muted">
          {user.company?.title} at {user.company?.name}
        </p>
      </div>
    </div>
  );
};

export default SingleProfilePost;
