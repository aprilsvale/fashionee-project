import React, { useState } from 'react';
import {FavoritesProvider} from './context/FavoritesContext';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Shop from './components/Shop';
import Footer from './components/Footer';
import './styles/reset.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/commons.css';
import './styles/cart.css';
import './styles/shop.css';

function App() {
    const [currentPage, setCurrentPage] = useState('shop');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <FavoritesProvider>
            <CartProvider>
                <div className="app">
                    <Header
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />

                    {currentPage === 'shop' && <Shop />}
                    {currentPage === 'cart' && <Cart />}

                    <Footer />
                </div>
            </CartProvider>
        </FavoritesProvider>
    );
}

export default App;
