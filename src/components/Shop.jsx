import Subheader from './Subheader';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import products from './products.json';
import { parseFilters } from '../utils/filterParser';
import React, { useState, useMemo, useCallback} from 'react';

const Shop = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceFilter, setPriceFilter] = useState({min: null, max: null});
    const [selectedColors, setSelectedColors] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const [appliedCategory, setAppliedCategory] = useState("All");
    const [appliedColors, setAppliedColors] = useState([]);
    const [appliedPriceRange, setAppliedPriceRange] = useState({ min: null, max: null });
    const [appliedSearchQuery, setAppliedSearchQuery] = useState('');

    const filters = useMemo(() => parseFilters(products), []);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (appliedSearchQuery.trim()) {
            result = result.filter(product =>
                product.title.toLowerCase().includes(appliedSearchQuery.toLowerCase())
            );
        }

        if (appliedCategory !== 'All') {
            result = result.filter(product =>
                product.category === appliedCategory
            );
        }

        if (appliedPriceRange.min !== null && appliedPriceRange.min !== '') {
            result = result.filter(product =>
                product.price >= Number(appliedPriceRange.min)
            );
        }

        if (appliedPriceRange.max !== null && appliedPriceRange.max !== '') {
            result = result.filter(product =>
                product.price >= Number(appliedPriceRange.max)
            );
        }

        if (appliedColors.length > 0) {
            result = result.filter(product =>
                appliedColors.includes(product.color)
            );
        }

        return result;
    }, [appliedSearchQuery, appliedCategory, appliedColors, appliedPriceRange]);

    const handleSearch = useCallback((query) => {
        setSearchQuery(query);
    }, []);


    const applyFilters = useCallback(() => {
        setAppliedCategory(selectedCategory);
        setAppliedColors(selectedColors);
        setAppliedPriceRange(priceFilter);
        setAppliedSearchQuery(searchQuery);
    }, [selectedCategory, selectedColors, priceFilter, searchQuery]);

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