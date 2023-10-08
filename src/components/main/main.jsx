import styles from "./main.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getIngradients } from "../../services/actions/ingradients";
import { getIsOpenedPopupIngradient, getIsOpenedPopupOrder } from "../../services/selectors";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import ingredientsApi from "../../utils/ingredientsApi";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function Main() {
  // const [popupOrderIsOpened, setPopupOrderIsOpened] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngradients(ingredientsApi))
  }, [dispatch]);

  const popupIngredientIsOpened = useSelector(getIsOpenedPopupIngradient);
  const popupOrderIsOpened = useSelector(getIsOpenedPopupOrder);

  return (
    <>
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
        <Modal >
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}

export default Main;
