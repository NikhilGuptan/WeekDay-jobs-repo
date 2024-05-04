import React from 'react';
import "../App.css";

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <p>{job.experience}</p>
      <button>Apply</button>
    </div>
  );
};

export default JobCard;
