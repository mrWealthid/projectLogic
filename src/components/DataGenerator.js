//Men reducers are so clean! they really reducers

import React, { useState } from "react";
import { Word } from "../data/data";

const DataGenerator = () => {
  const [count, SetCount] = useState(0);
  const [text, SetText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let filteredWord;
    count > Word.length && SetText(Word);

    if (count < 1) {
      filteredWord = Word.slice(0, 1);
      SetText(filteredWord);
    } else {
      filteredWord = Word.slice(0, count);
      SetText(filteredWord);
    }
  };
  return (
    <div className=" text-center p-5">
      <h3>Tired Of Lorem Ipsum?</h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="amount">Paragraph :</label>{" "}
        <input
          className="ring-1 mt-2 ml-2 mb-4 md:mb-0  rounded-lg p-2"
          id="amount"
          type="number"
          value={count}
          placeholder={"Specify Count..."}
          onChange={(e) => SetCount(e.target.value)}
        />
        <button
          className="bg-gray-700 rounded-lg ml-4 p-3 text-white"
          type="submit"
        >
          Generate
        </button>
      </form>

      <article>
        {text.map((txt, index) => (
          <p key={index}>{txt}</p>
        ))}
      </article>
    </div>
  );
};

export default DataGenerator;
