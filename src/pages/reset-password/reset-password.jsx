import styles from "./reset-password.module.css";
import ComponentAuth from "../../components/component-auth/component-auth";
import {
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div>
      <ComponentAuth
        title="Восстановление пароля"
        textButton="Сохранить"
        formName="formResetPassword"
      >
        <PasswordInput placeholder={"Введите новый пароль"} type={"password"}/>
        <Input type={"text"} placeholder={"Введите код из письма"} extraClass="mt-6" />
      </ComponentAuth>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default ResetPassword;
