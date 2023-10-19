import styles from './forgot-password.module.css';
import ComponentAuth from '../../components/component-auth/component-auth';
import {
    EmailInput
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { Link } from "react-router-dom";
function ForgotPassword() {
    return (
        <div>
            <ComponentAuth
            title='Восстановление пароля'
            textButton='Восстановить'
            formName='formForgotPassword'
            >
                <EmailInput type={"email"} />
            </ComponentAuth>
            <p className="mt-20 text text_type_main-default text_color_inactive">
            Вспомнили пароль?{" "}
        <Link className={styles.link} to="/login">
          Войти
        </Link>
        </p>
        </div>
    )
}

export default ForgotPassword;