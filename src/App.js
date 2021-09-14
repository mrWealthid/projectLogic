//Men reducers are so clean! they really reducers
import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectLinks from "./components/ProjectLinks";
import RandomUser from "./components/RandomUser";
import MealTabs from "./components/MealTabs";
import SideTabs from "./components/SideTabs";
import DataGenerator from "./components/DataGenerator";
import ColorGenerator from "./components/ColorGenerator";
import FAQ from "./components/FAQ";
import Home from "./components/Home";
import GroceryBud from "./components/GroceryBud";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Stripe from "./components/Stripe";
import Forms from "./components/Forms";
import Cart from "./components/State_Cart/Cart";
import CartReducer from "./components/CartReducer";

const App = () => {
  return (
    <div className="blog min-h-screen">
      <div className="p-4 w-11/12 md:w-10/12 mx-auto ">
        <ProjectLinks />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/randomUser"} component={RandomUser} />
          <Route path={"/mealTabs"} component={MealTabs} />
          <Route path={"/sideTabs"} component={SideTabs} />
          <Route path={"/Lorem"} component={DataGenerator} />
          <Route path={"/colorGen"} component={ColorGenerator} />
          <Route path={"/Faq"} component={FAQ} />
          <Route path={"/grocery"} component={GroceryBud} />
          <Route path={"/navbar"} component={Navbar} />
          <Route path={"/modal"} component={Modal} />
          <Route path={"/stripe"} component={Stripe} />
          <Route path={"/form"} component={Forms} />
          <Route path={"/cart"} component={Cart} />
          <Route path={"/mycart"} component={CartReducer} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
