import { useCart } from "../context/CartContext";
import {useEffect} from "react";

const OrderSummary = ({cartTotal, setOrderTotal, isPromoApplied}) => {
    const { cartItems } = useCart();
    const discountPercent = 10;
    const discount = isPromoApplied ? cartTotal * (discountPercent / 100) : 0;
    const delivery = 16;
    const total = cartTotal - discount + delivery;

    useEffect(() => {
        setOrderTotal(total);
    }, [total, setOrderTotal]);


    return (
        <>
            {cartItems.length > 0 && (
                <div className="order">
                    <div className="title">Your Order</div>
                    <div className="order-price-wrapper">
                        <div className="price-row">
                            <div className="name">Order price</div>
                            <div className="name-bold">${cartTotal.toFixed(2)}</div>
                        </div>
                        {isPromoApplied && (
                            <div className="price-row discount">
                                <div className="name">Discount for promo code ({discountPercent}%)</div>
                                <div className="name-bold">-${discount.toFixed(2)}</div>
                            </div>
                        )}
                        <div className="price-row delimiter">
                            <div className="name">
                                Delivery <span className="additional">(Aug 02 at 16:00)</span>
                            </div>
                            <div className="name-bold">$16</div>
                        </div>
                        <div className="price-row total">
                            <div className="name">Total</div>
                            <div className="name-bold">${total.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderSummary;