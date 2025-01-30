import React from 'react';
import Categories from '../../components/categories/Categories';
import ChefKitchen from '../../components/chefKitchen/ChefKitchen';

const Landing = () => {
  return (
    <div className="container mx-auto my-18">
      <Categories />
      <ChefKitchen />
    </div>
  );
};

export default Landing;