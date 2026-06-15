import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductList = ({ products, currentPage, onPageChange, totalPages }) => {
    return (
        <div className="products-wrapper">
            <div className="products" data-testid="products-container">
                {products.length === 0 ? (
                    <div className="no-products" data-testid="no-products-message">No products found</div>
                ) : (
                    products.map(product => (
                        <div key={product.id} data-testid={`product-${product.id}`}>
                        <ProductCard product={product} />
                        </div>
                    ))
                )}
            </div>

            <Pagination
                currentPage={currentPage}
                onPageChange={onPageChange}
                totalPages={totalPages}
            />
        </div>
    );
};

export default ProductList;
