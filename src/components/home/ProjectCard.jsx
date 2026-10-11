import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;

  return (
    <Col lg={6} className="mb-4">
      <div className="modern-project-card">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h4 className="project-name mb-0">{name || <Skeleton width={140} />}</h4>
          {svn_url && (
            <a
              href={svn_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary"
              aria-label="GitHub Repository"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          )}
        </div>

        <p className="project-desc">
          {description || (value.name ? "Open-source research repository." : <Skeleton count={2} />)}
        </p>

        {languages_url ? (
          <Language languages_url={languages_url} repo_url={svn_url} />
        ) : (
          <Skeleton count={1} />
        )}

        <div className="d-flex justify-content-between align-items-center pt-3 border-top mt-auto">
          {svn_url ? (
            <a
              href={svn_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-primary font-weight-bold"
            >
              <i className="fab fa-github mr-1" /> View Repository
            </a>
          ) : (
            <Skeleton width={100} />
          )}

          {value.pushed_at && (
            <CardFooter
              star_count={stargazers_count}
              repo_url={svn_url}
              pushed_at={pushed_at}
            />
          )}
        </div>
      </div>
    </Col>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState([]);

  const handleRequest = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      setData(response.data);
    } catch (error) {
      // silent catch for rate limits
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const array = Object.keys(data || {});
  let total_count = 0;
  for (let key in data) {
    total_count += data[key];
  }

  if (!array.length) return null;

  return (
    <div className="d-flex flex-wrap gap-1 mb-3" style={{ gap: "0.35rem" }}>
      {array.slice(0, 4).map((language) => (
        <span key={language} className="exp-tag" style={{ fontSize: "0.75rem" }}>
          {language}
          {total_count > 0 && ` (${Math.trunc((data[language] / total_count) * 100)}%)`}
        </span>
      ))}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  return (
    <div className="d-flex align-items-center text-muted" style={{ fontSize: "0.82rem" }}>
      {star_count > 0 && (
        <a
          href={`${repo_url}/stargazers`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted mr-3 text-decoration-none"
        >
          <i className="fas fa-star text-warning mr-1" /> {star_count}
        </a>
      )}
      <span>
        <i className="far fa-clock mr-1" /> {new Date(pushed_at).toLocaleDateString()}
      </span>
    </div>
  );
};

export default ProjectCard;
