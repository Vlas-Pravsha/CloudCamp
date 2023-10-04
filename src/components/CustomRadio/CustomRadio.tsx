import React, { ChangeEvent } from "react";
import s from "./CustomRadio.module.scss";
import { useDispatch } from "react-redux";
import { setRadioInput } from "../../redux/Slices/formSlice";

interface Option {
  label: string;
  value: string;
}
interface CustomRadioProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}
export type Ref = HTMLTextAreaElement;

export const CustomRadio = React.forwardRef<Ref, CustomRadioProps>(
  ({ options, selectedValue, onChange, ...rest }, ref) => {
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange(value);
      dispatch(setRadioInput(value));
    };
    return (
      <div>
        {options.map((option) => (
          <div key={option.value} className={s.none}>
            <label className={s.radioWrapper}>
              <input
                type="radio"
                value={option.value}
                checked={selectedValue === option.value}
                onChange={handleChange}
                {...rest}
              />
              <span className={s.text}>{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    );
  }
);
