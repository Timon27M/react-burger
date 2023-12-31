import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-scroll";
import { useSelector } from "../../utils/type-hooks";
import { useState, useRef } from "react";
import IngradientCard from "../ingradient-card/ingradient-card";
import { TIngradientObj } from "../../utils/types";
import { getIngredients } from "../../services/selectors";

const BurgerIngredients = () => {
  const [current, setCurrent] = useState("Булки");
  const ingredients: Array<TIngradientObj> = useSelector(getIngredients);

  const containerRef = useRef<HTMLDivElement>(null);

  const bunRef = useRef<HTMLHeadingElement>(null);
  const sauceRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLHeadingElement>(null);

  function handleScroll() {
    if (
      containerRef.current &&
      bunRef.current &&
      sauceRef.current &&
      mainRef.current
    ) {
      const bunDistance = Math.abs(
        bunRef.current.getBoundingClientRect().top -
          containerRef.current.getBoundingClientRect().top
      );

      const mainDistance = Math.abs(
        mainRef.current.getBoundingClientRect().top -
          containerRef.current.getBoundingClientRect().top
      );

      const sauceDistance = Math.abs(
        sauceRef.current.getBoundingClientRect().top -
          containerRef.current.getBoundingClientRect().top
      );

      if (bunDistance < sauceDistance && bunDistance < mainDistance) {
        setCurrent("Булки");
      } else if (sauceDistance < mainDistance && sauceDistance < bunDistance) {
        setCurrent("Соусы");
      } else if (mainDistance < bunDistance && mainDistance < sauceDistance) {
        setCurrent("Начинки");
      }
    }
  }

  return (
    <section className={styles.root}>
      <div className={`mt-10 mr-5 ${styles.mainContent}`}>
        <h2 className={`text text_type_main-large ${styles.title} mb-5`}>
          Соберите бургер
        </h2>
        <div className={styles.navBar}>
          <Link
            to="bun"
            spy={true}
            smooth={true}
            offset={5}
            duration={0}
            onSetActive={() => setCurrent("Булки")}
            containerId="containerElement"
          >
            <Tab
              value="Булки"
              active={current === "Булки"}
              onClick={setCurrent}
            >
              Булки
            </Tab>
          </Link>
          <Link
            to="sauce"
            spy={true}
            smooth={true}
            offset={5}
            duration={0}
            onSetActive={() => setCurrent("Соусы")}
            containerId="containerElement"
          >
            <Tab
              value="Соусы"
              active={current === "Соусы"}
              onClick={setCurrent}
            >
              Соусы
            </Tab>
          </Link>
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={5}
            duration={0}
            onSetActive={() => setCurrent("Начинки")}
            containerId="containerElement"
          >
            <Tab
              value="Начинки"
              active={current === "Начинки"}
              onClick={setCurrent}
            >
              Начинки
            </Tab>
          </Link>
        </div>
        <div
          className={`mt-10 ${styles.modalBlock}`}
          onScroll={handleScroll}
          id="containerElement"
          ref={containerRef}
        >
          <h3
            className={`text text_type_main-medium mb-6 ${styles.titleIngradient}`}
            id="bun"
            ref={bunRef}
          >
            Булки
          </h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
              if (item.type === "bun") {
                return (
                  <IngradientCard
                    key={item._id}
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
            id="sauce"
            ref={sauceRef}
          >
            Соусы
          </h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
              if (item.type === "sauce") {
                return (
                  <IngradientCard
                    key={item._id}
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
            id="main"
            ref={mainRef}
          >
            Начинки
          </h3>
          <div className={styles.container}>
            {ingredients.map((item) => {
              if (item.type === "main") {
                return (
                  <IngradientCard
                    key={item._id}
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
};

export default BurgerIngredients;
