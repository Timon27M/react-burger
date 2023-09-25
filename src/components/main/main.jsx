import styles from './main.module.css'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burgerIngredients/burgerIngredients";
import BurgerConstructor from '../burgerConstructor/burgerConstructor';

function Main() {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
      <BurgerIngredients />
      <BurgerConstructor count={1234}/>
      </div>
    </>
  );
}

export default Main;
