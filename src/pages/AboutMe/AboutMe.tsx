import Avatar from "../../assets/img/Avatar.png";
import Folder from "../../assets/img/Folder.png";
import s from "./AboutMe.module.scss";
import { Label } from "../../components/Label/Label";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  formSliceProps,
  setEmail,
  setPhone,
} from "../../redux/Slices/formSlice";
import { useForm } from "react-hook-form";

export const AboutMe = () => {
  const phone = useSelector((state: formSliceProps) => state.phone);
  const email = useSelector((state: formSliceProps) => state.email);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: { phone, email },
  });

  const { ref: phoneRef } = register("phone", {
    onChange: (value: number) => dispatch(setPhone(value)),
  });
  const { ref: emailRef } = register("email", {
    onChange: (value: string) => dispatch(setEmail(value)),
  });

  const onSubmit = (data: any) => {
    console.log("Form data submitted:", data);
  };
  return (
    <form className={s.wrap} onSubmit={handleSubmit(onSubmit)}>
      <img src={Avatar} className={s.avatar} alt="Avatar" />
      <div>
        <h3 className={s.title}>Vlas Dvorovyi</h3>
        <div className={s.nameWrap}>
          <a href="" className={s.link}>
            <img src={Folder} width={"16px"} height={"16px"} alt="Folder" />{" "}
            Telegram
          </a>
          <a href="" className={s.link}>
            <img src={Folder} width={"16px"} height={"16px"} alt="Folder" />{" "}
            GitHub
          </a>
          <a href="" className={s.link}>
            <img src={Folder} width={"16px"} height={"16px"} alt="Folder" />{" "}
            Resume
          </a>
        </div>
      </div>
      <hr className={s.line} />
      <div>
        <div className={s.inputs}>
          <Label inputTitle={"Номер телефона"}>
            <Input
              type="inputAboutMe"
              placeholder={"+7 999 999-99-99"}
              {...register("phone", {
                onChange: (value) => dispatch(setPhone(value.target.value)),
              })}
            />
          </Label>
          <Label inputTitle={"Email"}>
            <Input
              {...register("email", {
                onChange: (value) => dispatch(setEmail(value.target.value)),
              })}
              type="inputAboutMe"
              placeholder={"tim.jennings@example.com"}
            />
          </Label>
        </div>
        <Link to={"./quiz"}>
          <Button>Начать</Button>
        </Link>
      </div>
    </form>
  );
};
