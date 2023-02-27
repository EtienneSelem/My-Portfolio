import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>Mon parcours personnel</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div
                    className={
                            toggleState === 1 
                                ? "qualification__button qualification__active button--flex" :
                                "qualification__button button--flex"
                    }
                    onClick = {() =>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon">
                    </i>
                    Education
                </div>

                <div className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex" :
                                "qualification__button button--flex"
                        }
                        onClick = {() =>toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"> 
                    </i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                    className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" :
                        "qualification__content"
                    }
                 >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Génie Informatique</h3>
                            <span className="qualification__subtitle">Université de Kinshasa</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i>2017 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Architecte Logiciel</h3>
                            <span className="qualification__subtitle">Orange Digital Center</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i>2022 - à ce jour
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web et Mobile Developpement</h3>
                            <span className="qualification__subtitle">Orange Digital Center</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i>2022 - à ce jour
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">Orange Digital Center</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i>2019 - 2022
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                        toggleState === 2
                        ? "qualification__content qualification__content-active" :
                        "qualification__content"
                    }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">PenTesteur de Système d'information</h3>
                            <span className="qualification__subtitle">Shady Corporation</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i>2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Orange Digital Center</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i>2020 - 2021
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Orange Digital Center</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt">
                                </i>2018 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder">
                            </span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    </section>
  );
}

export default Qualification