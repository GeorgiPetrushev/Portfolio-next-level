import React, { useState } from "react";
import StyleHeader from "./StyleHeader";
import {FcOpenedFolder ,FcHome, FcAbout,FcServices,FcContacts} from 'react-icons/fc';
import {GiSkills} from 'react-icons/gi';
import {RiBodyScanFill} from 'react-icons/ri';
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <StyleHeader>
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Georgi
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <FcHome className="uil uil-file-alt nav__icon"/> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <FcAbout className="uil uil-file-alt nav__icon"/> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <GiSkills className="uil uil-file-alt nav__icon"/> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <FcServices className="uil uil-file-alt nav__icon" /> Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <RiBodyScanFill className="uil uil-file-alt nav__icon"/> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <FcContacts className="uil uil-file-alt nav__icon"/> Contact
              </a>
            </li>
          </ul>

          <div
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ><AiOutlineClose className="uil uil-times nav__close"/></div>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <FcOpenedFolder className="uil uil-app nav__open"/>
        </div>
      </nav>
    </header>
    </StyleHeader>
  );
};

export default Header;
