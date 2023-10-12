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

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngradients(ingredientsApi));
  }, [dispatch]);

  const popupIngredientIsOpened = useSelector(getIsOpenedPopupIngradient);
  const popupOrderIsOpened = useSelector(getIsOpenedPopupOrder);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <AppHeader />
        <div className={styles.container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </div>
        {popupOrderIsOpened && (
          <Modal>
            <OrderDetails />
          </Modal>
        )}
        {popupIngredientIsOpened && (
          <Modal>
            <IngredientDetails />
          </Modal>
        )}
      </DndProvider>
    </>
  );
}

export default Main;
