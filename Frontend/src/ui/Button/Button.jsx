import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Button.module.css'

const Button = ({ status, position, text, left, right, bottom, width, target, action }) => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setVisible(status)
    }, [status]);

    const handleClick = () => {
        if (target) {
            navigate(target);
        }
    };

    return (
        <>
            {visible && (
                <button className={styles.cartBtn} onClick={handleClick}
                    style={{
                        position,
                        left,
                        right,
                        bottom,
                        width
                    }}>{text}</button>
            )}
        </>
    )
}

export default Button;
