import { getSingleProduct } from "../../api/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Section from "../Section/Section";

const SingleProduct = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const data = await getSingleProduct(productId);
                setProduct(Array.isArray(data) ? data[0] : data); //делаю проверку потому что бек вернул массив с одним обьектом вместо просто обьекта
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProductData();
        }
    }, [productId]);

    if (loading) return <Section><p>Загрузка...</p></Section>;
    if (error) return <Section><p>Ошибка: {error}</p></Section>;
    if (!product) return <Section><p>Продукт не найден.</p></Section>;

    const { title, image, price, discont_price, description } = product;

    return (
        <Section title={title}>
            <img src={`http://localhost:3333${image}`} alt={title} style={{ maxWidth: '300px' }} />
            <p>{discont_price ? `${discont_price} € (со скидкой)` : `${price}€`}</p>
            {discont_price && <p style={{ textDecoration: 'line-through' }}>{price} €</p>}
            <p>{description}</p>
        </Section>
    );
};

export default SingleProduct;