import styles from "./burger-constructor.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "../../utils/type-hooks";
import { useDrop } from "react-dnd/dist/hooks";
import { nanoid } from "nanoid";
import BurgerConstructorCard from "../burger-constructor-card/burger-constructor-card";
import {
  getBurgerConstructorIngradients,
  getTotalPrice,
  getIsLoggedIn,
  getOrderLoading,
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
import { useNavigate } from "react-router-dom";
import { addIngredient } from "../../services/actions/burger-constructor";
import ingredientsApi from "../../utils/api";
import { getOrder } from "../../services/actions/order";
import { TIngradientObjConstructor } from "../../utils/types";

function BurgerConstructor() {
  const [ingradientBun, setIngradientBun] =
    useState<TIngradientObjConstructor | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = useSelector(getTotalPrice);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const orderIsLoading = useSelector(getOrderLoading);

  const ingredientsConstructor: Array<TIngradientObjConstructor> = useSelector(
    getBurgerConstructorIngradients
  );

  const classButton =
    ingredientsConstructor.length < 1 ? styles.buttonDisabled : "";

  useEffect(() => {
    ingredientsConstructor.map((item) => {
      if (typeof item === null) {
        return;
      }

      if (item.type === "bun") {
        setIngradientBun(item);
      }
    });
  }, [ingredientsConstructor]);

  const clickOrderButton = () => {
    if (isLoggedIn) {
      const ingradientsOrderId = [...ingredientsConstructor].map((item) => {
        return item._id;
      });
      const ingradientsId = {
        ingredients: ingradientsOrderId,
      };
      dispatch(getOrder(ingredientsApi, ingradientsId));
    } else {
      navigate("/login");
    }
  };

  function onDeleteIngredient(uniqId: string) {
    dispatch(deleteIngredient(uniqId));
    dispatch(updateTotalPrice());
  }

  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    drop(ingredient: TIngradientObjConstructor) {
      if (ingredient.type === "bun") {
        ingredientsConstructor.some((item) => {
          if (item.type === "bun") {
            dispatch(deleteIngredient(item.uniqId));
          }
        });
      }
      const newId = nanoid();
      dispatch(addIngredient(ingredient, newId));
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
        data-test="constructorContainer"
      >
        {ingredientsConstructor.length > 0 ? (
          <div className={styles.container} data-test="constructorBunTop">
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

            <div
              className={styles.elementsDynamic}
              data-test="constructorMainIngredients"
            >
              {ingredientsConstructor.map((item, index: number) => {
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
              <div className={`pl-8 pr-4`} data-test="constructorBunBottom">
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
            extraClass={classButton}
            onClick={clickOrderButton}
            disabled={ingredientsConstructor.length < 1 || orderIsLoading}
            data-test="submitOrderButton"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BurgerConstructor;
