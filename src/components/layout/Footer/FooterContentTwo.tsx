import React from "react";
import { SOCIAL_LINK } from "utils/constants";

interface FooterContentTwoProps {
  iconSize: number;
}

const FooterContentTwo = ({ iconSize }: FooterContentTwoProps) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 mt-16">
      <p className="text-white md:text-xs mb-5 lg:text-md">
        Follow us on social media
      </p>

      <div className="flex space-x-8 md:space-x-10 items-center">
        {SOCIAL_LINK.map(({ id, link, Icon }) => (
          <a
            key={id}
            href={link}
            target={"_blank"}
            rel="noreferrer"
            className="shadow-lg"
          >
            <Icon
              size={iconSize}
              className="text-black bg-white hover:bg-buttonColor hover:text-white
              rounded-full p-2 py-0 md:p-1 md:py-3"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterContentTwo;
