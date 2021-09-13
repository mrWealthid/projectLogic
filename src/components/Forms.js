import React, { useState, useEffect } from "react";
import Select from "./Select";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

//radio buttons are are combination of both the input type-text and input type-checkbox ... it is going to have both a checked and and value prop

//the checkbox have only a checked property but no value!!!

const Forms = () => {
  const [input, setInput] = useState({
    names: "",
    email: "",
    phone: "",
    gender: "",
    graduate: false,
    postgraduate: false,
    married: true,
    color: "",
  });

  const people = [
    { name: "Wade Cooper" },
    { name: "Arlene Mccoy" },
    { name: "Devon Webb" },
    { name: "Tom Cook" },
    { name: "Tanya Fox" },
    { name: "Wealth" },
  ];

  const [selected, setSelected] = useState(people[0]);

  const [alert, setAlert] = useState({
    status: "",
    type: false,
    msg: "",
  });
  const [value, setValue] = useState([]);

  useEffect(() => {
    const alertTime = setTimeout(() => {
      setAlert({ ...alert, status: "", type: false });
    }, 2000);

    return () => {
      clearInterval(alertTime);
    };
  }, [alert]);

  const formValidation = () => {
    return input.names === "" ||
      input.email === "" ||
      input.phone === "" ||
      input.gender === ""
      ? false
      : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      const newInput = { ...input, ...selected };

      setValue([...value, newInput]);
      customAlert(true, "Contact Saved");
      setInput({
        names: "",
        email: "",
        phone: "",
        gender: "",
        graduate: false,
        postgraduate: false,
        married: true,
      });
    } else {
      customAlert("danger", true, "Kindly Fill All Fields");
    }
  };
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    type === "checkbox"
      ? setInput({ ...input, [name]: checked })
      : setInput({ ...input, [name]: value });
  };

  const customAlert = (status, type, msg) => {
    setAlert({ status, type, msg });
  };

  return (
    <div>
      {alert.type ? <p>{alert.msg}</p> : null}

      <form onSubmit={handleSubmit} className="mb-6 flex flex-col">
        <label htmlFor="names">Paragraph :</label>{" "}
        <input
          className={`${
            alert.status === "danger" ? "ring-2 ring-red-300" : "ring-1"
          } mt-2 ml-2 mb-4 md:mb-0  rounded-lg p-2`}
          id="names"
          type="text"
          name="names"
          value={input.names}
          placeholder={"Enter Name..."}
          onChange={handleChange}
        />
        <label htmlFor="Married">
          <input
            type="checkbox"
            id="Married"
            name="married"
            checked={input.married}
            onChange={handleChange}
          />
          Status
        </label>
        <label htmlFor="email">Email:</label>{" "}
        <input
          className={`${
            alert.status === "danger" ? "ring-2 ring-red-300" : "ring-1"
          }  mt-2 ml-2 mb-4 md:mb-0  rounded-lg p-2`}
          id="amount"
          type="email"
          name="email"
          value={input.email}
          placeholder={"Enter Email..."}
          onChange={handleChange}
        />
        <label htmlFor="number">Phone</label>{" "}
        <input
          className={`${
            alert.status === "danger" ? "ring-2 ring-red-300" : "ring-1"
          } mt-2 ml-2 mb-4 md:mb-0  rounded-lg p-2`}
          id="number"
          type="tel"
          name="phone"
          value={input.phone}
          placeholder={"Enter Nunber..."}
          onChange={handleChange}
        />
        <div className="space-x-4 my-3">
          <label htmlFor="name">Male</label>{" "}
          <input
            className="mr-2"
            id="amount"
            type="radio"
            name="gender"
            checked={input.gender === "male"}
            value="male"
            placeholder={"Enter Name..."}
            onChange={handleChange}
          />
          <label htmlFor="name">Female </label>{" "}
          <input
            className="mr-2 rounded-lg"
            id="amount"
            type="radio"
            name="gender"
            value="female"
            checked={input.gender === "female"}
            placeholder={"Enter Name..."}
            onChange={handleChange}
          />
          <label htmlFor="none">None</label>{" "}
          <input
            className=""
            id="none"
            type="radio"
            name="gender"
            value="none"
            checked={input.gender === "none"}
            placeholder={"Enter Name..."}
            onChange={handleChange}
          />
        </div>
        <div className="space-x-4 mb-3">
          <label htmlFor="name">
            <input
              className="mr-2 border-gray-300 md:mb-0 rounded bg-green-100 p-2"
              id="amount"
              type="checkbox"
              name="graduate"
              checked={input.graduate}
              placeholder={"Enter Name..."}
              onChange={handleChange}
            />
            Graduate
          </label>
          <label htmlFor="name">
            <input
              className="ml-2 border-gray-300 text-gray-700 focus:ring-gray-700 mr-2 rounded p-2"
              id="amount"
              type="checkbox"
              name="postgraduate"
              checked={input.postgraduate}
              placeholder={"Enter Name..."}
              onChange={handleChange}
            />
            Postgraduate
          </label>
        </div>
        <div className="mb-3">
          <Select
            selected={selected}
            setSelected={setSelected}
            people={people}
          />

          {/* <select
            value={input.color}
            className="w-full"
            name="color"
            onChange={handleChange}
          >
            <option className="bg-gray-200 hover:bg-gray-200">
              Select color...
            </option>
            <option className="" value="Red">
              Red
            </option>
            <option className="" value="blue">
              Blue
            </option>
            <option className="" value="green">
              Green
            </option>
          </select> */}
        </div>
        <button
          className="bg-gray-700 rounded-lg ml-4 p-3 text-white"
          type="submit"
        >
          Generate
        </button>
      </form>

      <div>
        {value.map((val, index) => (
          <div key={index} className="mb-3">
            <p>Name: {val.names}</p>
            <p>Email: {val.email}</p>
            <p>Color: {val.color || "Not Available"}</p>
            <p>Married: {val.married ? "Yes" : "No"}</p>
            <p>Gender: {val.gender}</p>
            <p>Graduate: {val.graduate ? "Yes" : "NO"}</p>
            <p>Postgraduate: {val.postgraduate ? "Yes" : "NO"}</p>
            <p>Person : {val.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;
