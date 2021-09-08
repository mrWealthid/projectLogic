//Men reducers are so clean! they really reducers
import React from "react";
import { questions } from "../data/data";
import QuestionCard from "./QuestionCard";

const FAQ = () => {
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
        {questions.map((question) => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
