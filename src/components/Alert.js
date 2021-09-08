import React from "react";

const Alert = ({ value, status }) => {
  return (
    <div
      className={`${
        status === ("delete" && "deleteAll") && "bg-red-100"
      } bg-gray-200 p-4 w-6/12 mx-auto`}
    >
      <p className={`${status === "delete" ? " text-red-800" : "text-black"}`}>
        {value}{" "}
      </p>
    </div>
  );
};

export default Alert;
