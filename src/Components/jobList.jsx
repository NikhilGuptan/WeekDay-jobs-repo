import React from 'react';
import "../App.css";
import JobCard from './jobCard';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <div key={index} className="job-card-wrapper">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
