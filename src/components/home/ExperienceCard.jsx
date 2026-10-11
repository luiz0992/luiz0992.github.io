import React from "react";

const ExperienceCard = ({ data }) => {
  return (
    <div className="experience-card-item">
      <div className="exp-header">
        <div className="exp-title-area">
          {data.companylogo && (
            <img className="exp-logo-img" src={data.companylogo} alt={data.company || data.role} />
          )}
          <div>
            <h3 className="exp-role">{data.role}</h3>
            <p className="exp-company">
              {data.company} {data.location ? `· ${data.location}` : ""}
            </p>
          </div>
        </div>
        <div className="exp-badge-date">
          <i className="far fa-calendar-alt mr-1" /> {data.date}
        </div>
      </div>

      {data.summary && <p className="exp-summary">{data.summary}</p>}

      {data.achievements && data.achievements.length > 0 && (
        <ul className="exp-achievements">
          {data.achievements.map((item, idx) => (
            <li key={`achieve-${idx}`}>{item}</li>
          ))}
        </ul>
      )}

      {data.skills && data.skills.length > 0 && (
        <div className="exp-tags">
          {data.skills.map((skill, idx) => (
            <span key={`skill-${idx}`} className="exp-tag">
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;