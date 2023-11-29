import styles from "./order.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientLogo from "../../ingredient-logo/ingredient-logo";
import { useSelector } from "../../../utils/type-hooks";
import { FC } from "react";
import { TIngradientObj } from "../../../utils/types";
import { getIngredients } from "../../../services/selectors";

type TOrderComponent = {
  number: number;
  name: string;
  ingredients: Array<string>;
  date: string;
  status: string;
};

const Order: FC<TOrderComponent> = ({ status, number, name, ingredients, date }) => {
  const today = new Date();

  const allIngredients: Array<TIngradientObj> = useSelector(getIngredients);

  let orderPrice: number = 0;

  const iconIngredients: (TIngradientObj | undefined)[] = ingredients.map(
    (ingredient) => {
      const iconIngredient = allIngredients.find((item) => {
        if (item._id === ingredient) {
          if (item.type === "bun") {
            orderPrice += item.price * 2;
          } else {
            orderPrice += item.price;
          }
          return item;
        }
      });

      return iconIngredient;
    }
  );

  const count: number | undefined =
    iconIngredients.length - 5 > 0 ? iconIngredients.length - 5 : undefined;

  return (
    <div className={`p-6 mb-4 ${styles.order}`}>
      <div className={`${styles.data}`}>
        <p className={`text text_type_digits-default`}>{number}</p>
        <div className={`text text_type_main-default text_color_inactive`}>
          <FormattedDate date={new Date(date)} />
        </div>
      </div>
      <h2 className={`mt-6 mb-2 text text_type_main-medium`}>{name}</h2>
      <div className={`text text_type_main-small mb-6`}>
        {status === 'created' && (
           <p>Создан</p>
        )}
        {status === 'pending' && (
           <p>Готовится</p>
        )}
        {status === 'done' && (
           <p className={`${styles.textDone}`}>Выполнен</p>
        )}
        </div>
      <div className={`${styles.content}`}>
        <div className={`pl-5 ${styles.container}`}>
          {iconIngredients.map(
            (item: TIngradientObj | undefined, index: number) => {
              if (index < 6) {
                let last;
                if (count !== undefined && index === 5) {
                  last = true;
                }
                if (item !== undefined) {
                  return (
                    <IngredientLogo
                      count={count}
                      last={last}
                      link={item.image}
                    />
                  );
                }
              }
            }
          )}

        </div>
        <span className={`${styles.price}`}>
          <p className="text text_type_digits-default mr-2">
          {orderPrice} 
          </p>
            <CurrencyIcon type="primary" />
        </span>
      </div>
    </div>
  );
};

export default Order;
