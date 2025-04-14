import axios from 'axios';

const categoriesInstance = axios.create({
    baseURL: 'http://localhost:3333/categories'
});

export async function getCategories(limit) {
    const { data } = await categoriesInstance.get('/all', {
        params: limit ? { limit: limit } : {},
    });
    return data;
}

export async function getSingleCategory(categoryId) {
    const { data } = await categoriesInstance.get(`/${categoryId}`);
    return data;
}
