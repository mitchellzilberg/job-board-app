import React from 'react'; 

const JobListing = ({job: {
    logo, company, isNew, featured, position, role, level, postedAt, contract, location, languages, tools
  }, 
  handleTagClick,
}) => {

  const tags = [role, level];

  if(languages) {
    tags.push(...languages);
  }
  if(tools) {
    tags.push(...tools);
  }

  return (
  <div className={`flex flex-col bg-white shadow-md my-16 mx-8 p-5 rounded ${
    featured && 'border-l-4 border-indigo-300 border-solid'
  } lg:flex-row lg:my-4`}>
    <div>
      <img className="-mt-12 mb-4 w-20 h-20 lg:mt-0 lg:h-24 lg:w-24 lg:my-0"  src="https://mitchellzilberg.github.io/job-board-app/{logo}" alt={company} />
    </div>
    <div className="flex flex-col justify-between ml-3">
      <h3 className="font-bold text-md text-indigo-400">  {company} 
      {isNew && (<span className="bg-indigo-400 text-indigo-100 font-bold p-2 rounded-full m-1 uppercase text-xs">NEW</span>)} 
      {featured && (<span className="bg-yellow-400 text-indigo-100 font-bold p-2 rounded-full m-1 uppercase text-xs">FEATURED</span>)}
      </h3>
      <h2 className="font-bold text-lg my-3">{position}</h2>
      <p className="text-sm text-gray-700">{postedAt} · {contract} · {location}</p>
    </div>
    <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-gray-300 border-solid lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0">
      {
        tags ? 
          tags.map((tag) => 
            (<span 
              onClick={() => handleTagClick(tag)}
              className="cursor-pointer text-indigo-400 bg-indigo-100 font-bold mr-4 mb-4 p-2 rounded lg:mb-0">{tag}</span>)
          ) : ''
      }
      
    </div>
  </div>
)};

export default JobListing;