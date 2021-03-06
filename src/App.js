import React, { useState, useEffect } from 'react';
import JobListing from './components/JobListing';
import data from './assests/data.json';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setJobs(data), []);

  const filterFunction = ({role, level, tools, languages}) => {

    if(filters.length === 0 ) {
      return true;
    }

    const tags = [role, level];

    if(languages) {
      tags.push(...languages);
    }
    if(tools) {
      tags.push(...tools);
    }

    return filters.every(filter => tags.includes(filter));
  }

  const handleTagClick = (tag) => {
    // avoid re-adding a tag 
    if(filters.includes(tag)) return; 
    setFilters([...filters, tag]);
  }

  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter(f => f !== passedFilter));
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const filteredJobs = jobs.filter(filterFunction);

  
  console.log(jobs);

  return (
    <>
      <header className="bg-indigo-100 mb-12">
        <img className="w-full" src="/images/bg-header-desktop.svg" alt="bg-img" />
      </header>
      <div className="container m-auto">
        {
          filters.length > 0 && (
              <div className={`flex bg-white shadow-md -my-20 mb-16 mx-8 p-5 rounded z-10 relative`}> 
                {filters.map((filter) => (
                <span
                  className="cursor-pointer mr-4 mb-4 p-2 font-bold roundedlgm:mb-0"
                  onClick={() => handleFilterClick(filter)}
                >
                  <span className="cursor-pointer text-indigo-400 bg-indigo-100 font-bold">x {filter}</span>
                </span>
                ))}
                <button onClick={clearFilters} className="font-bold text-gray-700 ml-auto">Clear</button>
        </div>
        )}
      {
        jobs.length === 0 ? (
          <p>Fetching jobs...</p>
        ) : (
          filteredJobs.map(job => (
          <JobListing job={job} key={job.id} handleTagClick={handleTagClick}/>
        )))
      }
      </div>
    </>
  );
}

export default App;

// TODO
// 1. get familiar with the data and design x
// 2. create job board component x
// 3. pass data to the job board component 
// 4. stlye job board component
// 5. add filter functionality

