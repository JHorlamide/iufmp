import { Fragment } from "react";
import { CIRCLE, GROUP_CIRCLE_COLORED } from "assets/icons";
import Image from "components/widgets/Image/Image";
import { CHECK_LIST } from "assets/icons";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";

const SuperAgent = () => {
  return (
    <Fragment>
      <div className="sm:container space-y-5 md:w-[690px] md:justify-center mx-auto">
        <p className="text-center">
          Agent Banking is the provision of Financial Services to Customers by a
          third party (Agent) on behalf of a licensed Financial Institution
          and/or Licensed Super-Agent (Principal)
        </p>

        <p className="text-center">
          <span className="font-bold">Super Agents</span> are Companies licensed
          by the Central Bank of Nigeria (CBN) to recruit Agents for the purpose
          of Agency Banking i.e. provision of Financial Services within
          Communities on behalf of Banks.
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <RouterLink
          path="/our-partners?tabIndex=1"
          title=" View SANEF Super-Agent Partners"
          className="font-bold text-center text-buttonColor hover:text-lightGreen"
        />
      </div>

      {/* FLEX CONTAINER */}
      <div className="container flex flex-col py-16 mx-auto space-y-8 md:space-y-0 md:flex-row md:space-x-5 md:justify-center md:mb-16 md:px-5">
        {/* 1st CONTAINER */}
        <div className="relative z-10 w-full px-5 py-4 text-white bg-buttonColor rounded-xl md:py-12 md:w-96">
          <div className="">
            <h1 className="font-bold">Requirements</h1>
            <div className="mt-2">
              <p className="">
                A Super-Agent shall be licensed by the CBN under the following
                requirements:
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-center space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="flex">
                    Must be a company with an existing business, operational for
                    at least 12 months
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must be registered with the Corporate Affairs Commission
                    (CAC)
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must have a minimum Shareholders’ Fund, unimpaired by losses
                    of N250million
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must obtain a reference letter from a Financial Institution
                    (FI) as part of its documentation for license
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">Must have a minimum of 50 agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          parentClassName="md:hidden absolute -left-20 top-[380px]"
          imageClassName="w-fit"
          image={CIRCLE}
        />

        {/* 2nd CONTAINER */}
        <div
          className="relative overflow-hidden md:w-96 lg:w-[450px] md:h-52 z-10 
          bg-white rounded-xl shadow-lg px-5 py-12"
        >
          <h1 className="font-bold text-[24px]">
            To become a licensed Super-Agent, visit:{" "}
          </h1>

          <div className="mt-5">
            <a
              href="https://www.cbn.gov.ng"
              target={"_blank"}
              className="text-buttonColor text-[20px] font-bold hover:text-lightGreen"
              rel="noreferrer"
            >
              www.cbn.gov.ng
            </a>
          </div>
        </div>

        <img
          className="md:hidden w-fit absolute -right-0 top-[1001px]"
          src={GROUP_CIRCLE_COLORED}
          alt="circle-icon"
        />
      </div>
    </Fragment>
  );
};

export default SuperAgent;
