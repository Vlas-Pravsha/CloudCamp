import s from "./ThirdPage.module.scss";
import { Label } from "../../components/Label/Label";
import { TextArea } from "../../components/TextArea/TextArea";
import { useForm } from "react-hook-form";

export const ThirdPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <div className={s.wrap}>
      <div className={s.areaWrap}>
        <Label inputTitle={"About"} helperText={"Tip"}>
          <TextArea
            placeholder="Placeholder"
            {...register("about", {
              required: { message: "About is required", value: true },
              maxLength: 500,
            })}
            aria-invalid={errors.about ? "true" : "false"}
          ></TextArea>
        </Label>
      </div>
    </div>
  );
};
