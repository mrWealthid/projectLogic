import React, { useRef, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { sublinks } from "../data/data";
import StripeSubMenu from "./StripeSubMenu";

const StripeNav = ({ setsubMenuOpen, subMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });

  const handleNavToggle = () => {
    setIsOpen(!isOpen);
  };

  const [location, setLocation] = useState({});

  const MenuContainer = useRef(null);
  console.log(MenuContainer);

  useEffect(() => {
    const submenu = MenuContainer.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  const handleHover = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();

    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 20;
    handleSubmenuToggle(page, { center, bottom });
  };

  const handleSubmenuToggle = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setsubMenuOpen(true);
  };

  console.log(MenuContainer);

  return (
    <div className="bg-yellow-300  text-gray-700 transition duration-1000 p-4">
      <div className="flex items-center justify-between ">
        <div>Stripe</div>

        <div className="md:hidden">
          {!isOpen ? (
            <FaTimes onClick={handleNavToggle} />
          ) : (
            <FaBars onClick={handleNavToggle} />
          )}
        </div>

        <div className="hidden  md:block md: mr-4">
          {sublinks.map((item, index) => {
            const { page } = item;
            return (
              <span onMouseOver={(e) => handleHover(e)} className=" mr-6">
                {page}
              </span>
            );
          })}

          <StripeSubMenu
            page={page.page}
            links={page.links}
            myref={MenuContainer}
            subMenuOpen={subMenuOpen}
          />
        </div>

        <div className="hidden md:block ">
          <button className="p-2 text-white bg-gray-700 ">Sign in</button>
        </div>
      </div>
      {isOpen || (
        <div className="p-4 md:hidden absolute z-50 bg-gray-100 top-0 my-6 w-10/12 min-h-screen">
          <p>
            <FaTimes onClick={handleNavToggle} />
          </p>

          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <p className="font-bold my-4">{page}</p>

                <div className="flex flex-wrap gap-10">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <a
                        className="flex gap-3 items-center"
                        key={index}
                        href={url}
                      >
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      )}

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
