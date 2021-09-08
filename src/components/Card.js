import React from "react";

const Card = ({
  name,
  job,
  index,
  desc,
  handleNext,
  handlePrev,
  handleRandomUser,
}) => {
  return (
    <div className="p-4 mx-auto bg-gray-100 my-6 shadow w-6/12 font-Poppins">
      <div className="flex gap-3">
        <div className="w-3/4">
          <img
            className="w-5/6 rounded-full "
            src={`../Assets/pic${index}.png`}
            alt="pic"
          />
        </div>{" "}
        <div className="max-w-sm">
          <p>{name}</p>
          <p>{job}</p>
          <p>{desc}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className="py-2 w-2/6  border bg-blue-400 text-white rounded"
        >
          Previous
        </button>
        <button
          className="py-2 w-2/6  border bg-gray-600 text-white rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <br />
      <button
        className="w-full text-center ring-2 p-2"
        onClick={handleRandomUser}
      >
        Random
      </button>
    </div>
  );
};

export default Card;
