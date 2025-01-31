import React from 'react';
import { Title } from '../../commonComponent/Title';
import { ImSpoonKnife } from 'react-icons/im';

const Banner = () => {
  return (
    <div className="bg-[#E7FAFE] p-10 rounded-3xl flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left relative overflow-hidden w-full max-w-6xl mx-auto">
      <div className="lg:w-1/2">
        <div className="flex items-center w-40 bg-white px-3 py-1 rounded-full mb-4">
          <img className="h-4 w-auto" src="https://i.ibb.co.com/VcHPMr3G/image-14.png" alt="Hot Recipes Icon" />

          <p className="text-sm font-semibold ml-2">Hot Recipes</p>
        </div>

        <Title heading={<>Spicy delicious <br /> chicken wings</>} subheading={<>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqut enim ad minim </>} />

        <div className="flex gap-4 mt-4">
          <span className="bg-gray-200 px-4 py-2 rounded-full flex items-center gap-2">
            ⏱ 30 Minutes
          </span>
          <span className="bg-gray-200 px-4 py-2 rounded-full flex items-center gap-2">
            <ImSpoonKnife /> Chicken
          </span>
        </div>

        <div className="lg:w-95 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6">
          {/* Author Info */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co.com/Y4kRcpcG/Whats-App-Image-2024-11-20-at-1-15-45-AM-min.jpg"
              alt="Author"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">Sabbir Hossen</p>
              <p className="text-gray-500 text-sm">15 March 2022</p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all flex items-center gap-2">
            View Recipes ▶
          </button>
        </div>


      </div>
      <div className="lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
        <img src="https://i.ibb.co.com/8LXM3Y8k/baked-chicken-wings-asian-style-tomatoes-sauce-plate-1.png" alt="Chicken wings" className="w-full max-w-lg rounded-lg shadow-lg" />

      </div>
    </div>
  );
};

export default Banner;