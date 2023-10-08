import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import { getSelectedIngradient } from '../../services/selectors';

function IngredientDetails() {
    const selectedIngredient = useSelector(getSelectedIngradient)
    return (
        <div className={styles.content}>
            <img className={`mt-3 ${styles.image}`} src={selectedIngredient.image} alt="картинка" />
            <p className='mt-4 text text_type_main-medium'>{selectedIngredient.name}</p>
            <div className={`mt-8 ${styles.blockData}`}>
                <div className={styles.blockInfo}>
                    <p className='text text_type_main-default text_color_inactive'>Калории, ккал</p>
                    <p className='mt-2 text text_type_digits-default text_color_inactive'>{selectedIngredient.calories}</p>
                </div>
                <div className={styles.blockInfo}>
                    <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
                    <p className='mt-2 text text_type_digits-default text_color_inactive'>{selectedIngredient.proteins}</p>
                </div>
                <div className={styles.blockInfo}>
                    <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
                    <p className='mt-2 text text_type_digits-default text_color_inactive'>{selectedIngredient.fat}</p>
                </div>
                <div className={styles.blockInfo}>
                    <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
                    <p className='mt-2 text text_type_digits-default text_color_inactive'>{selectedIngredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    selectedIngredient: PropTypes.object.isRequired
}

export default IngredientDetails;