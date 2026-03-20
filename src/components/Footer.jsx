import logoSvg from '../icons/logo.svg';
import sendSvg from '../icons/send.svg';
import dots2Svg from '../icons/dots2.svg';
import dots3Svg from '../icons/dots3.svg';
import visaSvg from '../icons/visa.svg';
import masterCardSvg from '../icons/master-card.svg';
import paypalSvg from '../icons/paypal.svg';
import payoneerSvg from '../icons/payoneer.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="column-1">
                        <div className="logo">
                            <img src={logoSvg} alt="logo" />
                        </div>
                        <div className="about-brand">
                            Cillum eu id enim aliquip aute ullamco anim.
                            Culpa deserunt nostrud excepteur voluptate.
                        </div>
                        <div className="find-us">
                            <div className="find-us-text">Find us here:</div>
                            <div className="find-us-links">
                                <div className="find-us-link">
                                    <a href="">FB</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">TW</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">INS</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">PT</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column-2">
                        <div className="title">About</div>
                        <ul className="custom-list">
                            <li className="item"><a href="">About us</a></li>
                            <li className="item"><a href="">Collections</a></li>
                            <li className="item"><a href="">Shop</a></li>
                            <li className="item"><a href="">Blog</a></li>
                            <li className="item"><a href="">Contact us</a></li>
                        </ul>
                    </div>

                    <div className="column-3">
                        <div className="title">Useful links</div>
                        <ul className="custom-list">
                            <li className="item"><a href="">Privacy policy</a></li>
                            <li className="item"><a href="">Terms of use</a></li>
                            <li className="item"><a href="">Support</a></li>
                            <li className="item"><a href="">Shipping details</a></li>
                            <li className="item"><a href="">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="column-4">
                        <div className="title">Newsletter</div>
                        <div className="newsletter-text">
                            Subscribe to be the first to hear about deals, offers and upcoming collections.
                        </div>
                        <div className="newsletter-form">
                            <form action="">
                                <label>
                                    <input type="text" placeholder="Enter your email" className="input" />
                                    <img src={sendSvg} alt="send" className="send-icon" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>

                <img src={dots2Svg} className="dots2" alt="dots decoration" />
                <img src={dots3Svg} className="dots3" alt="dots decoration" />

                <div className="copyright">
                    <div>
                        © All right reserved. Fashionee 2020
                    </div>
                    <div className="payment-methods-container">
                        <div>Payment methods:</div>
                        <div className="payment-methods">
                            <div className="payment-method">
                                <img src={visaSvg} alt="visa" />
                            </div>
                            <div className="payment-method">
                                <img src={masterCardSvg} alt="master-card" />
                            </div>
                            <div className="payment-method">
                                <img src={paypalSvg} alt="paypal" />
                            </div>
                            <div className="payment-method">
                                <img src={payoneerSvg} alt="payoneer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;