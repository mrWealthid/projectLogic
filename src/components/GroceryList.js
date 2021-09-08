import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const GroceryList = ({ id, title, handleDel, handleEdit }) => {
  return (
    <div className="flex justify-between">
      <p>{title} </p>
      <div className="flex">
        <span
          onClick={() => {
            handleEdit(id);
          }}
          className="mr-5 cursor-pointer"
        >
          <FaEdit color="cadetBlue" />
        </span>{" "}
        <span className="cursor-pointer" onClick={() => handleDel(id)}>
          <FaTrash color="red" />
        </span>
      </div>
    </div>
  );
};

export default GroceryList;
