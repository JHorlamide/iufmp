import React from "react";
import { RecentCardProps } from "types/card";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";
import { IoIosArrowForward } from "react-icons/io";
import style from "../Home.module.scss";

const RecentCard = ({
  id,
  image,
  date,
  headLine,
  details,
  imgWidthHeight
}: RecentCardProps) => {
  return (
    <div className="inline-block flex-col align-top justify-center items-start my-10 w-full lg:my-16">
      <div className={`px-3 ${imgWidthHeight}`}>
        <img
          className="object-cover w-full h-full rounded-xl"
          src={image}
          alt=""
        />
      </div>

      <div className="ml-6 space-y-5 mb-10">
        <p className="text-md mt-5">{date}</p>
        <h1 className="text-2xl font-bold md:text-xl">{headLine}</h1>
        <p
          className={`${style.clamp} text-xl text-left leading-text-line-height md:text-base`}
        >
          {details}
        </p>

        <RouterLink
          className="text-xl text-buttonColor font-semibold flex w-fit md:text-base 
          hover:text-lightGreen"
          path={`/media/news/${id}`}
          title="Continue Reading"
          rightIcon={
            <IoIosArrowForward size={22} className="ml-1 mt-0.5 text-sm" />
          }
        />
      </div>
    </div>
  );
};

export default RecentCard;
