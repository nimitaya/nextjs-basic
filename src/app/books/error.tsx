"use client";
import { useEffect } from "react";

const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error("Error occurred:", `${error}`);
  }, [error]);
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Something went wrong!
        </h1>

        <p className="mt-4 text-gray-600">Please try again later.</p>
      </div>
    </div>
  );
};
export default ErrorPage;