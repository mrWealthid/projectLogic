//Men reducers are so clean! they really reducers

import React, { useState } from "react";

import Values from "values.js";
import SingleColor from "./components/SingleColor";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  //using try catch without a async aawait
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setError(false);
      setList(colors);
      setColor("");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className=" text-center w-10/12 my-5 rounded-2xl mx-auto ring p-5">
      <h3>My Color Generator</h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="color">Search Color :</label>
        <input
          className={`${
            error ? "ring-red-500 ring-2" : "ring-1"
          } mt-2 ml-2 mb-4 md:mb-0 rounded-lg p-2`}
          id="color"
          type="text"
          placeholder="Enter Hex Value Here..."
          value={color}
          required
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button
          className="bg-gray-700 ml-4 py-2 px-3 rounded-lg text-white"
          type="submit"
        >
          Search
        </button>
      </form>

      <article className="flex flex-wrap justify-center">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </article>
    </div>
  );
};

export default ColorGenerator;
