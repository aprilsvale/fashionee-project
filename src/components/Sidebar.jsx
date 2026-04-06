import bannerSvg from '../icons/banner.svg';
import Search from './Search';
import Categories from './Categories';
import Price from './Price';
import Colors from './Colors';

const Sidebar = ({
                     onSearch,
                     filters,
                 selectedCategory,
                 onCategoryChange,
                 priceRange,
                 onPriceChange,
                 selectedColors,
                 onColorsChange,
                 onApplyFilters
}) => {
    const {categories, colors, priceRange: availablePriceRange} = filters;
    return (
        <div className="sidebar">
            <div className="search">
                <Search onSearch={onSearch} />
            </div>

            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button className="button" onClick={onApplyFilters}>
                        Apply Filter
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>

            <Categories
                categories={categories}
                onCategoryChange={onCategoryChange}
            />

            <Price
                minPrice={availablePriceRange.min}
                maxPrice={availablePriceRange.max}
                onPriceChange={onPriceChange}
            />

            <Colors
                availableColors={colors}
                onColorsChange={onColorsChange}
                />


            <div className="sidebar-item">
                <div className="sidebar-title">Reviewed By You</div>
                <div className="sidebar-content">
                    <div className="reviewed-products">
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Retro style handbag</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                    <div className="old-price">$52.99</div>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Warm casual sweater</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Retro style handbag</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <a href="#">
                    <img src={bannerSvg} alt="banner" />
                </a>
            </div>
        </div>
    );
};

export default Sidebar;