import React from "react";

const Reset = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form className="w-4/12 p-4 bg-gray-200 p-10">
        <p className="text-2xl"> Login</p>
        <Input
          type="email"
          Content="Email Address"
          placeholder="john@example.com"
          name="email"
        />

        <button
          style={{ color: "wheat" }}
          className="bg-gray-700 text-white text-sm mt-4  md:text-base rounded-full hover:bg-gray-500 py-3 px-7"
        >
          Reset Password
        </button>

        <a href="/">Login</a>
        <a href="/">Forgot Password</a>

        <p>
          Need An Account <a href="/">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Reset;
