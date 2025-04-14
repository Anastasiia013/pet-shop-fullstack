import Categories from '../../components/Categories/Categories';
import styles from './MainPage.module.css'

const MainPage = () => {
    return (
        <main>
            <section className={styles.heroSection}>
                <h1 className='h1Main'>Amazing Discounts on Pets Products!</h1>
                <button className={styles.checkOutBtn}>Check out</button>
            </section>
            <Categories limit={4} />

        </main>
    )
}

export default MainPage;