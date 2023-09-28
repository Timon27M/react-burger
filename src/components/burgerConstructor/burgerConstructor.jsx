import styles from "./burgerConstructor.module.css";
import { useState, useEffect } from "react";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor({ count, ingredients, clickOrderButton }) {
  const [ingradientBun, setIngradientBun] = useState({})   

  useEffect(() => {
    ingredients.map((item) => {
      if (item.type === 'bun') {
        setIngradientBun(item)
      }
    })
  }, [ingredients])


  return (
    <section className={styles.root}>
      <div className={`mt-25 ml-10 ${styles.mainContent}`}>
        <div className={styles.container}>
          {/* {ingredients.map((item) => {
            if (item.type === 'bun') { */}
               <div className={`pl-8 pr-4`}>
               <ConstructorElement
                type="top"
                isLocked={true}
                text={ingradientBun.name}
                price={ingradientBun.price}
                thumbnail={ingradientBun.image}
                />
             </div>
            {/* }})} */}

            <div className={styles.elementsDynamic}>
              {ingredients.map((item) => {
            if (item.type === 'main' || 'sause') {
             return (<div className={styles.elementDynamic}>
              <button className={`mr-2 ${styles.buttonList}`}>
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>)
            }})}
            </div>

            {/* {ingredients.map((item) => {
            if (item.type === 'bun') { */}
              <div className={`pl-8 pr-4`}>
               <ConstructorElement
                type="bottom"
                isLocked={true}
                text={ingradientBun.name}
                price={ingradientBun.price}
                thumbnail={ingradientBun.image}
                />
             </div>
            {/* }})} */}
            {/* // if (item.type === "bun") {
            //   return <ConstructorElement
            //     type="bottom"
            //     isLocked={true}
            //     text={item.name}
            //     price={item.price}
            //     thumbnail={item.image}
            //     />
            //     //  <div className={styles.elementStatic}>
            //   // </div>;
            // }
          // })} */}
          {/* <div className={styles.elementStatic}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/core.png"
            />
          </div>
          <div className={styles.elementsDynamic}>
            <div className={styles.elementDynamic}>
              <button className={`mr-2 ${styles.buttonList}`}>
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/core.png"
              />
            </div>
            <div className={styles.elementDynamic}>
              <button className={`mr-2 ${styles.buttonList}`}>
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/core.png"
              />
            </div>
            <div className={styles.elementDynamic}>
              <button className={`mr-2 ${styles.buttonList}`}>
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/core.png"
              />
            </div>
            <div className={styles.elementDynamic}>
              <button className={`mr-2 ${styles.buttonList}`}>
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/core.png"
              />
            </div>
            <div className={styles.elementDynamic}>
              <button className={`mr-2 ${styles.buttonList}`}>
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/core.png"
              />
            </div>
            <div className={styles.elementDynamic}>
              <button className={`mr-2 ${styles.buttonList}`}>
                <DragIcon type="primary" />
              </button>
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/core.png"
              />
            </div>
          </div>
          <div className={styles.elementStatic}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail="https://code.s3.yandex.net/react/code/core.png"
            />
        // </div>*/}
        </div>
        <div className={`mt-10 ${styles.blockPrice}`}>
          <p className={`text text_type_digits-medium ${styles.finalPrice}`}>
            {count} <CurrencyIcon type="primary" />
          </p>
          <Button htmlType="button" type="primary" size="large" onClick={clickOrderButton}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
