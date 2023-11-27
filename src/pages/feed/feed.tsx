import styles from "./feed.module.css";
import FeedOrders from "../../components/feed-orders/feed-orders";
import OrdersInfo from "../../components/orders-info/orders-info";

function Feed() {
  return (
    <section className={`${styles.main}`}>
      <div className={`mt-10 ${styles.feedOrdersBlock}`}>
        <FeedOrders />
      </div>
      <div className={`mt-20 ${styles.ordersInfo}`}>
        <OrdersInfo />
      </div>
    </section>
  );
}

export default Feed;
