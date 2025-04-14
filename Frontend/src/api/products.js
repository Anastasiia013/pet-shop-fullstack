import axios from 'axios';

const productsInstance = axios.create({
    baseURL: 'http://localhost:3333/products'
});

export async function getAllProducts() {
    const { data } = await productsInstance.get('/all')
    return data;
}

export async function getSingleProduct(productId) {
    const { data } = await productsInstance.get(`/${productId}`)
    return data;
}