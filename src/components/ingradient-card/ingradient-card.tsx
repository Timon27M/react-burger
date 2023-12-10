import styles from "./ingradient-card.module.css";
import { useDrag } from "react-dnd/dist/hooks";
import { useSelector } from "../../utils/type-hooks";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { getBurgerConstructorIngradients } from "../../services/selectors";
import { useMemo, FC } from "react";
import { TIngradientObj } from "../../utils/types";

interface IIngradientCard {
  image: string;
  price: number;
  name: string;
  ingradient: TIngradientObj;
}

const IngradientCard: FC<IIngradientCard> = ({
  image,
  price,
  name,
  ingradient,
}) => {
  const location = useLocation();

  const constructorIngradients: Array<TIngradientObj> = useSelector(
    getBurgerConstructorIngradients
  );

  const count = useMemo(() => {
    const checkedIngradient = constructorIngradients.filter((item) => {
      return item._id === ingradient._id;
    });
    if (checkedIngradient.length > 0) {
      if (ingradient.type === "bun") {
        return 2;
      } else {
        return checkedIngradient.length;
      }
    }
  }, [constructorIngradients, ingradient]);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingradient,
  });

  return (
    <Link
      to={`/ingredient/${ingradient._id}`}
      state={{ background: location }}
      className={styles.container}
      ref={dragRef}
      data-test="ingredientItem"
    >
      <img className={styles.image} src={image} alt="картинка" />
      <p className={`text text_type_digits-default m-2 ${styles.price}`}>
        {price} <CurrencyIcon type="primary" />
      </p>
      <p className="m-0 text text_type_main-default" data-test='ingredientItemName'>{name}</p>
      {count && count > 0 && (
        <Counter count={count} size="default" extraClass="m-1" />
      )}
    </Link>
  );
};

export default IngradientCard;
