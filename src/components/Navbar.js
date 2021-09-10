import React, { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  //   useEffect(() => {
  //     const linksHeight = linksRef.current.getBoundingClientRect().height;
  //     console.log(linksHeight);
  //     if (isOpen) linksContainerRef.current.style.height = `${linksHeight}px`;
  //   }, [isOpen]);
  return (
    <div
      className="bg-gray-300 text-gray-700 transition duration-1000 p-4"
      ref={linksContainerRef}
    >
      <div className="flex  justify-between ">
        <div>Navbar</div>

        <div className="md:hidden">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <FaBars onClick={() => setIsOpen(!isOpen)} />
          )}
        </div>
        <div className="hidden  md:block md:space-x-4">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Login</a>
        </div>
      </div>
      <div
        ref={linksRef}
        className={`${
          isOpen ? "block md:hidden" : "hidden"
        }  flex flex-col  mt-4 transform space-y-4`}
      >
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
