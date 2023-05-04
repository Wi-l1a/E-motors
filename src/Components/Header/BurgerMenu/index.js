import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import telegram from './../../../assets/telegram.png'
import whatsapp from './../../../assets/whatsapp.png'
import instagram from './../../../assets/instagram.png'
const BurgerMenu = () => {
    const [burgerActive, setBurgerActive] = useState(false)
    const info = useSelector(state => state?.info?.info)

    return (
        <div className={styles.burgerMenu}>
            <div onClick={() => setBurgerActive(!burgerActive)} className={burgerActive ? styles.menu_btn_active : styles.menu_btn}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={burgerActive ? styles.menu_active : styles.menu}>
                <nav className={styles.navigation}>
                    <ul>
                        <li>
                            <NavLink onClick={() => setBurgerActive(!burgerActive)} to={'/'} className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            }>
                                Главная
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
                                isActive ? styles.activeMenu_item : styles.menu_item
                            } to={'/catalog'}>
                                Каталог
                            </NavLink>
                        </li>
                        <li><HashLink onClick={() => setBurgerActive(!burgerActive)} to={'/#about-us'} className={styles.links} >О нас</HashLink></li>
                        <li><Link
                            onClick={() => setBurgerActive(!burgerActive)}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            activeClass={'active'}
                            duration={1500} className={styles.links} to='contacts'>Контакты</Link></li>
                        <li>
                            <NavLink onClick={() => setBurgerActive(!burgerActive)} className={({ isActive }) =>
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
                <div className={`${styles.box_contact_info} ${styles.box_contact_icons}`}>
                    <a href={info.telegram} target="_blank"><img src={telegram} alt="telegram" /></a>
                    <a href={info.whatsapp} target="_blank"><img src={whatsapp} alt="whatsapp" /></a>
                    <a href={info.instagram} target="_blank"><img src={instagram} alt="instagram" /></a>
                </div>
            </div >
        </div >
    );
};

export default BurgerMenu;