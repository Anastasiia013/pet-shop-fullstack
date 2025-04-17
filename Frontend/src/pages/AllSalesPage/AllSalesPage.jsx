import Breadcrumbs from "../../layouts/BreadCrumbs/BreadCrumbs";
import Sales from "../../components/Sales/Sales";

const AllSalesPage = () => {
    return (
        <main>
            <Breadcrumbs custom={[{ name: "All sales", to: "/sales" }]} />
            <Sales title="Discounted Products" />
        </main>
    );
};

export default AllSalesPage;