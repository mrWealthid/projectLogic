import React, { useRef } from "react";
import Input from "./Input";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <form className="w-4/12 bg-gray-200 p-10" onSubmit={handleSubmit}>
        <p className="text-2xl">Register</p>
        <Input
          type="email"
          Content="Email Address"
          placeholder="john@example.com"
          name="email"
          ref={emailRef}
        />
        <Input
          type="password"
          Content="Enter Password"
          placeholder="Enter Password"
          name="password"
          ref={passwordRef}
        />
        <Input
          type="password"
          Content="Confirm Password"
          placeholder="Enter Password"
          name="password"
          ref={passwordConfirmRef}
        />
        <button
          style={{ color: "wheat" }}
          className="bg-gray-700 text-white text-sm mt-4  md:text-base rounded-full hover:bg-gray-500 py-3 px-7"
        >
          Submit
        </button>
        <p>
          {" "}
          Already Have An Account <a href="/">Login</a>{" "}
        </p>{" "}
      </form>
    </div>
  );
};

export default Signup;
