import React from "react";
import Link from "next/link";
export const Button = ({
  text,
  color,
  backgroundShadow = false,
  href = "",
}) => {
  const style = {
    boxShadow: backgroundShadow ? "0px 0px 15px 10px #55705C" : "none",
    color: `var(${color})` || "white",
  };
  return (
    <Link href={`/${href}`}>
      <button
        className=""
        style={{ color: style.color, boxShadow: style.boxShadow }}
      >
        {text}
      </button>
    </Link>
  );
};
