import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { publications } from "../../editable-stuff/config.js";

const Publications = () => {
  if (!publications || !publications.show) return null;

  return (
    <section id="publications" className="section-wrapper">
      <Container>
        <div className="section-header">
          <span className="section-tag">Scientific Contributions</span>
          <h2 className="section-title">{publications.heading}</h2>
          <p className="section-subtitle">
            {publications.subheading}
          </p>
        </div>

        {publications.honors && publications.honors.length > 0 && (
          <Row className="mb-4">
            {publications.honors.map((honor, idx) => (
              <Col md={6} key={`honor-${idx}`} className="mb-3">
                <div className="honor-box">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-award text-warning fa-lg mr-2" />
                    <h4 className="honor-title mb-0">{honor.title}</h4>
                  </div>
                  <div className="honor-org">{honor.organization}</div>
                  <p className="honor-detail">{honor.detail}</p>
                </div>
              </Col>
            ))}
          </Row>
        )}

        <Row>
          {publications.papers.map((paper, idx) => (
            <Col lg={4} md={6} key={`paper-${idx}`} className="mb-4">
              <div className="pub-card">
                <span className="pub-badge">
                  {paper.badge} · {paper.year}
                </span>
                <h4 className="pub-title">{paper.title}</h4>
                <p className="pub-desc">{paper.description}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  View Publication <i className="fas fa-external-link-alt" />
                </a>
              </div>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <a
            href={publications.googleScholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary px-4 py-2 font-weight-bold"
          >
            <i className="fas fa-graduation-cap mr-2" /> View Full Publication List on Google Scholar
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Publications;
