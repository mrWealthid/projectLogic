const QuestionCard = ({ title, info, id, isOpen, index, handleClick }) => {
  return (
    <div className="bg-white shadow p-6 mb-2">
      <div className="flex justify-between">
        <p className="w-3/4">{title}</p>
        <p
          onClick={() => handleClick(index)}
          className="bg-white w-10 h-10 text-center rounded-full p-2 shadow-lg"
        >
          {isOpen ? "-" : "+"}
        </p>
      </div>
      <p
        className={`${
          isOpen ? "block" : "hidden"
        } mt-2 transition duration-1000 font-light pt-2 max-w-sm border-t cursor-pointer`}
      >
        {info}
      </p>
    </div>
  );
};

export default QuestionCard;
