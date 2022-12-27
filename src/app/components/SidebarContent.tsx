import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { LOGIN_LOGO } from "assets/images";
import { USER } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import AuthContext from "context/AuthProvider";
import { AuthContextType } from "context/AuthProvider";

interface LinkItemProp {
  name: string;
  link: string;
}

interface SidebarLinkProps {
  path: string;
  title: string;
  className: string;
}

interface SidebarUserAuthProps {
  name: string | undefined;
  logOut: () => void;
}

const LinkItems: Array<LinkItemProp> = [
  {
    name: "Banks",
    link: "/banks"
  },
  {
    name: "Super Agents",
    link: "/super-agents"
  },
  {
    name: "Regulators",
    link: "/regulators"
  },
  {
    name: "Strategic Partners",
    link: "/strategic-partners"
  },
  {
    name: "Government/MDA's",
    link: "/governments"
  },
  {
    name: "Agents",
    link: "/agents"
  }
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const SidebarLink = ({ path, title, className }: SidebarLinkProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames(`${className}`, isActive ? "text-black" : "text-gray-500")
      }
    >
      {title}
    </NavLink>
  );
};

const SidebarUserAuth = ({ name, logOut }: SidebarUserAuthProps) => {
  return (
    <div className="flex items-center justify-center mt-5 space-x-3">
      <div className="">
        <img src={USER} alt="user-icon" className="" />
      </div>

      <div className="flex flex-col justify-start">
        <p className="">
          Welcome back, <span className="font-bold">{name}</span>
        </p>

        <CustomBtn
          className="font-bold text-buttonColor text-start"
          onClick={() => logOut()}
        >
          Logout
        </CustomBtn>
      </div>
    </div>
  );
};

// const SidebarFooter = () => {
//   return (
//     <div className="absolute bottom-0 flex items-center justify-center left-10">
//       <p className="text-gray-400 text-[12px] text-justify">
//         © 2022. Shared Agent Network Expansion Facilities. <br /> All right
//         reserved
//       </p>
//     </div>
//   );
// };

const SidebarContent = () => {
  const navigate = useNavigate();

  const { authUser, logOutUser } = React.useContext(
    AuthContext
  ) as AuthContextType;

  const logOut = () => {
    logOutUser();
    localStorage.removeItem("sanefToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
  };

  return (
    <div className="container flex flex-col mx-auto">
      <div className="mx-5 w-[101px] h-[96px] my-2">
        <img src={LOGIN_LOGO} alt="..." className="w-full h-full" />
      </div>

      {/* <HorizontalRule /> */}
      <hr className="w-full" />

      {/* Sidebar User Banner */}
      <SidebarUserAuth
        name={`${authUser?.user.firstName} ${authUser?.user.lastName}`}
        logOut={logOut}
      />

      {/* Sidebar Links */}
      <div className="flex flex-col px-10 py-8 space-y-5">
        {LinkItems.map((item, idx) => (
          <SidebarLink
            key={idx}
            path={item.link}
            title={item.name}
            className="font-semibold text-[16px] hover:text-buttonColor"
          />
        ))}
      </div>

      {/* <HorizontalRule /> */}
      <hr className="w-full" />

      {/* Settings Links */}
      <div className="flex flex-col px-10 py-8 space-y-5">
        <SidebarLink
          path={"/admin-settings"}
          title={"Admin Settings"}
          className="font-semibold text-[16px] text-gray-500 hover:text-buttonColor"
        />
      </div>

      <div className="absolute left-10 bottom-5">
        <p className="text-gray-400 text-[12px] text-justify">
          © 2022. Shared Agent Network Expansion Facilities. <br /> All right
          reserved
        </p>
      </div>
    </div>
  );
};

export default SidebarContent;
