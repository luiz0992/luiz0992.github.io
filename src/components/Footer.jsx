import React from "react";
import Container from "react-bootstrap/Container";
import { mainBody } from "../editable-stuff/config.js";

const Footer = ({ children }) => {
  return (
    <>
      {children}
      <footer className="footer-custom">
        <Container>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="mb-2 mb-md-0">
              <span className="font-weight-bold text-white mr-2">
                {mainBody.title || `${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
              </span>
              <span className="small text-muted">
                © {new Date().getFullYear()} · All rights reserved.
              </span>
            </div>
            <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
              {mainBody.icons.map((icon, idx) => (
                <a
                  key={`footer-icon-${idx}`}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted"
                  aria-label={icon.name || icon.image}
                  style={{ fontSize: "1.1rem" }}
                >
                  <i className={`fab ${icon.image}`} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
