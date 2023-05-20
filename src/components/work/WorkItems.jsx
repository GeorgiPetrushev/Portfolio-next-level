import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__bottom">
        <a href={item.web} className="work__button">
          Website
          <RiArrowRightLine className="bx bx-right-arrow-alt work__button-icon"></RiArrowRightLine>
        </a>
        <a href={item.gitHub} className="work__button">
          GitHub
          <RiArrowRightLine className="bx bx-right-arrow-alt work__button-icon"></RiArrowRightLine>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
