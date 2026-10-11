import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { education } from "../../editable-stuff/config.js";

const Education = () => {
  if (!education || !education.show) return null;

  return (
    <section id="education" className="section-wrapper section-wrapper-alt">
      <Container>
        <div className="section-header">
          <span className="section-tag">Academic Pedigree</span>
          <h2 className="section-title">{education.heading}</h2>
          <p className="section-subtitle">
            Formal training in theoretical physics, computational astrophysics, and scientific computing.
          </p>
        </div>

        <Row className="justify-content-center">
          {education.schools.map((item, idx) => (
            <Col lg={4} md={6} key={`edu-${idx}`} className="mb-4">
              <div className="experience-card-item h-100 p-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="skills-cat-icon mr-3">
                    <i className="fas fa-university" />
                  </div>
                  <div>
                    <h4 className="exp-role mb-0" style={{ fontSize: "1.15rem" }}>
                      {item.degree}
                    </h4>
                    <span className="exp-company" style={{ fontSize: "0.9rem" }}>
                      {item.school}
                    </span>
                  </div>
                </div>
                <div className="exp-badge-date d-inline-block my-2">
                  {item.period} · {item.location}
                </div>
                <p className="about-text-body mb-0" style={{ fontSize: "0.9rem" }}>
                  {item.detail}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Education;
