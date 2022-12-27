import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadImage } from "api/upload";
import { registerGovernment } from "api/government";
import { IGovernmentRequest } from "types/government";

const useGovernmentForm = () => {
  const navigate = useNavigate();
  const [imageUploadId, setImageUploadId] = useState("");
  const [governmentName, setGovernmentName] = useState<string | undefined>("");
  const [governmentLogo, setGovernmentLogo] = useState<string | any>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewLogo, setPreviewLogo] = useState<string>("");
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!governmentLogo) {
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

  const handleNameChange = (e: React.ChangeEvent<HTMLFormElement>) => {
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
      formData.append("image", files[0] as File);
      const response = await uploadImage(formData);

      if (response.status === "Success") {
        setImageUploadId(response.data._id);
        toast.success("Image Uploaded Successfully");
        return;
      }

      toast.error("Error uploading image, please try again.");
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

    const governmentObj: IGovernmentRequest = {
      name: governmentName as string,
      logo: imageUploadId
    };

    const response = await registerGovernment(governmentObj);

    if (response.status === "Success") {
      toast.success(response.message);
      navigate("/governments");
      return;
    }

    toast.error(response.message);
  };

  const handlePress = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.key === "enter") {
      handleSubmit(e);
    }
  };

  return {
    governmentName,
    governmentLogo,
    errorMessage,
    previewLogo,
    hiddenFileInput,
    openFileInput,
    handleNameChange,
    handleFileChange,
    handleSubmit,
    handlePress
  };
};

export default useGovernmentForm;
