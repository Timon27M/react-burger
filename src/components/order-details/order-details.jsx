import { useSelector } from "react-redux";
import styles from "./order-details.module.css";
import orderDetailsImage from "../../images/orderDetailsImage.svg";
import { getNumberOrder } from "../../services/selectors";

function OrderDetails() {
  const numberOrder = useSelector(getNumberOrder);

  return (
    <div className={styles.content}>
      <h2 className={`mt-20 text text_type_digits-large ${styles.number}`}>
        {numberOrder}
      </h2>
      <p className={`mt-8 text text_type_main-medium ${styles.title}`}>
        идентификатор заказа
      </p>
      <img
        className={`mt-15 ${styles.image}`}
        src={orderDetailsImage}
        alt="картинка"
      />
      <p className={`mt-15 text text_type_main-default ${styles.subtitle}`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`mt-2 pb-20 text text_type_main-default text_color_inactive`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
