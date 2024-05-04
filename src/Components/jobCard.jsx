import React from 'react';
import "../App.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="company-info">
        <img src={job.logoUrl} alt={job.companyName} className="company-logo" />
        <div className="company-details">
          <p className="company-name">{job.companyName}</p>
          <p>{job.jobRole}</p>
        </div>
      </div>
      <p className="location-exp">
        {job.location} | Exp: {job.minExp}-{job.maxExp} years
      </p>
      <p className="salary">Estimated Salary: {job.minJdSalary || '-'} LPA - {job.maxJdSalary || '-'} LPA</p>
      <p className="about-us">About Us:</p>
      <p>{job.jobDetailsFromCompany}</p>
      <div className="skills">
        <p>Skills:</p>
        <div className="skill-list">
          <span className="skill">React</span>
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
        </div>
      </div>
      <button className="apply-btn">Easy Apply</button>
    </div>
  );
};

export default JobCard;
