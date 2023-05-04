import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";
import { HashLink } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import BurgerMenu from './BurgerMenu/index';

const Header = () => {
    const info = useSelector(state => state?.info?.info)
    return (
        <header className={styles.header}>
            <div id='top' className={styles.header_block}>
                <div className={styles.logo_block}>
                    <NavLink to={'/'}><img src={`http://176.126.166.199:8000${info.logo}`} alt="e_motors_logo" /></NavLink>
                </div>
                <BurgerMenu />

                <nav className={styles.nav}>
                    <ul className={styles.menu}>
                        <li>
                            <NavLink to={'/'} className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            }>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            } to={'/catalog'}>
                                Каталог
                            </NavLink>
                        </li>
                        <li><HashLink to={'/#about-us'} className={styles.links} >О нас</HashLink></li>
                        <li><Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            activeClass={'active'}
                            duration={1500} className={styles.links} to='contacts'>Контакты</Link></li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            } to={'/parts'}>дополнительное</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={styles.connect_block}>
                    <a href={info.whatsapp}>
                        <button className={styles.connect_btn}>Связаться с нами</button>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;