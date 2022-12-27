import React, { useState } from "react";
import { LOGIN_LOGO } from "assets/images";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import NavLink from "components/layout/Navbar/NavLink/NavLink";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    console.log(email);
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
          <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-1">
              <h1 className="font-bold text-[24px]">Forgot Password?</h1>
              <p className="text-[14px]">
                Let us help you recover the access to your account
              </p>
            </div>

            <div className="mx-5 w-[90.79px] h-[74px] mb-8">
              <img src={LOGIN_LOGO} alt="..." className="w-full h-full" />
            </div>
          </div>
        </div>

        <form className="px-16 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <label className="text[12px]" htmlFor="firstName">
                Email Address
              </label>
              <CustomInput
                id="email"
                className="rounded-full border border-gray-300 outline-buttonColor 
                focus:border-buttonColor focus:ring-buttonColor py-2 px-5 w-[431px]"
                inputProps={{
                  type: "email",
                  name: "email",
                  value: email,
                  onChange: handleChange
                }}
              />
            </div>

            <CustomBtn
              className="text-white font-semibold bg-buttonColor rounded-full py-3 px-5 w-[431px]
             hover:bg-lightGreen"
              onKeyPress={handlePress}
            >
              Request a Password Reset Link
            </CustomBtn>
          </div>

          <div className="flex justify-center items-center mt-8">
            <NavLink
              path="/login"
              title="Back to Login"
              className="text-[14px] text-black text-center font-bold 
              hover:text-buttonColor"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
