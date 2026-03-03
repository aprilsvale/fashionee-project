import React from 'react';
import Subheader from './Subheader';
import { useCart } from '../context/CartContext';
import arrowPromoSvg from '../icons/arrow-promo.svg';

const CartPage = () => {
    const { cartItems, cartTotal, incrementQuantity, decrementQuantity, removeFromCart } = useCart();

    return (
        <>
            <Subheader title="Cart" />
            <div className="container">
                <div className="cart">
                    <div className="order-wrapper">
                        <div className="product-list">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart">Your cart is empty</div>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="product">
                                        <div className="photo"></div>
                                        <div className="product-info">
                                            <div className="title">{item.title}</div>
                                            <div className="price-wrapper">
                                                <div className="price-and-quantity">
                                                    <div className="price">
                                                        {item.oldPrice && (
                                                            <div className="old-price">${item.oldPrice}</div>
                                                        )}
                                                        <div className="current-price">${item.price}</div>
                                                    </div>
                                                    <div className="quantity">
                                                        <button
                                                            className="count-button"
                                                            onClick={() => decrementQuantity(item.id)}
                                                        >-</button>
                                                        <div className="count">{item.quantity}</div>
                                                        <button
                                                            className="count-button"
                                                            onClick={() => incrementQuantity(item.id)}
                                                        >+</button>
                                                    </div>
                                                </div>
                                                <div className="total-price">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </div>
                                            </div>
                                            <button
                                                className="close"
                                                onClick={() => removeFromCart(item.id)}
                                            >X</button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="order">
                                <div className="title">Your Order</div>
                                <div className="order-price-wrapper">
                                    <div className="price-row">
                                        <div className="name">Order price</div>
                                        <div className="name-bold">${cartTotal.toFixed(2)}</div>
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
                                        <div className="name">${(cartTotal + 16).toFixed(2)}</div>
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                    <button className="button">Checkout</button>
                                    <div className="vertical-line"></div>
                                </div>
                            </div>
                        )}
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
                                <div className="find-us-link"><a href="">FB</a></div>
                                <div className="line"></div>
                                <div className="find-us-link"><a href="">TW</a></div>
                                <div className="line"></div>
                                <div className="find-us-link"><a href="">INS</a></div>
                                <div className="line"></div>
                                <div className="find-us-link"><a href="">PT</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;