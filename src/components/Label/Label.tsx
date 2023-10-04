import React, { FC, ReactNode } from "react";
import s from "./Label.module.scss";

interface LabelProps {
  children: ReactNode;
  helperText?: string;
  inputTitle: string;
}

export const Label: FC<LabelProps> = ({ children, helperText, inputTitle }) => {
  return (
    <label className={s.text}>
     <span className={s.inputTitle}>{inputTitle}</span>
      {children}
      <span className={s.helperText}>{helperText}</span>
    </label>
  );
};
