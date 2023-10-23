import styles from "./main.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getIngradients } from "../../services/actions/ingredients";
import {
  getIsOpenedPopupIngradient,
  getIsOpenedPopupOrder,
} from "../../services/selectors";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import ingredientsApi from "../../utils/ingredientsApi";
import OrderDetails from "../../components/order-details/order-details";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";

function Main({ closePopup }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngradients(ingredientsApi));
  }, [dispatch]);

  const popupIngredientIsOpened = useSelector(getIsOpenedPopupIngradient);
  const popupOrderIsOpened = useSelector(getIsOpenedPopupOrder);

  return (
    <DndProvider backend={HTML5Backend}>
      {/* <AppHeader /> */}
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
