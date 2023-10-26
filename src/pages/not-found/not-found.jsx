import styles from "./not-found.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1, {replace: true})
  }

  return (
    <div className={`mt-30`}>
      <div>
        <p className={`text text text_type_main-large' ${styles.statusText}`}>
          404
        </p>
        <p className="text text_type_main-large">Страницы не существует</p>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            extraClass={`mt-10 text text text_type_main-medium ${styles.button}`}
            onClick={handleClick}
          >
            Назад
          </Button>
      </div>
    </div>
  );
}

export default NotFound;
