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
    const [sortType, setSortType] = useState('relevance');

    const [appliedCategory, setAppliedCategory] = useState("All");
    const [appliedColors, setAppliedColors] = useState([]);
    const [appliedPriceRange, setAppliedPriceRange] = useState({ min: null, max: null });
    const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
    const [appliedSortType, setAppliedSortType] = useState('relevance');


    const filters = useMemo(() => parseFilters(products), []);

    const filteredProducts = useMemo(() => {
        let result = [...products];


        if (appliedSearchQuery.trim()) {
            result = result.filter(product => {
                return product.title.toLowerCase().includes(appliedSearchQuery.toLowerCase());
            });
        }


        if (appliedCategory !== 'All') {
            result = result.filter(product => {
                return product.category === appliedCategory;
            });
        }


        if (appliedPriceRange.min !== null && appliedPriceRange.min !== '') {
            result = result.filter(product => {
                return product.price >= Number(appliedPriceRange.min);
            });
        }

        if (appliedPriceRange.max !== null && appliedPriceRange.max !== '') {
            result = result.filter(product => {
                return product.price <= Number(appliedPriceRange.max);
            });
        }

        if (appliedColors.length > 0) {
            result = result.filter(product =>
                appliedColors.includes(product.color)
            );
        }

        return result;
    }, [appliedSearchQuery, appliedCategory, appliedPriceRange.min, appliedPriceRange.max, appliedColors]);

    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];

        if (appliedSortType === 'rating') {
            return sorted.sort((a, b) => b.rating - a.rating);
        }
        if (appliedSortType === 'price') {
            return sorted.sort((a, b) => a.price - b.price);
        }
        if (appliedSortType === 'price-desc') {
            return sorted.sort((a, b) => b.price - a.price);
        }

        return sorted.sort((a, b) => b.relevance - a.relevance);
    }, [filteredProducts, appliedSortType]);


    const handleSearch = useCallback((query) => {
        setSearchQuery(query);
    }, []);

    const handleSortChange = useCallback((sort) => {
        setSortType(sort);
    }, []);



    const applyFilters = useCallback(() => {
        console.log('voila');
        setAppliedCategory(selectedCategory);
        setAppliedColors(selectedColors);
        setAppliedPriceRange(priceFilter);
        setAppliedSearchQuery(searchQuery);
        setAppliedSortType(sortType);
    }, [selectedCategory, selectedColors, priceFilter, searchQuery, sortType]);

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
                    sortType={sortType}
                    onSortChange={handleSortChange}
                />
                <ProductList products={sortedProducts} />
            </div>
        </>
    );
};

export default Shop;