import React from "react";

export const Button = ({ text, color, backgroundShadow = false }) => {
  const style = {
    boxShadow: backgroundShadow ? "0px 0px 15px 10px #55705C" : "none",
    color: `var(${color});` || "white",
  };
  return (
    <button
      className=""
      style={{ color: style.color, boxShadow: style.boxShadow }}
    >
      {text}
    </button>
  );
};
