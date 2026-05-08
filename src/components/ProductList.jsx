import ProductCard from './ProductCard';
import Pagination from './Pagination';

const ProductList = ({ products, currentPage, onPageChange, totalPages }) => {
    return (
        <div className="products-wrapper">
            <div className="products">
                {products.length === 0 ? (
                    <div className="no-products">No products found</div>
                ) : (
                    products.map(product => (
                        <ProductCard key={product.id} product={product} />
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
