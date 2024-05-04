import React, { useState, useEffect, useRef } from 'react';
import { fetchJobs } from './utils/api';
import './App.css';
import JobFilter from './Components/jobFilter';
import JobList from './Components/jobList';
import Spinner from './Components/Spinner';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);
  const [page, setPage] = useState(0);

  const loadJobs = () => {
    setLoading(true);
    fetchJobs(10, page)
      .then((data) => {
        setJobs([...jobs, ...data.jdList]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadJobs();
  }, [page]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
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
