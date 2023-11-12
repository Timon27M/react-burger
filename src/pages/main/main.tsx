import styles from "./main.module.css";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIsOpenedPopupOrder } from "../../services/selectors";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import OrderDetails from "../../components/order-details/order-details";
import Modal from "../../components/modal/modal";
import { TClosePopup } from "../../utils/types";
import { FC } from 'react';

const Main: FC<TClosePopup> = ({ closePopup }) => {
  const popupOrderIsOpened = useSelector(getIsOpenedPopupOrder);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
      <>
      {popupOrderIsOpened && (
        <Modal closePopup={closePopup}>
          <OrderDetails />
        </Modal>
      )}
      </>
    </DndProvider>
  );
}

export default Main;
