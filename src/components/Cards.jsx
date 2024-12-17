import React from 'react';
import image1 from '../assets/images.jpeg'; // Importing the image
import image2 from '../assets/hotel.jpg'
import homepng from '../assets/home.png'
import restaurant from '../assets/restaurant.webp'
import shopping from '../assets/shoppingcart.png'
import image3 from '../assets/shoppingimage.webp'

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <>

      <div className="flex gap-2 p-6 ms-10">
      <Link to="/forhome">
        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-2xl"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }} // Applying the background image
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              LPG for Cooking in Home
            </Typography>
            {/* <Typography variant="h5" className="mb-4 text-gray-400">
              Tania Andrew
            </Typography> */}
            <Avatar
              variant="circular"
              alt="tania andrew"
              className="border-2 border-white w-20 h-20 bg-white"
                src={`${homepng}`}
                
            />
          </CardBody>
        </Card>
      </Link>
        

      {/* for hotel */}
      <div className="">
      <Link to="/forhotel">
        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-2xl"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            style={{ backgroundImage: `url(${image2})` }} // Applying the background image
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              LPG Supply for Hotel/Restaurant
            </Typography>
            
            <Avatar
              variant="circular"
              
                  className="border-2 border-white w-20 h-20 bg-white"
              src={`${restaurant}`}
            />
          </CardBody>
        </Card>
      </Link>
        </div>
        {/* for cart */}
        <div className="">
      <Link to="/ecommerce">
        <Card
          shadow={false}
          className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-2xl"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
            style={{ backgroundImage: `url(${image3})` }} // Applying the background image
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h2"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Shopping Accessories
            </Typography>
            
            <Avatar
              variant="circular"
              
                  className="border-2 border-white w-20 h-20 bg-white p-2"
              src={`${shopping}`}
            />
          </CardBody>
        </Card>
      </Link>
        </div>

      </div>
    </>
  );
}

export default Cards;