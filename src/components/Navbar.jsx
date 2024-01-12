import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSelectionPopup from './LanguageSelectionPopup'

const Navbar = ({ menu1, menu2, menu3 }) => {
    const { i18n } = useTranslation()
    const [isSideNavActive, setisSideNavActive] = useState(false)
    const [isLanguagePopupVisible, setIsLanguagePopupVisible] = useState(false)

    const toggleSideNav = () => {
        setisSideNavActive((prevState) => !prevState)
    }

    const hideSideNav = () => {
        setisSideNavActive(false)
    }

    const toggleLanguagePopup = () => {
        setIsLanguagePopupVisible((prevState) => !prevState)
    }

    const closeLanguagePopup = () => {
        setIsLanguagePopupVisible(false)
    }

    return (
        <div id="navbar">
            <div className="container-fluid">
                <Link to="/" className="logo">
                    <img src="/assets/vector/alexandersanchez.svg" alt="logo" />
                </Link>
                <div className="translation-icon">
                    <img
                        src="./assets/vector/languagevector.svg"
                        alt="logo"
                        onClick={toggleLanguagePopup}
                    />
                    {isLanguagePopupVisible && (
                        <LanguageSelectionPopup onClose={closeLanguagePopup} />
                    )}
                </div>

                <div
                    onClick={toggleSideNav}
                    id="hamburger"
                    className="d-block d-md-none"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={`nav${isSideNavActive ? ' active' : ''}`}>
                    <div id="close" onClick={toggleSideNav}>
                        &times;
                    </div>

                    <li className="nav-item">
                        <Link onClick={hideSideNav} to="/community-pro">
                            {menu1}
                        </Link>
                    </li>

                    <li className="nav-item">
                        <a
                            onClick={hideSideNav}
                            className="btn-header"
                            href="https://my.lvdere.com"
                        >
                            My Lvdere
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
