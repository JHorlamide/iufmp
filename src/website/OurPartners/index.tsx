import React from "react";
import Navbar from "components/layout/Navbar/Navbar";
import style from "./OurPartners.module.css";
import Image from "components/widgets/Image/Image";
import { DOTS } from "assets/icons";
import Footer from "components/layout/Footer";
import Layout from "website/Layout";

const OurPartners = () => {
  return (
    <Layout>
      <section
        className={`${style.about_hero} relative bg-about-hero-mobile md:bg-about-hero-desktop bg-center bg-cover bg-no-repeat items-center w-full h-96 lg:h-[400px]`}
      >
        <Navbar />

        <div className="">
          <h1 className="max-w-lg mx-auto my-10 text-4xl font-extrabold text-center text-white lg:mt-5">
            Our Solutions
          </h1>
        </div>
      </section>

      <section className="relative p-10 -mt-28 md:-mt-10">
        <Image
          image={DOTS}
          parentClassName="absolute inset-y-0 -right-1 top-42 lg:right-20 lg:-top-40"
          imageClassName="w-24 h-24 lg:h-fit"
        />
      </section>

      <div className="px-10 py-10">
        <h1 className="font-extrabold">Pending</h1>
      </div>

      <section className="mt-16">
        <Footer />
      </section>
    </Layout>
  );
};

export default OurPartners;
