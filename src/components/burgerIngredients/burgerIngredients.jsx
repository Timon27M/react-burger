import styles from "./burgerIngredients.module.css";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector, useDispatch} from 'react-redux';
import { ingradientsTypes } from "../../utils/constants";
import { getBurgerConstructorIngradients } from "../../services/selectors";
import { addIngredientPopup } from "../../services/actions/ingradientDetails";
import { addIngredient, updateTotalPrice, deleteIngredient } from "../../services/actions/burgerConstructor";
import { useState } from "react";
import IngradientCard from "../ingradientCard/ingradientCard";
import { ADD_INGREDIENT } from "../../services/actions/burgerConstructor";

function BurgerIngredients() {
  const [current, setCurrent] = useState("Булки");
  const dispatch = useDispatch();
  const ingredientsConstructor = useSelector(getBurgerConstructorIngradients)

  const openIngradientPopup = (ingradient) => {
    dispatch(addIngredientPopup(ingradient))
  }

  function onAdd(ingredientObj) {
    if (ingredientObj.type === 'bun') {
      ingredientsConstructor.some((item) => {
         if (item.type === 'bun') {
          dispatch(deleteIngredient(item.uniqId))
         }
      })
    }
      dispatch(addIngredient(ingredientObj))
      dispatch(updateTotalPrice())
  }

  const ingredients = useSelector(state => state.ingredients.ingredients);

  return (
    <section className={styles.root}>
      <div className={`mt-10 mr-5 ${styles.mainContent}`}>
        <h2 className={`text text_type_main-large ${styles.title} mb-5`}>
          Соберите бургер
        </h2>
        <div className={styles.navBar}>
          <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab
            value="Начинки"
            active={current === "Начинки"}
            onClick={setCurrent}
          >
            Начинки
          </Tab>
        </div>
        <div className={`mt-10 ${styles.modalBlock}`}>
          <h3
            className={`text text_type_main-medium mb-6 ${styles.titleIngradient}`}
          >
            Булки
          </h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
              if (item.type === "bun") {
                return (
                  <IngradientCard
                    key={item._id}
                    ingradientClick={openIngradientPopup}
                    // ingradientClick={onAdd}
                    ingradient={item}
                    image={item.image}
                    price={item.price}
                    name={item.name}
                  />
                );
              }
            })}
          </div>
          <h3
            className={`text text_type_main-medium mt-10 mb-6 ${styles.titleIngradient}`}
          >
            Соусы
          </h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
              if (item.type === "sauce") {
                return (
                  <IngradientCard
                  key={item._id}
                    ingradientClick={openIngradientPopup}
                    // ingradientClick={onAdd}
                    ingradient={item}
                    image={item.image}
                    price={item.price}
                    name={item.name}
                  />
                );
              }
            })}
          </div>
          <h3
            className={`text text_type_main-medium mt-10 mb-6 ${styles.titleIngradient}`}
          >
            Начинки
          </h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
              if (item.type === "main") {
                return (
                  <IngradientCard
                  key={item._id}
                    ingradientClick={openIngradientPopup}
                    // ingradientClick={onAdd}
                    ingradient={item}
                    image={item.image}
                    price={item.price}
                    name={item.name}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingradientsTypes).isRequired,
};

export default BurgerIngredients;
