import React from "react";

const Card = ({
  name,
  job,
  image,
  text,
  handleNext,
  handlePrev,
  handleRandomUser,
}) => {
  return (
    <div className="p-4 mx-auto bg-gray-100 my-6 shadow w-full md:w-6/12 font-Poppins">
      <div className="flex  items-center gap-3">
        <div className="w-3/4">
          <img
            className="w-32 h-32 object-cover  rounded-full "
            src={image}
            alt="pic"
          />
        </div>{" "}
        <div className="max-w-sm w-5/6">
          <p className="text-lg capitalize">{name}</p>
          <p className="text-sm mb-2 capitalize">{job}</p>
          <p className="text-sm">{text}</p>
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
