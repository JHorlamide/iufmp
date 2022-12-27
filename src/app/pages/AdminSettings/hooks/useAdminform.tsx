import React, { useState } from "react";
import AuthContext from "context/AuthProvider";
import { AuthContextType } from "context/AuthProvider";
import { updateUserDetails } from "api/user";
import { IUserRequest } from "types/user";
import toast from "react-hot-toast";

const useAdminform = () => {
  const { authUser, saveAuth } = React.useContext(
    AuthContext
  ) as AuthContextType;
  const [adminData, setAdminData] = useState({
    firstName: authUser?.user.firstName,
    lastName: authUser?.user.lastName,
    email: authUser?.user.email,
    id: authUser?.user.id
  });

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userObj: IUserRequest = {
      id: adminData.id,
      firstName: adminData.firstName,
      lastName: adminData.lastName,
      email: adminData.email
    };

    const response = await updateUserDetails(userObj);

    if (response.status === "Success") {
      setAdminData({
        firstName: response.data.firstName,
        lastName: response.data.lastName,
        email: response.data.email,
        id: response.data._id
      });

      saveAuth({
        accessToken: authUser?.accessToken,
        refreshToken: authUser?.refreshToken,
        user: {
          id: response.data._id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          isAdmin: response.data.isAdmin
        }
      });

      toast.success(response.message);
      return;
    }

    toast.error(response.message);
  };

  return {
    adminData,
    handleChange,
    handleSubmit
  };
};

export default useAdminform;
