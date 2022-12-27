import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuperAgentHeader from "./SuperAgentHeader";
import { IMG_PLACEHOLDER } from "assets/icons";
import DashboardLayout from "../../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { SUPER_AGENT } from "routes/ROUTES_CONSTANTS";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";
import { CompanyDataType } from "../hooks/useSuperAgentForm";
import toast from "react-hot-toast";
import { uploadImage } from "api/upload";
import { IUpdateSuperAgentRequest } from "types/superAgent";
import useSuperAgent from "app/pages/SuperAgents/hooks/useSuperAgent";
import { getSuperAgentDetails } from "api/superAgents";

interface UpdateSuperAgent extends CompanyDataType {
  serial: string;
  sid: string;
  submittedTime: string;
  completedTime: string;
  modifiedTime: string;
  draft: string;
  ipAddress: string;
  uid: string;
  username: string;
}

type SubUpdateFormProps = {
  companyData: UpdateSuperAgent;
  handleCompanyDataChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
};

const SubUpdateForm = ({
  companyData,
  handleCompanyDataChange
}: SubUpdateFormProps) => {
  return (
    <section className="space-y-4">
      <div className="flex space-x-3">
        {/* Serial Number */}
        <div className="space-y-3 w-full">
          <label htmlFor="serial">Serial</label>
          <CustomInput
            id="serial"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "serial",
              value: companyData.serial,
              onChange: handleCompanyDataChange
            }}
          />
        </div>

        {/* SID Number */}
        <div className="space-y-3 w-full">
          <label htmlFor="sid">SID</label>
          <CustomInput
            id="sid"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "sid",
              value: companyData.sid,
              onChange: handleCompanyDataChange
            }}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        {/* SubmittedTime */}
        <div className="space-y-3 w-full">
          <label htmlFor="submittedTime">Submitted Time</label>
          <CustomInput
            id="submittedTime"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "submittedTime",
              value: companyData.submittedTime,
              onChange: handleCompanyDataChange
            }}
          />
        </div>

        {/* Completed Time */}
        <div className="space-y-3 w-full">
          <label htmlFor="completedTime">Completed Time</label>
          <CustomInput
            id="completedTime"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "completedTime",
              value: companyData.completedTime,
              onChange: handleCompanyDataChange
            }}
          />
        </div>

        {/* Modified Time */}
        <div className="space-y-3 w-full">
          <label htmlFor="modifiedTime">Modified Time</label>
          <CustomInput
            id="modifiedTime"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "modifiedTime",
              value: companyData.modifiedTime,
              onChange: handleCompanyDataChange
            }}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        {/* Serial Number */}
        <div className="space-y-3 w-full">
          <label htmlFor="draft">Draft</label>
          <CustomInput
            id="draft"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "draft",
              value: companyData.draft,
              onChange: handleCompanyDataChange
            }}
          />
        </div>

        {/* SID Number */}
        <div className="space-y-3 w-full">
          <label htmlFor="ipAddress">IP Address</label>
          <CustomInput
            id="ipAddress"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "ipAddress",
              value: companyData.ipAddress,
              onChange: handleCompanyDataChange
            }}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        {/* Serial Number */}
        <div className="space-y-3 w-full">
          <label htmlFor="uid">UID</label>
          <CustomInput
            id="uid"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "uid",
              value: companyData.uid,
              onChange: handleCompanyDataChange
            }}
          />
        </div>

        {/* SID Number */}
        <div className="space-y-3 w-full">
          <label htmlFor="username">Username</label>
          <CustomInput
            id="username"
            className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
            focus:ring-buttonColor py-3 w-full mt-8"
            inputProps={{
              type: "text",
              name: "username",
              value: companyData.username,
              onChange: handleCompanyDataChange
            }}
          />
        </div>
      </div>
    </section>
  );
};

const EditSuperAgent = () => {
  const navigate = useNavigate();
  const { updateSuperAgentDetails } = useSuperAgent();
  const [companyData, setCompanyData] = useState<UpdateSuperAgent>({
    companyName: "",
    companyAddress: "",
    companyContactPerson: "",
    designation: "",
    email: "",
    phoneNumber: "",

    serial: "",
    sid: "",
    submittedTime: "",
    completedTime: "",
    modifiedTime: "",
    draft: "",
    ipAddress: "",
    uid: "",
    username: ""
  });
  const { id } = useParams();
  const [imageUploadId, setImageUploadId] = useState("");
  const [companyLogo, setCompanyLogo] = useState<string | any>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewLogo, setPreviewLogo] = useState<string>("");
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    getSuperAgentDetails(id)
      .then((response) => {
        setCompanyLogo(response.data.logo.imageUrl);
        setImageUploadId(response.data.logo._id);
        setCompanyData({
          ...companyData,
          companyAddress: response.data.companyAddress,
          companyContactPerson: response.data.contactPerson,
          email: response.data.email,
          companyName: response.data.companyName,
          designation: response.data.designation,
          phoneNumber: response.data.phoneNumber?.slice(4)
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (!companyLogo) {
      setPreviewLogo("");
      return;
    }

    if (typeof companyLogo === "string") {
      setPreviewLogo("");
      return;
    }

    const objectUrl = URL.createObjectURL(companyLogo);
    setPreviewLogo(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [companyLogo]);

  const openFileInput = () => {
    hiddenFileInput.current?.click();
  };

  const handleCompanyDataChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setCompanyData({
      ...companyData,
      [e.target.name]: e.target.value
    });
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
      setCompanyLogo(files[0]);
      const formData = new FormData();
      formData.append("image", files[0] as File);
      const response = await uploadImage(formData);

      if (response.status === "Success") {
        setImageUploadId(response.data._id);
        toast.success("Image Uploaded Successfully");
        return;
      }

      toast.error(response.data.message);
      setErrorMessage("");
      setErrorMessage("");
      return;
    }

    setErrorMessage("File not accepted");
  };

  const validateSelectedFileSize = () => {
    const MAX_FILE_SIZE = 5120; // 5MB

    if (!companyLogo) {
      setErrorMessage("Please choose a file");
      return;
    }

    const fileSizeKiloBytes = Number(companyLogo.size / 1024);

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

    const superAgentObj: IUpdateSuperAgentRequest = {
      id: id,
      logo: imageUploadId,
      email: companyData.email,
      companyName: companyData.companyName,
      designation: companyData.designation,
      phoneNumber: `+234${companyData.phoneNumber}`,
      companyAddress: companyData.companyAddress,
      contactPerson: companyData.companyContactPerson
    };

    updateSuperAgentDetails(superAgentObj);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return (
    <DashboardLayout>
      <SuperAgentHeader />

      <DashboardMainView className="pl-10 py-5 h-auto">
        <div className="bg-white w-[690px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between px-5">
              <h1 className="text-[18px] font-bold pl-10">New Super Agent</h1>

              <div className="flex justify-center">
                <p className="mr-3 font-medium">Active</p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input appearance-none w-11 -ml-10 rounded-full float-left 
                    h-5 align-top bg-buttonColor bg-no-repeat bg-contain focus:outline-none
                    outline-buttonColor cursor-pointer shadow-sm border-buttonColor focus:outline-buttonColor"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>
            <hr className="border w-full" />
          </div>

          <form
            className="container mx-auto px-8 pb-8 space-y-10"
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
                ) : companyLogo ? (
                  <img
                    src={companyLogo}
                    alt="bankLogo"
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

              {/* Email Address */}
              <div className="space-y-3 w-full">
                <label htmlFor="email">Email</label>
                <CustomInput
                  id="email"
                  className="rounded-full border-gray-300 outline-buttonColor focus:border-buttonColor 
                  focus:ring-buttonColor py-3 w-full mt-8"
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
                      onChange: handleCompanyDataChange
                    }}
                  />
                </div>
              </div>
            </div>

            <hr className="border w-full" />

            {/* SubUpdateForm */}
            <SubUpdateForm
              companyData={companyData}
              handleCompanyDataChange={handleCompanyDataChange}
            />

            <div className="flex space-x-16">
              <CustomBtn
                className="bg-buttonColor px-20 py-3 rounded-full text-white font-semibold hover:bg-lightGreen"
                type="submit"
                onKeyDown={handlePress}
              >
                Update Changes
              </CustomBtn>

              <CustomBtn
                className="text-buttonColor font-semibold hover:text-lightGreen"
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

export default EditSuperAgent;
