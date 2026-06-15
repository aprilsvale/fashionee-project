import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
    const { decrementQuantity, incrementQuantity, removeFromCart } = useCart();

    return (
        <div className="product" data-testid={`cart-item-${item.id}`}>
            <div className="photo" data-testid={`cart-item-photo-${item.id}`}></div>
            <div className="product-info">
                <div className="title" data-testid={`cart-item-title-${item.id}`}>{item.title}</div>
                <div className="price-wrapper">
                    <div className="price-and-quantity">
                        <div className="price">
                            {item.oldPrice && (
                                <div className="old-price" data-testid={`cart-item-old-price-${item.id}`}>${item.oldPrice}</div>
                            )}
                            <div className="current-price" data-testid={`cart-item-price-${item.id}`}>${item.price}</div>
                        </div>
                        <div className="quantity" data-testid={`cart-item-quantity-wrapper-${item.id}`}>
                            <button
                                className="count-button"
                                onClick={() => decrementQuantity(item.id)}
                                data-testid={`decrement-btn-${item.id}`}
                            >-</button>
                            <div className="count" data-testid={`quantity-${item.id}`}>{item.quantity}</div>
                            <button
                                className="count-button"
                                onClick={() => incrementQuantity(item.id)}
                                data-testid={`increment-btn-${item.id}`}
                            >+</button>
                        </div>
                    </div>
                    <div className="total-price" data-testid={`cart-item-total-${item.id}`}>
                        ${(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
                <button
                    className="close"
                    onClick={() => removeFromCart(item.id)}
                    data-testid={`remove-btn-${item.id}`}
                >X</button>
            </div>
        </div>
    );
};

export default CartItem;