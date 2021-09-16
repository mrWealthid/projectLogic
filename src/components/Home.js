import React from "react";
// import Button from "./Button";
// import { useCartContext } from "../context/DataContext";

const Home = () => {
  // const { count } = useCartContext();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p className="text-gray-700 text-xl md:text-5xl text-center  animate-float mb-5">
        Welcome To My React Project Gallery
      </p>
      <p className="md:text-xl text-base text-gray-500">
        Featuring: Basic React Project Logics
      </p>
      <p className="text-sm md:text-xl text-gray-500">Explore...</p>

      {/* <div className="flex gap-10">
        <Button />
        <p>{count}</p>
        <Button />
      </div> */}
    </div>
  );
};

export default Home;
