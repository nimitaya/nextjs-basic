"use client";

import { useState } from "react";

const AboutPage = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold">About page</h1>
      <p>Here is some information on our side and below is a neat counter.</p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-rose-500 text-white rounded hover:cursor-pointer hover:bg-rose-700"
      >
        Click Me!
      </button>
      <p className="mt-4 font-bold">Current count: <span className="text-xl text-rose-500">{count}</span></p>
    </div>
  );
};
export default AboutPage;
