import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, onClick }) => {
  const className =
    "bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4  rounded-md hover:bg-yellow-500 hover:text-stone-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-stone-200 inline-block cursor-pointer tracking-wide disabled:cursor-not-allowed";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
