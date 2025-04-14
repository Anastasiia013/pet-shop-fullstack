import { NavLink } from 'react-router-dom'

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/'>
                <img className={styles.logoImg} src='/headerImg/logo.svg' alt="Logo Image" />
            </NavLink>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <NavLink className={styles.navLink} to='/'>Main Page</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} to='/categories'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} to='/products'>All products</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.navLink} to='/sales'>All sales</NavLink>
                    </li>
                </ul>
            </nav>
            <NavLink to='/cart'>
                <img className={styles.cart} src="/headerImg/cart.svg" alt="Cart Image" />
            </NavLink>
        </header>
    )
}

export default Header;