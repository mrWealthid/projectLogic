import React from "react";
import { NavLink } from "react-router-dom";

const ProjectLinks = () => {
  const mystyle = {
    background: "rgba(55, 65, 81)",
    color: "wheat",
    padding: "10px 20px",
    borderRadius: "20px",
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center md:flex-row space-x-5">
      <NavLink className="my-2" exact activeStyle={mystyle} to="/">
        Home
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/randomUser">
        RandomUser
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/mealTabs">
        MealTabs
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/Faq">
        FAQ
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/sideTabs">
        SideTabs
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/Lorem">
        Lorem Generator
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/colorGen">
        Color Generator
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/grocery">
        GroceryBud
      </NavLink>

      <NavLink className="my-2" activeStyle={mystyle} to="/navbar">
        Navbar
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/modal">
        Modal
      </NavLink>
      <NavLink className="my-2" activeStyle={mystyle} to="/stripe">
        Stripe
      </NavLink>

      <NavLink className="my-2" activeStyle={mystyle} to="/form">
        form
      </NavLink>

      <NavLink className="my-2" activeStyle={mystyle} to="/cart">
        Cart
      </NavLink>

      <NavLink className="my-2" activeStyle={mystyle} to="/mycart">
        myCart
      </NavLink>

      <NavLink className="my-2" activeStyle={mystyle} to="/cocktail">
        Cocktail
      </NavLink>
    </div>
  );
};

export default ProjectLinks;
