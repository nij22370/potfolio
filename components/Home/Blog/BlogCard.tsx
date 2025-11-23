import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const BlogCard = ({ image, title }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title} // ✔ FIXED
        width={500}
        height={500}
        className="object-cover"
      />
      <p className="mt-6 text-base text-gray-500 font-medium sm:text-lg">
        21 July 2025
      </p>
      <h1 className="mt-5 text-lg font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300">
        {title}
      </h1>

      <div className="flex items-center gap-4 mt-4">
        <span className="px-5 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold">
          React
        </span>
        <span className="px-5 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold">
          Next JS
        </span>
        <span className="px-5 py-2 bg-blue-700 text-white rounded-full text-sm font-semibold">
          Tailwind
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
