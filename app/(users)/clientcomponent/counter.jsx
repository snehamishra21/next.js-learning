"use client";

import { useState } from "react";

const Counter = () => {
  const [inc, setInc] = useState(0);

  return (
    <button
      className="bg-green-500 text-white px-4 py-2 rounded"
      onClick={() => setInc(inc + 1)}
    >
      Increment: {inc}
    </button>
  );
};

export default Counter;