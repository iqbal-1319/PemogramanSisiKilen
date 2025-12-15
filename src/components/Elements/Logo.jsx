import React from "react";

function Logo({ variant = "primary" }) {
  const variantClasses = {
    primary: "text-primary text-4xl",
    secondary: "text-white text-lg sm:text-2xl",
  };

  return (
    <div
      className={`font-poppins tracking-wide 
      ${variantClasses[variant] || variantClasses.primary}`}
    >
      <span className="font-bold">FINE</span>
      bank
      <span className="font-bold">.IO</span>
    </div>
  );
}

export default Logo;
