import React from 'react';
import styles from './Footer.module.css'
import telegram from './../../assets/telegram.png'
import whatsapp from './../../assets/whatsapp.png'
import instagram from './../../assets/instagram.png'
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';

const Footer = () => {
    const info = useSelector(state => state?.info?.info)
    return (
        <footer id='contacts' className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.box_logo}>
                    <Link spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1500}
                        to={'top'}
                    >
                        <img className={styles.btn_scroll_up} src={`http://176.126.166.199:8000${info.logo}`} alt="logo" />
                    </Link>
                </div>
                <div className={styles.box_contact}>
                    <div className={styles.box_contact_info}>
                        <p ><a id={styles.contact_number} href={`tel:${info.phone_number}`}>{info.phone_number}</a></p>
                    </div>
                    <div className={styles.box_contact_info}>
                        <p>Наш адрес:</p>
                        <p>{info.address}</p>
                    </div>
                    <div className={styles.box_contact_info}>
                        <p>Наша почта:</p>
                        <p>Почта:</p>
                        <a href={`mailto:${info.email}`}> {info.email}</a>
                    </div>
                    <div className={`${styles.box_contact_info} ${styles.box_contact_icons}`}>
                        <a href={info.telegram} target="_blank"><img src={telegram} alt="telegram" /></a>
                        <a href={info.whatsapp} target="_blank"><img src={whatsapp} alt="whatsapp" /></a>
                        <a href={info.instagram} target="_blank"><img src={instagram} alt="instagram" /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;