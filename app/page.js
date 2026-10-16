const Home = () => {
  return (
    <>
      <h1 className="text-5xl text-red-700 underline">
        Hello Home
      </h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        // onClick={() => alert("Button clicked!")}
      >
        Click Me
      </button>
    </>
  );
};

export default Home;