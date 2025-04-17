import Categories from "../../components/Categories/Categories";
import Breadcrumbs from "../../layouts/BreadCrumbs/BreadCrumbs";

const CategoriesPage = () => {
    return (
        <main>
            <Breadcrumbs custom={[{ name: "Categories", to: "/categories" }]} />
            <Categories />
        </main>
    )
}

export default CategoriesPage;