import React, { useContext, createContext } from "react";

const StripeContext = createContext();

const StripeProvider = ({ children }) => {
  return (
    <StripeContext.Provider value="hello">{children}</StripeContext.Provider>
  );
};

//custom hook - i love this one

const useStripeGlobal = () => {
  return useContext(StripeContext);
};

export { StripeContext, useStripeGlobal, StripeProvider };
