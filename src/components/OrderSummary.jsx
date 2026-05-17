import { useCart } from "../context/CartContext";
const OrderSummary = ({finalPrice}) => {

    const { cartItems, cartTotal } = useCart();

    const discount = cartTotal - finalPrice;
    const hasDiscount = discount > 0;
    const delivery = 16;
    const totalVeryTotal = finalPrice + delivery;

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
                        {hasDiscount && (
                            <div className="price-row discount">
                                <div className="name">Discount for promo code</div>
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
                            <div className="name-bold">${totalVeryTotal.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button className="button">Checkout</button>
                        <div className="vertical-line"></div>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderSummary;


