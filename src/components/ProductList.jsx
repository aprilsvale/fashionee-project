import ProductCard from './ProductCard.jsx';
import Pagination from './Pagination';


const ProductList = ({products}) => {
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
            <Pagination />
    </div>
    );
};



export default ProductList;