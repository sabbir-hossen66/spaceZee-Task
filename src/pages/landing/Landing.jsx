import React from 'react';
import Categories from '../../components/categories/Categories';
import ChefKitchen from '../../components/chefKitchen/ChefKitchen';
import FoodLandInsta from '../../components/foodLandInsta/FoodLandInsta';

const Landing = () => {
  return (
    <div className="container mx-auto my-18">
      <Categories />
      <ChefKitchen />
      <FoodLandInsta />
    </div>
  );
};

export default Landing;