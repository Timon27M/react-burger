import styles from "./profile.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/actions/current-user";
import { getCookie } from "../../utils/cookie";

function Profile() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    const refreshToken = getCookie("refreshToken");
    dispatch(logoutUser(refreshToken));
  }

  return (
    <div className={` ${styles.profile}`}>
      <div className={`mt-30 ${styles.container}`}>
        <nav className={`${styles.navLinks} text text_type_main-medium`}>
          <NavLink
            to={"/profile/"}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
          >
            Профиль
          </NavLink>
          {/* to={"/profile/orders"} */}
          <NavLink
          to={"/profile/orders"}
            className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
          >
            История заказов
          </NavLink>
          <NavLink
            to={'/login'}
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
