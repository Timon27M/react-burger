import { getUserOrders } from '../../../services/selectors';
import { useSelector } from '../../../utils/type-hooks';
import styles from './orders-history.module.css';
import { useEffect } from 'react';

const OrdersHistory = () => {

    const wsOrders = useSelector(getUserOrders);

    useEffect(() => {
        console.log(wsOrders)
    })

    
    return (
        <div></div>
    )
}

export default OrdersHistory;