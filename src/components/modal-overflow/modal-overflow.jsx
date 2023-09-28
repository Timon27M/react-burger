import styles from "./modal-overflow.module.css";
import { useEffect } from "react";
import PropTypes from 'prop-types';

function ModalOverflow({ children, closePopup }) {

  return (
    <div className={styles.popup} onClick={closePopup}>
      {children}
    </div>
  );
}

ModalOverflow.propTypes = {
   children: PropTypes.element.isRequired,
   closePopup: PropTypes.func.isRequired
}

export default ModalOverflow;
