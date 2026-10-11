import React from "react";
import Container from "react-bootstrap/Container";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="section-wrapper section-wrapper-alt">
      <Container>
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">{experiences.heading}</h2>
          <p className="section-subtitle">
            From cutting-edge physics research at NASA to leading enterprise AI systems and production LLM platforms.
          </p>
        </div>

        <div className="experience-list">
          {experiences.data.map((data, index) => (
            <ExperienceCard key={`exp-${index}`} data={data} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;