import Image from "next/image";
import Link from "next/link";

const fetchRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch random user");
  }

  const data = await response.json();
  return data.results[0];
};

const DataFetchServer = async () => {
  let user = null;
  let error = "";

  try {
    user = await fetchRandomUser();
  } catch (err) {
    error = err.message || "Something went wrong";
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="gradient-text text-3xl font-bold sm:text-4xl">
            Random User — Server
          </h1>

          <p className="mt-2 text-muted">
            Profile rendered on the server from randomuser.me.
          </p>
        </div>

        <Link
          href="/datafetch/servercomp"
          className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold"
        >
          Fetch Another
        </Link>
      </div>

      {error && (
        <p className="mt-8 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          {error}
        </p>
      )}

      {!error && user && (
        <div className="mt-10 flex justify-center">
          <div className="hover-card w-full max-w-md rounded-2xl border border-border bg-surface p-8 text-center">
            <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full ring-4 ring-primary/40">
              <Image
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold capitalize">
              {user.name.first} {user.name.last}
            </h2>

            <p className="mt-1 text-muted">@{user.login.username}</p>

            <span
              className={`mt-4 inline-block rounded-full px-4 py-1 text-sm font-semibold capitalize ${
                user.gender === "male"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                  : "bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300"
              }`}
            >
              {user.gender}
            </span>

            <dl className="mt-6 space-y-3 text-left">
              {[
                ["Email", user.email],
                ["Phone", user.phone],
                [
                  "Location",
                  `${user.location.city}, ${user.location.country}`,
                ],
                ["Age", `${user.dob.age} years old`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-0.5 border-b border-border pb-3 last:border-b-0 sm:flex-row sm:gap-4"
                >
                  <dt className="text-sm font-medium text-muted sm:w-24">
                    {label}
                  </dt>

                  <dd className="break-all text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataFetchServer;
