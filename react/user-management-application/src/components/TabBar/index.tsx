import React from "react";
import classes from "./index.module.css";

interface TabBarProps {
  onClick?: (value: string) => void;
  listHeading: string[];
  tabIndex?: string;
}

export const TabBar: React.FC<TabBarProps> = ({
  onClick,
  listHeading,
  tabIndex,
}) => {
  return (
    <div className={classes["tab-bar"]}>
      {listHeading.map((value: string) => (
        <div
          className={`${classes["tab-bar__element"]} ${
            tabIndex === value && classes["tab-bar__element--active"]
          }`}
          onClick={() => onClick?.(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};
