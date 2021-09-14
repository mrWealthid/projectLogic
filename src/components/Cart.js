import React, { useState, useEffect } from "react";
import { products } from "../data/data";
import CartItems from "./CartItems";
import { FaShoppingBag } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState(products);
  const [cartlength, setCartLength] = useState(null);
  const [total, setTotal] = useState(null);
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
    const handleCartItems = () => {
      setCartLength(cart.reduce((acc, item) => item.amount + acc, 0));
    };
    handleCartItems();
  }, [cart, cartlength]);

  useEffect(() => {
    const totalAmount = () => {
      setTotal(cart.reduce((acc, item) => acc + item.price * item.amount, 0));
    };
    totalAmount();
  }, [cart, total]);

  const customAlert = (type, msg) => {
    return setAlert({ type, msg });
  };

  const checkNumber = (num) => {
    if (num > 1) return num - 1;
    else {
      customAlert(true, "use the remove button to remove item");
      return num;
    }
  };

  const handleIncrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, amount: checkNumber(item.amount) } : item
      )
    );
  };

  const handleDel = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col flex-wrap">
      <header className="flex items-center justify-between bg-gray-700 text-white p-4">
        <div>Wealth Cart</div>

        <div>
          <p className="flex bg-white gap-2 rounded-lg p-2 items-center text-black">
            <FaShoppingBag />
            <span>{cartlength}</span>
          </p>
        </div>
      </header>

      {alert.type ? (
        <p className=" bg-white p-3 text-center my-3 ">{alert.msg}</p>
      ) : null}
      {cart.length === 0 ? (
        <p className="text-center mt-10 text-lg">No More Item in Cart</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItems
              key={item.id}
              {...item}
              handleIncrease={handleIncrease}
              handleDecrease={handleDecrease}
              handleDel={handleDel}
            />
          ))}

          <button
            className="bg-white ring-red-400 ring-1 p-3 mt-10 hover:bg-red-700 ease-linear transition-all duration-1000 hover:text-white  rounded-lg w-full"
            onClick={() => {
              customAlert(true, "Cart Emptied!");
              setCart([]);
            }}
          >
            Clear Item
          </button>

          <p className=" bg-white text-lg p-5 text-center mt-4 ">
            Total Amount to be Paid : ${total}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
