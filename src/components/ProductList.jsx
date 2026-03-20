import ProductCard from './ProductCard.jsx';
import data from './products.json';
import Pagination from './Pagination';
const ProductList = () => {
    return (
        <div className="products-wrapper">
            <div className="sort-and-count">
                <div>Showing 1–8 of 21 results</div>
                <div className="sort">
                    <select className="input">
                        <option>Sort by popularity</option>
                        <option>Sort by price</option>
                        <option>Sort by rating</option>
                    </select>
                </div>
            </div>

        <div className="products">
            {data.map(product => (
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