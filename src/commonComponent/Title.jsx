import React from 'react';

export const Title = ({ heading, subheading, align = 'center' }) => {
  const alignmentClasses = {
    left: 'justify-between text-left items-center',
    center: 'justify-center text-center items-center',
    right: 'justify-end text-right',
  };

  return (
    <div className={`flex ${alignmentClasses[align]} flex-col lg:flex-row`}>
      <h1 className='text-4xl font-semibold'>{heading}</h1>
      <p className='text-sm text-gray-400'>{subheading}</p>
    </div>
  );
};
