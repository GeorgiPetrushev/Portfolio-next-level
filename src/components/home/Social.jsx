import React from "react";
import {CiLinkedin} from 'react-icons/ci';
import {FiGithub} from 'react-icons/fi';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/georgi-petrushev-9b867921a/" className="home__social-icon">
        <CiLinkedin />
      </a>

      <a href="https://github.com/GeorgiPetrushev" className="home__social-icon">
        <FiGithub />
      </a>
    </div>
  );
};

export default Social;
