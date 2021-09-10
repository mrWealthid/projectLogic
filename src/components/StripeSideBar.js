import React from "react";
import { FaTimes } from "react-icons/fa";
import { sublinks } from "../data/data";

const StripeSideBar = ({ handleNavToggle }) => {
  return (
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
                  <a className="flex gap-3 items-center" key={index} href={url}>
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
  );
};

export default StripeSideBar;
