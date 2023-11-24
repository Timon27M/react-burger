import styles from "./order.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientLogo from "../../ingredient-logo/ingredient-logo";
import img from '../../../images/core.png'

function Order() {
  const today = new Date();

  const arr = [
    {
      link: img
    },
    {
      link: img
    },
    {
      link: img
    },
    {
      link: img
    },
    {
      link: img
    },
    {
      link: img
    },
    {
      link: img
    },
    {
      link: img
    },

  ];

  const count: number | undefined = arr.length - 5 > 0 ? arr.length - 5 : undefined

  return (
    <div className={`p-6 mb-4 ${styles.order}`}>
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
      <h2 className={`mt-6 mb-6 text text_type_main-medium`}>
        Death Star Starship Main бургер
      </h2>
      <div className={`pl-5 ${styles.container}`}>
        {arr.map((item, index: number) => {
          if (index < 5) {
          let last;
          if (count !== undefined && index === 4) {
            last = true;
          }
            return (
             <IngredientLogo count={count} last={last} link={item.link}/>
           )
          }
         })}
      </div>
    </div>
  );
}

export default Order;
