import React, { useState } from "react";
import { Link } from "react-router-dom";

import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import NavLink from "components/layout/Navbar/NavLink/NavLink";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AuthContext, { AuthType } from "context/AuthProvider";
import { AuthContextType } from "context/AuthProvider";
import { loginUser, LoginType } from "api/user";
import { HOME } from "routes/ROUTES_CONSTANTS";

type SignFormType = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { saveAuth } = React.useContext(AuthContext) as AuthContextType;

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState<SignFormType>({
    email: "",
    password: ""
  });

  const togglePasswordShow = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setLoading(true);

    const loginData: LoginType = {
      email: authData.email,
      password: authData.password
    };

    loginUser(loginData)
      .then((response) => {
        setLoading(false);

        const authData: AuthType = {
          user: response.data.user,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken
        };

        // Store User Credential in Context State
        saveAuth(authData);

        toast.success(response.message);
        navigate("/banks");

        localStorage.setItem("sanefToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
      })
      .catch((error) => {
        if (error.status === "FETCH_ERROR") {
          return toast.error("Server error: Server seems to be down");
        }

        if (error.response) {
          return toast.error(error.response.data.message);
        }

        toast.error(error.message);
      });
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="container mx-auto">
      <div className="container mx-auto my-20 bg-white rounded-xl w-[580px] h-[530px] shadow-lg">
        <div className="px-20 py-10">
          <div className="flex items-center justify-between">
            <div className="flex flex-col space-y-1">
              <h1 className="font-bold text-[24px]">Login</h1>
              <p className="text-[14px]">sign into an existing account</p>
            </div>

            <div className="mx-5 w-[90.79px] h-[74px] mb-8">
              <Link to={HOME}>
                <h1 className="text-4xl font-extrabold text-white">Logo</h1>
              </Link>
            </div>
          </div>
        </div>

        <form className="w-full px-16" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label className="text[12px]" htmlFor="firstName">
                Email Address
              </label>
              <CustomInput
                id="email"
                className="rounded-full border border-gray-300 outline-blue-900 
                focus:border-blue-900 focus:ring-blue-900 py-2 px-5 w-[431px]"
                inputProps={{
                  type: "email",
                  name: "email",
                  value: authData.email,
                  onChange: handleChange
                }}
              />
            </div>

            <div className="relative flex flex-col space-y-2">
              <label className="text[12px]" htmlFor="firstName">
                Password
              </label>
              <CustomInput
                id="password"
                className="rounded-full border border-gray-300 outline-buttonColor 
                focus:border-buttonColor focus:ring-buttonColor py-2 px-5 w-[431px]"
                inputProps={{
                  type: `${showPassword ? "text" : "password"}`,
                  name: "password",
                  value: authData.password,
                  onChange: handleChange
                }}
              />

              <div className="absolute inset-y-0 top-9 right-10">
                <h1
                  className="text-[12px] cursor-pointer"
                  onClick={togglePasswordShow}
                >
                  {showPassword ? "Hide" : "Show"}
                </h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-10 space-y-5">
            <NavLink
              path="/forgot-password"
              title="Forgot Password?"
              className="text-[14px] text-black hover:text-blue-900"
            />

            <CustomBtn
              className="text-white font-semibold bg-blue-900 rounded-full py-3 px-5 w-[431px]"
              onKeyPress={handlePress}
              isloading={loading}
            >
              Login
            </CustomBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
