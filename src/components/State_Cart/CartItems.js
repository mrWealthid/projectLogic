import React from "react";

const CartItems = ({
  id,
  title,
  price,
  img,
  amount,
  handleIncrease,
  handleDecrease,
  handleDel,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="w-20 animate-float h-16" src={img} alt="products" />
      </div>

      <div className="w-4/12 text-center space-y-2 my-2">
        <p>{title}</p>
        <p>${price * amount}</p>
        <button
          onClick={() => handleDel(id)}
          className="bg-white text-red-700 ease-linear transition-all duration-1000 hover:bg-red-700 border hover:text-white ring-1 ring-red-300  p-2 rounded-lg"
        >
          remove
        </button>
      </div>

      <div className="flex gap-5">
        <button
          className="bg-white ring-1 ring-red-300 rounded-lg px-2"
          onClick={() => handleDecrease(id)}
        >
          -
        </button>
        <p>{amount}</p>
        <button
          className="bg-white ring-1 ring-gray-300 rounded-lg px-2"
          onClick={() => handleIncrease(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
