import { useState } from 'react';

const Categories = ({categories, onCategoryChange}) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Categories</div>
            <div className="sidebar-content">
                <ul className="custom-list" data-testid="category-list">
                    <li className={`item ${selectedCategory === 'All' ? 'active' : ''}`}>
                        <label>
                            <input
                                type="radio"
                                name="category"
                                value="All"
                                checked={selectedCategory === 'All'}
                                onChange={() => handleCategoryClick('All')}
                            />
                            <span>All</span>
                        </label>
                    </li>
                    {categories.map(category => (
                        <li key={category}
                            className={`item ${selectedCategory === category ? 'active' : ''}`}
                        >
                            <label>
                                <input
                                    type="radio"
                                    name="category"
                                    value={category}
                                    checked={selectedCategory === category}
                                    onChange={() => handleCategoryClick(category)}
                                />
                                <span>{category}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

};

    export default Categories;