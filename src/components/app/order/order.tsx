import styles from "./order.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

function Order() {
  const today = new Date();

  return (
    <div className={`p-6 ${styles.order}`}>
      <div className={`${styles.data}`}>
        <p className={`text text_type_digits-default`}>#034535</p>
        <div className={`text text_type_main-default text_color_inactive`}>
          <FormattedDate
            date={
              new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate(),
                today.getHours(),
                today.getMinutes() - 1,
                0
              )
            }
          />
        </div>
      </div>
      <h2 className={`mt-6 mb-6 text text_type_main-medium`}>Death Star Starship Main бургер</h2>
    </div>
  );
}

export default Order;
