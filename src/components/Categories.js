import React from "react";

const Categories = ({ category, handleMeals, index }) => {
  return (
    <>
      <button
        onClick={() => handleMeals(category)}
        className="border border-gray-300 hover:bg-gray-700 hover:text-white rounded-3xl py-3 px-10 mr-2 mb-3"
      >
        {category}
      </button>
    </>
  );
};

export default Categories;
