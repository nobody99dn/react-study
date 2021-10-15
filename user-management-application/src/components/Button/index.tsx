import React from "react";
import classes from "./index.module.css";
interface ButtonProps {
  children?: any;
  icon?: any;
  primary?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  primary = true,
}) => {
  return (
    <>
      <button
        className={`${classes.btn} ${primary && classes["btn--primary"]} `}
      >
        {icon}
        {children}
      </button>
    </>
  );
};
