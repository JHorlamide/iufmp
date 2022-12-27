import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { AGENTS } from "routes/ROUTES_CONSTANTS";
import { LONG_HORIZONTAL_LINE } from "assets/icons";
import DeleteModal from "app/components/DeleteModal";
import useAdminform from "./hooks/useAdminform";

const Settings = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { adminData, handleChange, handleSubmit } = useAdminform();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <React.Fragment>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        actionText={"Request Password Reset"}
        modalHeading={"Update Password"}
        subText={"You will receive a password reset link in your mailbox"}
        deleteAction={() => alert("testing")}
      />

      <div className="h-auto py-5 pl-10">
        <div className="bg-white w-[690px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <h1 className="text-[18px] font-bold pl-10">Admin Settings</h1>
            <hr className="w-full border" />
          </div>

          <form
            className="container px-8 mx-auto space-y-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-5">
              {/* First name & Surname */}
              <div className="flex space-x-6">
                <div className="w-[390px]">
                  <div className="space-y-3">
                    <label htmlFor="firstName">First name</label>
                    <CustomInput
                      id="firstName"
                      className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      inputProps={{
                        type: "text",
                        name: "firstName",
                        value: adminData.firstName,
                        onChange: handleChange
                      }}
                    />
                  </div>
                </div>

                <div className="w-[390px]">
                  <div className="space-y-3">
                    <label htmlFor="lastName">Last Name</label>
                    <CustomInput
                      id="lastName"
                      className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      inputProps={{
                        type: "text",
                        name: "lastName",
                        value: adminData.lastName,
                        onChange: handleChange
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Business name */}
              <div className="w-full space-y-3">
                <label htmlFor="email">Email Address</label>
                <CustomInput
                  id="email"
                  className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "email",
                    name: "email",
                    value: adminData.email,
                    onChange: handleChange
                  }}
                />
              </div>
            </div>

            <div className="flex space-x-16">
              <CustomBtn
                className="px-20 py-3 font-semibold text-white rounded-full bg-buttonColor hover:bg-lightGreen"
                type="submit"
              >
                Update Changes
              </CustomBtn>

              <CustomBtn
                className="font-semibold text-buttonColor hover:text-lightGreen"
                type="button"
                onClick={() => navigate(AGENTS)}
              >
                Back
              </CustomBtn>
            </div>

            <div className="">
              <img src={LONG_HORIZONTAL_LINE} alt="horizontal-line" />
            </div>

            <div className="">
              <CustomBtn
                className="text-buttonColor text-[14px] font-semibold"
                onClick={openModal}
              >
                Update Password
              </CustomBtn>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Settings;
