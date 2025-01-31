import React from 'react';
import { Title } from '../../commonComponent/Title';
import { DynamicButton } from '../../commonComponent/DynamicButton';

export const SubsCription = () => {
  return (
    <div className="bg-blue-100 p-10 rounded-3xl flex flex-col items-center text-center relative overflow-hidden">

      <Title heading={'Deliciousness to your inbox'} subheading={<>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </>} />
      <div className="mt-6 flex items-center w-full max-w-md ">
        <input
          type="email"
          placeholder="Your email address..."
          className="w-full px-6 py-4 rounded-full border bg-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400 "
        />
        {/* <button className="bg-black text-white px-6 py-3 rounded-r-full font-semibold hover:bg-gray-800 transition-all">
          Subscribe
        </button> */}
        <DynamicButton text={'Subscribe'} extraClasses='absoulte-none right-0 lg:absolute lg:right-140' />
      </div>
      <div className=''>
        <div className="absolute bottom-0 left-0 flex gap-2 p-4">
          <img src="https://i.ibb.co.com/MDB5NnYf/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543-1.png" alt="Vegetables left" className="w-40 h-auto" />
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <img src="https://i.ibb.co.com/LzG301h2/Photo-plate.png" alt="Salad right" className="w-40  h-auto" />
        </div>
      </div>
    </div>
  );
};

