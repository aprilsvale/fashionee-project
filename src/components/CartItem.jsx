import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { decrementQuantity, incrementQuantity, removeFromCart } = useCart();

    return (
        <div className="product">
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
    );
};

export default CartItem;