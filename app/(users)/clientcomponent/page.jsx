"use client";

import { useEffect, useState } from "react";
import Counter from "./counter";
const url = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const ClientComponent = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setPostData(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Client Component</h1>

      <p>This is a client-side component rendered in the browser.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.reload()}>
        Refresh Data
      </button>
      <Counter/>
      {postData.map((post) => (
        <div key={post.id} className="border p-4 my-3">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientComponent;