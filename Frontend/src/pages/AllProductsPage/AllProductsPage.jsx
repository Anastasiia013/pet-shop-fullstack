import ProductList from "../../components/ProductList/ProductList";
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { getAllProducts } from "../../api/products";

const AllProductsPage = () => {
    return (
        <main>
            <Breadcrumbs custom={[
                { name: "All Products", to: "/products" }]} />
            <ProductList
                fetcher={getAllProducts}
                title="All Products"
                pathBuilder={(id) => `/products/${id}`}
            />
        </main>
    );
};

export default AllProductsPage;