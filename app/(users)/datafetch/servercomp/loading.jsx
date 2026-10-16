const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

        <p className="mt-4 text-lg font-semibold text-gray-700">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;