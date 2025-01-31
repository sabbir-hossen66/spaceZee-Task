import React from 'react';
import { Title } from '../../commonComponent/Title';

const TastyRecipe = () => {
  return (
    <div>
      <div className='my-20 text-center'>
        <Title heading={'Simple and tasty recipes'} subheading={<>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqut enim ad minim </>} />
      </div>
    </div>
  );
};

export default TastyRecipe;