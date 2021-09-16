import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import reducer from "../components/reducer";
import { products } from "../data/data";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const initialState = {
    loading: false,
    cart: products,
    total: null,
    cartItems: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [alert, setAlert] = useState({
    type: false,
    msg: "",
  });

  useEffect(() => {
    const alertTimer = setTimeout(() => {
      setAlert({ ...alert, type: false });
    }, 3000);

    return () => clearInterval(alertTimer);
  }, [alert]);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    dispatch({ type: "GET_ITEM" });
  }, [state.cart]);

  const customAlert = (type, msg) => {
    return setAlert({ type, msg });
  };

  const handleIncrease = (id) => {
    dispatch({
      type: "INCREASE",
      payload: {
        id: id,
      },
    });
  };

  const handleDecrease = (id) => {
    dispatch({
      type: "DECREASE",
      payload: {
        id: id,
      },
    });
  };

  const clearCart = () => {
    customAlert(true, "CART EMPTIED");
    dispatch({ type: "CLEAR_CART" });
  };

  const handleDel = (id) => {
    dispatch({
      type: "DELETE",
      payload: {
        id: id,
      },
    });

    customAlert(true, "ITEM DELETED");
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });

    const response = await axios.get(
      "https://course-api.com/react-useReducer-cart-project"
    );

    const cart = await response.data;

    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [count, setCount] = useState(0);

  return (
    <DataContext.Provider
      value={{
        ...state,
        ...alert,
        customAlert,
        handleDecrease,
        handleIncrease,
        handleDel,
        dispatch,
        clearCart,
        count,
        setCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(DataContext);
};

export { DataProvider, useCartContext };
