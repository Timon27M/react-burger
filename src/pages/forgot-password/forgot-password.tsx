import styles from "./forgot-password.module.css";
import ComponentAuth from "../../components/component-auth/component-auth";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/hooks";
import { forgotPassword } from "../../services/actions/current-user";
import { useDispatch } from "../../utils/type-hooks";
import { openResetPasswordPage } from "../../services/actions/reset-password";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { inputValues, handleChange } = useForm({
    email: "",
  });

  function callback() {
    dispatch(openResetPasswordPage())
    navigate("/reset-password", { replace: true });
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(forgotPassword(inputValues.email, callback));
  }

  return (
    <div>
      <ComponentAuth
        title="Восстановление пароля"
        textButton="Восстановить"
        formName="formForgotPassword"
        handleSubmit={handleSubmit}
      >
        <EmailInput
          value={inputValues.email}
          name="email"
          onChange={handleChange}
        />
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

export default ForgotPassword;
