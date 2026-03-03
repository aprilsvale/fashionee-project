
import React from 'react';
import Subheader from './Subheader';
import ProductCard from './ProductCard.jsx';
import magnifierSvg from '../icons/magnifier.svg';
import bannerSvg from '../icons/banner.svg';

const products = [
    {
        id: 1,
        title: 'Fashionee - cotton shirt (S)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    },
    {
        id: 2,
        title: 'Fashionee - cotton shirt (M)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    },
    {
        id: 3,
        title: 'Fashionee - cotton shirt (L)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    },
    {
        id: 4,
        title: 'Fashionee - cotton shirt (XL)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    },
    {
        id: 5,
        title: 'Fashionee - cotton shirt (S)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    },
    {
        id: 6,
        title: 'Fashionee - cotton shirt (M)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    },
    {
        id: 7,
        title: 'Fashionee - cotton shirt (L)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    },
    {
        id: 8,
        title: 'Fashionee - cotton shirt (XL)',
        price: 35.99,
        oldPrice: 52.99,
        image: ''
    }
];

const Shop = () => {
    return (
        <>
        <Subheader title="Shop" />
        <div className="shop">
            <div className="sidebar">
                <div className="search">
                    <label>
                        <input type="text" placeholder="Search" className="input search-row" />
                        <img src={magnifierSvg} alt="search-icon" className="search-icon" />
                    </label>
                </div>

                <div className="sidebar-item">
                    <div className="sidebar-title">Categories</div>
                    <div className="sidebar-content">
                        <ul className="custom-list">
                            <li className="item">All</li>
                            <li className="item active">Men</li>
                            <li className="item">Women</li>
                            <li className="item">Accessories</li>
                            <li className="item">New Arrivals</li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-item">
                    <div className="sidebar-title">Price</div>
                    <div className="sidebar-content">
                        <div className="price-bar">
                            <input type="text" placeholder="0" className="input" />
                            <input type="text" placeholder="200" className="input" />
                        </div>
                    </div>
                </div>

                <div className="sidebar-item">
                    <div className="sidebar-title">Colors</div>
                    <div className="sidebar-content">
                        <div className="colors">
                            <div className="color">
                                <div className="checkbox-item">
                                    <input type="checkbox" className="color-checkbox" id="black" name="black" value="black" />
                                    <label htmlFor="black" className="color-name">Black</label>
                                </div>
                            </div>
                            <div className="color">
                                <div className="checkbox-item">
                                    <input type="checkbox" className="color-checkbox" id="blue" name="blue" value="blue" />
                                    <label htmlFor="blue" className="color-name">Blue</label>
                                </div>
                            </div>
                            <div className="color">
                                <div className="checkbox-item">
                                    <input type="checkbox" className="color-checkbox" id="red" name="red" value="red" />
                                    <label htmlFor="red" className="color-name">Red</label>
                                </div>
                            </div>
                            <div className="color">
                                <div className="checkbox-item">
                                    <input type="checkbox" className="color-checkbox" id="yellow" name="yellow" value="yellow" />
                                    <label htmlFor="yellow" className="color-name">Yellow</label>
                                </div>
                            </div>
                            <div className="color">
                                <div className="checkbox-item">
                                    <input type="checkbox" className="color-checkbox" id="green" name="green" value="green" />
                                    <label htmlFor="green" className="color-name">Green</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-item">
                    <div className="button-wrapper">
                        <button className="button">Apply Filter</button>
                        <div className="vertical-line"></div>
                    </div>
                </div>

                <div className="sidebar-item">
                    <div className="sidebar-title">Reviewed By You</div>
                    <div className="sidebar-content">
                        <div className="reviewed-products">
                            <div className="product">
                                <div className="image"></div>
                                <div className="info">
                                    <div className="name">Retro style handbag</div>
                                    <div className="price">
                                        <div className="current-price">$35.99</div>
                                        <div className="old-price">$52.99</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="image"></div>
                                <div className="info">
                                    <div className="name">Warm casual sweater</div>
                                    <div className="price">
                                        <div className="current-price">$35.99</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product">
                                <div className="image"></div>
                                <div className="info">
                                    <div className="name">Retro style handbag</div>
                                    <div className="price">
                                        <div className="current-price">$35.99</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <a href="#">
                        <img src={bannerSvg} alt="banner" />
                    </a>
                </div>
            </div>

            <div className="products-wrapper">
                <div className="sort-and-count">
                    <div>Showing 1–8 of 21 results</div>
                    <div className="sort">
                        <select className="input">
                            <option>Sort by popularity</option>
                            <option>Sort by price</option>
                            <option>Sort by rating</option>
                        </select>
                    </div>
                </div>

                <div className="products">
                    {products.map(product => (
                        <div className="product" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <div className="pagination">
                    <div className="pages">
                        <span className="page active">1</span>
                        <span className="page">2</span>
                        <span className="page">3</span>
                        <span className="page">4</span>
                        <span className="page">5</span>
                    </div>
                    <button className="button">Next</button>
                </div>
            </div>
        </div>
            </>
    );
};

export default Shop;