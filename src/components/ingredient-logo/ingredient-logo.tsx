import styles from "./ingredient-logo.module.css";

type TPropsIngredientLogo = {
  link?: string;
  last?: boolean;
  count?: number;
};

function IngredientLogo({ link, last, count }: TPropsIngredientLogo) {
  return (
    <div className={`${styles.container}`}>
      {count !== undefined && last === true ? (
        <>
          <p className={`text text_type_digits-default ${styles.count}`}>
            +{count}
          </p>
          <img className={`${styles.image}`} src={link} alt="лого" />
        </>
      ) : (
        <img className={`${styles.image}`} src={link} alt="лого" />
      )}
    </div>
  );
}

export default IngredientLogo;
