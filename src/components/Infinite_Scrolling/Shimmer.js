import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10).fill(0).map((_, index) => (
        <div
          key={index}
          className="h-40 w-60 m-5 p-1 bg-amber-50 border border-amber-300 rounded-lg animate-pulse"
        >
          <div className="h-24 bg-amber-200 rounded-md mb-3"></div>
          <div className="h-4 bg-amber-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-amber-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};


export default Shimmer
