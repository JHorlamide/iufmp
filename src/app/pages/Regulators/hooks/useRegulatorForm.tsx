import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { uploadImage } from "api/upload";
import { registerNewRegulator } from "api/regulator";
import { IRegulatorRequest } from "types/regulator";

const useRegulatorForm = () => {
  const navigate = useNavigate();
  const [imageUploadId, setImageUploadId] = useState("");
  const [regulatorName, setRegulatorName] = useState<string | undefined>("");
  const [regulatorLogo, setRegulatorLogo] = useState<string | any>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [previewLogo, setPreviewLogo] = useState<string>("");
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!regulatorLogo) {
      setPreviewLogo("");
      return;
    }

    const objectUrl = URL.createObjectURL(regulatorLogo);
    setPreviewLogo(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [regulatorLogo]);

  const openFileInput = () => {
    hiddenFileInput.current?.click();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setRegulatorName(e.target.value);
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
      setRegulatorLogo(files[0]);

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

    if (!regulatorLogo) {
      setErrorMessage("Please choose a file");
      return;
    }

    const fileSizeKiloBytes = Number(regulatorLogo.size / 1024);

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

    const regulatorObj: IRegulatorRequest = {
      name: regulatorName as string,
      logo: imageUploadId
    };

    const response = await registerNewRegulator(regulatorObj);

    if (response.status === "Success") {
      toast.success(response.message);
      navigate("/regulators");
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
    regulatorName,
    regulatorLogo,
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

export default useRegulatorForm;
