import { useState, useEffect, Fragment } from "react";
import { Outlet } from "react-router-dom";
import useRefreshToken from "hooks/useRefreshToken";
import useAuth from "hooks/useAuth";
import { Spinner } from "flowbite-react";
import { AuthContextType } from "context/AuthProvider";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { authUser } = useAuth() as AuthContextType;

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    !authUser?.user ? verifyRefreshToken() : setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner
          color="success"
          aria-label="spinner"
          className="text-buttonColor"
          size={"md"}
        />
      ) : (
        <Outlet />
      )}
    </Fragment>
  );
};

export default PersistLogin;
