import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import styles from './main.module.css'

function Main() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
      <BurgerIngredients />
      </div>
    </>
  );
}

export default Main;
