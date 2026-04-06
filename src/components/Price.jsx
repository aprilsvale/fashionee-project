import { useState } from 'react';

const Price = ({minPrice, maxPrice, onPriceChange}) => {
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);

    const handleMinChange = (e) => {
        const value = Number (e.target.value);
        setMin(value);
        onPriceChange({min: value, max});
    }

    const handleMaxChange = (e) => {
        const value = Number (e.target.value);
        setMax(value);
        onPriceChange({min, max: value});
    }

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Price</div>
            <div className="sidebar-content">
                <div className="price-bar">
                    <input type="text"
                           placeholder={minPrice}
                           className="input"
                           value={min}
                           onChange={handleMinChange}
                    />
                    <input type="text"
                           placeholder={maxPrice}
                           className="input"
                           value={max}
                           onChange={handleMaxChange}


                    />
                </div>
            </div>
        </div>
    )
}

export default Price;