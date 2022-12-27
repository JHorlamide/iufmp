import { useNavigate } from "react-router-dom";
import StrategicPartnerHeader from "./StrategicPartnerHeader";
import { IMG_PLACEHOLDER } from "assets/icons";
import DashboardLayout from "../../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { STRATEGIC_PARTNERS } from "routes/ROUTES_CONSTANTS";
import usePartnerForm from "../hooks/usePartnerForm";

const AddPartner = () => {
  const navigate = useNavigate();
  const {
    partnerName,
    partnerLogo,
    errorMessage,
    previewLogo,
    hiddenFileInput,
    openFileInput,
    handleNameChange,
    handleFileChange,
    handleSubmit,
    handlePress
  } = usePartnerForm();

  return (
    <DashboardLayout>
      <StrategicPartnerHeader />

      <DashboardMainView className="pl-10 pt-10 h-screen">
        <div className="bg-white w-[690px] h-[451px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <h1 className="text-[18px] font-bold pl-10">
              New Strategic Partner
            </h1>
            <hr className="border w-full" />
          </div>

          <form
            className="container mx-auto px-8 space-y-20"
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
                  <label htmlFor="partnerName">Name</label>
                  <CustomInput
                    id="partnerName"
                    className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                    focus:ring-buttonColor
                    py-3 w-full mt-8"
                    inputProps={{
                      type: "text",
                      name: "partnerName",
                      value: partnerName,
                      onChange: handleNameChange
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
                      {partnerLogo?.name}
                    </p>
                  </div>

                  <CustomInput
                    id="partnerLogo"
                    className="hidden border-none text-buttonColor font-semibold text-md"
                    inputProps={{
                      type: "file",
                      placeholder: "Upload logo",
                      name: "partnerLogo",
                      onChange: handleFileChange,
                      ref: hiddenFileInput
                    }}
                  />

                  <small>Formats accepted: PNG, JPG, GIF. Maximum 5MB.</small>
                </div>
              </div>
            </div>

            <div className="flex space-x-16">
              <CustomBtn
                className="bg-buttonColor px-20 py-3 rounded-full text-white font-semibold"
                type="submit"
                onKeyDown={handlePress}
              >
                Add Partner
              </CustomBtn>

              <CustomBtn
                className="text-buttonColor font-semibold"
                type="button"
                onClick={() => navigate(STRATEGIC_PARTNERS)}
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

export default AddPartner;
