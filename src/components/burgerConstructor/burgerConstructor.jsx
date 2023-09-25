import styles from "./burgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor({ count }) {
  return (
    <section className={styles.root}>
      <div className={`mt-25 ml-10 ${styles.mainContent}`}>
        <div className={styles.container}>
          <div className={styles.elementStatic}>
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
          </div>
        </div>
        <div className={`mt-10 ${styles.blockPrice}`}>
          <p className={`text text_type_digits-medium ${styles.finalPrice}`}>
            {count} <CurrencyIcon type="primary" />
          </p>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
