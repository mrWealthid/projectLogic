//Men reducers are so clean! they really reducers
import React from "react";
import { Switch, Route } from "react-router-dom";
import ProjectLinks from "./components/ProjectLinks";
import RandomUser from "./RandomUser";
import MealTabs from "./MealTabs";
import SideTabs from "./SideTabs";
import DataGenerator from "./DataGenerator";
import ColorGenerator from "./ColorGenerator";
import FAQ from "./FAQ";
import Home from "./components/Home";

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
        </Switch>
      </div>
    </div>
  );
};

export default App;
