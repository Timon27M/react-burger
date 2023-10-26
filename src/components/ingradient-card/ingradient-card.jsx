import styles from "./ingradient-card.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd/dist/hooks";
import { useSelector } from "react-redux";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { getBurgerConstructorIngradients } from "../../services/selectors";
import { useMemo } from "react";

function IngradientCard({ image, price, name, ingradient }) {
  const location = useLocation();

  const constructorIngradients = useSelector(getBurgerConstructorIngradients);

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
    >
      <img className={styles.image} src={image} alt="картинка" />
      <p className={`text text_type_digits-default m-2 ${styles.price}`}>
        {price} <CurrencyIcon type="primary" />
      </p>
      <p className="m-0 text text_type_main-default">{name}</p>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
    </Link>
  );
}

IngradientCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
  ingradient: PropTypes.object.isRequired,
};

export default IngradientCard;
