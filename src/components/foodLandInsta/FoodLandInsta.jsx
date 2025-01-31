import React from 'react';
import { Title } from '../../commonComponent/Title';
import { posts } from '../../data';
import IconComponent from '../../utility/IconComponent';
import RealDate from '../../commonComponent/RealDate';

const FoodLandInsta = () => {
  return (
    <div>
      <div className='container mx-auto text-center'>
        <Title heading={'Check out @foodieland on Instagram'} subheading={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '} />
      </div>

      <div className="flex-cols-1 lg:flex justify-center gap-6 p-4">
        {posts.map((post) => (
          <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">

            <div className="flex space-x-4">
              <img alt="" src={post.image} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
              <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                <span className="text-xs dark:text-gray-600">{post.time}</span>
              </div>
            </div>
            <div>
              <img src={post.image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 " />
              {/* icon components */}

              <IconComponent />

              <div className="flex items-center space-x-2 my-2 text-sm text-gray-700">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="User avatar"
                  className="w-6 h-6 rounded-full"
                />
                <p>
                  Liked by <span className="font-semibold">craig_love</span> and{" "}
                  <span className="font-semibold">44,686</span>
                </p>
              </div>

              <p className="text-sm"><span className='font-semibold text-gray-800'>FoodiLand</span> mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
            </div>
            {/* added date */}
            <RealDate />
          </div>
        ))}
      </div>

    </div>
  );
};

export default FoodLandInsta;