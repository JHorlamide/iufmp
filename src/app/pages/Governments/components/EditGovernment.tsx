import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GovernmentHeader from "./GovernmentHeader";
import { IMG_PLACEHOLDER } from "assets/icons";
import DashboardLayout from "../../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { GOVERNMENTS } from "routes/ROUTES_CONSTANTS";
import toast from "react-hot-toast";
import { IUpdateGovernmentRequest } from "types/government";
import useGovernment from "app/pages/Governments/hooks/useGovernmnet";
import { uploadImage } from "api/upload";
import { getGovernmentDetails } from "api/government";

const EditGovernment = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { updateDetails } = useGovernment();
  const [imageUploadId, setImageUploadId] = useState("");
  const [governmentName, setGovernmentName] = useState<string | undefined>("");
  const [governmentLogo, setGovernmentLogo] = useState<string | any>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewLogo, setPreviewLogo] = useState<string>("");

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    getGovernmentDetails(id)
      .then((response) => {
        setGovernmentName(response.data.name);
        setGovernmentLogo(response.data.logo.imageUrl);
        setImageUploadId(response.data.logo._id);
      })
      .catch((error: any) => {
        toast.error("Error getting government details");
        console.log(error.message);
      });
  }, [id]);

  useEffect(() => {
    if (!governmentLogo) {
      setPreviewLogo("");
      return;
    }

    if (typeof governmentLogo === "string") {
      setPreviewLogo("");
      return;
    }

    const objectUrl = URL.createObjectURL(governmentLogo);
    setPreviewLogo(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [governmentLogo]);

  const openFileInput = () => {
    hiddenFileInput.current?.click();
  };

  const handleGovernmentNameChange = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    setGovernmentName(e.target.value);
  };

  const isValidFileUploaded = (file: File) => {
    const validExtensions = ["png", "jpeg", "jpg"];
    const fileExtension = file.type.split("/")[1];
    return validExtensions.includes(fileExtension);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
    const { files } = e.currentTarget;

    if (!files || !files[0]) {
      setErrorMessage("No file selected");
      return;
    }

    if (isValidFileUploaded(files[0])) {
      setGovernmentLogo(files[0]);

      const formData = new FormData();
      formData.append("image", files[0]);
      const response = await uploadImage(formData);

      if (response.status === "Success") {
        setImageUploadId(response.data._id);
        toast.success("Image Uploaded Successfully");
        return;
      }

      toast.error(response.data.message);
      setErrorMessage("");
      return;
    }

    setErrorMessage("File not accepted");
  };

  const validateSelectedFileSize = () => {
    const MAX_FILE_SIZE = 5120; // 5MB

    if (!governmentLogo) {
      setErrorMessage("Please choose a file");
      return;
    }

    const fileSizeKiloBytes = Number(governmentLogo.size / 1024);

    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setErrorMessage("File size is greater than maximum limit");
      return;
    }

    setErrorMessage("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    validateSelectedFileSize();

    const updateObj: IUpdateGovernmentRequest = {
      id: id as string,
      name: governmentName as string,
      logo: imageUploadId
    };

    updateDetails(updateObj);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return (
    <DashboardLayout>
      <GovernmentHeader />

      <DashboardMainView className="h-screen pt-10 pl-10">
        <div className="bg-white w-[690px] h-[451px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between px-5">
              <h1 className="text-[18px] font-bold">
                Government/MDA's Details
              </h1>

              <div className="flex justify-center">
                <p className="mr-3 font-medium">Active</p>
                <div className="form-check form-switch">
                  <input
                    className="float-left h-5 -ml-10 align-top bg-no-repeat bg-contain rounded-full shadow-sm appearance-none cursor-pointer form-check-input w-11 bg-buttonColor focus:outline-none outline-buttonColor border-buttonColor focus:outline-buttonColor"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>
            <hr className="w-full border" />
          </div>

          <form
            className="container px-8 mx-auto space-y-20"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-10">
              {/* Image Placeholder */}
              <div
                className="bg-white rounded-full w-[180px] h-[180px] shadow-lg 
                p-8 justify-center items-center"
              >
                {previewLogo ? (
                  <img
                    src={previewLogo}
                    alt="placeholder"
                    className="w-full h-full"
                  />
                ) : governmentLogo ? (
                  <img
                    src={governmentLogo}
                    alt="regulatorLogo"
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={IMG_PLACEHOLDER}
                    alt="placeholder"
                    className="w-full h-full"
                  />
                )}
              </div>

              {/* Form Input */}
              <div className="w-[390px] space-y-12">
                <div className="space-y-3">
                  <label htmlFor="governmentName">Name</label>
                  <CustomInput
                    id="governmentName"
                    className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                    inputProps={{
                      type: "text",
                      name: "governmentName",
                      value: governmentName,
                      onChange: handleGovernmentNameChange
                    }}
                  />
                </div>

                <div className="flex flex-col">
                  {errorMessage && (
                    <p className="text-sm text-center text-red-500">
                      {errorMessage}
                    </p>
                  )}

                  <div className="flex">
                    <CustomBtn
                      className="w-full mb-2 font-semibold outline-none text-buttonColor text-start text-md"
                      onClick={openFileInput}
                      type="button"
                    >
                      Upload logo
                    </CustomBtn>

                    <p className="w-full font-semibold text-gray-800 whitespace-normal text-md text-start">
                      {governmentLogo?.name}
                    </p>
                  </div>

                  <CustomInput
                    id="governmentLogo"
                    className="hidden font-semibold border-none text-buttonColor text-md"
                    inputProps={{
                      type: "file",
                      placeholder: "Upload logo",
                      name: "governmentLogo",
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
                className="px-20 py-3 font-semibold text-white rounded-full bg-buttonColor hover:bg-lightGreen"
                type="submit"
                onKeyDown={handlePress}
              >
                Update Changes
              </CustomBtn>

              <CustomBtn
                className="font-semibold text-buttonColor hover:text-lightGreen"
                type="button"
                onClick={() => navigate(GOVERNMENTS)}
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

export default EditGovernment;
