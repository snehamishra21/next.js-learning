"use client";

import { useState } from "react";

const Counter = () => {
  const [inc, setInc] = useState(0);

  return (
    <button
      type="button"
      className="btn-outline rounded-full px-5 py-2 text-sm font-semibold"
      onClick={() => setInc(inc + 1)}
    >
      Increment: {inc}
    </button>
  );
};

export default Counter;
