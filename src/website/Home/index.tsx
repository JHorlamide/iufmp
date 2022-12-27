import React from "react";
import { DOTS, GROUP_SHAPE } from "assets/icons"; //LINE_1, LINE_2,
import Footer from "components/layout/Footer";
import Image from "components/widgets/Image/Image";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";
import { ABOUT_US } from "routes/ROUTES_CONSTANTS";
import Layout from "website/Layout";

// CUSTOM COMPONENTS
import MobileNewTab from "components/common/MobileNewTab";
import Carousel from "components/layout/Carousel/Carousel";
import RecentNews from "../../components/common/RecentNews";

const Home = () => {
  return (
    <Layout>
      <Carousel />

      {/* SHARED AGENT NETWORK  */}
      <section className="relative z-20 px-8 py-0">
        <div className="relative flex flex-col items-center justify-center py-8">
          <h1 className="text-2xl font-bold text-center md:text-3xl lg:text-4xl">
            Ibadan Urban Flood Management Project (lUFMP)
          </h1>

          <hr className="w-16 mt-2 border-b-4 border-blue-900" />

          <p
            className="text-[18px] text-center my-5 md:my-8 md:max-w-4xl lg:my-6 
            lg:leading-text-line-height"
          >
            Ibadan Urban Flood Management Project (lUFMP) was set up by the Oyo
            State Government, with the funding and technical support of the
            World Bank in response to the devastating flood of 26th August, 2011
            which claimed lives and destroyed lives and properties. IUFMP is a
            multi-sectoral and multi-dimensional eight year intervention project
            designed to confront the hydra-headed menace of flooding in Ibadan,
            the capital city of Ibadan.
          </p>

          <RouterLink
            className="font-bold text-blue-900"
            path={ABOUT_US}
            title="Learn More"
          />

          <Image
            image={GROUP_SHAPE}
            parentClassName="absolute left-0 top-48"
            imageClassName="hidden md:block w-40 md:w-72"
            // imageClassName="hidden w-40 md:w-64 md:flex md:-mt-32 lg:w-72 lg:flex lg:-mt-40 lg:ml-20"
          />
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="flex flex-col items-center justify-center mt-16">
        <h1 className="text-2xl font-bold text-center">Our Impact</h1>
        <hr className="w-16 mt-2 border-b-4 border-blue-900" />
      </section>

      <section className="container relative z-10 py-10 mx-auto mt-16 bg-white shadow-lg rounded-xl">
        <div className="flex justify-start px-10 py-3">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            aperiam odit, laudantium, harum ea quidem, vel id eos sequi
            reprehenderit eaque. Beatae perspiciatis modi rem tempora
            voluptatum, temporibus sunt impedit.
          </h1>
        </div>
      </section>

      {/* DOTS-2 */}
      <Image
        image={DOTS}
        parentClassName="relative"
        imageClassName="absolute w-24 -mt-20 md:-mt-5 md:inset-y-0 md:right-0 lg:inset-y-0 lg:right-16 lg:w-32"
      />

      {/* Impact Footer ==> Mobile */}
      {/* <section className="py-20 mt-10 bg-white md:hidden lg:hidden">
        {OUR_IMPACT_CARD_CONTENT.FIRST_ITEM.map((cardContent) => (
          <OurImpactFooter
            key={cardContent.id}
            image={cardContent.image}
            title={cardContent.title}
            firstList={cardContent.firstList}
            thirdList={cardContent.thirdList}
            secondList={cardContent.secondList}
            style={cardContent.style}
          />
        ))}
      </section> */}

      <Image
        image={DOTS}
        parentClassName="relative md:hidden lg:hidden"
        imageClassName="z-0 absolute w-24 -mt-8 inset-y-0 left-[270px] md:left-72 right-0"
      />

      {/* RECENT NEWS */}
      <section className="flex flex-col items-center justify-center bg-white pt-14">
        <section className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold text-center">Recent News</h1>
          <hr className="w-16 mt-2 border-b-4 border-blue-900" />
        </section>

        {/* MOBILE TAB */}
        <div className="md:hidden lg:hidden">
          <MobileNewTab />
        </div>

        {/* RECENT NEWS */}
        <RecentNews />
      </section>

      <section>
        <Footer />
      </section>
    </Layout>
  );
};

export default Home;
