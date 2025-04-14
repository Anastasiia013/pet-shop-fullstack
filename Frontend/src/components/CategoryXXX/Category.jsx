import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getSingleCategory } from "../../api/categories";
import Section from "../Section/Section";

const Category = ({ categoryId }) => {
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [titleCategory, setTitleCategory] = useState('');

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                setLoading(true);
                const data = await getSingleCategory(Number(categoryId));
                setProductsByCategory(data.data);
                setTitleCategory(data.category.title)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProductsByCategory();
    }, [categoryId]);

    const elements = productsByCategory.map(({ id, title, price, discont_price, image }) => (
        <li key={id}>
            <Link to={`/categories/${categoryId}/products/${id}`}>
                <img src={`http://localhost:3333${image}`} alt={title} />
                <p>{title}</p>
                <p>{discont_price ? `${discont_price} €` : `${price} €`}</p>
                {discont_price && <p style={{ textDecoration: "line-through" }}>{price} €</p>}
            </Link>
        </li>
    ));

    return (
        <Section>
            <h2>{titleCategory}</h2>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            {!loading && !error && productsByCategory.length === 0 && <p>Нет продуктов в этой категории</p>}
            <ul>{elements}</ul>
        </Section>
    );
};

export default Category;
