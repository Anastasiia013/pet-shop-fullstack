import { Link, useLocation } from 'react-router-dom';
import styles from './BreadCrumbs.module.css';
import { nanoid } from 'nanoid'

const Breadcrumbs = ({ custom }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);
    const newid = nanoid()

    const crumbs = custom || pathnames.map((part, idx) => {
        const to = '/' + pathnames.slice(0, idx + 1).join('/');
        const name = decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1));
        return { name, to };
    });

    return (
        <nav id={newid} className={styles.breadcrumbs}>
            <Link to="/">Home</Link>
            {crumbs.map(({ name, to }, index) => (
                <span key={to}>
                    {' / '}
                    {index === crumbs.length - 1 ? (
                        <span>{name}</span>
                    ) : (
                        <Link to={to}>{name}</Link>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
