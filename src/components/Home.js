import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p className="text-gray-700 text-xl md:text-5xl text-center  animate-float mb-5">
        Welcome To My React Project Gallery
      </p>
      <p className="md:text-xl text-base text-gray-500">
        Featuring: Basic React Project Logics
      </p>
      <p className="text-sm md:text-xl text-gray-500">Explore...</p>
    </div>
  );
};

export default Home;
