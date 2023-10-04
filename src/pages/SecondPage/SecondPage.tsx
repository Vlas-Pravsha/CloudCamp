import { Label } from "../../components/Label/Label";
import s from "./SecondPage.module.scss";
import { Button } from "../../components/Button/Button";
import DeleteLogo from "../../assets/img/Button Icon.png";
import AddLogo from "../../assets/img/Plus.svg";
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import { CustomCheckBox } from "../../components/CustomCheckBox/CustomCheckBox";
import { CustomRadio } from "../../components/CustomRadio/CustomRadio";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/Slices/formSlice";


export const SecondPage = () => {
  const [selectedOption, setSelectedOption] = useState("1");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const options = [
    { label: "1", value: "option1" },
    { label: "2", value: "option2" },
    { label: "3", value: "option3" },
  ];

  const handleOptionChange = (value: string): void => {
    setSelectedOption(value);
  };

  const [advantages, setAdvantages] = useState([
    { value: "Vlas", id: Math.random() * 1000 },
    { value: "Oleg", id: Math.random() * 1000 },
  ]);

  function itemAdd() {
    const advantagesItem = { value: "", id: Math.random() * 1000 };
    const newItem = [...advantages, advantagesItem];
    setAdvantages(newItem);
    dispatch(addTodo(newItem));
  }

  function deleteItem(idx: number) {
    const newArray = [];
    for (let i = 0; i < advantages.length; i++) {
      if (idx !== i) {
        newArray.push(advantages[i]);
      }
    }
    setAdvantages(newArray);
  }
  function addOnChangeValue(event: string, index: number): void {
    setAdvantages((prevObj) => {
      const newArray = [...prevObj];
      newArray[index] = {
        ...newArray[index],
        value: event,
      };
        dispatch(addTodo(newArray));
      
      return newArray;
    });
  }

  return (
    <div className={s.wrap}>
      <div className={s.inputsWrap}>
        <Label inputTitle="Advantages">
          {advantages.map((item, index) => {
            return (
              <div className={s.addAdvantage} key={item.id}>
                <Input
                  value={item.value}
                  type="addInput"
                  onChange={(e) => addOnChangeValue(e.target.value, index)}
                />
                <img
                  className={s.deleteImg}
                  src={DeleteLogo}
                  alt="DeleteLogo"
                  onClick={() => deleteItem(index)}
                />
              </div>
            );
          })}
        </Label>
        <Button type={"add"} onClick={itemAdd}>
          <img src={AddLogo} alt="AddLogo" />
        </Button>
        <div className={s.checkboxTitle}>Checkbox group</div>
        <CustomCheckBox
          {...register("customCheckBox", { required: "Choose something" })}
        />

        <div className={s.checkboxTitle}>Radio group</div>
        <CustomRadio
          {...register("customRadio", { required: "Choose something" })}
          options={options}
          selectedValue={selectedOption}
          onChange={handleOptionChange}
        />
      </div>
    </div>
  );
};
