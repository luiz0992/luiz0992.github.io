import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  about,
  experiences,
  publications,
  education,
  skills,
  repos,
  getInTouch,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Experience from "./components/home/Experience";
import Publications from "./components/home/Publications";
import Education from "./components/home/Education";
import Skills from "./components/home/Skills";
import Project from "./components/home/Project";
import GetInTouch from "./components/home/GetInTouch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody ref={ref} />
      {about.show && <AboutMe />}
      {experiences.show && <Experience experiences={experiences} />}
      {publications.show && <Publications />}
      {education.show && <Education />}
      {skills.show && <Skills />}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
