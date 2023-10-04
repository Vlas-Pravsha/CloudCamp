import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCheckBox } from "../../redux/Slices/formSlice";
import s from "./CustomCheckBox.module.scss";
// interface CustomCheckBoxProps {
//   placeholder: string;
// }
export type Ref = HTMLTextAreaElement;

export const CustomCheckBox = React.forwardRef<Ref>(({ ...rest }, ref) => {
  const [data, setData] = useState([
    {
      userId: 1,
      id: 1,
    },
    {
      userId: 1,
      id: 2,
    },
    {
      userId: 1,
      id: 3,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCheckBox(selectedItems));
  }, [selectedItems]);

  function checkboxHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const isSelected = event.target.checked;
    const value = parseInt(event.target.value);

    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={s.checkboxWrapper}>
          <input
            ref={ref}
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            value={item.id}
            onChange={checkboxHandler}
          />
          <div className={s.text}>{item.id}</div>
        </div>
      ))}
    </>
  );
});
