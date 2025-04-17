import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import SingleProduct from "../../../components/Product/SingleProduct";
import Breadcrumbs from "../../../layouts/BreadCrumbs/BreadCrumbs";
import Section from "../../../ui/Section/Section";

import { getSingleProduct } from "../../../api/products";
import { getSingleCategory } from "../../../api/categories";

const SingleProductPage = () => {
    const { productId, categoryId } = useParams();
    const [product, setProduct] = useState(null);
    const [categoryTitle, setCategoryTitle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const productDataRaw = await getSingleProduct(productId);
                const productData = Array.isArray(productDataRaw) ? productDataRaw[0] : productDataRaw;
                setProduct(productData);

                if (categoryId) {
                    const category = await getSingleCategory(categoryId);
                    setCategoryTitle(category.category?.title || "Категория");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [productId, categoryId]);

    if (loading) return <Section><p>Загрузка...</p></Section>;
    if (error) return <Section><p>Ошибка: {error}</p></Section>;
    if (!product) return <Section><p>Продукт не найден.</p></Section>;

    const breadcrumbs = [];

    if (categoryId && categoryTitle) {
        breadcrumbs.push({ name: "Categories", to: "/categories" });
        breadcrumbs.push({ name: categoryTitle, to: `/categories/${categoryId}` });
    } else {
        breadcrumbs.push({ name: "All Products", to: "/products" });
    }

    breadcrumbs.push({ name: product.title });

    return (
        <main>
            <Breadcrumbs custom={breadcrumbs} />
            <SingleProduct product={product} />
        </main>
    );
};

export default SingleProductPage;
