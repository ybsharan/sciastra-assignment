import React from 'react';

const UniversityCard = ({ name, university, key }) => {
  return (
    <div className='max-sm:w-auto p-2 mx-3 my-5 w-1/5 rounded-sm flex justify-center items-center text-center hover:scale-105 shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px]'>
      <h2>{university}</h2>
    </div>
  );
};

export default UniversityCard;
