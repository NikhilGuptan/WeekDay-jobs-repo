import React, { useState, useEffect, useRef } from 'react';
import { fetchJobs } from './utils/api';
import './App.css';
import JobFilter from './Components/jobFilter';
import JobList from './Components/jobList';
import Spinner from './Components/Spinner';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && hasMore) {
      setOffset(offset + 10);
    }
  };

  const loadJobs = () => {
    setLoading(true);
    fetchJobs(10, offset)
      .then((data) => {
        setJobs([...jobs, ...data.jdList]);
        setLoading(false);
        setHasMore(data.jobs.length > 0);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <JobFilter />
      <JobList jobs={jobs} />
      <div ref={loader}>{loading && <Spinner />}</div>
    </div>
  );
};

export default App;
