import styles from "./login.module.css";
import ComponentAuth from "../../components/component-auth/component-auth";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/actions/current-user";
import { useForm } from "../../hooks/hooks";
import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();

  const { inputValues, handleChange } = useForm({
    email: "",
    password: "",
  });

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(loginUser(inputValues));
  }

  return (
    <div>
      <ComponentAuth
        handleSubmit={handleSubmit}
        title="Вход"
        textButton="Войти"
        formName="formLogin"
      >
        <EmailInput
          placeholder={"E-mail"}
          name="email"
          size={"default"}
          type={"email"}
          value={inputValues.email}
          onChange={() => handleChange}
          extraClass="mb-6"
        />
        <PasswordInput
          name="password"
          value={inputValues.password}
          onChange={() => handleChange}
        />
      </ComponentAuth>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вы — новый пользователь?{" "}
        <Link className={styles.link} to="/register">
          Зарегистрироваться
        </Link>
      </p>
      <p className="mt-4 text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <Link className={styles.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
}

export default Login;
