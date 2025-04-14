import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductList from "../../../components/ProductsList/ProductsList";
import Breadcrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import { getSingleCategory } from "../../../api/categories";

const ProductsByCategoryPage = () => {
    const { categoryId } = useParams();

    const [titleCategory, setTitleCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSingleCategory(Number(categoryId));
                setTitleCategory(data.category.title)
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, [categoryId]);

    return (
        <main>
            <Breadcrumbs
                custom={[
                    { name: "Categories", to: "/categories" },
                    { name: titleCategory, to: `/categories/${categoryId}` }
                ]}
            />

            <ProductList
                fetcher={getSingleCategory}
                componentId={categoryId}
                pathBuilder={(id) => `/categories/${categoryId}/products/${id}`}
            />
        </main>
    );
};

export default ProductsByCategoryPage;
