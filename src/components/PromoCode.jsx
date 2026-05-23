import arrowPromoSvg from "../icons/arrow-promo.svg";
import {useState} from "react";

const PromoCode = ({originalTotal, onApplyPromo}) => {
    const [promoInput, setPromoInput] = useState('');
    const [error, setError] = useState('');
    const [isPromoApplied, setIsPromoApplied] = useState(false);

    const handlePromo = () => {
        if (isPromoApplied) {
            setError('Промокод уже применён!');
            return;
        }

        if (promoInput === 'ilovereact') {
            onApplyPromo(10, true);
            setIsPromoApplied(true);
            setError('');
        } else {
            setError('incorrect!');
        }
    }

    return (
        <div className="promo-code-wrapper">
            <div className="info">
                <div className="title">You Have A Promo Code?</div>
                <div className="description">
                    To receive up-to-date promotional codes, subscribe to us on social networks.
                </div>
            </div>

            <div className="promo-code">
                <input
                    type="text"
                    value={promoInput}
                    onChange={e => setPromoInput(e.target.value)}
                    name="promo-code"
                    className="input"
                    placeholder="Enter promo code"
                />
                <div className="button-wrapper">
                    <button className="button" onClick={handlePromo}>
                        <img src={arrowPromoSvg} alt="Arrow-icon" />
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>

            <div className="find-us">
                <div className="find-us-text">Find us here:</div>
                <div className="find-us-links">
                    <div className="find-us-link"><a href="">FB</a></div>
                    <div className="line"></div>
                    <div className="find-us-link"><a href="">TW</a></div>
                    <div className="line"></div>
                    <div className="find-us-link"><a href="">INS</a></div>
                    <div className="line"></div>
                    <div className="find-us-link"><a href="">PT</a></div>
                </div>
            </div>
        </div>
    );
}

export default PromoCode;