import styles from "./modal-overflow.module.css";
import { TModal } from "../../utils/types";
import { FC } from 'react';

const ModalOverflow: FC<TModal> = ({ children, closePopup }) => {
  return (
    <div className={styles.popup} onClick={closePopup}>
      {children}
    </div>
  );
}

export default ModalOverflow;
