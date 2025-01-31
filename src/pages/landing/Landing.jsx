import React from 'react';
import Categories from '../../components/categories/Categories';
import ChefKitchen from '../../components/chefKitchen/ChefKitchen';
import FoodLandInsta from '../../components/foodLandInsta/FoodLandInsta';
import DeliciousRecipe from '../../components/deliciousRecipe/DeliciousRecipe';
import TastyRecipe from '../../components/tastyRecipe/TastyRecipe';
import { SubsCription } from '../../components/subscription/SubsCription';

const Landing = () => {
  return (
    <div className="container mx-auto my-18">
      <Categories />
      <TastyRecipe />
      <ChefKitchen />
      <FoodLandInsta />
      <DeliciousRecipe />
      <SubsCription />
    </div>
  );
};

export default Landing;