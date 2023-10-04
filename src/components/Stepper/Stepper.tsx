import { FC } from "react";
import s from "./Stepper.module.scss";

interface StepperProps {
  currentStep: number;
}

export const Stepper: FC<StepperProps> = ({ currentStep }) => {
  const percentage = Math.round((currentStep / 2) * 100);
  const calculateSecondPage =
    currentStep === 1 ? s.stepActive : currentStep !== 0 ? s.stepChecked : "";

  return (
    <div className={s.stepList}>
      <div
        className={`${s.stepItem} ${
          currentStep === 0 ? s.stepActive : s.stepChecked
        }`}
      >
        <span className={s.progresCount}></span>
        <span className={s.progresText}>1</span>
      </div>
      <div className={`${s.stepItem} ${calculateSecondPage}`}>
        <span className={s.progresCount}></span>
        <span className={s.progresText}>2</span>
      </div>
      <div className={`${s.stepItem} ${currentStep === 2 ? s.stepActive : ""}`}>
        <span className={s.progresCount}></span>
        <span className={s.progresText}>3</span>
      </div>
      <div className={s.lineMain}>
        <div className={s.doneLine} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};
