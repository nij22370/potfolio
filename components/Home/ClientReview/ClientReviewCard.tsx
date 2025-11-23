import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  role: string;
};

const ClientReviewCard = ({ image, name, role }: Props) => {
  return (
    <div className="m-2 bg-[#0b1622] p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={60} // ← REQUIRED
          height={60} // ← REQUIRED
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg text-white font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>

      <p className="mt-6 text-base text-gray-300 font-medium leading-relaxed">
        &quot;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        minima labore debitis consequatur et laudantium quia blanditiis rerum
        dignissimos soluta atque accusamus voluptatum.&quot;
      </p>
      <h1 className="mt-6 text-xl font-bold text-cyan-200">{role}</h1>
      <p className="mt-1 text-white">{role}</p>
    </div>
  );
};

export default ClientReviewCard;
