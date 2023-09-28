import styles from "./main.module.css";
import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import ingredientsApi from "../../utils/ingredientsApi";
import OrderDetails from "../order-details/order-details";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

function Main() {
  const [popupOrderIsOpened, setPopupOrderIsOpened] = useState(false);
  const [popupIngredientIsOpened, setPopupIngredientIsOpened] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    ingredientsApi.getIngradients().then((res) => {
      setIngredients(res.data);
    });
  }, []);

  function clickIngradientOpen(ingradient) {
    setPopupIngredientIsOpened(true);
    setSelectedIngredient(ingradient);
  }

  function clickOrderButton() {
    setPopupOrderIsOpened(true);
  }

  function ingradientCloseClick() {
    setPopupOrderIsOpened(false);
    setPopupIngredientIsOpened(false);
  }

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <BurgerIngredients
          clickIngradientOpen={clickIngradientOpen}
          ingredients={ingredients}
        />
        <BurgerConstructor
          count={1234}
          ingredients={ingredients}
          clickOrderButton={clickOrderButton}
        />
      </div>
      {popupOrderIsOpened && (
        <Modal ingradientCloseClick={ingradientCloseClick}>
          <OrderDetails />
        </Modal>
      )}
      {popupIngredientIsOpened && (
        <Modal ingradientCloseClick={ingradientCloseClick}>
          <IngredientDetails selectedIngredient={selectedIngredient} />
        </Modal>
      )}
    </>
  );
}

export default Main;
