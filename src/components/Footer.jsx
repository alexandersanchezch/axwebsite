import React from 'react'
import Slide from 'react-reveal/Slide'

const Footer = ({ title, subtitle, description, cta }) => {
    return (
        <div id="footer">
            <div className="container-fluid">
                <Slide bottom cascade>
                    <div>
                        <small>{subtitle}</small>

                        <h2 className="mt-3 mb-4">{title}</h2>

                        <h6 className="mx-auto mb-5">{description}</h6>

                        <div>
                            <a href="/contact">
                                <button className="btn">{cta}</button>
                            </a>
                        </div>

                        <p className="copyright mt-5 mb-5">
                            &copy;COPYRIGHT 2023 lvdere powered by Eneo Meci |
                            P.IVA 02670270228
                        </p>
                    </div>
                </Slide>

                <hr />

                <div className="nav">
                    <div className="logo">
                        <img src="./assets/vector/logo.svg" alt="logo" />
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="https://www.iubenda.com/privacy-policy/94740641">
                                Privacy & Policy
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.iubenda.com/terms-and-conditions/94740641">
                                Terms & Condition
                            </a>
                        </li>
                    </ul>
                    <div className="social">
                        <div className="item">
                            <a href="https://www.linkedin.com/company/lvdere">
                                <img
                                    src="./assets/vector/linkedin.svg"
                                    alt="linkedin"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://www.tiktok.com/@lvdere">
                                <img
                                    src="./assets/vector/tiktok.svg"
                                    alt="tiktok"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://discord.gg/hzHzTN5naM">
                                <img
                                    src="./assets/vector/discord.svg"
                                    alt="discord"
                                />
                            </a>
                        </div>
                        <div className="item">
                            <a href="https://wa.me/message/D6LL2W3L7WMJL1">
                                <img
                                    src="./assets/vector/whatsapp.svg"
                                    alt="whatsapp"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
