import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { about } from "../../editable-stuff/config.js";

const AboutMe = () => {
  return (
    <section id="aboutme" className="section-wrapper">
      <Container>
        <div className="section-header">
          <span className="section-tag">Background & Focus</span>
          <h2 className="section-title">{about.heading}</h2>
          <p className="section-subtitle">
            Bridging fundamental physics and deep mathematical rigor with production machine learning systems.
          </p>
        </div>

        <div className="about-card">
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-4 mb-lg-0">
              <div className="profile-avatar-wrapper mb-3">
                <img
                  className="profile-avatar-img"
                  src={about.imageLink}
                  alt="Luiz Fernando Guedes dos Santos"
                  width={about.imageSize || 300}
                  height={about.imageSize || 300}
                />
              </div>
              <div className="stats-grid">
                {about.stats &&
                  about.stats.map((stat, idx) => (
                    <div key={`stat-${idx}`} className="stat-item">
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
              </div>
            </Col>

            <Col lg={8} className="pl-lg-4">
              <p className="about-text-lead">{about.message}</p>
              {about.subMessage && <p className="about-text-body">{about.subMessage}</p>}

              <div className="d-flex flex-wrap gap-2 mt-4" style={{ gap: "0.75rem" }}>
                {about.resume && (
                  <a
                    className="btn btn-primary font-weight-bold px-4 py-2"
                    href={about.resume}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fas fa-file-pdf mr-2" /> Download Full CV
                  </a>
                )}
                {about.scholarUrl && (
                  <a
                    className="btn btn-outline-secondary font-weight-bold px-4 py-2"
                    href={about.scholarUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fas fa-graduation-cap mr-2" /> Google Scholar
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
