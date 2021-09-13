//Men reducers are so clean! they really reducers
import React, { useState } from "react";
import { questions } from "../data/data";
import QuestionCard from "./QuestionCard";

const FAQ = () => {
  const [myquestion, setMyQuestion] = useState(questions);

  const handleClick = (id) => {
    console.log(id);
    const lastActiveIndex = myquestion.findIndex(
      (card) => card.isOpen === true
    );

    if (lastActiveIndex !== -1) {
      myquestion[lastActiveIndex].isOpen = false;
    }

    if (id === lastActiveIndex) {
      myquestion[lastActiveIndex].isOpen = !myquestion[lastActiveIndex].isOpen;
    }

    return setMyQuestion(
      myquestion.map((question, index) =>
        index === id ? { ...question, isOpen: !question.isOpen } : question
      )
    );
  };
  return (
    <div className="flex md:flex-row flex-col  md:justify-between bg-gray-200 p-6 w-full md:w-10/12 mx-auto my-10 items-center min-h-screen rounded-2xl">
      <div className="text-center mb-3 max-w-sm">
        <p className="md:text-5xl text-2xl  font-bold text-gray-700 mb-3">
          {" "}
          FAQS{" "}
        </p>
        <p> Software Engineering - Frontend & Backend </p>
      </div>
      <div>
        {myquestion.map((question, index) => (
          <QuestionCard
            key={question.id}
            {...question}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
