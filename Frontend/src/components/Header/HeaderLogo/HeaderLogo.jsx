import { NavLink } from 'react-router-dom';
import styles from './HeaderLogo.module.css'

const HeaderLogo = () => {
    return (
        <NavLink to='/'>
            <img className={styles.logoImg} src='/headerImg/logo.svg' alt="Logo Image" />
        </NavLink>
    )
}

export default HeaderLogo;