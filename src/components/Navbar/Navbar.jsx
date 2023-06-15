import { React, useState } from "react";

import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleXmark,
  faBars,
  faCircleInfo,
  faUtensils,
  faAddressCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

const Navbar = () => {
  const [classIcon, setIcon] = useState(false);
  const [closeNav, setCloseNav] = useState(false);
  function handleClick() {
    setIcon((classIcon) => !classIcon);
    setCloseNav((closeNav) => !closeNav);
  }
  let toogleIcon = classIcon ? faCircleXmark : faBars;
  let toogleNav = closeNav ? "nav-menu active" : "nav-menu";

  return (
    <div>
      <nav className="navbarItems">
        <div className="iconContainer">
          <div className="fs">
            <a href="/">
              <img src={logo} alt="logo" className="logoImg" />
            </a>
          </div>
        </div>
        <div className="menu-icons">
          <i>
            <FontAwesomeIcon icon={toogleIcon} onClick={handleClick} />
          </i>
        </div>
        <ul className={toogleNav}>
          <li>
            <a href="/" className="nav-links">
              <i>
                <FontAwesomeIcon icon={faHouse} />
              </i>
              Home
            </a>
          </li>

          <li>
            <a href="/Menu" className="nav-links">
              <i>
                <FontAwesomeIcon icon={faUtensils} />
              </i>
              Menu
            </a>
          </li>
          <li>
            <a href="/BestPlates" className="nav-links">
              <i>
                <FontAwesomeIcon icon={faCircleInfo} />
              </i>
              Best Plates
            </a>
          </li>

          {/* <li>
            <a href="/OrderOnline" className="nav-links">
              <i>
                <FontAwesomeIcon icon={faAddressCard} />
              </i>
              Order Now
            </a>
          </li> */}
          <li>
            <a href="/" className="nav-links">
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              Location
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
