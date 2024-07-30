import React from 'react';
import "./skills.css";
import FullStack from './Fullstack';
import Coursework from './Coursework';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
         <h2 className="section__title">Skills</h2>
         <span className="section__subtitle">My technical level</span>

         <div className="skills__container containergrid">
            <FullStack/>
            <Coursework/>
         </div>
    </section>
  );
};

export default Skills;