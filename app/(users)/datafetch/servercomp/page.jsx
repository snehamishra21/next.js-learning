import { Suspense } from "react";

const DataFetchServer = (props) => {
  return (
    <Suspense fallback={<p className="text-left p-5">Loading...</p>}>
      <GenderResult searchParams={props.searchParams} />
    </Suspense>
  );
};

async function GenderResult({ searchParams }) {
  const params = await searchParams;

  const userName = params.name?.trim();

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

  const response = await fetch(
    `https://api.genderize.io?name=${encodeURIComponent(
      userName
    )}&country_id=US`
  );

  const data = await response.json();

  if (!response.ok || data.error) {
    return (
      <div className="text-left p-5" style={{ color: "crimson" }}>
        <h1 className="text-2xl font-bold">Unable to fetch data</h1>

        <p>{data.error || "Failed to fetch data"}</p>
      </div>
    );
  }

  const isMale = data.gender === "male";
  const isFemale = data.gender === "female";

  const confidencePercentage =
    data.probability !== null ? (data.probability * 100).toFixed(2) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Gender Prediction
          </h1>

          <p className="text-gray-500 mt-2">Result for {data.name}</p>
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
            {data.name}
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
            {data.gender || "Not Found"}
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
            {data.count ?? "Not Available"}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Country</p>

          <h2 className="text-xl font-bold text-gray-800">
            {data.country_id || "Not Available"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DataFetchServer;
