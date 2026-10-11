import React from "react";
import Container from "react-bootstrap/Container";
import { mainBody, about } from "../../editable-stuff/config.js";
import SocialIcon from "../common/SocialIcon";

const MainBody = React.forwardRef((props, ref) => {
  return (
    <section id="home" className="hero-section text-center">
      <Container>
        {mainBody.badge && (
          <div className="hero-pill">
            <i className="fas fa-certificate" /> {mainBody.badge}
          </div>
        )}
        <h1 ref={ref} className="hero-name">
          {mainBody.title || `${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        </h1>
        <p className="hero-tagline">
          {mainBody.tagline || mainBody.message}
        </p>

        <div className="hero-actions">
          <a className="btn-hero-primary text-decoration-none" href="#experience">
            <i className="fas fa-briefcase mr-2" /> View Experience
          </a>
          <a className="btn-hero-secondary text-decoration-none" href="#publications">
            <i className="fas fa-book-open mr-2" /> Research & Publications
          </a>
          {about.resume && (
            <a
              className="btn-hero-secondary text-decoration-none"
              href={about.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-pdf mr-2" /> Resume (PDF)
            </a>
          )}
        </div>

        <div className="hero-socials">
          {mainBody.icons.map((icon, index) => (
            <a
              key={`hero-social-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              className="hero-social-link"
              aria-label={icon.name || icon.image}
              title={icon.name}
            >
              <SocialIcon icon={icon} size="1.15em" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
});

export default MainBody;
