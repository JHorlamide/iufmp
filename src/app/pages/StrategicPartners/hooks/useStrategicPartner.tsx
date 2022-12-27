import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IUpdateRequest, IStrategicPartner } from "types/strategicPartner";
import {
  getAllPartner,
  updatePartnerDetails,
  removePartner
} from "api/strategicPartner";
import toast from "react-hot-toast";

const useStrategicPartner = (
  pageNumber: number = 0,
  partnerPerPage: number = 20
) => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<IStrategicPartner[]>([]);
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

    getAllPartner(pageNumber, partnerPerPage, { signal })
      .then((data) => {
        setLoading(false);
        setError("");
        setPartners((prevPartner) => [...data.partner]);
        setTotalPage(data.totalPartner);
      })
      .catch((error: any) => {
        setLoading(false);
        if (signal.aborted) return;
        setError(error.message);
        toast.error(error.message);
      });
  }, [pageNumber, partnerPerPage]);

  const filteredPartner = partners.filter((partner) => {
    if (searchTerm !== "") {
      const regex = new RegExp(`${searchTerm}`, "gi");
      return partner.name.match(regex);
    }

    return partner;
  });

  const updateDetails = (partnerObj: IUpdateRequest) => {
    updatePartnerDetails(partnerObj)
      .then((response) => {
        if (response.status === "Success") {
          toast.success(response.message);
          navigate("/strategic-partners");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error("Error updating strategic partner");
        console.log(error.message);
      });
  };

  const deletePartner = (partnerId: string | undefined) => {
    removePartner(partnerId)
      .then((response) => {
        if (response.status === "Success") {
          setPartners(partners.filter((partner) => partner._id !== partnerId));
          toast.success(response.message);
          navigate("/strategic-partners");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error("Error deleting strategic partner");
        console.log(error.message);
      });
  };

  const download = () => {};

  return {
    loading,
    error,
    totalPages,
    filteredPartner,
    download,
    setSearchTerm,
    deletePartner,
    updateDetails
  };
};

export default useStrategicPartner;
