import React from "react";
import Navbar from "components/layout/Navbar/Navbar";
import style from "./BecomeAnAgent.module.css";
import Footer from "components/layout/Footer";
import Layout from "website/Layout";

const BecomeAnAgent = () => {
  return (
    <Layout>
      <section
        className={`${style.agent_hero} relative bg-agent-hero-mobile md:bg-agent-hero-desktop bg-center bg-cover bg-no-repeat items-center w-full h-96 lg:h-full`}
      >
        <Navbar />

        <div className="lg:py-32">
          <h1 className="max-w-lg mx-auto my-10 text-4xl font-extrabold text-center text-white lg:-mt-5">
            Our Solutions
          </h1>
        </div>
      </section>

      <div className="px-10 py-20">
        <h1 className="">Pending</h1>
      </div>

      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default BecomeAnAgent;
