import React from "react";
import Image from "next/image";

interface ClientReviewCardProps {
  name: string;
  image: string;
  role: string;
  review: string;
}

const ClientReviewCard = ({ image, name, role, review }: ClientReviewCardProps) => {
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

      <p className="mt-6 text-gray-400 italic leading-relaxed">
        &quot;{review}&quot;
      </p>
      
      <div className="flex items-center gap-1 mt-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-500 text-sm">★</span>
        ))}
      </div>
    </div>
  );
};

export default ClientReviewCard;
