import { getUserOrders } from '../../../services/selectors';
import { useSelector } from '../../../utils/type-hooks';
import Order from '../order/order';
import styles from './orders-history.module.css';
import { useEffect } from 'react';

const OrdersHistory = () => {

    const wsUserOrders = useSelector(getUserOrders);

    useEffect(() => {
        console.log(wsUserOrders)
    })

    
    return (
        <div className={`mt-10 ml-15 pr-3 ${styles.container}`}>
            {wsUserOrders !== undefined && (wsUserOrders.map((item) => {
                return (
                    <Order status={item.status} name={item.name} number={item.number} ingredients={item.ingredients} date={item.createdAt} />
                )
            }).reverse())}
        </div>
    )
}

export default OrdersHistory;