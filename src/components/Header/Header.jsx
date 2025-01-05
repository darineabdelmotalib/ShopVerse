import "./Header.scss";
import searchIcon from "../../assets/images/search_icon.png";
import basketIcon from "../../assets/images/basket_icon.png";
import LogIn from "../Modal/LogIn/LogIn";
import { useState } from "react";

function Header() {
    const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);

    const handleLogIn = () => {
        setIsLogInModalOpen(true); 
    };

    const closeLogInModal = () => {
        setIsLogInModalOpen(false); 
    };

    return (
        <section>
            <header className="header">
                <p className="header__logo">ShopVerse</p>

                <div className="links">
                    <p className="links__link">home</p>
                    <p className="links__link">menu</p>
                    <p className="links__link">mobile app</p>
                    <p className="links__link">contact us</p>
                </div>

                <div className="icons">
                    <img src={searchIcon} alt="search icon" className="icons__icon" />
                    <img src={basketIcon} alt="basket icon" className="icons__icon" />
                    <button className="icons__sign-in-button" onClick={handleLogIn}>Log In</button>
                </div>
            </header>

            <LogIn isOpen={isLogInModalOpen} onClose={closeLogInModal} />
        </section>
    );
}

export default Header;
