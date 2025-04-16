import { useState, useEffect } from 'react';

import styles from './Button.module.css'

const Button = ({ status, position, text, left, right, bottom, width }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(status)
    }, [status])

    return (
        <>
            {visible && (
                <button className={styles.cartBtn}
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
