import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../assets/FakestoreBanner1.png";
import Banner2 from "../assets/FakestoreBanner2.png";
import Banner3 from "../assets/FakestoreBanner3.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <div className="banner-wrapper">
            <Image src={Banner3} alt="" layout="fill" />
          </div>
        </div>
        <div>
          <Image src={Banner2} alt="" layout="fill" />
        </div>
        <div>
          <Image src={Banner1} alt="" layout="fill" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
