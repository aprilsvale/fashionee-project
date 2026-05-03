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
    const [sortType, setSortType] = useState('relevance');

    const [appliedCategory, setAppliedCategory] = useState("All");
    const [appliedColors, setAppliedColors] = useState([]);
    const [appliedPriceRange, setAppliedPriceRange] = useState({ min: null, max: null });
    const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
    const [appliedSortType, setAppliedSortType] = useState('relevance');

    const [currentPage, setCurrentPage] = useState(1)
    console.log('Shop рендер, currentPage:', currentPage, 'setCurrentPage:', typeof setCurrentPage);


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

    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);


    const handleSearch = useCallback((query) => {
        setAppliedSearchQuery(query);
    }, []);

    const handleSortChange = useCallback((sort) => {
        setSortType(sort);
    }, []);



    const applyFilters = useCallback(() => {
        console.log('voila');
        setAppliedCategory(selectedCategory);
        setAppliedColors(selectedColors);
        setAppliedPriceRange(priceFilter);
        setAppliedSortType(sortType);
        setCurrentPage(1);
    }, [selectedCategory, selectedColors, priceFilter, sortType]);

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
                <ProductList
                    products={currentProducts}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>

        </>
    );
};

export default Shop;