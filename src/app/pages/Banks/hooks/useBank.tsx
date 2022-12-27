import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom"; //useLocation
import { IBank, IUpdateBankRequest } from "types/bank";
import { getBanks, deleteBank, updateBankDetails } from "api/banks";
import toast from "react-hot-toast";

const useBank = (pageNumber: number = 1, bankPerPage: number = 1) => {
  const navigate = useNavigate();
  // const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState<IBank[]>([]);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    setIsError(false);
    setError("");

    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    getBanks(pageNumber, bankPerPage, { signal })
      .then((data) => {
        setBanks([...data.banks]);
        setTotalPage(data.totalBanks);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError(error.message);
        toast.error(error.message);
      });

    // Anytime the component unmount it will abort the controller;
    return () => controller.abort();
  }, [pageNumber, bankPerPage]);

  const removeBank = (bankId: string) => {
    deleteBank(bankId)
      .then((response) => {
        setBanks(banks.filter((bank) => bank._id !== bankId));
        toast.success(response.message);
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
  };

  const updateBankDetail = (updatedBank: IUpdateBankRequest) => {
    updateBankDetails(updatedBank)
      .then((response) => {
        if (response.status === "Success") {
          toast.success(response.message);
          navigate("/banks");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error(`Update bank error ${error.message}`);
      });
  };

  const filteredBanks = useMemo(
    () =>
      banks.filter((bank) => {
        if (searchTerm !== "") {
          const regex = new RegExp(`${searchTerm}`, "gi");
          return bank.name.match(regex);
        }

        return bank;
      }),
    [banks, searchTerm]
  );

  return {
    banks,
    loading,
    isError,
    error,
    totalPages,
    removeBank,
    setBanks,
    setSearchTerm,
    filteredBanks,
    updateBankDetail
  };
};

export default useBank;
