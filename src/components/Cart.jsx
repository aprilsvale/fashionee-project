import Subheader from "./Subheader.jsx";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";
import {useState} from "react";

const Cart = () => {
    const { cartItems, cartTotal } = useCart();
    const [finalPrice, setFinalPrice] = useState(cartTotal);

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
                                <OrderSummary finalPrice={finalPrice}/>
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
