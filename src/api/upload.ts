import { axiosPrivate } from "./axios";

export const uploadImage = async (uploadFormData: FormData) => {
  const { data } = await axiosPrivate.post("/upload-image", uploadFormData);
  return data;
};
