import styles from "./burgerConstructor.module.css";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor({ count, ingredients, clickOrderButton }) {
  const [ingradientBun, setIngradientBun] = useState({});

  useEffect(() => {
    ingredients.map((item) => {
      if (item.type === "bun") {
        setIngradientBun(item);
      }
    });
  }, [ingredients]);

  return (
    <section className={styles.root}>
      <div className={`mt-25 ml-10 ${styles.mainContent}`}>
        <div className={styles.container}>
          <div className={`pl-8 pr-4`}>
            <ConstructorElement
              key={ingradientBun._id}
              type="top"
              isLocked={true}
              text={ingradientBun.name}
              price={ingradientBun.price}
              thumbnail={ingradientBun.image}
            />
          </div>

          <div className={styles.elementsDynamic}>
            {ingredients.map((item) => {
              if (item.type === "main" || "sause") {
                return (
                  <div className={styles.elementDynamic} key={item._id}>
                    <button className={`mr-2 ${styles.buttonList}`}>
                      <DragIcon type="primary" />
                    </button>
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </div>
                );
              }
            })}
          </div>

          <div className={`pl-8 pr-4`}>
            <ConstructorElement
              key={ingradientBun._id}
              type="bottom"
              isLocked={true}
              text={ingradientBun.name}
              price={ingradientBun.price}
              thumbnail={ingradientBun.image}
            />
          </div>
        </div>
        <div className={`mt-10 ${styles.blockPrice}`}>
          <p className={`text text_type_digits-medium ${styles.finalPrice}`}>
            {count} <CurrencyIcon type="primary" />
          </p>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={clickOrderButton}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  count: PropTypes.number,
  ingredients: PropTypes.object,
  clickOrderButton: PropTypes.func.isRequired
}

export default BurgerConstructor;
