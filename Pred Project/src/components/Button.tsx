import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <button className={`${className}`} {...props}>
    {children}
  </button>
);

export default Button; 