import React from 'react';
import longLineSvg from '../icons/long-line.svg';
import dots1Svg from '../icons/dots1.svg';
import blackSquareSvg from '../icons/black-square.svg';

const Subheader = ({ title = "Shop" }) => {
    return (
        <div className="subheader">
            <div className="shop-block">
                <div className="shop-group">
                    <div className="home-and-shop-group">
                        <div className="shop-name">{title}</div>
                        <div className="home-and-shop">
                            <div className="vertical-line"></div>
                            <div className="home-part">Home</div>
                            <div className="shop-part">{title}</div>
                        </div>
                    </div>
                    <img src={longLineSvg} className="long-line" alt="long line" />
                    <img src={dots1Svg} className="dots1" alt="dots" />
                </div>
                <div className="shop-photo">
                    <img src={blackSquareSvg} alt="black square" />
                </div>
            </div>
        </div>
    );
};

export default Subheader;