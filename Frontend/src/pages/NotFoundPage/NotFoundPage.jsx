import { Link } from "react-router-dom";

import Section from "../../ui/Section/Section";

const NotFoundPage = () => {
    return (
        <Section title="Page not found">
            <Link to="/">To home page</Link>
        </Section>
    );
};

export default NotFoundPage;