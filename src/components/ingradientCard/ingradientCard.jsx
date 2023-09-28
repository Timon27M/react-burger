import styles from './ingradientCard.module.css';
import { CurrencyIcon, Counter  } from '@ya.praktikum/react-developer-burger-ui-components'

function IngradientCard({ image, price, name, count, ingradientClick, ingradient }) {
    function handleIngradient() {
        ingradientClick(ingradient)
    }

    return (
        <div className={styles.container} onClick={handleIngradient}>
            <img className={styles.image} src={image} alt="картинка" />
            <p className={`text text_type_digits-default m-2 ${styles.price}`}>{price} <CurrencyIcon type="primary"/></p>
            <p className={`text text_type_main-default ${styles.name}`}>{name}</p>
            {count > 0 && (
                <Counter count={0} size="default" extraClass="m-1"/>
            )}
        </div>
    )
}

export default IngradientCard;