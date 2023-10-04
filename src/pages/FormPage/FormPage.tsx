import { useState } from "react";
import { Stepper } from "../../components/Stepper/Stepper";
import { FirstPage } from "../FristPage/FirstPage";
import { SecondPage } from "../SecondPage/SecondPage";
import { ThirdPage } from "../ThirdPage/ThirdPage";
import s from "./FormPage.module.scss";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { FullFiled } from "../FullFiled/FullFiled";
import { Reject } from "../Error/Reject";
import { useSelector } from "react-redux";
import { selectFormData } from "../../redux/Slices/formSlice";
import { useForm } from "react-hook-form";

export const FormPage = () => {
  const formData = useSelector(selectFormData);


  function onSubmit(data: any) {
    console.log(data);
  }

  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  function toogleHandleClick() {
    setIsVisible(!isVisible);
  }

  async function increment() {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const response = await fetch(
          "https://api.sbercloud.ru/content/v1/bootcamp/frontend",
          {
            method: "POST",
            body: JSON.stringify(formData),
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Ошибка при отправке запроса:", error);
      }
      setIsVisible(true);
    }
  }
  function decrement() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/");
    }
  }

  const displayStep = (step: number) => {
    switch (step) {
      case 0:
        return <FirstPage />;
      case 1:
        return <SecondPage />;
      case 2:
        return <ThirdPage />;
      default:
        3;
        return;
    }
  };

  return (
    <div className={s.wrap}>
      <Stepper currentStep={currentStep} />
      {displayStep(currentStep)}
      <div className={s.buttonsWrap}>
        <div>
          <Button type="secondary" onClick={decrement}>
            Назад
          </Button>
        </div>
        <div>
          <Button
            type="primary"
            onClick={increment}
          >
            Далее
          </Button>
        </div>
      </div>
      {isVisible ? (
        <FullFiled onClose={toogleHandleClick}></FullFiled>
      ) : (
        ""
        // <Reject onClose={toogleHandleClick}></Reject>
      )}
    </div>
  );
};
