import styles from "./feed.module.css";
import FeedOrders from "../../components/feed-orders/feed-orders";
import OrdersInfo from "../../components/orders-info/orders-info";
import { useDispatch } from "../../utils/type-hooks";
import { useEffect } from "react";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/ws-orders";

function Feed() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START });

        return () => {
            dispatch({type: WS_CONNECTION_CLOSED})
        }
    }, [])
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
