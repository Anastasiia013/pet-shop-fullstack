import { Link } from "react-router-dom";

import styles from './ProductItem.module.css'

const ProductItem = ({ products, pathBuilder }) => {
    const elements = products.map(({ id, title, price, discont_price, image }) => (
        <li key={id}>
            <Link to={pathBuilder(id)} className={styles.productItem}>
                <div className={styles.productImgBox}>
                    <img className={styles.productImg} src={`http://localhost:3333${image}`} alt={title} />
                </div>
                <div className={styles.descriptionBox}>
                    <p>{title}</p>
                    <div className={styles.priceBox}>
                        <p>{discont_price ? `${discont_price} €` : `${price} €`}</p>
                        {discont_price && <p style={{ textDecoration: "line-through" }}>{price} €</p>}
                    </div>
                </div>
            </Link>
        </li>
    ));

    return (
        <>
            {elements}
        </>
    )
}

export default ProductItem;