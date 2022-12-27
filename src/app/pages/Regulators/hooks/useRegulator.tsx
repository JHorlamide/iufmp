import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IRegulator, IUpdateRegulatorRequest } from "types/regulator";
import {
  getAllRegulators,
  updateRegulator,
  removeRegulator
} from "api/regulator";
import toast from "react-hot-toast";

const useRegulator = (
  pageNumber: number = 0,
  regulatorsPerPage: number = 20
) => {
  const navigate = useNavigate();
  const [regulators, setRegulators] = useState<IRegulator[]>([]);
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

    getAllRegulators(pageNumber, regulatorsPerPage, { signal })
      .then((data) => {
        setLoading(false);
        setError("");
        setRegulators((prevRegulator) => [...data.regulators]);
        setTotalPage(data.totalRegulators);
      })
      .catch((error: any) => {
        setLoading(false);
        if (signal.aborted) return;
        setError(error.message);
        toast.error(error.message);
      });
  }, [pageNumber, regulatorsPerPage]);

  const filteredRegulators = regulators.filter((regulator) => {
    if (searchTerm !== "") {
      const regex = new RegExp(`${searchTerm}`, "gi");
      return regulator.name.match(regex);
    }

    return regulator;
  });

  const updateRegulatorDetails = (regulatorObj: IUpdateRegulatorRequest) => {
    updateRegulator(regulatorObj)
      .then((response) => {
        if (response.status === "Success") {
          toast.success(response.message);
          navigate("/regulators");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error("Error updating regulator");
        console.log(error.message);
      });
  };

  const deleteRegulator = (regulatorId: string) => {
    removeRegulator(regulatorId)
      .then((response) => {
        if (response.status === "Success") {
          setRegulators(
            regulators.filter((regulator) => regulator._id !== regulatorId)
          );
          toast.success(response.message);
          navigate("/regulators");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error("Error deleting regulators");
        console.log(error.message);
      });
  };

  const download = () => {};

  return {
    error,
    loading,
    totalPages,
    filteredRegulators,
    download,
    setSearchTerm,
    deleteRegulator,
    updateRegulatorDetails
  };
};

export default useRegulator;
