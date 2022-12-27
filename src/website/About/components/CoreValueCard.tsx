import React from "react";
import Image from "components/widgets/Image/Image";

interface CoreValueCardProps {
  image: string;
  heading: string;
  content: string;
}

const CoreValueCard = ({ image, heading, content }: CoreValueCardProps) => {
  return (
    <div className="container bg-white rounded-xl shadow-lg h-[320px] w-fit mx-5 px-6 py-10 lg:h-[350px] lg:w-80">
      <Image parentClassName="flex justify-center items-center" image={image} />

      <div className="flex flex-col mt-5">
        <h1 className="text-3xl text-center font-bold">{heading}</h1>
        <p className="text-center mt-4 leading-text-line-height">{content}</p>
      </div>
    </div>
  );
};

export default CoreValueCard;
