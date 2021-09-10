import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { sublinks } from "../data/data";
import StripeSubMenu from "./StripeSubMenu";
import StripeSideBar from "./StripeSideBar";

const StripeNav = ({ setValue, value }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleHover = (indexs) => {
    const selected = sublinks.map((item, index) =>
      index === indexs ? { ...item, Open: true } : item
    );

    setValue(selected);
  };

  const closeSubmenu = (e) => {
    if (e.target.classList.contains("nav")) setValue(sublinks);
  };

  return (
    <div
      className="bg-yellow-300  text-gray-700 transition duration-1000 px-4"
      onMouseOver={closeSubmenu}
    >
      <div className="flex items-center nav justify-between ">
        <div className="py-4">Stripe</div>

        <div className="md:hidden">
          {!isOpen ? (
            <FaTimes onClick={handleNavToggle} />
          ) : (
            <FaBars onClick={handleNavToggle} />
          )}
        </div>

        <div className="hidden py-6   md:block md:mr-4">
          {value.map((item, index) => {
            const { page } = item;
            return (
              <div className="inline-block " key={index}>
                <span
                  onMouseOver={(e) => handleHover(index)}
                  className="relative mr-6"
                >
                  {page}
                </span>

                {item.Open ? <StripeSubMenu {...item} /> : null}
              </div>
            );
          })}
        </div>

        <div className="hidden nav md:block ">
          <button className="p-2 text-white bg-gray-700 ">Sign in</button>
        </div>
      </div>
      {isOpen || <StripeSideBar handleNavToggle={handleNavToggle} />}
      <div
        className={`${
          !isOpen
            ? "z-10 w-full min-h-screen absolute opacity-40 left-0 top-0 bg-gray-400 md:hidden"
            : ""
        }`}
      ></div>
    </div>
  );
};

export default StripeNav;
