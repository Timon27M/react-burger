import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";
import ModalOverflow from "../modal-overflow/modal-overflow";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const modalRoot = document.getElementById("react-modals");

function Modal({ children, closePopup }) {
  useEffect(() => {
    const onEscKeydown = (evt) => {
      if (evt.key === "Escape") {
        closePopup();
      }
    };
    document.addEventListener("keydown", onEscKeydown);

    return () => document.removeEventListener("keydown", onEscKeydown);
  }, []);

  function stopPropagation(e) {
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
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default Modal;
