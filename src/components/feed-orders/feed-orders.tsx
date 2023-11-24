import styles from "./feed-orders.module.css";
import Order from "../app/order/order";

function FeedOrders() {
  return (
    <div className={`${styles.container}`}>
      <h2 className={`mb-5 text text_type_main-large ${styles.title}`}>
        Лента заказов
      </h2>
      <div className={`${styles.contant}`}>
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
}

export default FeedOrders;
