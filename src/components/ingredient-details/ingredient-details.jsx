import styles from './ingredient-details.module.css';

function IngredientDetails({ selectedIngredient }) {
    return (
        <div className={styles.content}>
            <p>{selectedIngredient.name}</p>
        </div>
    )
}

export default IngredientDetails;