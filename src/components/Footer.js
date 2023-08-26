import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col my-8'>
      <h1 className='flex justify-center'>
        Made With ❤️ by {''}
        <a
          href='https://www.linkedin.com/in/ybsharan/'
          target='_blank'
          className='cursor-pointer font-bold hover:text-blue-500 hover:font-bold hover:scale-105 font-serif ml-1'
          rel='noreferrer'
        >
          Sharan
        </a>
      </h1>
      <h2 className='flex justify-center'>
        Copyright ©️ 2023 SciAstra. All Rights Reserved.
      </h2>
    </div>
  );
};

export default Footer;
