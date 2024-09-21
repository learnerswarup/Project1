import React from "react";
import { Link } from "react-router-dom";

function Submitted() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Thank you for contacting us!
        </h2>
        <p className="text-gray-600 mb-6">
          Our team will get back to you soon. In the meantime, feel free to
          explore our website.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Submitted;
