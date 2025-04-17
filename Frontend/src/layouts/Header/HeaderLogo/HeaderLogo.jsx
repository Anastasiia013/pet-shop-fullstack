import { NavLink } from 'react-router-dom';
import styles from './HeaderLogo.module.css';
import Logo from '/headerImg/logo.svg'

const HeaderLogo = () => {
    return (
        <NavLink to='/'>
            <img className={styles.logoImg} src={Logo} alt="Logo Image" />
        </NavLink>
    )
}

export default HeaderLogo;