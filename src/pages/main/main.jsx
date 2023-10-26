import styles from "./main.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIsOpenedPopupOrder } from "../../services/selectors";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import OrderDetails from "../../components/order-details/order-details";
import Modal from "../../components/modal/modal";

function Main({ closePopup }) {
  const popupOrderIsOpened = useSelector(getIsOpenedPopupOrder);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
      {popupOrderIsOpened && (
        <Modal closePopup={closePopup}>
          <OrderDetails />
        </Modal>
      )}
    </DndProvider>
  );
}

Main.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default Main;
