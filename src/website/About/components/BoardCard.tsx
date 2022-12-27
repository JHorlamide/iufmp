import React, { Fragment, useState } from "react";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import Image from "components/widgets/Image/Image";
import BoardModal from "./BoardModal";
import style from "../About.module.css";

export interface BoardCardProps {
  image: string;
  name: string;
  position: string;
  shortBio?: string;
  shortBio2: string;
  fullBio: string;
}

interface UserInfoType {
  image: string;
  name: string;
  position: string;
  profileDetails: string;
}

interface CardProps extends UserInfoType {
  shortBio?: string;
  shortBio2?: string;
  fullBio: string;
  handleSetUserInfo: (params: UserInfoType) => void;
}

const CardSubContentMobile = ({
  shortBio,
  fullBio,
  name,
  image,
  position,
  handleSetUserInfo
}: CardProps) => {
  return (
    <div className="flex flex-col items-baseline space-y-6">
      <div className="text-ellipsis leading-[30px]">
        <p className="">{shortBio}</p>
      </div>

      <div className="block">
        <CustomBtn
          className={`text-buttonColor font-bold`}
          onClick={() =>
            handleSetUserInfo({
              image,
              name,
              position,
              profileDetails: fullBio
            })
          }
        >
          Learn More
        </CustomBtn>
      </div>
    </div>
  );
};

const CardSubContentDesktop = ({
  shortBio2,
  fullBio,
  image,
  name,
  position,
  handleSetUserInfo
}: CardProps) => {
  return (
    <div className="items-baseline space-y-4 overflow-hidden">
      <div className="text-ellipsis leading-[30px]">
        <p className={`${style.clamp}`}>{shortBio2}</p>
      </div>

      <div className="block">
        <CustomBtn
          className="font-bold text-buttonColor hover:text-lightGreen"
          onClick={() =>
            handleSetUserInfo({
              image,
              name,
              position,
              profileDetails: fullBio
            })
          }
        >
          Learn More
        </CustomBtn>
      </div>
    </div>
  );
};

const BoardCard = ({
  image,
  name,
  position,
  shortBio,
  shortBio2,
  fullBio
}: BoardCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    image: "",
    name: "",
    position: "",
    profileDetails: ""
  });

  const handleSetUserInfo = ({
    image,
    name,
    position,
    profileDetails
  }: UserInfoType) => {
    setIsOpen(true);
    setUserInfo({ image, name, position, profileDetails });
  };

  return (
    <Fragment>
      <BoardModal
        isOpen={isOpen}
        image={userInfo.image}
        name={userInfo.name}
        position={userInfo.position}
        profileDetails={userInfo.profileDetails}
        setIsOpen={setIsOpen}
      />

      <div
        className="container mx-auto z-50 bg-white rounded-xl shadow-lg px-5 
        mt-5 w-[335px] h-fit pb-10 md:w-[391px] md:h-[320px] lg:h-[330px]
        lg:w-[520px]"
      >
        <Image
          parentClassName="flex justify-center items-center -mt-12"
          imageClassName="object-cover h-full"
          image={image}
        />

        <div className="flex flex-col justify-start mt-5 space-y-4 lg:pb-10 lg:space-y-8">
          <div className="">
            <h1 className="text-xl font-bold">{name}</h1>
            <p className="pt-1 font-medium">{position}</p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <CardSubContentDesktop
              name={name}
              image={image}
              position={position}
              profileDetails={fullBio}
              shortBio2={shortBio2}
              fullBio={fullBio}
              handleSetUserInfo={handleSetUserInfo}
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <CardSubContentMobile
              name={name}
              image={image}
              position={position}
              profileDetails={fullBio}
              shortBio={shortBio}
              fullBio={fullBio}
              handleSetUserInfo={handleSetUserInfo}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BoardCard;
