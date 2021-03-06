//Men reducers are so clean! they really reducers

import React, { useState, useEffect } from "react";

import { Profile } from "../data/data";
import { FiChevronRight } from "react-icons/fi";

const SideTabs = () => {
  const [myProfile, setMyProfile] = useState(Profile);

  const [value, SetValue] = useState(0);

  useEffect(() => {
    setMyProfile(Profile);
  }, []);

  const { title, info } = myProfile[value];
  return (
    <div className="flex flex-col flex-wrap w-10/12 mx-auto p-5 space-y-4 ">
      <h1 className="text-3xl text-center border-b-2 p-3 text-sm md:text-base text-gray-700">
        Working Experience
      </h1>
      <div className="flex flex-col lg:flex-row justify-center md:justify-between">
        <div>
          {myProfile.map((item, index) => (
            <p
              key={index}
              className="inline-block lg:block lg:text-center mb-5 md:mb-0"
            >
              <button
                onClick={() => SetValue(index)}
                className={`${
                  index === value && "bg-gray-700 text-white"
                } bg-gray-300 mr-2 lg:mr-0 rounded-lg py-3 px-6 text-sm md:text-base my-2
                } `}
              >
                {item.title}
              </button>
            </p>
          ))}
        </div>
        <div>
          <p className="text-gray-700 text-lg  md:text-2xl">{title}</p>
          {info.map((item, index) => (
            <p key={index} className="flex items-center my-3">
              <FiChevronRight className="text-lg md:text-2xl" /> {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideTabs;
