import s from "./FirstPage.module.scss";
import { Label } from "../../components/Label/Label";
import { Input } from "../../components/Input/Input";
import { DropDown } from "../../components/Dropdown/Dropdown";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setName, setNickname, setSername } from "../../redux/Slices/formSlice";
import React from "react";

export const FirstPage = React.forwardRef(() => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  // const nickname = useSelector((state: formSliceProps) => state.nickname);
  // const name = useSelector((state: formSliceProps) => state.name);
  // const sername = useSelector((state: formSliceProps) => state.sername);
  // const sex = useSelector((state: formSliceProps) => state.sex);

  // const { ref: nickNameRef } = register("nickname", {
  //   onChange: (value) => dispatch(setNickname(value.target.value)),
  // });
  // const { ref: nameRef } = register("name", {
  //   onChange: (value) => console.log(value),
  // });
  // const { ref: sernameRef } = register("sername", {
  //   onChange: (value) => dispatch(setSername(value)),
  // });
  // const { ref: sexRef } = register("sex", {
  //   onChange: (value) => dispatch(setSex(value)),
  // });

  return (
    <form className={s.wrap}>
      <div className={s.inputsWrap}>
        <Label helperText="Tip" inputTitle={"Nickname"}>
          <Input
            placeholder="Placeholder"
            {...register("nickname", {
              onChange: (value) =>
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                dispatch(setNickname(value.target.value)),
              required: "Choose nickname",
              maxLength: 20,
              minLength: 3,
              pattern: /[^a-zA-Z0-9]/g,
            })}
          />
        </Label>
        <Label helperText="Tip" inputTitle={"Name"}>
          <Input
            placeholder="Placeholder"
            {...register("name", {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
              onChange: (value) => dispatch(setName(value.target.value)),
              required: "Choose name",
              maxLength: 50,
              minLength: 3,
              pattern: /[^a-zA-Z]/g,
            })}
          />
        </Label>
        <Label helperText="Tip" inputTitle={"Sername"}>
          <Input
            placeholder="Placeholder"
            {...register("sername", {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
              onChange: (value) => dispatch(setSername(value.target.value)),
              required: "Choose sername",
              maxLength: 50,
              minLength: 3,
              pattern: /[^a-zA-Z]/g,
            })}
          />
        </Label>
        <Label inputTitle={"Sex"}>
          <DropDown
            title="Не выбран"
            {...register("sex", { required: "Choose sex" })}
          ></DropDown>
        </Label>
      </div>
    </form>
  );
});
