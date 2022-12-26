import React from "react";
import {CiLinkedin} from 'react-icons/ci';
import {FiGithub} from 'react-icons/fi';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/georgi-petrushev-9b867921a/" className="home__social-icon">
        <i className="uil uil-dribbble"><CiLinkedin /></i>
      </a>

      <a href="https://github.com/GeorgiPetrushev" className="home__social-icon">
        <i className="uil uil-github-alt"><FiGithub /></i>
      </a>
    </div>
  );
};

export default Social;
