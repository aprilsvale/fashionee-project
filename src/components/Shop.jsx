import Subheader from './Subheader';
import Sidebar from './Sidebar';
import Sort from "./Sort";
import ProductList from './ProductList';

import products from '../products/products.json';
import { parseFilters } from '../utils/filterParser';
import React, { useState, useMemo, useCallback } from 'react';

const Shop = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceFilter, setPriceFilter] = useState({ min: null, max: null });
    const [selectedColors, setSelectedColors] = useState([]);


    const [sortType, setSortType] = useState('relevance');


    const [appliedCategory, setAppliedCategory] = useState("All");
    const [appliedColors, setAppliedColors] = useState([]);
    const [appliedPriceRange, setAppliedPriceRange] = useState({ min: null, max: null });
    const [appliedSearchQuery, setAppliedSearchQuery] = useState('');



    const [currentPage, setCurrentPage] = useState(1);

    const filters = useMemo(() => parseFilters(products), []);

    const filteredProducts = useMemo(() => {
        let result = [...products];

        if (appliedSearchQuery.trim()) {
            result = result.filter(product =>
                product.title.toLowerCase().includes(appliedSearchQuery.toLowerCase())
            );
        }

        if (appliedCategory !== 'All') {
            result = result.filter(product => product.category === appliedCategory);
        }

        if (appliedPriceRange.min !== null && appliedPriceRange.min !== '') {
            result = result.filter(product => product.price >= Number(appliedPriceRange.min));
        }

        if (appliedPriceRange.max !== null && appliedPriceRange.max !== '') {
            result = result.filter(product => product.price <= Number(appliedPriceRange.max));
        }

        if (appliedColors.length > 0) {
            result = result.filter(product => appliedColors.includes(product.color));
        }

        return result;
    }, [appliedSearchQuery, appliedCategory, appliedPriceRange.min, appliedPriceRange.max, appliedColors]);

    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];

        if (sortType === 'rating') {
            return sorted;
        }
        if (sortType === 'price') {
            return sorted.sort((a, b) => a.price - b.price);
        }
        if (sortType === 'price-desc') {
            return sorted.sort((a, b) => b.price - a.price);
        }

       else return sorted;
    }, [filteredProducts, sortType]);

    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);

    const handleSearch = useCallback((query) => {
        setAppliedSearchQuery(query);
        setCurrentPage(1);
    }, []);

    const handleSortChange = useCallback((sort) => {
        setSortType(sort);
        setCurrentPage(1);
    }, []);

    const applyFilters = useCallback(() => {
        setAppliedCategory(selectedCategory);
        setAppliedColors(selectedColors);
        setAppliedPriceRange(priceFilter);
        setCurrentPage(1);
    }, [selectedCategory, selectedColors, priceFilter]);

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
                <div className="sort-and-product">
                <Sort
                    products={currentProducts}
                    totalCount={sortedProducts.length}
                    sortType={sortType}
                    onSortChange={handleSortChange}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    itemsPerPage={itemsPerPage}
                />
                <ProductList
                    products={currentProducts}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    totalPages={totalPages}
                />
                </div>
            </div>
        </>
    );
};

export default Shop;
