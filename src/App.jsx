import {FavoritesProvider} from './context/FavoritesContext';
import Header from './components/Header';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Shop from './components/Shop.jsx';
import Footer from './components/Footer';
import { useState } from 'react';
import './styles/reset.css';
import './styles/commons.css';
import './styles/header.css';
import './styles/shop.scss'
import './styles/cart.css';
import './styles/footer.css';



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
