const Sort = ({ sortType, onSortChange, totalCount }) => {
    return (
        <div className="sort-and-count">
            <div className="sort">
                <select
                    className="input"
                    value={sortType}
                    onChange={(e) => onSortChange(e.target.value)}
                >
                    <option value="relevance">Sort by relevance</option>
                    <option value="price">Sort by price (low to high)</option>
                    <option value="price-desc">Sort by price (high to low)</option>
                    <option value="rating">Sort by rating</option>
                </select>
            </div>
            <div className="count">
                <span className="bold">Showing {totalCount} products</span>
            </div>
        </div>
    );
};

export default Sort;