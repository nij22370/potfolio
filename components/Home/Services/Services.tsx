import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="font-bold text-center text-white md:text-5xl xl:text-6xl">
        Collaborate with brands <br />
        and agencies to create <br />
        impactful results
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServicesCard
            icon="/images/s1.png"
            name="UI and UX Design"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
          />
        </div>

        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServicesCard
            icon="/images/s2.png"
            name="Web and Mobile App"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServicesCard
            icon="/images/s3.png"
            name="Design & Creative"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServicesCard
            icon="/images/s4.png"
            name="Development"
            description="Designing interfaces that are intuitive, efficient, and enjoyable to use."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
