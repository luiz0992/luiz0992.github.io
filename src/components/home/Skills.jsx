import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { skills } from "../../editable-stuff/config.js";

const Skills = () => {
  if (!skills || !skills.show) return null;

  return (
    <section id="skills" className="section-wrapper">
      <Container>
        <div className="section-header">
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">{skills.heading}</h2>
          <p className="section-subtitle">
            Specialized engineering and research capabilities across the deep learning lifecycle.
          </p>
        </div>

        <Row>
          {skills.categories &&
            skills.categories.map((category, idx) => (
              <Col lg={4} md={6} key={`cat-${idx}`} className="mb-4">
                <div className="skills-category-card">
                  <div className="skills-cat-header">
                    <div className="skills-cat-icon">
                      <i className={`fas ${category.icon}`} />
                    </div>
                    <h3 className="skills-cat-title">{category.title}</h3>
                  </div>
                  <div className="skills-chips-wrapper">
                    {category.skills.map((skill, sIdx) => (
                      <span key={`skill-${sIdx}`} className="skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
