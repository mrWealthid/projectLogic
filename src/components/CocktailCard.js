import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ id, category, image, desc }) => {
  return (
    <div className="w-2/6 shadow-lg rounded-lg transform  scale-90 overflow-hidden my-2 bg-white">
      <img src={image} alt="pic" />
      <div className="p-2">
        <p>{id}</p>
        <p>Category: {category}</p>
        <p>Description: {desc}</p>
        <Link to={`/cocktails/${id}`}>
          <button className="bg-gray-700 py-2 w-3/5 px-3 my-2 rounded-lg text-white">
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;
