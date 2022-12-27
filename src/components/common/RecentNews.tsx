import React from "react";
import RecentCard from "../../website/Home/components/RecentCard";
import { urlFor } from "lib/client";
import moment from "moment";
import { useData } from "hooks/useFetch";
import { NewsType } from "types/news";
import { GET_NEWS_QUERIES } from "utils/constants";
import { Spinner } from "flowbite-react";

const RecentNews = () => {
  const { data } = useData<NewsType[]>(GET_NEWS_QUERIES);

  if (!data) {
    return (
      <div className="hidden md:block container mx-auto mt-16 text-[28px] text-center font-bold h-80">
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
    <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 md:gap-4 md:px-10 lg:px-16">
      {data.slice(0, 3).map((post: any) => (
        <RecentCard
          id={post._id}
          key={post._id}
          date={moment(post.date).format("LLL")}
          image={urlFor(post.image)}
          headLine={post.headLine}
          details={post.details}
          imgWidthHeight={"w-full h-72"}
        />
      ))}
    </div>
  );
};

export default RecentNews;
