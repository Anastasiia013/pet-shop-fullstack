import Categories from '../../components/Categories/Categories';
import Sales from '../../components/Sales/Sales';

import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <main>
            <section className={styles.heroSection}>
                <h1 className='h1Main'>Amazing Discounts on Pets Products!</h1>
                <button className={styles.checkOutBtn}>Check out</button>
            </section>
            <Categories limit={4} />
            <Sales limit={4} titleLink="/sales" title="Sales"/>

        </main>
    )
}

export default MainPage;