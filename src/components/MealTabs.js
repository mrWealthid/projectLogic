//Men reducers are so clean! they really reducers

import React, { useState, useEffect } from "react";

import { meals } from "../data/data";
import Menu from "./Menu";
import Categories from "./Categories";

const MealTabs = () => {
  const [mymeals, setMyMeals] = useState(meals);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const UniqueCategories = [
      "All",
      ...new Set(meals.map((myCategory) => myCategory.category)),
    ];
    setCategories(UniqueCategories);
  }, []);

  const handleMeals = (category) => {
    if (category === "All") {
      return setMyMeals(meals);
    }
    //Note you will be filtering directly from the source data not the state values
    const newItems = meals.filter((meal) => meal.category === category);
    setMyMeals(newItems);
  };

  return (
    <div className="text-center mt-10">
      <p className="text-gray-700 pb-3 text-3xl border-b mb-6">
        React Meal Tabs
      </p>

      <div>
        {categories.map((category, index) => (
          <Categories
            key={index}
            category={category}
            index={index}
            handleMeals={handleMeals}
          />
        ))}
      </div>

      <div className="p-2 mt-8  space-y-4">
        {mymeals.map((meal) => (
          <Menu key={meal.id} {...meal} />
        ))}
      </div>
    </div>
  );
};

export default MealTabs;
