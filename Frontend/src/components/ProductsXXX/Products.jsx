import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllProducts } from "../../api/products";

import Section from "../Section/Section";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProductsData = async () => {
            try {
                setLoading(true);
                const data = await getAllProducts();
                setProducts(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProductsData()
    }, []);

    const elements = products.map(({ id, title, price, discont_price, image }) => (
        <li key={id}>
            <Link to={`/products/${id}`}>
                <img src={`http://localhost:3333${image}`} alt={title} />
                <p>{title}</p>
                <p>{discont_price ? `${discont_price} €` : `${price} €`}</p>
                {discont_price && <p style={{ textDecoration: "line-through" }}>{price} €</p>}
            </Link>
        </li>
    ));

    return (
        <Section>
            <h2>All Products</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            {!loading && !error && products.length === 0 && <p>Нет продуктов в этой категории</p>}
            <ul>{elements}</ul>
        </Section>
    )
}

export default Products;