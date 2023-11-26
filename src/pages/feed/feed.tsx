import styles from "./feed.module.css";
import FeedOrders from "../../components/feed-orders/feed-orders";

function Feed() {
  return (
    <section className={`${styles.main}`}>
      <div className={`mt-10 ${styles.feedOrdersBlock}`}>
        <FeedOrders />
      </div>
      <div className={`${styles.ordersInfo}`}>
        
      </div>
    </section>
  );
}

export default Feed;
