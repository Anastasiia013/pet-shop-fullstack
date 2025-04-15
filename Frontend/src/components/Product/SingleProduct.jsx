import Section from "../Section/Section";

const SingleProduct = ({ product }) => {
    if (!product) return null;

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