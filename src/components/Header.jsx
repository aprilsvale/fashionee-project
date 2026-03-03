import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import logoSvg from '../icons/logo.svg';
import arrowSvg from '../icons/arrow.svg';
import arrowRedSvg from '../icons/arrow-red.svg';
import searchSvg from '../icons/search.svg';
import profileSvg from '../icons/profile.svg';
import heartSvg from '../icons/heart.svg';
import cartSvg from '../icons/cart.svg';

const Header = ({ currentPage, onPageChange }) => {
    const { favoritesCount } = useFavorites();
    const { cartCount } = useCart();

    return (
        <header className="header">
            <div className="left-side">
                <div className="logo-container">
                    <div className="burger-menu">
                        <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
                        <label className="burger" htmlFor="burger-checkbox"></label>
                    </div>
                    <div className="logo" onClick={() => onPageChange('shop')} style={{cursor: 'pointer'}}>
                        <img src={logoSvg} alt="logo" />
                    </div>
                </div>

                <div className="menu">
                    <div className="menu-item">
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <span>Pages</span>
                        <img src={arrowSvg} alt="arrow" className="arrow-default" />
                        <img src={arrowRedSvg} alt="arrow-red" className="arrow-hover" />
                    </div>
                    <div className="menu-item">
                        <span>Shop</span>
                        <img src={arrowSvg} alt="arrow" className="arrow-default" />
                        <img src={arrowRedSvg} alt="arrow-red" className="arrow-hover" />
                    </div>
                    <div className="menu-item">
                        <span>Blog</span>
                    </div>
                    <div className="menu-item">
                        <span>Contact</span>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="header-icon">
                    <img src={searchSvg} alt="search" />
                </div>
                <div className="header-icon">
                    <img src={profileSvg} alt="profile" />
                </div>
                <div className="header-icon">
                    <img src={heartSvg} alt="heart" />
                    {favoritesCount > 0 && <div className="counter">{favoritesCount}</div>}
                </div>
                <div className="header-icon" onClick={() => onPageChange('cart')}>
                    <img src={cartSvg} alt="cart" />
                    {cartCount > 0 && <div className="counter">{cartCount}</div>}
                </div>
            </div>
        </header>
    );
};

export default Header;