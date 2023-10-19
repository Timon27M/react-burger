import styles from './app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';


function AppHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
              <Link to={'/'} className={styles.link}><BurgerIcon type="primary" /><p className='text text_type_main-default p-2'>Конструктор</p></Link>
              <Link to={'/'} className={styles.link}><ListIcon type="secondary" /><p className='text text_type_main-default text_color_inactive p-2'>Лента заказов</p></Link>
            </div>
            <div className={styles.logo}>
              <Logo />
            </div>
            <Link to={'/profile'} className={styles.link}><ProfileIcon type="secondary" /><p className='text text_type_main-default text_color_inactive p-2'>Личный кабинет</p></Link>
        </header>
    );
}

export default AppHeader