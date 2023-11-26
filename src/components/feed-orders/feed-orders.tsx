import styles from "./feed-orders.module.css";
import Order from "../app/order/order";
import { useSelector } from "../../utils/type-hooks";
import { getWSOrders } from "../../services/selectors";

function FeedOrders() {
  const orders = useSelector(getWSOrders);

  return (
    <div className={`${styles.container}`}>
      <h2 className={`mb-5 text text_type_main-large ${styles.title}`}>
        Лента заказов
      </h2>
      <div className={`${styles.contant}`}>
        <>
        {orders.map((item) => {
          return (
            <Order name={item.name} number={item.number} ingredients={item.ingredients} date={item.createdAt} />
            )
        })}
        </>
      </div>
    </div>
  );
}

export default FeedOrders;
