"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  items: {
    image: string;
    alt: string;
  }[];
};

export default function Component({ items }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full h-[60vh] max-w-6xl mx-auto px-4 flex flex-col justify-center">
      <Slider {...settings} className="py-20 my-20 h-full w-full">
        {items.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.alt}
              height={100000}
              width={100000}
            />
            <Link
              href="#"
              className="left-[50%] mb-20 bg-purple-600 text-white hover:bg-purple-700 transition duration-300 py-2 px-4 rounded"
            >
              Contact Us
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
