import React from 'react';
import { Title } from '../../commonComponent/Title';
import Contact from '../../utility/Contact';
import Client from '../../utility/Client';


const About = () => {
  return (
    <div className='my-20 max-w-screen-xl mx-auto px-6 py-12'>
      <div className='text-center my-10'>
        <Title heading={"About Us"} subheading={<>Welcome to our company! We are dedicated to making your life easier by providing <br />
          innovative and efficient solutions.  Our team of experts is committed  to delivering
          exceptional <br /> service, and we constantly strive to improve and evolve with the times</>} />
      </div>
      <Client />
      <Contact />

    </div>
  );
};

export default About;