"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const DataFetchClient = () => {
  const searchParams = useSearchParams();

  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userName = searchParams.get("name")?.trim();

  useEffect(() => {
    if (!userName) {
      setUserInfo(null);
      setError("");
      return;
    }

    const fetchGender = async () => {
      try {
        setLoading(true);
        setError("");
        setUserInfo(null);

        const response = await fetch(
          `https://api.genderize.io?name=${encodeURIComponent(
            userName
          )}&country_id=US`
        );

        const data = await response.json();

        if (!response.ok || data.error) {
          throw new Error(data.error || "Failed to fetch data");
        }

        setUserInfo(data);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGender();
  }, [userName]);

  // Case 1: name missing
  // Case 2: name empty
  // Case 3: only spaces
  if (!userName) {
    return (
      <div className="text-left p-5" style={{ color: "green" }}>
        <h1 className="text-2xl font-bold">No Name Provided</h1>

        <p style={{ color: "darkolivegreen" }}>
          Please provide a valid name in the URL.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-left p-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-left p-5" style={{ color: "crimson" }}>
        <h1 className="text-2xl font-bold">Unable to fetch data</h1>

        <p>{error}</p>
      </div>
    );
  }

  if (!userInfo) {
    return null;
  }

  const isMale = userInfo.gender === "male";
  const isFemale = userInfo.gender === "female";

  const confidencePercentage =
    userInfo.probability !== null
      ? (userInfo.probability * 100).toFixed(2)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Gender Prediction
          </h1>

          <p className="text-gray-500 mt-2">
            Result for {userInfo.name}
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl ${
              isMale
                ? "bg-blue-100 text-blue-600"
                : isFemale
                ? "bg-pink-100 text-pink-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {isMale ? "👨" : isFemale ? "👩" : "❓"}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Name</p>

          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {userInfo.name}
          </h2>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Gender</p>

          <h2
            className={`text-xl font-bold capitalize ${
              isMale
                ? "text-blue-600"
                : isFemale
                ? "text-pink-600"
                : "text-gray-600"
            }`}
          >
            {userInfo.gender || "Not Found"}
          </h2>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Probability</p>

          <h2 className="text-xl font-bold text-gray-800">
            {confidencePercentage}%
          </h2>
        </div>

        <div className="mb-4">
          <p className="text-gray-500">Count</p>

          <h2 className="text-xl font-bold text-gray-800">
            {userInfo.count ?? "Not Available"}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Country</p>

          <h2 className="text-xl font-bold text-gray-800">
            {userInfo.country_id || "Not Available"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DataFetchClient;