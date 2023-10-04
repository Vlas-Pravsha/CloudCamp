import s from "./Dropdown.module.scss";
import { useState } from "react";
import Down from "../../assets/img/Chevron Down.png";
import { useDispatch } from "react-redux";
import { setSex } from "../../redux/Slices/formSlice";

const items: DropdownItem[] = [
  { value: "man", id: 1 },
  { value: "woman", id: 2 },
];
interface DropdownItem {
  value: string;
  id: number;
}
interface DropDownProps {
  title: string;
}
export const DropDown = ({ title }: DropDownProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const dispatch = useDispatch();

  const toggle = () => setOpen(!open);

  const handleItemClick = (item: string) => {
    setSelected(item);
    setOpen(false);
    dispatch(setSex(item));
  };

  return (
    <div className={s.dropDownWrap}>
      <div className={s.titleWrap} onClick={toggle}>
        {selected ? (
          <div className={s.selectedValue}>{selected}</div>
        ) : (
          <div className={s.title}>{title}</div>
        )}
        <img src={Down} alt="Down" className={s.downImg} />
      </div>
      <div className={s.content}>
        <ul>
          {open && (
            <div className={s.dropDownContent}>
              {items.map((item) => (
                <li
                  onClick={() => handleItemClick(item.value)}
                  className={s.text}
                  key={item.id}
                >
                  {item.value}
                </li>
              ))}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};
