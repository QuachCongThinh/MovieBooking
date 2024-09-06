import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import menuItems from "../../services/menuItems";
import { useNavigate } from "react-router-dom";
import "../../i18n";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [userName, setUserName] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const storedUserName = localStorage.getItem("username");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUserName("");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header>
        <div className="header">
          <div className="content">
            <div className="logo">
              <img src={logo} alt="Logo Movie" />
            </div>
            <div className="navbar">
              <ul>
                {menuItems.map((menuItem, index) => (
                  <li key={index}>
                    <a href={menuItem.link}>{menuItem.title}</a>
                    {menuItem.subMenu && (
                      <ul>
                        {menuItem.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.link}>{subItem.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="info">
              <div className="search">
                <input type="text" placeholder="Search..." />
              </div>
              <div className="user-info">
                <div className="user-select" onClick={toggleDropdown}>
                  <span>{userName ? `Hello, ${userName}` : "Hello"}</span>
                  {isDropdownOpen && (
                    <div className="dropdown-menu" ref={dropdownRef}>
                      {userName ? (
                        <button onClick={handleLogout}>{t("Logout")}</button>
                      ) : (
                        <button onClick={() => navigate("/login")}>
                          {t("Login")}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
