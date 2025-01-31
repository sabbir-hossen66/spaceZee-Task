import React from 'react';
import { recipes } from '../data';
import { ImSpoonKnife } from 'react-icons/im';

const TimeSpoonHealth = () => {
  // Select the first recipe (or any specific one)
  const recipe = recipes[0]; // Change index if needed

  return (
    <div>
      <div className="flex items-center text-gray-500 text-sm mt-2 space-x-4">
        <span>⏳ {recipe.time}</span>
        <span className="flex items-center space-x-2">
          <ImSpoonKnife />
          <span>{recipe.category}</span>
        </span>
      </div>
    </div>
  );
};

export default TimeSpoonHealth;
