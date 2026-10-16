"use client";

import { useEffect, useState } from "react";
import Counter from "./counter";

const url = "https://dummyjson.com/posts?limit=12";

const fetchData = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.posts;
};

const ClientComponent = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchData();
      setPostData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const data = await fetchData();
        if (active) setPostData(data);
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="gradient-text text-3xl font-bold sm:text-4xl">
            Client Component
          </h1>

          <p className="mt-2 text-muted">
            Fetched in the browser from DummyJSON.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Counter />
          <button
            type="button"
            onClick={load}
            className="btn-primary rounded-full px-5 py-2 text-sm font-semibold"
          >
            Refresh Data
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center py-16">
          <div className="loader" />
          <p className="loading-text text-muted">Loading posts...</p>
        </div>
      )}

      {error && (
        <p className="mt-8 rounded-xl border border-red-300 bg-red-50 p-4 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {postData.map((post) => (
            <article
              key={post.id}
              className="hover-card rounded-2xl border border-border bg-surface p-5"
            >
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Post #{post.id}
              </span>

              <h2 className="mt-3 text-lg font-bold capitalize leading-snug">
                {post.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientComponent;
