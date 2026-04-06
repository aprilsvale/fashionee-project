import Subheader from './Subheader';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import products from './products.json';
import { parseFilters } from '../utils/filterParser';
import React, { useState, useMemo, useCallback} from 'react';

const Shop = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceFilter, setPriceFilter] = useState({min: null, max: null});
    const [ selectedColors, setSelectedColors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const filters = useMemo(() => parseFilters(products), []);

    const applyFilters = useCallback(() => {
        let result = [...products];

        if (searchQuery.trim()) {
            result = result.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            result = result.filter(product =>
                product.category === selectedCategory
            );
        }

        if (priceFilter.min !== null && priceFilter.min !== '') {
            result = result.filter(product =>
                product.price >= Number(priceFilter.min)
            );
        }
        if (priceFilter.max !== null && priceFilter.max !== '') {
            result = result.filter(product =>
                product.price <= Number(priceFilter.max)
            );
        }

        if (selectedColors.length > 0) {
            result = result.filter(product =>
                selectedColors.includes(product.color)
            );
        }

        setFilteredProducts(result);
    }, [searchQuery, selectedCategory, priceFilter, selectedColors]);

    const handleSearch = useCallback((query) => {
        setSearchQuery(query);

        let result = [...products];

        if (query.trim()) {
            result = result.filter(product =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (selectedCategory !== 'All') {
            result = result.filter(product => product.category === selectedCategory);
        }

        if (selectedColors.length > 0) {
            result = result.filter(product => selectedColors.includes(product.color));
        }

        setFilteredProducts(result);
    }, [selectedCategory, selectedColors]);

    return (
        <>
            <Subheader title="Shop" />
            <div className="shop">
                <Sidebar
                    onSearch={handleSearch}
                    filters={filters}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                    priceRange={priceFilter}
                    onPriceChange={setPriceFilter}
                    selectedColors={selectedColors}
                    onColorsChange={setSelectedColors}
                    onApplyFilters={applyFilters}
                />
                <ProductList products={filteredProducts} />
            </div>
        </>
    );
};

export default Shop;