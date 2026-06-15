import Subheader from "./Subheader.jsx";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";
import Checkout from "./Checkout";
import {useState} from "react";

const Cart = () => {
    const { cartItems, cartTotal } = useCart();
    const [orderTotal, setOrderTotal] = useState(0);
    const [isPromoApplied, setIsPromoApplied] = useState(false);

    return (
        <>
            <Subheader title="Cart" />
            <div className="container">
                <div className="cart">
                    <div className="order-wrapper">
                        <div className="product-list" data-testid="product-list">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart" data-testid="empty-cart">Your cart is empty</div>
                            ) : (
                                cartItems.map(item => (
                                    <CartItem key={item.id} item={item} />
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <>
                                <div>
                                    <OrderSummary
                                        cartTotal={cartTotal}
                                        setOrderTotal={setOrderTotal}
                                        isPromoApplied={isPromoApplied}
                                        data-testid="order-summary"
                                    />
                                    <Checkout orderTotal={orderTotal} data-testid="checkout" />
                                </div>
                            </>)}
                    </div>
                    <PromoCode onPromo={setIsPromoApplied} data-testid="promo-code" />
                </div>
            </div>
        </>
    );
};

export default Cart;