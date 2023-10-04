import { FC } from "react";
import s from "./Reject.module.scss";
import CancelLogo from "../../assets/img/Circle Cancel Filled.png";
import Close from "../../assets/img/Close.png";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

interface RejectProps {
  onClose: () => void;
}
export const Reject: FC<RejectProps> = ({ onClose }) => {
  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrap}>
        <div className={s.closeWrap}>
          <h2 className={s.title}>Ошибка</h2>
          <div className={s.close} onClick={onClose}>
            <img src={Close} alt="Close" className={s.closeImg} />
          </div>
        </div>
        <div className={s.sicrleWrap}>
          <div className={s.sircle}>
            <img src={CancelLogo} alt="ErrorLogo" className={s.logo} />
          </div>
        </div>
        <div className={s.btnWrap}>
          <Link to={"/quiz"}>
            <Button onClick={onClose}>Закрыть</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
