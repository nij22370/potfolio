"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";
import Image from "next/image";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Kind words from satisfied <br />
        <span className="text-cyan-200">clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          showDots={true}
          responsive={responsive}
          //   ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
        >
          <ClientReviewCard
            image="/images/c1.png"
            name="Rohan Kamracharya"
            role="Full Stack Developer"
          />
          <ClientReviewCard
            image="/images/c2.png"
            name="Kalilash Badu"
            role="UI/UX Designer"
          />
          <ClientReviewCard
            image="/images/c3.png"
            name="Sohan Mijar"
            role="web Developer"
          />
          <ClientReviewCard image="/images/c4.png" name="John Doe" role="CEO" />
          <ClientReviewCard
            image="/images/c5.png"
            name="Nav Basnet"
            role="CEO , Aparell"
          />
        </Carousel>
        ;
      </div>
    </div>
  );
};

export default ClientReview;
