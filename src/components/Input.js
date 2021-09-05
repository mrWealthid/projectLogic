import React from "react";

const Input = ({ Content, placeholder, type, focus, name }) => {
  return (
    <div>
      <label className="block">
        <span className="text-gray-700">{Content}</span>
        <input
          type={type}
          required
          name={name}
          className="my-2 block w-full p-4 rounded-md outline-none bg-gray-100"
          placeholder={placeholder}
          focus={focus}
        />
      </label>
    </div>
  );
};

Input.defaultProps = {
  focus: "none",
};

export default Input;
