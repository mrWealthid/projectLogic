import React, { useState, useEffect } from "react";
import GroceryList from "./GroceryList";
import Alert from "./Alert";

const GroceryBud = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ type: false, value: "", status: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ ...alert, type: false });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  useEffect(() => {
    let getItems = JSON.parse(localStorage.getItem("grocery"));

    getItems && setItems(getItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("grocery", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      customAlert(true, "Add an Item");
    } else if (value && isEditing) {
      setItems(
        items.map((item) =>
          item.id === editId ? { ...item, title: value } : item
        )
      );
      customAlert(true, "Item is Updated");
      setIsEditing(false);
      setValue("");
    } else {
      const newItem = { id: Date.now(), title: value };

      customAlert(true, "Item Added");

      setItems([...items, newItem]);

      setValue("");
    }
  };

  //function in function using Es6 features
  const customAlert = (type, value, status) => {
    setAlert({ type, value, status });
  };

  const handleEdit = (id) => {
    setIsEditing(true);
    setEditId(id);

    // You can use find to get the value
    const selectItem = items.find((item) => item.id === id);
    setValue(selectItem.title);
  };

  const handleDel = (id) => {
    setItems(items.filter((item) => item.id !== id));
    customAlert(true, "Item Deleted", "delete");
    setValue("");
  };

  return (
    <div className="text-center">
      {alert.type ? <Alert {...alert} /> : null}

      <h3 className="mt-5"> GroceryBud (CRUD)</h3>
      <form onSubmit={handleSubmit} className="mb-6">
        <label htmlFor="grocery">Grocery</label>{" "}
        <input
          className={`${
            alert.value === "Add an item" && " ring-2 ring-red-500"
          } ring-1 mt-2 ml-2 mb-4 md:mb-0  rounded-lg p-2`}
          id="grocery"
          type="type"
          value={value}
          placeholder={"Add items..."}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-gray-700 rounded-lg w-36 ml-4 p-3 text-white"
          type="submit"
        >
          {isEditing ? "Edit" : "Add"}
        </button>
      </form>

      {items.length > 0 && (
        <div className="">
          {items.map((item, index) => (
            <GroceryList
              key={item.id}
              {...item}
              handleDel={handleDel}
              handleEdit={handleEdit}
              setIsEditing={setIsEditing}
            />
          ))}

          <p
            className="cursor-pointer underline"
            onClick={() => {
              customAlert(true, "All Items Removed", "deleteAll");
              setItems([]);
              setValue("");
            }}
          >
            Clear Items
          </p>
        </div>
      )}
    </div>
  );
};

export default GroceryBud;
