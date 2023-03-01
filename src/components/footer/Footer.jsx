import React from "react";
import StyledFooter from "./StyleFooter";
import {AiFillGithub,AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai';


const Footer = () => {
  return (
    <StyledFooter>
      <footer className="footer">
        <div className="footer__container container">
          <h1 className="footer__title">Georgi</h1>

          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://github.com/GeorgiPetrushev"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="bx bxl-facebook"></AiFillGithub>
            </a>

            <a
              href="https://www.linkedin.com/in/georgi-petrushev-9b867921a/"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="bx bxl-instagram"></AiFillLinkedin>
            </a>

            <a
              href="https://twitter.com/PetrushevGeorgi"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="bx bxl-twitter"></AiOutlineTwitter>
            </a>
          </div>

          <span className="footer__copy">
            &#169; Georgi Petrushev 2022. All rigths reserved
          </span>
        </div>
      </footer>
    </StyledFooter>
  );
};

export default Footer;
