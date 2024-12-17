import { Button } from '@material-tailwind/react';
import React from 'react'
import { Link } from 'react-router-dom';

function ForHome() {
  return (
    <section id='hero'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
          “ LPG cylinders with care, ensuring proper storage, transportation, and full service ”
          </h1>
          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
          Can't imagine a day without cooking gas cylinder
          </p>
          <div className='flex justify-center md:justify-start'>
            <Link to='#'>
            <Button size="sm" className='bg-red-600 p-3 rounded-full'>Get Started</Button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className='md:w-1/2'>
          <img src='https://cdn.supergas.com/-/media/sites/india/for-home/home/image-2.jpg?rev=23950faf7870406cb838063a13da7a91&hash=9500336D7CA2E0C71BCED342A00338F9' alt='' />
        </div>
      </div>
    </section>
  );
};

export default ForHome