import styles from "./reset-password.module.css";
import ComponentAuth from "../../components/component-auth/component-auth";
import {
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/hooks";
import { useDispatch, useSelector } from "../../utils/type-hooks";
import { resetPassword } from "../../services/actions/current-user";
import { getIsOpenResetPasswordPage } from "../../services/selectors";

function ResetPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpenResetPasswordPage = useSelector(getIsOpenResetPasswordPage);

  const { inputValues, handleChange } = useForm({
    password: "",
    token: "",
  });

  function callback() {
    navigate("/login", { replace: true });
  }

  function handleSubmit(evt: React.SyntheticEvent) {
    evt.preventDefault();

    dispatch(resetPassword(inputValues.password, inputValues.token, callback));
  }

  return (
    <>
    {!isOpenResetPasswordPage ? 
    ( <p className={`mt-30 text text_type_main-large`}>Страница недоступна</p>) : 
    (<div>
      <ComponentAuth
        title="Восстановление пароля"
        textButton="Сохранить"
        formName="formResetPassword"
        handleSubmit={handleSubmit}
      >
        <PasswordInput
          name="password"
          placeholder={"Введите новый пароль"}
          value={inputValues.password}
          onChange={handleChange}
        />
        <Input
          name="token"
          type={"text"}
          placeholder={"Введите код из письма"}
          extraClass="mt-6"
          value={inputValues.token}
          onChange={handleChange}
        />
      </ComponentAuth>
      <p className="mt-20 text text_type_main-default text_color_inactive">
        Вспомнили пароль?{" "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </p>
    </div>)
    }
    </>
  );
}

export default ResetPassword;
