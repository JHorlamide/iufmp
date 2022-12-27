import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadImage } from "api/upload";
import { registerNewSuperAgent } from "api/superAgents";
import { ISuperAgentRequest } from "types/superAgent";

type CompanyLogoType = File | undefined;

export type CompanyDataType = {
  email: string;
  companyName: string;
  companyAddress: string;
  companyContactPerson: string;
  designation: string;
  phoneNumber: string;
};

interface useSuperAgentFormProps {
  company_logo?: CompanyLogoType;
  company_data?: CompanyDataType;
}

const useSuperAgentForm = ({
  company_logo,
  company_data
}: useSuperAgentFormProps) => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState<CompanyDataType>({
    companyName: "",
    companyAddress: "",
    companyContactPerson: "",
    designation: "",
    email: "",
    phoneNumber: ""
  });
  const [imageUploadId, setImageUploadId] = useState("");
  const [companyLogo, setCompanyLogo] = useState<CompanyLogoType>(company_logo);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewLogo, setPreviewLogo] = useState<string>("");
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!companyLogo) {
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

      toast.error(response.message);
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

    const superAgentObj: ISuperAgentRequest = {
      logo: imageUploadId,
      email: companyData.email,
      createdDate: new Date(),
      companyName: companyData.companyName,
      contactPerson: companyData.companyContactPerson,
      designation: companyData.designation,
      companyAddress: companyData.companyAddress,
      phoneNumber: `+234${companyData.phoneNumber}`
    };

    registerNewSuperAgent(superAgentObj)
      .then((response) => {
        toast.success(response.message);
        navigate("/super-agents");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return {
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
  };
};

export default useSuperAgentForm;
