import React from "react";
import { useNavigate } from "react-router-dom";
import SuperAgentHeader from "./SuperAgentHeader";
import { IMG_PLACEHOLDER } from "assets/icons";
import DashboardLayout from "../../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { SUPER_AGENT } from "routes/ROUTES_CONSTANTS";
import useSuperAgentForm from "../hooks/useSuperAgentForm";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";

const AddSuperAgent = () => {
  const navigate = useNavigate();
  const {
    companyData,
    companyLogo,
    errorMessage,
    previewLogo,
    hiddenFileInput,
    handleSubmit,
    handleFileChange,
    handlePress,
    openFileInput,
    handleCompanyDataChange
  } = useSuperAgentForm({});

  return (
    <DashboardLayout>
      <SuperAgentHeader />

      <DashboardMainView className="pl-10 py-5 h-auto">
        <div className="bg-white w-[690px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <h1 className="text-[18px] font-bold pl-10">New Super Agent</h1>
            <hr className="border w-full" />
          </div>

          <form
            className="container mx-auto px-8 space-y-10"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-10">
              {/* Image Placeholder */}
              <div
                className="bg-white rounded-full w-[180px] h-[180px] shadow-lg 
                p-8 justify-center items-center"
              >
                <img
                  src={previewLogo ? previewLogo : IMG_PLACEHOLDER}
                  alt="placeholder"
                  className="w-full h-full"
                />
              </div>

              {/* Form Input */}
              <div className="w-[390px] space-y-12">
                <div className="space-y-3">
                  <label htmlFor="companyName">Company Name</label>
                  <CustomInput
                    id="companyName"
                    className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                    inputProps={{
                      type: "text",
                      name: "companyName",
                      value: companyData.companyName,
                      onChange: handleCompanyDataChange
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  {errorMessage && (
                    <p className="text-red-500 text-sm text-center">
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex">
                    <CustomBtn
                      className="text-buttonColor text-start font-semibold text-md mb-2 w-full outline-none"
                      onClick={openFileInput}
                      type="button"
                    >
                      Upload logo
                    </CustomBtn>

                    <p className="w-full text-md text-start whitespace-normal font-semibold text-gray-800">
                      {companyLogo?.name}
                    </p>
                  </div>

                  <CustomInput
                    id="bankLogo"
                    className="hidden border-none text-buttonColor font-semibold text-md"
                    inputProps={{
                      type: "file",
                      placeholder: "Upload logo",
                      name: "bankLogo",
                      onChange: handleFileChange,
                      ref: hiddenFileInput
                    }}
                  />

                  <small>Formats accepted: PNG, JPG, GIF. Maximum 5MB.</small>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="space-y-3 w-full">
                <label htmlFor="companyAddress">Company Address</label>
                <CustomInput
                  id="companyAddress"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                  inputProps={{
                    type: "text",
                    name: "companyAddress",
                    value: companyData.companyAddress,
                    onChange: handleCompanyDataChange
                  }}
                />
              </div>

              {/* Contact Person & Designation */}
              <div className="flex space-x-3">
                <div className="space-y-3 w-80 grow">
                  <label htmlFor="companyContactPerson">Contact Person</label>
                  <CustomInput
                    id="companyContactPerson"
                    className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 mt-8 w-full"
                    inputProps={{
                      type: "text",
                      name: "companyContactPerson",
                      value: companyData.companyContactPerson,
                      onChange: handleCompanyDataChange
                    }}
                  />
                </div>

                <div className="space-y-3 w-52">
                  <label htmlFor="designation">Designation</label>
                  <CustomSelect
                    id="designation"
                    className="rounded-full border border-gray-300 outline-buttonColor focus:border-buttonColor
                    focus:ring-buttonColor py-3 w-full"
                    selectProps={{
                      name: "designation",
                      value: companyData.designation,
                      onChange: handleCompanyDataChange
                    }}
                    selectOptions={[
                      { value: "Account", name: "Accounting" },
                      { value: "Finance", name: "Finance" },
                      { value: "Human Resource", name: "Human Resource" },
                      { value: "Management", name: "Management" }
                    ]}
                    selectPlaceholder="Select a designation"
                  />
                </div>
              </div>

              {/* <div className="flex space-x-3"> */}
              {/* Email Address */}
              <div className="space-y-3 w-full">
                <label htmlFor="email">Email</label>
                <CustomInput
                  id="email"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                  inputProps={{
                    type: "email",
                    name: "email",
                    value: companyData.email,
                    onChange: handleCompanyDataChange
                  }}
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-3 w-full">
                <label className="" htmlFor="phoneNumber">
                  Phone Number
                </label>

                <div>
                  <p className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                    +234
                  </p>

                  <CustomInput
                    id="phoneNumber"
                    className="relative rounded-full border border-gray-300 outline-buttonColor
                    focus:border-buttonColor focus:ring-buttonColor py-3 w-full px-24"
                    inputProps={{
                      type: "text",
                      name: "phoneNumber",
                      value: companyData.phoneNumber,
                      placeholder: "e.g 8068909058",
                      onChange: handleCompanyDataChange
                    }}
                  />
                </div>
              </div>
              {/* </div> */}
            </div>

            <div className="flex space-x-16">
              <CustomBtn
                className="bg-buttonColor px-20 py-3 rounded-full text-white font-semibold hover:bg-lightGreen"
                type="submit"
                onKeyDown={handlePress}
              >
                Add Super Agent
              </CustomBtn>

              <CustomBtn
                className="text-buttonColor font-semibold"
                type="button"
                onClick={() => navigate(SUPER_AGENT)}
              >
                Back
              </CustomBtn>
            </div>
          </form>
        </div>
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default AddSuperAgent;
