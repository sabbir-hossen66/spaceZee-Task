import React from 'react';
import { Title } from '../../commonComponent/Title';
import { recipes } from '../../data';
import { GoHeartFill } from 'react-icons/go';
import { ImSpoonKnife } from 'react-icons/im';
import TimeSpoonHealth from '../../utility/TimeSpoonHealth';

const DeliciousRecipe = () => {
  return (
    <div className='my-25'>
      <div className='flex-cols-1  lg:flex justify-between items-center mb-10'>
        <Title heading={<>Try this delicious recipe <br />
          to make your day</>} />
        <Title subheading={<>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqut enim ad minim </>} />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              {[1, 3, 5, 8].includes(recipe.id) && (
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                  <GoHeartFill className="text-red-500" />
                </button>
              )}

            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              {/* <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
                <span>⏳ {recipe.time}</span>
                <span className="flex items-center space-x-2">
                  <ImSpoonKnife />
                  <span>{recipe.category}</span>
                </span>

              </div> */}

              <TimeSpoonHealth />
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default DeliciousRecipe;