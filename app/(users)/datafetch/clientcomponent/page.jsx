"use client";

import { useEffect, useState } from "react";
import Counter from "../../clientcomponent/counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComponent = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setPostData(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      await fetchData();
    };

    load();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Client Component</h1>

      <p>This data is fetched inside the browser.</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded my-4"
        onClick={() => {
          setLoading(true);
          setError("");
          fetchData();
        }}
      >
        Refresh Data
      </button>

      <Counter />

      {loading && <p>Loading...</p>}

      {error && (
        <p className="text-red-500">
          Error: {error}
        </p>
      )}

      {!loading &&
        !error &&
        postData.map((post) => (
          <div key={post.id} className="border p-4 my-3">
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default ClientComponent;