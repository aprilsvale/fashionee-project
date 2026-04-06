import { useState } from 'react';

const Colors = ({availableColors, onColorsChange}) => {
    const [selectedColors, setSelectedColors] = useState([]);

    const handleColorChange = (color) => {
        const updatedColors = selectedColors.includes(color)
        ? selectedColors.filter(c => c !== color)
            : [...selectedColors, color];

        setSelectedColors(updatedColors);
        onColorsChange(updatedColors);
    };

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Colors</div>
            <div className="sidebar-content">
                <div className="colors">

                    {availableColors.map(color => (
                        <div key={color} className="color">
                            <div className="checkbox-item">
                                <input
                                    type="checkbox"
                                    id={color}
                                    checked={selectedColors.includes(color)}
                                    onChange={() => handleColorChange(color)}
                                />
                                <label htmlFor={color}>
                                    {color.charAt(0).toUpperCase() + color.slice(1)}
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Colors;