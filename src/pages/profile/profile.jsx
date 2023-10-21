import styles from "./profile.module.css";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/actions/current-user";

function Profile() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault()

    dispatch(logoutUser())
  }

  return (
    <div className={` ${styles.profile}`}>
      <div className={`mt-30 ${styles.container}`}>
        <nav className={`${styles.navLinks} text text_type_main-medium`}>
          <Link to={"/profile"} className={`${styles.link}`}>
            Профиль
          </Link>
          {/* to={"/profile/orders"} */}
          <Link className={`${styles.link}`}>
            История заказов
          </Link>
          <Link className={`${styles.link}`} onClick={handleClick}>Выход</Link>
        </nav>
        <p
          className={`mt-20 text text_type_main-default text_color_inactive ${styles.text}`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
        <Outlet />
    </div>
  );
}

export default Profile;
