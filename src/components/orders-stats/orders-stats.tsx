import { FC } from 'react';
import styles from './orders-stats.module.css';

type TOrdersStats = {
    title: string,
    count: number
}

const OrdersStats: FC<TOrdersStats> = ({title, count}) => {
    return (
        <div className='mt-15'>
            <p className={`text text_type_main-medium ${styles.title}`}>{title}:</p>
            <p className='text text_type_digits-large'>{count}</p>
        </div>
    )
}

export default OrdersStats;