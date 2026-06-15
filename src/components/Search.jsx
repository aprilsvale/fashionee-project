import React, { useState, useEffect } from 'react';
import magnifierSvg from '../icons/magnifier.svg';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(searchTerm);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchTerm, onSearch]);

    return (
        <label>
            <input
                type="text"
                placeholder="Search"
                className="input search-row"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                data-testid="search-input"
            />
            <img src={magnifierSvg} alt="search-icon" className="search-icon" />
        </label>
    );
};

export default Search;