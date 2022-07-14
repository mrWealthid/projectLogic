import React, { useState, useEffect } from "react";
import { products } from "../../data/data";
import CartItems from "./CartItems";
import { FaShoppingBag } from "react-icons/fa";
import RemitaPayment from "react-remita";

const Cart = () => {
  const [cart, setCart] = useState(products);
  const [cartlength, setCartLength] = useState(null);
  const [total, setTotal] = useState("");
  const [alert, setAlert] = useState({
    type: false,
    msg: "",
  });

  const [userDetails, setUserDetails] = useState({
    firstName: "Wealth",
    lastName: "Iduwe",
    email: "wealthIduwe@gmail.com",
  });

  const [paymentData, setpaymentData] = useState({
    key: "QzAwMDAyNzEyNTl8MTEwNjE4NjF8OWZjOWYwNmMyZDk3MDRhYWM3YThiOThlNTNjZTE3ZjYxOTY5NDdmZWE1YzU3NDc0ZjE2ZDZjNTg1YWYxNWY3NWM4ZjMzNzZhNjNhZWZlOWQwNmJhNTFkMjIxYTRiMjYzZDkzNGQ3NTUxNDIxYWNlOGY4ZWEyODY3ZjlhNGUwYTY=",
    customerId: "",
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
    amount: null,
    narration: "test",
  });

  useEffect(() => {
    setpaymentData((prevState) => ({
      ...prevState,
      amount: total,
    }));
  }, [total]);

  useEffect(() => {
    setUserDetails({
      firstName: "Wealth",
      lastName: "Iduwe",
      email: "wealthIduwe@gmail.com",
    });
  }, []);

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

    setpaymentData((prevState) => ({
      ...prevState,
      total: total,
    }));
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

  let data = {
    ...paymentData,
    onSuccess: function (response) {
      // function callback when payment is successful
      console.log("callback Successful Response", response);
    },
    onError: function (response) {
      // function callback when payment fails
      console.log("callback Error Response", response);
    },
    onClose: function () {
      // function callback when payment modal is closed
      console.log("closed");
    },
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

          <div className="flex justify-center items-center gap-2">
            <RemitaPayment
              remitaData={data}
              className="bg-green-500 proceed  p-3 mt-10 hover:bg-green-700 ease-linear transition-all duration-1000 text-white hover:text-white  w-1/6  rounded-lg "
              text="Pay with Remita" //text to show on button
              // add a 'live' prop to use the live urls/keys
            />

            <button
              className="bg-white ring-red-400 ring-1 p-3 mt-10 hover:bg-red-700 ease-linear transition-all duration-1000 hover:text-white  rounded-lg w-1/6"
              onClick={() => {
                customAlert(true, "Cart Emptied!");
                setCart([]);
              }}
            >
              Clear Item
            </button>
          </div>

          <p className=" bg-white text-lg p-5 text-center mt-4 ">
            Total Amount to be Paid : ${total}
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
