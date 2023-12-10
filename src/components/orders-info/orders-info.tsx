import { getWSCount, getWSCountToday, getWSOrders } from "../../services/selectors";
import { useSelector } from "../../utils/type-hooks";
import OrdersBoard from "../orders-board/orders-board";
import OrdersStats from "../orders-stats/orders-stats";
import styles from "./orders-info.module.css";

function OrdersInfo() {
    const countToday = useSelector(getWSCountToday)
    const count = useSelector(getWSCount)

  const WSOrders = useSelector(getWSOrders);

  const ordersCreated: Array<number | null> = [];
  const ordersDone: Array<number | null> = [];

  WSOrders.forEach((item) => {
    if (item.status === "done") {
      ordersDone.push(item.number);
    } else {
      ordersCreated.push(item.number);
    }
  });

  return (
    <>
      <div className={`${styles.ordersBoards}`}>
        <OrdersBoard title={"Готовы"} orders={ordersDone} />
        <OrdersBoard title={"В работе"} orders={ordersCreated} />
      </div>
      <div className={`${styles.ordersInfo}`}>
        <OrdersStats title={'Выполнено за все время'} count={count}/>
        <OrdersStats title={'Выполнено за сегодня'} count={countToday}/>
      </div>
    </>
  );
}

export default OrdersInfo;
