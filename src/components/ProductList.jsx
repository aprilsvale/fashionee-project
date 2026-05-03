import ProductCard from './ProductCard.jsx';
import Pagination from './Pagination';

const ProductList = ({products, currentPage, onPageChange}) => {
    return (
        <div className="products-wrapper">
            <div className="sort-and-count">
                <div>Showing {products.length} results</div>
            </div>

            <div className="products">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </div>
    );
};

export default ProductList;
