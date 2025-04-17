import Section from '../../ui/Section/Section';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Section>
                <h2>Contacts</h2>
                <div className={styles.footerBox}>
                    <div className={styles.footerBoxBlock}>
                        <div className={`${styles.footerBoxBlockElement} ${styles.long}`}>
                            <h5 className={styles.h5}>Phone</h5>
                            <p className={styles.p}>+49 30 915-88492</p>
                        </div>
                        <div className={styles.footerBoxBlockElement}>
                            <h5 className={styles.h5}>Socials</h5>
                            <div className={styles.imgBox}>
                                <a href="#" target="_blank">
                                    <img src="/footerImg/ic-instagram.svg" alt="Instagram Logo" />
                                </a>
                                <a href="#" target="_blank">
                                    <img src="/footerImg/ic-whatsapp.svg" alt="WhatsApp Logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBoxBlock}>
                        <div className={`${styles.footerBoxBlockElement} ${styles.long}`}>
                            <h5 className={styles.h5}>Adress</h5>
                            <p className={styles.p}>Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
                        </div>
                        <div className={styles.footerBoxBlockElement}>
                            <h5 className={styles.h5}>Working Hours</h5>
                            <p className={styles.p}>24 hours a day</p>
                        </div>
                    </div>
                    <img className={styles.map} src="/footerImg/map.png" alt="Map Image" />
                </div>
            </Section>
        </footer>
    )
}

export default Footer;