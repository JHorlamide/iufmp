import React from "react";
import Navbar from "components/layout/Navbar/Navbar";
import style from "./About.module.css";
import Footer from "components/layout/Footer";
import Layout from "website/Layout";

const About = () => {
  return (
    <Layout>
      <section
        className={`${style.about_hero} relative bg-about-hero-mobile md:bg-about-hero-desktop
        bg-center bg-cover bg-no-repeat items-center h-96 lg:h-[400px]`}
      >
        <Navbar />

        <div className="">
          <h1 className="max-w-lg mx-auto my-10 text-4xl font-extrabold text-center text-white lg:mt-5">
            About IUFMP
          </h1>
        </div>
      </section>

      <div className="px-10 py-20">
        <h1 className="">In coming</h1>
      </div>

      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default About;
