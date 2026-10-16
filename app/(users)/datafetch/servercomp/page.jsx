const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;

  const userName = searchParams.name?.trim();

  // Case 1: name missing
  // Case 2: name empty
  // Case 3: only spaces
  if (!userName) {
    return (
      <div className="text-left" style={{ color: "green" }}>
        <h1>No Name Provided</h1>

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

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  console.log(data);

  return (
    <div>
      <h1>Data Fetching - {data.name}</h1>
      <p>Gender: {data.gender || "Not found"}</p>
      <p>Probability: {data.probability ?? "Not available"}</p>
    </div>
  );
};

export default DataFetchServer;