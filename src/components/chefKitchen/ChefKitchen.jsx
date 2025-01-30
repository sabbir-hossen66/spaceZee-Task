import React from 'react';
import { Title } from '../../commonComponent/Title';
import { DynamicButton } from '../../commonComponent/DynamicButton';

const ChefKitchen = () => {
  return (
    <div className='container mx-auto px-4 py-8 lg:py-15'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
        {/* Text Content */}
        <div className='w-full lg:w-1/2 text-center lg:text-left'>
          <Title
            heading={'Everyone Can be a Chef'}
            subheading={
              'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
            }
          />
          <DynamicButton
            text={'Learn More'}
            extraClasses='mt-10 text-xs lg:text-sm'
          />
        </div>

        {/* Image */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <img
            src='https://i.ibb.co.com/jPhxPpRt/portrait-happy-male-chef-dressed-uniform-1.png'
            alt='Happy Chef'
            className='w-full max-w-md lg:max-w-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default ChefKitchen;