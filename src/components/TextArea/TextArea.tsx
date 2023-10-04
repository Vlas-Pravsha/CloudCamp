import React, { useState } from "react";
import s from "./TextArea.module.scss";
import { setAbout } from "../../redux/Slices/formSlice";
import { useDispatch } from "react-redux";

interface TextAreaProps {
  placeholder: string;
}
export type Ref = HTMLTextAreaElement;

export const TextArea = React.forwardRef<Ref, TextAreaProps>(
  ({ placeholder, ...rest }, ref) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleTextChange = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const newText = event.target.value;
      dispatch(setAbout(event.target.value));
      setText(newText);
    };

    return (
      <div>
        <textarea
          className={s.textarea}
          rows={3}
          value={text}
          placeholder={placeholder}
          onChange={handleTextChange}
          ref={ref}
        />
        <p className={s.text}>{text.length}</p>
      </div>
    );
  }
);
