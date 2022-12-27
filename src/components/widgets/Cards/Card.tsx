import React from "react";
import { ICardProps } from "types/card";
import { IoIosArrowForward } from "react-icons/io";
import style from "./Card.module.css";
import NavLink from "components/layout/Navbar/NavLink/NavLink";

const CustomCard = ({ id, image, date, headLine, details }: ICardProps) => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-start lg:items-end my-10 
      w-full space-y-2 lg:space-x-16 lg:my-16"
    >
      {/* Show on Mobile */}
      <div className="lg:hidden block px-3 w-full h-[210px] md:h-[400px]">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={image}
          alt=""
        />
      </div>

      {/* Show on Desktop */}
      <div className="hidden lg:block">
        <img
          className="object-cover w-[484px] h-[290px] rounded-xl"
          src={image}
          alt=""
        />
      </div>

      <div className="space-y-8 ml-6 mb-10 lg:max-w-lg lg:mb-10">
        <p className="text-[12px] mt-5">{date}</p>
        <h1 className="text-2xl font-bold md:text-xl">{headLine}</h1>
        <p
          className={`${style.clamp} text-xl text-left leading-text-line-height md:text-base`}
        >
          {details}
        </p>

        <NavLink
          path={`/media/news/${id}`}
          title="Continue Reading"
          rightIcon={
            <IoIosArrowForward size={22} className="ml-1 mt-0.5 text-sm" />
          }
          className="text-xl text-buttonColor font-semibold flex w-fit md:text-base 
          hover:text-lightGreen"
        />
      </div>
    </div>
  );
};

export default CustomCard;
