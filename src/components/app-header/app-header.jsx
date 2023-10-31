import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AppHeader() {
  const [pathname, setPathname] = useState("");

  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to={"/"} className={`${styles.link}`}>
          <BurgerIcon type={`${pathname === "/" ? "primary" : "secondary"}`} />
          <p
            className={`p-2 text text_type_main-default ${
              pathname !== "/" ? "text_color_inactive" : ""
            }`}
          >
            Конструктор
          </p>
        </NavLink>
        <NavLink to={"/orders"} className={`${styles.link}`}>
          <ListIcon
            type={`${pathname === "/orders" ? "primary" : "secondary"}`}
          />
          <p
            className={`p-2 text text_type_main-default ${
              pathname !== "/orders" ? "text_color_inactive" : ""
            }`}
          >
            Лента заказов
          </p>
        </NavLink>
      </div>
      <Link to='/' className={styles.logo}>
        <Logo />
      </Link>
      <NavLink to={"/profile/"} className={`${styles.link}`}>
        <ProfileIcon
          type={`${
            pathname === "/profile/" || pathname === "/profile/orders"
              ? "primary"
              : "secondary"
          }`}
        />
        <p
          className={`p-2 text text_type_main-default ${
            pathname !== "/profile/" && pathname !== "/profile/orders"
              ? "text_color_inactive"
              : ""
          }`}
        >
          Личный кабинет
        </p>
      </NavLink>
    </header>
  );
}

export default AppHeader;
