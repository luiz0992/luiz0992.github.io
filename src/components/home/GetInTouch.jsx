import React from "react";
import Container from "react-bootstrap/Container";
import { getInTouch } from "../../editable-stuff/config.js";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <section id="contact" className="section-wrapper">
      <Container>
        <div className="contact-card">
          <span className="section-tag text-white bg-primary mb-3">Get In Touch</span>
          <h2 className="display-4 font-weight-bold mb-3 text-white">{heading}</h2>
          <p className="lead text-light mb-4 mx-auto" style={{ maxWidth: "680px", opacity: 0.9 }}>
            {message}
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3" style={{ gap: "1rem" }}>
            <a href={`mailto:${email}`} className="contact-email-btn">
              <i className="fas fa-envelope mr-2" /> {email}
            </a>
            {getInTouch.linkedIn && (
              <a
                href={getInTouch.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light font-weight-bold px-4 py-2 d-inline-flex align-items-center"
              >
                <i className="fab fa-linkedin mr-2" /> Connect on LinkedIn
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
