import React from "react";

function Button({ children, bg = "bg-xanthous", onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${bg} hover:opacity-80 text-raisingblack px-6 py-3 rounded font-semibold shadow-lg font-serif ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
