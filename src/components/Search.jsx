import React, { useState, useEffect, useRef } from 'react';
import magnifierSvg from '../icons/magnifier.svg';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const isFirstRender = useRef(true);
    const onSearchRef = useRef(onSearch);

    useEffect(() => {
        onSearchRef.current = onSearch;
    }, [onSearch]);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const timer = setTimeout(() => {
            if (typeof onSearchRef.current === 'function') {
                onSearchRef.current(searchTerm);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    return (
        <label>
            <input
                type="text"
                placeholder="Search"
                className="input search-row"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img src={magnifierSvg} alt="search-icon" className="search-icon" />
        </label>
    );
};

export default Search;