import React from "react";
import { IconContext } from "react-icons";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const Header = ({ menuIsActive, toggleMenu }) => {
  return (
    <>
      <header>
        <h1>ENVY</h1>
        {/* Mobile Navigation */}
        <button onClick={toggleMenu}>
          <IconContext.Provider value={{ size: 42 }}>{menuIsActive ? <IoMdClose /> : <IoMdMenu />}</IconContext.Provider>
        </button>
      </header>
      {menuIsActive && (
        <nav>
          <ul>
            <li>Shop</li>
            <li>Collections</li>
            <li>Lookbook</li>
            <li>News</li>
            <li>About</li>
          </ul>
          {/* Show only in Desktop*/}
          <div className="nav-aside">
            <ul>
              <li>My Account</li>
              <li>Customer Service</li>
              <li>Currency / {/*This should change dinamically*/} $</li>
            </ul>
            {/* Suscribe */}
            <div>
              <p className="suscribe-title">10% OFF YOUR FIRST ORDER</p>
              <p className="suscribe-desc">
                ENVY-CLUB suscribes receive 10% off their first order <br />
                and early access to new drops. <span>Privacy Policy</span>
              </p>
              <button>Suscribe</button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
