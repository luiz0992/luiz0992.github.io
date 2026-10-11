import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + (specfic ? specfic.length : 0)).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      if (specfic && specfic.length > 0) {
        for (let repoName of specfic) {
          try {
            const response = await axios.get(`${specficReposAPI}/${repoName}`);
            repoList.push(response.data);
          } catch (e) {
            // continue
          }
        }
      } else {
        const response = await axios.get(allReposAPI);
        repoList = [...response.data.slice(0, length)];
      }
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <section id="projects" className="section-wrapper section-wrapper-alt">
      <Container>
        <div className="section-header">
          <span className="section-tag">Open Source</span>
          <h2 className="section-title">{heading}</h2>
          <p className="section-subtitle">
            Open-source machine learning starter kits, acceleration builds, and scientific research code.
          </p>
        </div>

        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>

        <div className="text-center mt-3">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary px-4 py-2 font-weight-bold"
          >
            <i className="fab fa-github mr-2" /> View More on GitHub
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Project;
