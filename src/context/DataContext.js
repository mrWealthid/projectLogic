import React, { createContext, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  return (
    <DataContext.Provider value={"hello"}>{children}</DataContext.Provider>
  );
};

//custom hook which doesn't need unneccessary import statement
const useGlobalContext = () => {
  return useContext(DataContext);
};

export { DataContext, DataProvider, useGlobalContext };
