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
    <div id="testimonials" className="py-20 bg-[#050709]">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16">
          Kind words from satisfied <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">clients</span>
        </h1>
        <div className="relative">
          <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            itemClass="px-10 pb-10"
            dotListClass="custom-dot-list-style"
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
              role="Web Developer"
            />
            <ClientReviewCard
              image="/images/c4.png"
              name="John Doe"
              role="CEO"
            />
            <ClientReviewCard
              image="/images/c5.png"
              name="Nav Basnet"
              role="CEO, Aparell"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
