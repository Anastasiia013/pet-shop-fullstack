import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../../Button/Button";
import SaleItemLabel from "./SaleItemLabel/SaleItemLabel";
import styles from './ProductItem.module.css';

const ProductItem = ({ products, pathBuilder }) => {
    const elements = products.map(({ id, title, price, discont_price, image }) => {
        const [hovered, setHovered] = useState(false);

        return (
            <li
                key={id}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Link to={pathBuilder(id)} className={styles.productItem}>
                    <div className={styles.productImgBox}>
                        {discont_price ? <SaleItemLabel price={price} discont_price={discont_price} /> : <></>}
                        <img
                            className={styles.productImg}
                            src={`http://localhost:3333${image}`}
                            alt={title}
                        />
                        <Button status={hovered} text="Add to cart" position="absolute" left="16px" right="16px" bottom="16px" />
                    </div>
                    <div className={styles.descriptionBox}>
                        <p className={styles.description}>{title}</p>
                        <div className={styles.priceBox}>
                            <p className={styles.priceCurrent}>{discont_price ? `$${discont_price}` : `$${price}`}</p>
                            {discont_price && (
                                <p className={styles.priceOld} style={{ textDecoration: "line-through" }}>${price}</p>
                            )}
                        </div>
                    </div>
                </Link>
            </li>
        );
    });

    return <>{elements}</>;
};

export default ProductItem;