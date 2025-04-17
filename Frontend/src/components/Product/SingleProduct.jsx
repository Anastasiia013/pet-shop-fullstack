import PriceInfo from "../ProductList/ProductItem/PriceInfo/PriceInfo";
import SaleItemLabel from "../ProductList/ProductItem/SaleItemLabel/SaleItemLabel";
import Button from '../../ui/Button/Button';
import Counter from "./Counter/Counter";
import DescriptionBox from "./DescriptionBox/DescriptionBox";

import Section from "../../ui/Section/Section";
import styles from './SingleProduct.module.css'

const SingleProduct = ({ product }) => {
    if (!product) return null;

    const { title, image, price, discont_price, description } = product;

    return (
        <Section>
            <div className={styles.productBox}>
                <div className={styles.imageBox}>
                    <div className={styles.imagesBox}>
                        <img className={styles.images} src={`http://localhost:3333${image}`} alt={title} />
                        <img className={styles.images} src={`http://localhost:3333${image}`} alt={title} />
                        <img className={styles.images} src={`http://localhost:3333${image}`} alt={title} />
                    </div>
                    <div className={styles.mainImageBox}>
                        <img className={styles.mainImage} src={`http://localhost:3333${image}`} alt={title} />
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <h3>{title}</h3>
                    <div className={styles.priceInfo}>
                        <PriceInfo price={price} discont_price={discont_price} />
                        {discont_price ? <SaleItemLabel price={price} discont_price={discont_price} position="static" height="80%" /> : <></>}
                    </div>
                    <div className={styles.productOptions}>
                        <Counter />
                        <Button status="true" position="relative" text="Add to cart" width="60%" action />
                    </div>
                    <DescriptionBox description={description} />
                </div>
            </div>
        </Section>
    );
};

export default SingleProduct;