import { FC } from 'react';
import styles from './orders-board.module.css';

// pending, created, done 152

type TOrdersBoard = {
    title: string,
    orders: Array<number | null>
}

const OrdersBoard: FC<TOrdersBoard> = ({ title, orders }) => {
    return (
        <div className={`${styles.OrdersBoard}`}>
            <p className='mb-6 text text_type_main-medium'>{title}:</p>
            <div className={`${styles.orders}`}>
                {
                orders.map((item) => {
                    return (
                        <p key={item} className={`text text_type_digits-default ${title === 'Готовы' && styles.orderNumber}`}>{item}</p>
                    )
                })
                }
            </div>
        </div>
    )
}

export default OrdersBoard;