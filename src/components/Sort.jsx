import {useMemo, useState} from 'react';
import products from './products.json';
import ProductCard from './ProductCard';

const Sort = () => {
    const [sortType, setSortType] = useState('relevance')


    const sortedProducts = useMemo(() => {
        const sorted = [...products]

        if (sortType === 'rating') {
            return sorted.sort((a, b) => a.rating - b.rating)
        }

        if (sortType === 'price') {
            return sorted.sort((a, b) => a.price - b.price)
        }

        return sorted.sort((a, b) => a.relevance - b.relevance)
    }, [sortType])

    return (
        <div className="products-wrapper">
            <div className="sort-and-count">
                <div className="sort">
                    <select
                        className="input"
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}>
                        <option value="relevance">Sort by relevance</option>
                        <option value="price">Sort by price</option>
                        <option value="rating">Sort by rating</option>
                    </select>
                </div>
                <div className="count">
                    <span className="bold">Showing {sortedProducts.length} products</span>
                </div>
            </div>

            <div className="products">
                {sortedProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}




export default Sort;