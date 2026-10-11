import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { navBar, mainBody, about, experiences, publications, skills, repos, getInTouch } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + (ref?.current?.offsetTop || 0) - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= (ref?.current?.offsetTop || 0)
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`fixed-top custom-navbar ${!isTop ? "nav-scrolled" : "nav-top"}`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="navbar-brand-wrapper" href={process.env.PUBLIC_URL + "/#home"}>
          <span className="navbar-brand-name">{navBar.brandText || `${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}</span>
          {navBar.roleBadge && <span className="navbar-brand-badge">{navBar.roleBadge}</span>}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" className="toggler" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ml-auto align-items-center">
            {about.show && (
              <Nav.Link className="custom-nav-link" href={process.env.PUBLIC_URL + "/#aboutme"}>
                About
              </Nav.Link>
            )}
            {experiences.show && (
              <Nav.Link className="custom-nav-link" href={process.env.PUBLIC_URL + "/#experience"}>
                Experience
              </Nav.Link>
            )}
            {publications.show && (
              <Nav.Link className="custom-nav-link" href={process.env.PUBLIC_URL + "/#publications"}>
                Research
              </Nav.Link>
            )}
            {skills.show && (
              <Nav.Link className="custom-nav-link" href={process.env.PUBLIC_URL + "/#skills"}>
                Skills
              </Nav.Link>
            )}
            {repos.show && (
              <Nav.Link className="custom-nav-link" href={process.env.PUBLIC_URL + "/#projects"}>
                Projects
              </Nav.Link>
            )}
            {getInTouch.show && (
              <Nav.Link className="custom-nav-link" href={process.env.PUBLIC_URL + "/#contact"}>
                Contact
              </Nav.Link>
            )}
            {about.resume && (
              <Nav.Link
                className="nav-resume-btn"
                href={about.resume}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fas fa-file-pdf mr-1" /> Resume
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Navigation;
