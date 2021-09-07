import React, { useState } from "react";
const QuestionCard = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow p-6 mb-2">
      <div className="flex justify-between">
        <p className="w-3/4">{title}</p>
        <p
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white w-10 h-10 text-center rounded-full p-2 shadow-lg"
        >
          {isOpen ? "-" : "+"}
        </p>
      </div>
      {isOpen ? (
        <p className="mt-2 font-light pt-2 max-w-sm border-t cursor-pointer">
          {info}
        </p>
      ) : null}
    </div>
  );
};

export default QuestionCard;
