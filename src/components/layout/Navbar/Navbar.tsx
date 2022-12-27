import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink/NavLink";
import { BecomeAgent } from "./NavLink/NavLink";
import {
  HOME,
  ABOUT_US,
  OUR_PARTNERS,
  LOGIN,
  REGISTER
} from "routes/ROUTES_CONSTANTS";
import { NAVIGATION } from "utils/constants";
import { CLOSE_ICON } from "assets/icons";
import { Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
    setToggleMenu(!toggleMenu);
  };

  return (
    <Fragment>
      {/* DESKTOP NAV */}
      <nav className="relative z-50 px-5 py-5 md:px-14 md:py-0 lg:py-0">
        <div className="flex items-center justify-between pt-4">
          {/* LOGO CONTAINER */}
          <Link to={HOME} arial-current="page">
            <h1 className="text-4xl font-extrabold text-white">Logo</h1>
          </Link>

          {/* NAV LINK CONTAINER */}
          <div className="items-center justify-between hidden space-x-6 lg:flex lg:w-auto -mt-14 lg:mt-0">
            <div className="flex flex-col mt-4 text-[14px] font-bold lg:flex-row lg:space-x-4 lg:mt-0">
              <NavLink
                path={HOME}
                title={"Home"}
                className={`text-white whitespace-nowrap block py-2 pr-4 pl-3`}
              />

              <NavLink
                path={ABOUT_US}
                title={"About Us"}
                className={`text-white whitespace-nowrap block py-2 pr-4 pl-3`}
              />

              <NavLink
                path={OUR_PARTNERS}
                title={"Our Solutions"}
                className={`text-white whitespace-nowrap block py-2 pr-4 pl-3`}
              />
            </div>
          </div>

          {/* AUTH BUTTON */}
          <div className="hidden space-x-10 md:-mr-96 lg:mr-0 lg:flex lg:items-baseline">
            <div className="block">
              <BecomeAgent
                path={REGISTER}
                title={"Register"}
                className={`px-4 py-2 border rounded-3xl font-bold whitespace-nowrap hover:text-blue-600`}
              />
            </div>

            <div>
              <NavLink
                title={"Login"}
                path={LOGIN}
                className="font-semibold text-white border-b-4 hover:text-blue-900 border-b-white hover:border-b-blue-600"
              />
            </div>
          </div>

          {/* MENU ICON */}
          <div className="flex md:flex lg:hidden">
            <FiMenu
              className={`w-[50px] h-[50px] hover:text-buttonColor text-white hover:cursor-pointer mt-[26px]`}
              onClick={handleToggle}
            />
          </div>
        </div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="lg:hidden md:flex">
        <div
          className={`${
            toggleMenu ? "hidden" : ""
          } z-50 bg-mobile_nav_bg fixed top-0 right-0 left-0 bottom-0 bg-center bg-cover bg-no-repeat pt-16`}
        >
          <Transition
            show={show}
            enter="transform transition ease-in-out duration-2000"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-2000"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="flex justify-end mr-6 -mt-8 md:mr-[59px] md:-mt-5">
              <img
                className="w-10"
                src={CLOSE_ICON}
                alt="close-icon"
                onClick={handleToggle}
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="pb-10 space-y-5">
                {NAVIGATION.map((link) => (
                  <NavLink
                    key={link.id}
                    path={link.path}
                    title={link.title}
                    className={`text-white text-[14px] font-bold text-center whitespace-nowrap 
                    block py-2 pr-4 pl-3 hover:text-buttonColor`}
                  />
                ))}
              </div>

              <hr className="w-64 border-3" />

              <div className="flex flex-col pt-10 space-y-8">
                <BecomeAgent
                  path={REGISTER}
                  title={"Become an Agent"}
                  className={`px-4 py-2 border rounded-3xl font-bold bg-white hover:border-buttonColor
                  whitespace-nowrap hover:text-white hover:bg-buttonColor`}
                />

                <NavLink
                  path={LOGIN}
                  title={"Login"}
                  className="w-12 mx-auto font-semibold text-center text-white border-b-4 hover:text-buttonColor hover:border-b-buttonColor"
                />
              </div>
            </div>
          </Transition>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
