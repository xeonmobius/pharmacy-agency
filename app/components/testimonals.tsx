"use client";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function Component() {
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
    <div className="flex justify-center items-center flex-col h-[50vh]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-20">
          Testimonals
        </h2>
        <div className="grid grid-cols-2 gap-8 mb-20">
          <h4 className="justify-center text-center text-3xl font-semibold">
            Here is what are our <br />
            customers are saying
          </h4>
          <Slider {...settings} className="justify-center">
            <div className="text-center text-3xl">
              iengfioenfioansiofdnaidw
              <br /> - John Doe
            </div>
            <div className="text-center text-3xl">
              iengfioenfioansiofdnaidw
              <br /> - John Doe
            </div>
            <div className="text-center text-3xl">
              iengfioenfioansiofdnaidw
              <br /> - John Doe
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
