import Categories from '../../components/Categories/Categories';
import Sales from '../../components/Sales/Sales';
import Button from '../../components/Button/Button';

import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <main>
            <section className={styles.heroSection}>
                <h1 className='h1Main'>Amazing Discounts on Pets Products!</h1>
                <Button text="Check out" status="true" width="20%"/>
            </section>
            <Categories limit={4} />
            <Sales limit={4} titleLink="/sales" title="Sales" />

        </main>
    )
}

export default MainPage;