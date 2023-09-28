import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ModalOverflow from "../modal-overflow/modal-overflow";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const modalRoot = document.getElementById("react-modals");

function Modal({ ingradientCloseClick, children }) {
  useEffect(() => {
    const onEscKeydown = (evt) => {
      if (evt.key === "Escape") {
        ingradientCloseClick();
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
      <ModalOverflow closePopup={ingradientCloseClick}>
        <div
          className={`p-10 pb-2 ${styles.container}`}
          onClick={stopPropagation}
        >
          <button className={`p-0 ${styles.closeButton}`} onClick={ingradientCloseClick}>
            <CloseIcon type="primary" />
          </button>
          <h2 className="mt-3 text text_type_main-large">Детали ингредиента</h2>
          {children}
        </div>
      </ModalOverflow>
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  ingradientCloseClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
}

export default Modal;
