import Subheader from "./Subheader.jsx";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import PromoCode from "./PromoCode";

const Cart = () => {
    const { cartItems } = useCart();

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
                                <OrderSummary />
                            </>)}

                    </div>
                    <PromoCode />
                </div>
            </div>
        </>
    );
};

export default Cart;
