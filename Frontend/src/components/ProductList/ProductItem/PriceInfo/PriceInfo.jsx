import SaleItemLabel from '../SaleItemLabel/SaleItemLabel';
import styles from './PriceInfo.module.css'

const PriceInfo = ({ price, discont_price }) => {
    return (
        <div className={styles.priceBox}>
            <p className={styles.priceCurrent}>{discont_price ? `$${discont_price}` : `$${price}`}</p>
            {discont_price && (
                <p className={styles.priceOld} style={{ textDecoration: "line-through" }}>${price}</p>
            )}
        </div>
    )
}

export default PriceInfo;