import styles from "./profile.module.css";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div className={` ${styles.profile}`}>
      <div className={`mt-30 ${styles.container}`}>
        <nav className={`${styles.navLinks} text text_type_main-medium`}>
          <Link to={"/profile"} className={`${styles.link}`}>
            Профиль
          </Link>
          <Link to={"/profile/orders"} className={`${styles.link}`}>
            История заказов
          </Link>
          <Link className={`${styles.link}`}>Выход</Link>
        </nav>
        <p
          className={`mt-20 text text_type_main-default text_color_inactive ${styles.text}`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      {/* <div> */}
        <Outlet />
      {/* </div> */}
    </div>
  );
}

export default Profile;
