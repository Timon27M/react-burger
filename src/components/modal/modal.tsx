import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import ModalOverflow from "../modal-overflow/modal-overflow";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TModal } from "../../utils/types";
import { FC } from "react";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

const Modal: FC<TModal> = ({ children, closePopup }) => {
  useEffect(() => {
    const onEscKeydown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", onEscKeydown);

    return () => document.removeEventListener("keydown", onEscKeydown);
  }, []);

  function stopPropagation(e: React.SyntheticEvent) {
    e.stopPropagation();
  }
    return ReactDOM.createPortal(
      <>
        <ModalOverflow closePopup={closePopup}>
          <div
            className={`p-10 pb-2 ${styles.container}`}
            onClick={stopPropagation}
          >
            <button className={`p-0 ${styles.closeButton}`} onClick={closePopup}>
              <CloseIcon type="primary" />
            </button>
            {children}
          </div>
        </ModalOverflow>
      </>,
      modalRoot
      );
};
export default Modal;
