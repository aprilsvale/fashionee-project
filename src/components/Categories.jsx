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
            <ul className="custom-list">
                <li className={`item ${selectedCategory === 'All' ? 'active' : ''}`}
                    onClick={() => handleCategoryClick('All')}>

                    All
                </li>
                {categories.map(category => (
                    <li key={category}
                        className={`item ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                        >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
};

export default Categories;