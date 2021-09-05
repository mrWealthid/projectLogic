//Men reducers are so clean! they really reducers

import { useState } from "react";
import people from "./data/data";
import Card from "./components/Card";

const App = () => {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(people);

  function checkNumber(num) {
    if (num > person.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    } else {
      return num;
    }
  }
  const handleNext = () => {
    let newNum = index + 1;
    setIndex(checkNumber(newNum));
  };

  const handlePrev = () => {
    let newNum = index - 1;
    setIndex(checkNumber(newNum));
  };

  const handleRandomUser = () => {
    let randomNum = Math.trunc(Math.random() * people.length);
    if (randomNum === index) {
      randomNum = index + 1;
    }

    setIndex(randomNum);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        {...person[index]}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleRandomUser={handleRandomUser}
      />
    </div>
  );
};

export default App;
