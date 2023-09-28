import styles from "./burgerIngredients.module.css";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import IngradientCard from "../ingradientCard/ingradientCard";

function BurgerIngredients({ clickIngradientOpen, ingredients }) {
  const [current, setCurrent] = useState("Булки");

  return (
    <section className={styles.root}>
      <div className={styles.mainContent}>
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
        <div className={styles.modalBlock}>
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
                    ingradientClick={clickIngradientOpen}
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
                    ingradientClick={clickIngradientOpen}
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
                    ingradientClick={clickIngradientOpen}
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
  clickIngradientOpen: PropTypes.func.isRequired,
  ingredients: PropTypes.object,
};

export default BurgerIngredients;
