import React from 'react';
import dots1Svg from '../icons/dots1.svg';
import blackSquareSvg from '../icons/black-square.svg';
import arrowPromoSvg from '../icons/arrow-promo.svg';

const CartPage = () => {
    return (
        <>
            <div className="subheader">
                <div className="shop-block">
                    <div className="shop-group">
                        <div className="shop-name">Cart</div>
                        <div className="home-and-shop">
                            <div className="vertical-line"></div>
                            <div className="home-part">Home</div>
                            <div className="shop-part">Shop</div>
                            <div className="shop-part">Cart</div>
                        </div>
                        <hr className="shop-line" />
                        <img src={dots1Svg} className="dots1" alt="dots decoration" />
                    </div>
                    <div className="shop-photo">
                        <img src={blackSquareSvg} alt="black square" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="cart">
                    <div className="order-wrapper">
                        <div className="product-list">
                            {/* Product 1 */}
                            <div className="product">
                                <div className="photo"></div>
                                <div className="product-info">
                                    <div className="title">Fashionee - cotton shirt (S)</div>
                                    <div className="price-wrapper">
                                        <div className="price-and-quantity">
                                            <div className="price">
                                                <div className="old-price">$52.99</div>
                                                <div className="current-price">$35.99</div>
                                            </div>
                                            <div className="quantity">
                                                <div className="count-button">-</div>
                                                <div className="count">1</div>
                                                <div className="count-button">+</div>
                                            </div>
                                        </div>
                                        <div className="total-price">$35.99</div>
                                    </div>
                                    <div className="close">X</div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="product">
                                <div className="photo"></div>
                                <div className="product-info">
                                    <div className="title">Fashionee - cotton shirt (S)</div>
                                    <div className="price-wrapper">
                                        <div className="price-and-quantity">
                                            <div className="price">
                                                <div className="old-price">$52.99</div>
                                                <div className="current-price">$35.99</div>
                                            </div>
                                            <div className="quantity">
                                                <div className="count-button">-</div>
                                                <div className="count">1</div>
                                                <div className="count-button">+</div>
                                            </div>
                                        </div>
                                        <div className="total-price">$35.99</div>
                                    </div>
                                    <div className="close">X</div>
                                </div>
                            </div>
                        </div>

                        <div className="order">
                            <div className="title">Your Order</div>
                            <div className="order-price-wrapper">
                                <div className="price-row">
                                    <div className="name">Order price</div>
                                    <div className="name-bold">$146.98</div>
                                </div>
                                <div className="price-row">
                                    <div className="name">Discount for promo code</div>
                                    <div>No</div>
                                </div>
                                <div className="price-row delimiter">
                                    <div className="name">
                                        Delivery <span className="additional">(Aug 02 at 16:00)</span>
                                    </div>
                                    <div className="name-bold">$16</div>
                                </div>
                                <div className="price-row total">
                                    <div className="name">Total</div>
                                    <div className="name">$162.98</div>
                                </div>
                            </div>
                            <div className="button-wrapper">
                                <button className="button">Checkout</button>
                                <div className="vertical-line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="promo-code-wrapper">
                        <div className="info">
                            <div className="title">You Have A Promo Code?</div>
                            <div className="description">
                                To receive up-to-date promotional codes, subscribe to us on social networks.
                            </div>
                        </div>

                        <div className="promo-code">
                            <input
                                type="text"
                                name="promo-code"
                                className="input"
                                placeholder="Enter promo code"
                            />
                            <div className="button-wrapper">
                                <button className="button">
                                    <img src={arrowPromoSvg} alt="Arrow-icon" />
                                </button>
                                <div className="vertical-line"></div>
                            </div>
                        </div>

                        <div className="find-us">
                            <div className="find-us-text">Find us here:</div>
                            <div className="find-us-links">
                                <div className="find-us-link">
                                    <a href="">FB</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">TW</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">INS</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">PT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;