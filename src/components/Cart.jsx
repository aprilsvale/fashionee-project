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
    const [discountPercent, setDiscountPercent] = useState(0)


    const calculatedFinalPrice = discountPercent > 0
        ? cartTotal * (1 - discountPercent / 100)
        : finalPrice;

    const handleApplyPromo = (value, isPercentage) => {
        if (isPercentage) {
            setDiscountPercent(value);
            setFinalPrice(cartTotal * (1 - value / 100));
        } else {
            setFinalPrice(value);
        }
    }


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
                                    <OrderSummary finalPrice={calculatedFinalPrice}
                                                  setOrderTotal={setOrderTotal}
                                                    discountPercent={discountPercent}/>
                                    <Checkout finalPrice={finalPrice} orderTotal={orderTotal} />
                                </div>
                            </>)}

                    </div>
                    <PromoCode
                        originalTotal={cartTotal}
                        onApplyPromo={handleApplyPromo}
                    />
                </div>
            </div>
        </>
    );
};

export default Cart;