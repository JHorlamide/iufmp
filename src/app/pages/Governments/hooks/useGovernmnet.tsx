import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IGovernment, IUpdateGovernmentRequest } from "types/government";
import {
  getAllGovernments,
  updateGovernmentDetails,
  removeGovernment
} from "api/government";
import toast from "react-hot-toast";

const useGovernment = (pageNumber: number = 0, govPerPage: number = 20) => {
  const navigate = useNavigate();
  const [governments, setGovernments] = useState<IGovernment[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setError("");
    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    getAllGovernments(pageNumber, govPerPage, { signal })
      .then((data) => {
        setLoading(false);
        setError("");
        setGovernments((prevState) => [...data.governments]);
        setTotalPage(data.totalGov);
      })
      .catch((error: any) => {
        setLoading(false);
        if (signal.aborted) return;
        setError(error.message);
        toast.error(error.message);
      });
  }, [pageNumber, govPerPage]);

  const filteredGovernments = governments.filter((government) => {
    if (searchTerm !== "") {
      const regex = new RegExp(`${searchTerm}`, "gi");
      return government.name.match(regex);
    }

    return government;
  });

  const updateDetails = (governmentObj: IUpdateGovernmentRequest) => {
    updateGovernmentDetails(governmentObj)
      .then((response) => {
        if (response.status === "Success") {
          toast.success(response.message);
          navigate("/governments");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error("Error updating government: ");
        console.log(error.message);
      });
  };

  const deleteGovernment = (governmentId: string | undefined) => {
    removeGovernment(governmentId)
      .then((response) => {
        if (response.status === "Success") {
          setGovernments(
            governments.filter((government) => government._id !== governmentId)
          );
          toast.success(response.message);
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const download = () => {};

  return {
    error,
    loading,
    totalPages,
    filteredGovernments,
    download,
    setSearchTerm,
    deleteGovernment,
    updateDetails
  };
};

export default useGovernment;
