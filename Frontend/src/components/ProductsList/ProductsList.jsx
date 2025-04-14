import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Section from "../Section/Section";
import styles from './ProductsList.module.css'

const ProductList = ({ fetcher, title, pathBuilder, componentId }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [titleCategory, setTitleCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetcher(Number(componentId));

                if (Array.isArray(data)) {
                    setProducts(data);
                } else if (data && data.data && Array.isArray(data.data)) {
                    setProducts(data.data);
                    setTitleCategory(data.category.title)
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [componentId]);

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
        <Section>
            <h2 className={styles.categoryTitle}>{titleCategory}</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && products.length === 0 && <p>No products</p>}
            <ul className={styles.productsList}>{elements}</ul>
        </Section>
    );
};

export default ProductList;
