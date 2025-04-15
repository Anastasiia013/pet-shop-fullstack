import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProductItem from "./ProductItem/ProductItem";

import Section from "../Section/Section";
import styles from './ProductList.module.css'

const ProductList = ({ fetcher, title, pathBuilder, componentId, filterDiscounted = false, limit = null, titleLink = null }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [titleCategory, setTitleCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await fetcher(Number(componentId));

                let items = [];

                if (Array.isArray(data)) {
                    items = data;
                } else if (data?.data && Array.isArray(data.data)) {
                    items = data.data;
                    setTitleCategory(data.category.title);
                }

                if (filterDiscounted) {
                    items = items.filter((item) => item.discont_price);
                    if (limit !== null) {
                        items = items.slice(0, 4);
                    }
                }

                setProducts(items);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [componentId, filterDiscounted, limit]);

    return (
        <Section>
            {titleLink ? (
                <Link to={titleLink}>
                    <h2 className="h2">{titleCategory || title}</h2>
                </Link>
            ) : (
                <h2 className="h2">{titleCategory || title}</h2>
            )}

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && products.length === 0 && <p>No products</p>}
            <ul className={styles.productsList}>
                <ProductItem products={products} pathBuilder={pathBuilder} />
            </ul>
        </Section>
    );
};

export default ProductList;