import  { FC } from "react";
import s from "./FullFiled.module.scss";
import FullFiledLogo from "../../assets/img/Circle Check Filled.png";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

interface FullFiledProps {
  onClose: () => void;
}

export const FullFiled: FC<FullFiledProps> = ({ onClose }) => {
  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrap}>
        <h2 className={s.title}>Форма успешно отправлена</h2>
        <div className={s.sircle}>
          <img src={FullFiledLogo} alt="FullFiledLogo" className={s.logo} />
        </div>
        <Link to={"/"}>
          <Button>На главную</Button>
        </Link>
      </div>
    </div>
  );
};
