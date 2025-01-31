import React from 'react';
import { Title } from '../../commonComponent/Title';
import { tasty } from '../../data';
import { GoHeartFill } from 'react-icons/go';
import TimeSpoonHealth from '../../utility/TimeSpoonHealth';

const TastyRecipe = () => {
  return (
    <div>
      <div className='my-20 text-center'>
        <Title heading={'Simple and tasty recipes'} subheading={<>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </>} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasty.map((recipe) =>
          recipe.isPromo ? (
            <a
              key={recipe.id}
              href={recipe.promoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-100 rounded-lg flex items-center justify-center text-center p-6 shadow-lg"
            >
              <div>
                <img
                  src={recipe.promoImage}
                  alt={recipe.promoText}
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <p className="mt-4 font-semibold text-lg">{recipe.promoText}</p>
              </div>
            </a>
          ) : (
            <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                {[1, 4, 7].includes(recipe.id) && (
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                    <GoHeartFill className="text-red-500" />
                  </button>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{recipe.title}</h3>
                <TimeSpoonHealth />
              </div>
            </div>
          )
        )}
      </div>

    </div>
  );
};

export default TastyRecipe;