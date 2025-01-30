import React from 'react';
import { DynamicButton } from '../../commonComponent/DynamicButton';
import { FaFacebookF } from 'react-icons/fa';

const Categories = () => {
  return (
    <div>
      <h2>here is categories</h2>
      <DynamicButton text='hello' bgColor='bg-red-500' textColor='black' icon={FaFacebookF} />
    </div>
  );
};

export default Categories;