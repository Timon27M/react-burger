import styles from "./login.module.css";
import ComponentAuth from "../component-auth/component-auth";
import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <ComponentAuth title="Вход" textButton="Войти" formName="formLogin">
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
      <p className="mt-20 text text_type_main-default text_color_inactive">Вы — новый пользователь? <Link className={styles.link} to='/register'>Зарегистрироваться</Link></p>
      <p className="mt-4 text text_type_main-default text_color_inactive">Забыли пароль? <Link className={styles.link} to='/'>Восстановить пароль</Link></p>
    </div>
  );
}

export default Login;
