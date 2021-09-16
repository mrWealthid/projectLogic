// import React, { useState } from "react";
// import { useCartContext } from "../context/DataContext";

// const Button = () => {
//   const { count, setCount } = useCartContext();
//   const [increase, setIncrease] = useState(false);

//   const handlePlus = () => {
//     setCount(count + 1);
//     setIncrease(!increase);
//   };

//   const handleMinus = () => {
//     setCount(count - 1);
//     setIncrease(!increase);
//   };

//   return (
//     <div>
//       <button onClick={increase ? handlePlus : handleMinus}>
//         {increase ? "ADD" : "SUBTRACT"}
//       </button>
//     </div>
//   );
// };

// export default Button;
