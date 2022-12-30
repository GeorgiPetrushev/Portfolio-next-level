import React from "react";
import { BiMedal, BiSupport } from "react-icons/bi";
import { FaSuitcase } from "react-icons/fa";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <BiMedal class="bx bx-award about__icon" />

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Working</span>
      </div>

      <div className="about__box">
        <FaSuitcase class="bx bx-briefcase-alt about__icon" />

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">12 + Projects</span>
      </div>

      <div className="about__box">
        <BiSupport class="bx bx-support about__icon" />

        <h3 className="about__title">Available</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
