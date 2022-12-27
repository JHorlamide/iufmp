import React from "react";
import Navbar from "components/layout/Navbar/Navbar";
import Layout from "website/Layout";
import style from "./Media.module.css";
import { DOTS } from "assets/icons";
import Image from "components/widgets/Image/Image";
import MediaTab from "./components/MediaTab";
import Footer from "components/layout/Footer";

const Media = () => {
  return (
    <Layout>
      <section className="bg-white">
        <div
          className={`${style.media} bg-media_hero_mobile md:bg-media_hero_desktop 
          bg-center bg-cover bg-no-repeat items-center w-full h-96 lg:h-[400px]`}
        >
          <Navbar />

          <div className="">
            <h1
              className="text-white text-4xl text-center max-w-lg mx-auto my-10 font-extrabold
              lg:mt-5"
            >
              Media
            </h1>
          </div>
        </div>

        <div className="relative p-10 -mt-28 md:-mt-10">
          <Image
            image={DOTS}
            parentClassName="absolute inset-y-0 -right-1 top-42 md:right-16 md:-top-32
            lg:right-20 lg:-top-40"
            imageClassName="w-24 h-24 md:h-fit lg:h-fit"
          />
        </div>

        <section>
          <MediaTab />
          <Footer />
        </section>
      </section>
    </Layout>
  );
};

export default Media;
