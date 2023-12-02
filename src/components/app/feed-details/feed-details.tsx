import { useParams } from "react-router-dom";
import styles from "./feed-details.module.css";
import { useEffect, useState } from "react";
import api from "../../../utils/api";
import { TIngradientObj, TOrder } from "../../../utils/types";
import { useSelector } from "../../../utils/type-hooks";
import { getIngredients } from "../../../services/selectors";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

function FeedDetails() {
  const { number } = useParams();

  const ingredientsAll = useSelector(getIngredients);

  const [price, setPrice] = useState(0);

  const [ingredients, setIngredients] = useState<
    Array<TIngradientObj | undefined>
  >([]);

  const [order, setOrder] = useState<TOrder | null>(null);

  useEffect(() => {
    if (number && ingredientsAll.length > 0) {
      api.getOrder(number).then((res) => {
        res.orders.map((item) => {
          setOrder(item);
        });
      });
    }
  }, [ingredientsAll]);

  useEffect(() => {
    if (order) {
      if (order) {
        let newPrice: number = 0;
        const orderIngredients = order.ingredients.map((ingredient) => {
          return ingredientsAll.find((item) => {
            if (item._id === ingredient) {
              newPrice += item.price
              return item;
            }
          });
        });
        setPrice(newPrice);
        const uniqOrderIngredients = new Set(orderIngredients)
        setIngredients(Array.from(uniqOrderIngredients));

      }
    }
  }, [order, ingredientsAll]);

  return (
    <>
      {order && ingredients && ingredients.length > 0 && (
        <div className={`${styles.container}`}>
          <p className={`text text_type_digits-default mt-4`}>
            #{order.number}
          </p>
          <h2
            className={`mt-10 text text_type_main-medium mt-10 ${styles.info}`}
          >
            {order.name}
          </h2>

          {order.status === "created" && (
            <p className={`text text_type_main-default mt-3 ${styles.info}`}>
              Создан
            </p>
          )}
          {order.status === "pending" && (
            <p className={`text text_type_main-default mt-3 ${styles.info}`}>
              Готовится
            </p>
          )}
          {order.status === "done" && (
            <p
              className={`text text_type_main-default mt-3 ${styles.info} ${styles.textDone}`}
            >
              Выполнен
            </p>
          )}

          <p className={`text text_type_main-medium mt-15 mb-6 ${styles.info}`}>
            Состав:
          </p>
          <div className={`${styles.contant} pr-2`}>
            {ingredients.map((item) => {
             const total = order.ingredients.filter((ingredient) => ingredient === item?._id).length;
              if (item) {
                return (
                  <div key={item._id} className={`${styles.ingradient} mt-4`}>
                    <img
                      className={`${styles.image}`}
                      src={item.image}
                      alt="picture"
                    />
                    <p
                      className={`text text_type_main-default ml-4 ${styles.name}`}
                    >
                      {item.name}
                    </p>
                    <p className={`text text_type_digits-default ml-4 ${styles.total}`}>
                      {total} x {item.price} <CurrencyIcon type="primary" />
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className={`${styles.footer} mt-8 mb-8`}>
            <p className="text text_type_main-default text_color_inactive">
              <FormattedDate date={new Date(order.createdAt)} />
            </p>
            <p className={`text text_type_digits-default`}>
              {price} <CurrencyIcon type="primary" />
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedDetails;
