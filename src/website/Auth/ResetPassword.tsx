import React, { useState } from "react";
import { LOGIN_LOGO } from "assets/images";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";

type ResetPasswordType = {
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetPassword, setResetPassword] = useState<ResetPasswordType>({
    password: "",
    confirmPassword: ""
  });

  const togglePasswordShow = () => {
    setShowPassword((prevState) => !prevState);
  };

  const togglePasswordConfirmShow = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResetPassword({
      ...resetPassword,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    console.log(resetPassword);
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
              <h1 className="font-bold text-[24px]">Reset Password</h1>
              <p className="text-[14px]">Please enter your new password</p>
            </div>

            <div className="mx-5 w-[90.79px] h-[74px] mb-8">
              <img src={LOGIN_LOGO} alt="..." className="w-full h-full" />
            </div>
          </div>
        </div>

        <form className="px-16 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <div className="relative flex flex-col space-y-2">
              <label className="text[12px]" htmlFor="firstName">
                New Password
              </label>
              <CustomInput
                id="password"
                className="rounded-full border border-gray-300 outline-buttonColor 
                focus:border-buttonColor focus:ring-buttonColor py-2 px-5 w-[431px]"
                inputProps={{
                  type: `${showPassword ? "text" : "password"}`,
                  name: "password",
                  value: resetPassword.password,
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
            <div className="relative flex flex-col space-y-2">
              <label className="text[12px]" htmlFor="firstName">
                Repeat Password
              </label>
              <CustomInput
                id="password"
                className="rounded-full border border-gray-300 outline-buttonColor 
                focus:border-buttonColor focus:ring-buttonColor py-2 px-5 w-[431px]"
                inputProps={{
                  type: `${showConfirmPassword ? "text" : "password"}`,
                  name: "confirmPassword",
                  value: resetPassword.confirmPassword,
                  onChange: handleChange
                }}
              />

              <div className="absolute inset-y-0 top-9 right-10">
                <h1
                  className="text-[12px] cursor-pointer"
                  onClick={togglePasswordConfirmShow}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </h1>
              </div>
            </div>
          </div>

          <div className="pt-10 flex flex-col space-y-5">
            <CustomBtn
              className="text-white font-semibold bg-buttonColor rounded-full py-3 px-5 w-[431px]
             hover:bg-lightGreen"
              onKeyPress={handlePress}
            >
              Set Password
            </CustomBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
