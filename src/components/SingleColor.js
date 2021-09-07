import React, { useState, useEffect } from "react";

// import rgbToHex from "./Utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);

  //To convert the array into strings
  const convertRgb = rgb.join(",");

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`${index > 10 && "text-yellow-100"} py-12 w-52`}
      style={{ background: `rgb(${convertRgb})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p>{weight + "%"}</p>

      <p className=""> {`rgb: ${convertRgb}`}</p>

      <p> {`Hex: ${hexValue}`}</p>

      {alert && (
        <div className="font-light text-sm italic">Copied to CLipboard</div>
      )}
    </div>
  );
};

export default SingleColor;
