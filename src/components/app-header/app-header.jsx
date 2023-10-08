import styles from './app-header.module.css';
import { Link } from "react-router-dom";
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
              <a href='#' className={styles.link}><BurgerIcon type="primary" /><p className='text text_type_main-default p-2'>Конструктор</p></a>
              <a href='#' className={styles.link}><ListIcon type="secondary" /><p className='text text_type_main-default text_color_inactive p-2'>Лента заказов</p></a>
            </div>
            <div className={styles.logo}>
              <Logo />
            </div>
            <a href='#' className={styles.link}><ProfileIcon type="secondary" /><p className='text text_type_main-default text_color_inactive p-2'>Личный кабинет</p></a>
        </header>
    );
}

export default AppHeader