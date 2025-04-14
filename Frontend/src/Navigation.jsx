import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MainPage from './pages/MainPage/MainPage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import AllProductsPage from './pages/AllProductsPage/AllProductsPage'
import AllSalesPage from './pages/AllSalesPage/AllSalesPage'
import SingleProductPage from './pages/AllProductsPage/SingleProductPage/SingleProductPage'
import ProductsByCategoryPage from './pages/CategoriesPage/ProductsByCategoryPage/ProductsByCategoryPage'
import CartPage from './pages/CartPage/CartPage'
import OrderSuccessPage from './pages/OrderSuccessPage/OrderSuccessPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function Navigation() {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />

                <Route path='/categories' element={<CategoriesPage />} />
                <Route path='/categories/:categoryId' element={<ProductsByCategoryPage />} />

                <Route path='/products' element={<AllProductsPage />} />

                <Route path="/products/:productId" element={<SingleProductPage />} />
                <Route path='/categories/:categoryId/products/:productId' element={<SingleProductPage />} />

                <Route path='/sales' element={<AllSalesPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/success' element={<OrderSuccessPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Navigation;
