import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_content content">
          <div className="logo-insign">
            <div className="insign">robert</div>
          </div>
          <nav className="nav">
            <div className="nav_links">
              <a href="#" className="chield">
                <div className="label">home</div>
              </a>
              <a href="#" className="chield">
                <div className="label">about</div>
              </a>
              <a href="#" className="chield">
                <div className="label">Services</div>
              </a>
              <a href="#" className="chield">
                <div className="label">portfolio</div>
              </a>
              <a href="#" className="chield">
                <div className="label">contact</div>
              </a>
            </div>
            <div className="nav_contact_btn btn">contact</div>
          </nav>
          <div className="menu">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
