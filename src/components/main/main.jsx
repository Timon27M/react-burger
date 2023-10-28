import styles from "./main.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngradients } from "../../services/actions/ingradients";
import {
  getIsOpenedPopupIngradient,
  getIsOpenedPopupOrder,
} from "../../services/selectors";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import ingredientsApi from "../../utils/ingredientsApi";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { closeIngredientPopup } from "../../services/actions/ingradient-details";
import { closeOrderPopup } from "../../services/actions/order";

function Main() {
  const dispatch = useDispatch();
  const closePopup = () => {
    dispatch(closeIngredientPopup());
    dispatch(closeOrderPopup());
  };

  useEffect(() => {
    dispatch(getIngradients(ingredientsApi));
  }, [dispatch]);

  const popupIngredientIsOpened = useSelector(getIsOpenedPopupIngradient);
  const popupOrderIsOpened = useSelector(getIsOpenedPopupOrder);

  return (
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <div className={styles.container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
        {popupOrderIsOpened && (
          <Modal closePopup={closePopup}>
            <OrderDetails />
          </Modal>
        )}
        {popupIngredientIsOpened && (
          <Modal closePopup={closePopup}>
            <IngredientDetails />
          </Modal>
        )}
      </DndProvider>
  );
}

export default Main;
