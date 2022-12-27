import React from "react";
import "tw-elements";
import Navbar from "components/layout/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { OUR_PARTNERS } from "routes/ROUTES_CONSTANTS";
import CustomBtn from "../../widgets/CustomBtn/CustomBtn";
import { DOTS } from "assets/icons";
import Image from "../../widgets/Image/Image";
import "./Carousel.module.scss";
import style from "./Carousel.module.scss";

const Carousel = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div
      id="carouselExampleCaptions"
      className={`${style.carousel_item} carousel slide h-[670px] md:h-[630px]`}
      data-bs-ride="carousel"
    >
      <Navbar />

      <div className="absolute top-0">
        {/* CAROUSEL SLIDER CONTAINER */}
        <div className={`inline-block carousel-inner overflow-hidden`}>
          {/* 1st Slid */}
          <div
            className={`bg-gradient-to-r from-indigo-500 to-blue-500
            bg-center bg-cover h-[670px] bg-no-repeat items-center carousel-item active w-full float-left
            py-40 md:py-[165px] lg:py-48`}
          >
            <div className="flex flex-col px-5 space-y-10 md:px-40">
              <h1
                className="max-w-lg text-4xl text-left text-white mb-3 font-extrabold
                md:max-w-6xl md:leading-snug md:text-[45px]"
              >
                Ibadan Urban Flood Management Project (lUFMP)
              </h1>

              <CustomBtn
                className="text-white text-[20px] font-medium rounded-full
                bg-blue-200 px-20 py-3 w-fit hover:bg-lightGreen"
                onClick={() => handleNavigate(OUR_PARTNERS)}
              >
                Partner with Us
              </CustomBtn>
            </div>
          </div>
        </div>

        <Image
          image={DOTS}
          parentClassName="z-50 block md:hidden absolute inset-y-0 right-0 top-[580px]"
          imageClassName="w-20 h-24 md:w-32 h-fit lg:w-fit lg:h-fit"
        />
      </div>
    </div>
  );
};

export default Carousel;
