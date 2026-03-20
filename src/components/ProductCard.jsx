import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';
import heartSvg from '../icons/heart.svg';

const ProductCard = ({ product }) => {
    const { toggleFavorite, isFavorite } = useFavorites();
    const { addToCart, getItemQuantity, incrementQuantity, decrementQuantity } = useCart();
    const favorite = isFavorite(product.id);
    const quantity = getItemQuantity(product.id);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        toggleFavorite(product);
    };

    const handleAddToCart = () => {
        addToCart(product);
    };

    const handleIncrement = (e) => {
        e.stopPropagation();
        incrementQuantity(product.id);
    };

    const handleDecrement = (e) => {
        e.stopPropagation();
        decrementQuantity(product.id);
        if (quantity === 1) {
        }
    };

    const isNew = product.id === 1 || product.id === 3;
    const isSale = product.id === 2 || product.id === 4;

    return (
        <div className="product">
            <div className="photo">
                <div className="top-bar">
                    <div className="labels">
                        {isNew && <span className="label new">New</span>}
                        {isSale && <span className="label">Sale</span>}
                    </div>
                </div>

                <button
                    className={`favorite-button ${favorite ? 'active' : ''}`}
                    onClick={handleFavoriteClick}
                >
                    <img src={heartSvg} alt="favorite" />
                </button>
            </div>

            <div className="info">
                <div className="name">{product.title}</div>
                <div className="price">
                    {product.oldPrice && (
                        <span className="old-price">${product.oldPrice}</span>
                    )}
                    <span className="current-price">${product.price}</span>
                </div>

                {quantity > 0 ? (
                    <div className="cart-quantity-selector">
                        <button className="quantity-btn" onClick={handleDecrement}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-btn" onClick={handleIncrement}>+</button>
                    </div>
                ) : (
                    <button className="add-to-cart-btn" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;