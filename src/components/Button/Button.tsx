import React, { FC, ReactNode } from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  type?: "secondary" | "primary" | "add";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
  const btnType = type || "primary";
  return (
    <button onClick={onClick} className={`${s.button} ${s[btnType]}`}>
      {children}
    </button>
  );
};
