import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
    
    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className="qualification__button qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                Education
            </div>

            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className="qualification__content">
            <div class="qualification__data">

  <div>
    <h3 class="qualification__title">Schooling</h3>
    <span class="qualification__subtitle">G.D Birla Centre For Education</span>
    <div class="qualification__calendar"><i class="uil uil-calendar-alt"></i> 2019 - 2021</div>
  </div>


  <div>
    <span class="qualification__rounder"></span>
    <span class="qualification__line"></span>
  </div>


  <div></div>
</div>



<div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className="qualification__title">Machine Learning Intern</h3>
                        <span className="qualification__subtitle">Teachnook</span>
                        <div className="qualification__calendar"><i className="uil uil-calendar-alt"></i>Jul 2022 - Sep 2022</div>
                    </div>
                </div>

                
                <div class="qualification__data">

  <div> <h3 class="qualification__title">B.Tech in Computer Science Engineering</h3>
    <span class="qualification__subtitle">Institute of Engineering & Management, Kolkata</span>
    <div class="qualification__calendar"><i class="uil uil-calendar-alt"></i> 2021 - 2025</div></div>

  <div>
    <span class="qualification__rounder"></span>
    <span class="qualification__line"></span>
  </div>


  <div>
   
  </div>
</div>


                <div class="qualification__data">
                    <div>
                    </div>

                    <div>
                        <span class="qualification__rounder"></span>
                        <span class="qualification__line"></span>
                    </div>
                    <div>
                    <h3 class="qualification__title">Web Development Intern</h3>
                        <span class="qualification__subtitle">Unified Mentor Pvt.Ltd</span>
                        <div class="qualification__calendar"><i class="uil uil-calendar-alt"></i>Jun 2024 - Aug 2024</div></div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Qualification;
