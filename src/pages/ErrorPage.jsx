import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-3">404 Not Found</h1>
        <p className="mb-5 text-gray-400">The page you are looking for is not found</p>
        <Link className=" border border-black px-4 py-2" to="/">
            Return to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
