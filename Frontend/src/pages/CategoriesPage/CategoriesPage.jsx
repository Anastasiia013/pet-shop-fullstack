import Categories from "../../components/Categories/Categories";
import Breadcrumbs from "../../components/BreadCrumbs/BreadCrumbs";

const CategoriesPage = () => {
    return (
        <main>
            <Breadcrumbs custom={[{ name: "Categories", to: "/categories" }]} />
            <Categories />
        </main>
    )
}

export default CategoriesPage;