import { useState } from 'react'
import styles from './Counter.module.css'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function onMore() {
        setCounter(counter + 1)
    }

    function onLess() {
        if (counter === 0) return 0;
        setCounter(counter - 1)
    }

    return (
        <div className={styles.counter}>
            <button className={styles.quantityBtn} onClick={onLess} type='button'><img src="../images/minus.svg" alt="" /></button>
            <span className={styles.quantity}>{counter}</span>
            <button className={styles.quantityBtn} onClick={onMore} type="button"><img src="../images/plus.svg" alt="" /></button>
        </div>
    )
}

export default Counter;