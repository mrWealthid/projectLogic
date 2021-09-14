import React from "react";
import ModalComp from "./ModalComp";
import ModalSidebar from "./ModalSidebar";
// import { useGlobalContext } from "../context/DataContext";

//when using custom hook this isn't needed, just import the function and everything will be there
// import { DataContext } from "../context/DataContext";

const Modal = () => {
  // const data = useGlobalContext();
  //   const data = useContext(DataContext);

  return (
    <div>
      <ModalSidebar />
      <ModalComp />
    </div>
  );
};

export default Modal;
