import styles from "./burger-constructor.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd/dist/hooks";
import BurgerConstructorCard from "../burger-constructor-card/burger-constructor-card";
import {
  getBurgerConstructorIngradients,
  getTotalPice,
} from "../../services/selectors";
import {
  deleteIngredient,
  updateTotalPrice,
} from "../../services/actions/burger-constructor";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { addIngredient } from "../../services/actions/burger-constructor";
import ingredientsApi from "../../utils/ingredientsApi";
import { getOrder } from "../../services/actions/order";

function BurgerConstructor() {
  const [ingradientBun, setIngradientBun] = useState(null);
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPice);

  const ingredientsConstructor = useSelector(getBurgerConstructorIngradients);

  useEffect(() => {
    ingredientsConstructor.map((item) => {
      if (item.type === "bun") {
        setIngradientBun(item);
      }
    });
  }, [ingredientsConstructor]);

  const clickOrderButton = () => {
    const ingradientsOrderId = [...ingredientsConstructor].map((item) => {
      return item._id;
    });
    const ingradientsObj = {
      ingredients: ingradientsOrderId,
    };
    dispatch(getOrder(ingredientsApi, ingradientsObj));
  };

  function onDeleteIngredient(uniqId) {
    dispatch(deleteIngredient(uniqId));
    dispatch(updateTotalPrice());
  }

  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      if (ingredient.type === "bun") {
        ingredientsConstructor.some((item) => {
          if (item.type === "bun") {
            dispatch(deleteIngredient(item.uniqId));
          }
        });
      }
      dispatch(addIngredient(ingredient));
      dispatch(updateTotalPrice());
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const backgroundOpacity = isHover ? styles.backgroundOpacity : "";

  return (
    <section className={styles.root}>
      <div
        className={`mt-25 ml-10 ${styles.mainContent} ${backgroundOpacity}`}
        ref={drop}
      >
        {ingredientsConstructor.length > 0 ? (
          <div className={styles.container}>
            {ingradientBun && (
              <div className={`pl-8 pr-4`}>
                <ConstructorElement
                  key={ingradientBun.uniqId}
                  type="top"
                  isLocked={true}
                  text={`${ingradientBun.name} (верх)`}
                  price={ingradientBun.price}
                  thumbnail={ingradientBun.image}
                />
              </div>
            )}

            <div className={styles.elementsDynamic}>
              {ingredientsConstructor.map((item, index) => {
                if (item.type === "main" || item.type === "sauce") {
                  return (
                    <BurgerConstructorCard index={index} key={item.uniqId}>
                      <div className={styles.elementDynamic}>
                        <button className={`mr-2 ${styles.buttonList}`}>
                          <DragIcon type="primary" />
                        </button>
                        <ConstructorElement
                          key={item.uniqId}
                          text={item.name}
                          price={item.price}
                          thumbnail={item.image}
                          handleClose={() => onDeleteIngredient(item.uniqId)}
                        />
                      </div>
                    </BurgerConstructorCard>
                  );
                }
              })}
            </div>

            {ingradientBun && (
              <div className={`pl-8 pr-4`}>
                <ConstructorElement
                  key={ingradientBun.uniqId}
                  type="bottom"
                  isLocked={true}
                  text={`${ingradientBun.name} (низ)`}
                  price={ingradientBun.price}
                  thumbnail={ingradientBun.image}
                />
              </div>
            )}
          </div>
        ) : (
          <p className={`mt-10 text text_type_main-medium`}>
            Перетащите ингредиенты и булки для составления бургера
          </p>
        )}
        <div className={`mt-10 ${styles.blockPrice}`}>
          <p className={`text text_type_digits-medium ${styles.finalPrice}`}>
            {totalPrice} <CurrencyIcon type="primary" />
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

export default BurgerConstructor;
