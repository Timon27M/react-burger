import styles from "./burgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import ingredientsApi from "../../utils/ingredientsApi";
import IngradientCard from "../ingradientCard/ingradientCard";

function BurgerIngredients() {
  const [current, setCurrent] = useState("");
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    ingredientsApi.getIngradients()
    .then((res) => {
        console.log(res.data)
        setIngredients(res.data)
    })
  }, [])

  return (
    <div className={styles.root}>
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
            <h3 className={`text text_type_main-medium mb-6 ${styles.titleIngradient}`}>Булки</h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
                if (item.type === 'bun') {
                  return <IngradientCard image={item.image} price={item.price} name={item.name}/>
                }
            })}
          </div>
            <h3 className={`text text_type_main-medium mt-10 mb-6 ${styles.titleIngradient}`}>Соусы</h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
                if (item.type === 'sauce') {
                  return <IngradientCard image={item.image} price={item.price} name={item.name}/>
                }
            })}
          </div>
            <h3 className={`text text_type_main-medium mt-10 mb-6 ${styles.titleIngradient}`}>Начинки</h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
                if (item.type === 'main') {
                  return <IngradientCard image={item.image} price={item.price} name={item.name}/>
                }
            })}
          </div>
          </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
