import React from "react";
import CartItems from "./CartItems";
import { FaShoppingBag } from "react-icons/fa";
import { useCartContext } from "../context/DataContext";

const CartReducer = () => {
  const {
    handleDecrease,
    handleDel,
    handleIncrease,
    cartItems,
    total,
    type,
    msg,
    loading,
    cart,
    clearCart,
  } = useCartContext();

  return (
    <div className="flex flex-col flex-wrap">
      <header className="flex items-center justify-between bg-gray-700 text-white p-4">
        <div>Wealth Cart</div>

        <div>
          <p className="flex bg-white gap-2 rounded-lg p-2 items-center text-black">
            <FaShoppingBag />
            <span>{cartItems}</span>
          </p>
        </div>
      </header>

      {loading ? (
        <p>LOADING...</p>
      ) : (
        <div>
          {" "}
          {type ? (
            <p className=" bg-white p-3 text-center my-3 ">{msg}</p>
          ) : null}
          {cartItems === 0 ? (
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
                onClick={clearCart}
              >
                Clear Item
              </button>

              <p className=" bg-white text-lg p-5 text-center mt-4 ">
                Total Amount to be Paid : ${total}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartReducer;
