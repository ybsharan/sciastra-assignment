import React from 'react';
import data from '../assets/data.json';
import UniversityCard from './UniversityCard';
import MentorCard from './MentorCard';
import AdvisorCard from './AdvisorCard';

const Team = () => {
  return (
    <div className='max-sm:flex max-sm:flex-col border max-sm:justify-center max-sm:items-center max-sm:text-center px-9 py-3 my-6 mx-6'>
      <h1 className=' flex justify-center p-2 text-2xl font-bold font-serif'>
        <span className='text-blue-500 border-b-2 border-b-[black] border-solid'>
          Our Awesome Teams
        </span>
      </h1>
      <div>
        <h1 className=' flex justify-center p-4 text-lg font-medium'>
          Learn from Scientists, research scholors from the top institutes in
          the world.
        </h1>
        <div className='py-1 px-1 flex justify-center items-center flex-wrap'>
          {data.mentors.map((item, index) => (
            <UniversityCard
              name={item.name}
              university={item.university}
              index={index}
              key={item.jobid}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className='flex justify-center p-5 my-3 mt-5 text-xl font-bold'>
          <span className='text-blue-500 border-dashed border-b-2 border-black'>
            Meet Your Mentors
          </span>
        </h1>
        <div className='py-1 flex justify-center items-center flex-wrap'>
          {data.mentors.map((item) => (
            <MentorCard
              key={item.jobid}
              name={item.name}
              university={item.university}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <div>
        <h1 className='flex justify-center p-5 my-3 mt-5 text-xl font-bold'>
          <span className='border-dashed border-b-2 text-blue-500 border-black'>
            Mentor & Advisor
          </span>
        </h1>
        <div className='py-1 flex justify-center items-center flex-wrap'>
          {data.advisors.map((item) => (
            <AdvisorCard
              key={item.jobid}
              name={item.name}
              university={item.university}
              img={item.img}
              bio={item.bio}
              email={item.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
