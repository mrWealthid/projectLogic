import React from "react";

const Card = ({
  name,
  job,
  desc,
  handleNext,
  handlePrev,
  handleRandomUser,
}) => {
  return (
    <div className="p-4 mx-auto bg-gray-100 my-6 shadow w-6/12 font-Poppins">
      <p>{name}</p>
      <p>{job}</p>
      <p>{desc}</p>

      <button onClick={handlePrev} className="p-4 mr-4 border border-gray-600">
        Previous
      </button>
      <button onClick={handleNext}>Next</button>
      <br />
      <button onClick={handleRandomUser}>Random</button>
    </div>
  );
};

export default Card;
