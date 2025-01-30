import React from 'react';
import { Title } from '../../commonComponent/Title';
import { DynamicButton } from '../../commonComponent/DynamicButton';



const Categories = () => {
  return (
    <div className='container mx-auto flex-cols-1 lg:flex justify-between items-center my-15'>
      <Title heading={'Categories'} />
      <DynamicButton text={'View All Categories'} bgColor='bg-[#E7FAFE]' textColor='text-gray-900' />

    </div>
  );
};

export default Categories;