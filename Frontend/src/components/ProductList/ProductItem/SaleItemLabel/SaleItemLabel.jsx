
import styles from './SaleItemLabel.module.css'

const SaleItemLabel = ({ price, discont_price }) => {
    const saleInPercents = Math.round(((price - discont_price) / price) * 100);
    return (
        <div className={styles.saleBox}>
            <span className={styles.saleNumber}>-{saleInPercents}%</span>
        </div>
    )
}
export default SaleItemLabel;