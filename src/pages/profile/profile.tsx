import styles from "./profile.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "../../utils/type-hooks";
import { logoutUser } from "../../services/actions/current-user";

function Profile() {
  const dispatch = useDispatch();

  function handleClick(evt: React.SyntheticEvent) {
    evt.preventDefault();

    dispatch(logoutUser());
  }

  return (
    <div className={` ${styles.profile}`}>
      <div className={`mt-30 ${styles.container}`}>
        <nav className={`${styles.navLinks} text text_type_main-medium`}>
          <NavLink
            to={"/profile/"}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ""}`
            }
          >
            Профиль
          </NavLink>
          <NavLink
            to={"/profile/orders"}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ""}`
            }
          >
            История заказов
          </NavLink>
          <NavLink
            to={"/login"}
            className={`${styles.link}`}
            onClick={handleClick}
          >
            Выход
          </NavLink>
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
