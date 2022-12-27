import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/layout/Navbar/Navbar";
import Layout from "website/Layout";
import { LONG_HORIZONTAL_LINE } from "assets/icons";
import { useData } from "hooks/useFetch";
import { NewsType } from "types/news";
import moment from "moment";
import { urlFor } from "lib/client";
import MobileNewTab from "components/common/MobileNewTab";
import RecentNews from "components/common/RecentNews";
import { Spinner } from "flowbite-react";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";
import { MEDIA } from "routes/ROUTES_CONSTANTS";

const NewsDetails = () => {
  const { id } = useParams();
  const queries = `*[_type == 'news' && _id == '${id}'][0]`;
  const { data } = useData<NewsType>(queries);

  if (!data) {
    return (
      <div className="container mx-auto text-[28px] text-center font-bold mt-10">
        <Spinner
          color="success"
          aria-label="spinner"
          className="text-buttonColor"
          size={"xl"}
        />
      </div>
    );
  }

  return (
    <Layout>
      <header className="pb-2 align-top bg-gradient-to-r from-lightBlue to-darkBlue">
        <Navbar />
      </header>

      {/* MOBILE DISPLAY */}
      <div className="md:hidden w-full h-[270px]">
        <img
          src={urlFor(data.image).toString()}
          alt="..."
          className="object-cover w-full h-full bg-no-repeat"
        />
      </div>

      {/* DESKTOP DISPLAY */}
      <div className="hidden md:block w-full h-[600px] bg-center  bg-auto">
        <img
          src={urlFor(data.image).toString()}
          alt="..."
          className="object-cover w-full h-full"
        />
      </div>

      <section className="container relative grid items-center grid-cols-12 px-5 py-5 mx-auto md:px-32">
        <div className="col-span-12 lg:col-span-12">
          {/* Article Published Date */}
          <div className="flex py-6 space-x-12">
            <p className="text-[12px] ">{moment(data?.date).format("LLL")}</p>

            <RouterLink
              path={MEDIA}
              title="Back"
              className="-my-1 font-semibold text-buttonColor"
            />
          </div>

          {/* Article Headline */}
          <h1 className="text-buttonColor text-[26px] leading-[39px] font-bold">
            {data?.headLine}
          </h1>

          {/* Article Details */}
          <p className="text-[18px] text-justify whitespace-pre-line pt-5">
            {data?.details}
          </p>

          <img src={LONG_HORIZONTAL_LINE} alt="..." className="mt-8" />
        </div>

        {/* <div className="mt-6 md:mt-4">
          <p className="text-[16px]">Olamide Jubril</p>
          <p className="text-[16px]">
            <span className="font-bold">Source:</span>{" "}
            <a href="/test" className="text-semibold text-buttonColor">
              FINANCIAL TECHNOLOGY LIMITED
            </a>
          </p>
        </div> */}
      </section>

      <div className="">
        <div className="mt-10">
          <section className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-center">Recent News</h1>
            <hr className="w-16 mt-2 border-b-4 border-buttonColor" />
          </section>
        </div>

        {/* Recent News */}
        <RecentNews />

        {/* <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-4 md:px-10 lg:px-16">
          {recentPosts?.map((post: any) => (
            <RecentCard
              id={post._id}
              key={post._id}
              date={moment(post.date).format("LLL")}
              image={urlFor(post.image)}
              headLine={post.headLine}
              details={post.details}
              imgWidthHeight={"w-full h-64"}
            />
          ))}
        </div> */}
      </div>

      <MobileNewTab />
    </Layout>
  );
};

export default NewsDetails;
