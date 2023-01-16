import React from "react";
import { useState } from "react";
import StyleQualification from "./StyleQualification";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <StyleQualification>
      <section className="qualification section" id="services">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className={
                toggleState === 1
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Technical University</h3>
                  <span className="qualification__subtitle">Bulgaria</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2013
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Real Estate Agent</h3>
                  <span className="qualification__subtitle">
                    Washington D.C.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2017
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">SoftUni</h3>
                  <span className="qualification__subtitle">
                    coding bootcamp
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Freelance Web Develope
                  </h3>
                  <span className="qualification__subtitle">
                    Washington D.C.
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2020
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Product Designer</h3>
                  <span className="qualification__subtitle">
                    Microsoft - Spain
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">UX Designer</h3>
                  <span className="qualification__subtitle">
                    Apple Inc - Spain
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2020 - 2021
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Designer</h3>
                  <span className="qualification__subtitle">Figma - Spain</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyleQualification>
  );
};

export default Qualification;
