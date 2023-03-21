import React from "react";
import classes from "./index.module.css";

enum TypeButton {
  primary = "primary",
  secondary = "secondary",
}

interface ButtonProps {
  children?: any;
  icon?: any;
  type?: TypeButton;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  children,
  type = TypeButton.primary,
}) => {
  return (
    <button
      className={`${classes.btn} ${
        type === TypeButton.primary && classes["btn--primary"]
      } `}
    >
      {icon}
      {children}
    </button>
  );
};
