import Subheader from "./Subheader.jsx";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";
import {useState} from "react";
import Checkout from "./Checkout";

const Cart = () => {
    const { cartItems, cartTotal } = useCart();
    const [finalPrice, setFinalPrice] = useState(cartTotal);
    const [orderTotal, setOrderTotal] = useState(0)

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
                                    <CartItem key={item.id} item={item} />
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <>
                                <div>
                            <OrderSummary finalPrice={finalPrice} setOrderTotal={setOrderTotal} />
                                <Checkout finalPrice={finalPrice} orderTotal={orderTotal} />
                                </div>
                            </>)}

                    </div>
                    <PromoCode
                        originalTotal={cartTotal}
                        onApplyPromo={(newPrice) => {
                            setFinalPrice(newPrice);
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Cart;
