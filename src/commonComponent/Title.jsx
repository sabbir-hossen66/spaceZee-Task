import React from 'react';

export const Title = ({ heading, subheading }) => {


  return (
    <div>
      <h1 className='text-4xl font-semibold'>{heading}</h1>
      <p className='text-sm text-gray-400 mt-5'>{subheading}</p>
    </div>
  );
};
