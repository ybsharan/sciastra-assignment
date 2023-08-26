import React from 'react';

const MentorCard = ({ key, name, university, img }) => {
  return (
    <div className='max-sm:w-auto w-1/5 p-2 m-2 my-5 flex flex-col justify-center items-center text-center rounded-md hover:scale-105 shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px]'>
      <img src={img} alt={name} className='h-24 w-24 rounded-[50%] p-1 m-1' />
      <h1 className='font-semibold'>{name}</h1>
      <h2 className='text-sm mb-1'>{university}</h2>
    </div>
  );
};

export default MentorCard;
