import React from 'react';
import { Title } from '../../commonComponent/Title';
import { DynamicButton } from '../../commonComponent/DynamicButton';
import { categories } from '../../data';



const Categories = () => {
  return (
    <div className='container mx-auto'>
      <div className=' flex-cols-1 lg:flex justify-between items-center my-15'>
        <Title heading={'Categories'} />
        <DynamicButton text={'View All Categories'} bgColor='bg-[#E7FAFE]' textColor='text-gray-900' />
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="px-6 text-center">
              {/* Background Color Container */}
              <div className={`${category.bgColor} rounded-lg p-6 relative`}>
                {/* Category Name on Top of Background Color */}

                {/* Image Below the Text */}
                <div className="w-full h-32 overflow-hidden rounded-lg">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                </div>
                <h2 className="text-xl font-semibold mt-4">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Categories;