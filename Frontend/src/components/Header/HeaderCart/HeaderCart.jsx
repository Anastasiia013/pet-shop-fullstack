import { NavLink } from "react-router-dom";
import styles from './HeaderCart.module.css'

const HeaderCart = () => {
    return (
        <NavLink to='/cart'>
            <img className={styles.cart} src="/headerImg/cart.svg" alt="Cart Image" />
        </NavLink>
    )
}

export default HeaderCart;