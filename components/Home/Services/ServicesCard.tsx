import React from "react";
import Image from "next/image";
type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div>
      <Image src={icon} alt="image" width={70} height={700} />
      <h1 className="mt-6  text-2xl md:text-2xl font-bold text-gray-200">
        {name}
      </h1>
      <p className="mt-6 text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
