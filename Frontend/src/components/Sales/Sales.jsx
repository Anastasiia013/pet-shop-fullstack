import ProductList from "../../components/ProductList/ProductList"
import { getAllProducts } from "../../api/products"

const Sales = ({ limit, titleLink, title }) => {
    return (
        <ProductList
            title={title}
            fetcher={getAllProducts}
            pathBuilder={(id) => `/products/${id}`}
            filterDiscounted={true}
            limit={limit}
            titleLink={titleLink}
        />
    )
}

export default Sales;