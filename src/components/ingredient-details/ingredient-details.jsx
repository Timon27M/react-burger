import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getIngredients,
} from "../../services/selectors";

function IngredientDetails() {
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const ingredients = useSelector(getIngredients);

  const { id } = useParams();
  
  useEffect(() => {
    const ingredient = ingredients.find((ingredient) => {
      return ingredient._id === id;
    });
    console.log(ingredients);
    console.log(ingredient);
    console.log(id);

    setSelectedIngredient(ingredient)
  }, [ingredients]);

  return (
    <>
    {!ingredients ? ('') : 
    <>
      <h2 className="mt-3 text text_type_main-large">Детали ингредиента</h2>
      <div className={styles.content}>
        <img
          className={`mt-3 ${styles.image}`}
          src={selectedIngredient.image}
          alt={`картинка ${selectedIngredient.name}`}
        />
        <p className="mt-4 text text_type_main-medium">
          {selectedIngredient.name}
        </p>
        <div className={`mt-8 ${styles.blockData}`}>
          <div className={styles.blockInfo}>
            <p className="text text_type_main-default text_color_inactive">
              Калории, ккал
            </p>
            <p className="mt-2 text text_type_digits-default text_color_inactive">
              {selectedIngredient.calories}
            </p>
          </div>
          <div className={styles.blockInfo}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="mt-2 text text_type_digits-default text_color_inactive">
              {selectedIngredient.proteins}
            </p>
          </div>
          <div className={styles.blockInfo}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="mt-2 text text_type_digits-default text_color_inactive">
              {selectedIngredient.fat}
            </p>
          </div>
          <div className={styles.blockInfo}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="mt-2 text text_type_digits-default text_color_inactive">
              {selectedIngredient.carbohydrates}
            </p>
          </div>
        </div>
      </div>
      </>
  }
    </>
  );
}

export default IngredientDetails;
