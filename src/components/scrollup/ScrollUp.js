import React from "react";
import StyleScrollUp from "./StyleScrollUp";
import {ImArrowUp} from 'react-icons/im'

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <StyleScrollUp>
      <a href="#" className="scrollup">
        <ImArrowUp className="uil uil-arrow-up scrollup__icon"></ImArrowUp>
      </a>
    </StyleScrollUp>
  );
};

export default ScrollUp;
