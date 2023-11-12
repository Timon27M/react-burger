import styles from "./register.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/hooks";
import { registerUser } from "../../services/actions/current-user";
import ComponentAuth from "../../components/component-auth/component-auth";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();

  const { inputValues, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(registerUser(inputValues));
  }

  return (
    <div>
      <ComponentAuth
        title="Регистрация"
        textButton="Зарегистрироваться"
        formName="formRegister"
        handleSubmit={handleSubmit}
      >
        <Input
          placeholder={"Имя"}
          value={inputValues.name}
          onChange={handleChange}
          extraClass="mb-6"
          name="name"
        />
        <EmailInput
          error={false}
          isIcon={false}
          placeholder={"E-mail"}
          size={"default"}
          type={"email"}
          name={"email"}
          value={inputValues.email}
          onChange={handleChange}
          extraClass="mb-6"
        />
        <PasswordInput
          name={"password"}
          value={inputValues.password}
          onChange={handleChange}
        />
      </ComponentAuth>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Уже зарегистрированы?{" "}
        <Link className={styles.link} type="submit" to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;
