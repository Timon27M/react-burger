import { WS_USER_ORDERS_CONNECTION_CLOSED, WS_USER_ORDERS_CONNECTION_START } from "../../../services/actions/ws-user-orders";
import { getUserOrders } from "../../../services/selectors";
import { useDispatch, useSelector } from "../../../utils/type-hooks";
import Order from "../order/order";
import styles from "./orders-history.module.css";
import { useEffect } from 'react';

const OrdersHistory = () => {
  const wsUserOrders = useSelector(getUserOrders);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: WS_USER_ORDERS_CONNECTION_START})

    return () => {
      dispatch({type: WS_USER_ORDERS_CONNECTION_CLOSED})
    }
  }, [])

  return (
    <div className={`mt-10 ml-15 pr-3 ${styles.container}`}>
      {wsUserOrders !== undefined &&
        wsUserOrders
          .map((item) => {
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
          })
          .reverse()}
    </div>
  );
};

export default OrdersHistory;
