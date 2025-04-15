import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { getCategories } from "../../api/categories";

import Section from "../Section/Section";
import styles from './Categories.module.css';

const Categories = ({ limit }) => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getCategories(limit);
                setCategories(data);
            } catch (error) {
                setError(error.message || 'Error on loading categories');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [limit]);

    // const displayedCategories = categories.length > 4 ? categories.slice(0, 4) : categories;

    const elements = categories.map(({ id, title, image }) => (
        <li key={id}>
            <Link to={`/categories/${id}`} className={styles.categoryItem}>
                <img className={styles.categoryImg} src={`http://localhost:3333${image}`} alt={title} />
                <h4>{title}</h4>
            </Link>
        </li>
    ));

    return (
        <Section>
            <Link to={`/categories`} className="link">
                <h2 className="h2">Categories</h2>
            </Link>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            <ul className={styles.categoriesList}>
                {elements}
            </ul>
        </Section>
    );
};

export default Categories;