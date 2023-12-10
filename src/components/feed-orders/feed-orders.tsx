import styles from "./feed-orders.module.css";
import Order from "../app/order/order";
import { useSelector } from "../../utils/type-hooks";
import { getWSOrders } from "../../services/selectors";

function FeedOrders() {
  const wsOrders = useSelector(getWSOrders);

  return (
    <div className={`${styles.container}`}>
      <h2 className={`mb-5 text text_type_main-large ${styles.title}`}>
        Лента заказов
      </h2>
      <div className={`pr-4 ${styles.contant}`}>
        <>
          {wsOrders.map((item) => {
            return (
              <Order
                key={item._id}
                status={item.status}
                name={item.name}
                number={item.number}
                ingredients={item.ingredients}
                date={item.createdAt}
              />
            );
          })}
        </>
      </div>
    </div>
  );
}

export default FeedOrders;
