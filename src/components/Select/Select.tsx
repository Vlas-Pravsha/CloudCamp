import  { FC, ReactNode } from "react";
import s from "./Select.module.scss";

interface SelectProps {
  children: ReactNode;
}
export const Select: FC<SelectProps> = ({ children }) => {
  return (
    <div>
      <label>
        <span className={s.text}>{children}</span>
        <select className={s.select}>
          <option disabled selected value="" className={s.option}>
            Не выбран
          </option>
          <option className={s.option}>man</option>
          <option className={s.option}>woman</option>
        </select>
      </label>
    </div>
  );
};
