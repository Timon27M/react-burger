import styles from './modal-overflow.module.css';
import { useEffect } from 'react';

function ModalOverflow(props) {
    useEffect(() => {
        const onEscKeydown = (evt) => {
          if (evt.key === "Escape") {
            props.closePopup();
          }
        };
        document.addEventListener("keydown", onEscKeydown);
    
        return () => document.removeEventListener("keydown", onEscKeydown);
      }, [props]);

    return (
        <div className={styles.popup} onClick={props.closePopup}>
            {props.children}
        </div>
    )
}

export default ModalOverflow;