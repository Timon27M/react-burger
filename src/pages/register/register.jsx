import styles from "./register.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ComponentAuth from "../../components/component-auth/component-auth";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <ComponentAuth
        title="Регистрация"
        textButton="Зарегистрироваться"
        formName="formRegister"
      >
        <Input placeholder={"Имя"} extraClass="mb-6" />
        <EmailInput
          error={false}
          isIcon={false}
          placeholder={"E-mail"}
          size={"default"}
          type={"email"}
          extraClass="mb-6"
        />
        <PasswordInput />
      </ComponentAuth>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Уже зарегистрированы?{" "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
