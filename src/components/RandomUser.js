//Men reducers are so clean! they really reducers

import React, { useState, useEffect } from "react";
import { people } from "../data/data";
import Card from "./Card";

const RandomUser = () => {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    setPerson(people);
  }, []);

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

    setIndex(checkNumber(randomNum));
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        {...person[index]}
        index={index}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleRandomUser={handleRandomUser}
      />
    </div>
  );
};

export default RandomUser;
