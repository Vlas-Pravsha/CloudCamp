import { InputHTMLAttributes } from "react";
import s from "./Input.module.scss";
import React from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}
export type Ref = HTMLInputElement;

export const Input = React.forwardRef<Ref, InputProps>(
  ({ type, ...rest }, ref) => {
    const inputType = type || "white";
    return (
      <input
        ref={ref}
        type="text"
        className={`${s.input} ${s[inputType]}`}
        {...rest}
      />
    );
  }
);
