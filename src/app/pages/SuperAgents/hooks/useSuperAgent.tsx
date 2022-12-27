import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getAllSuperAgents,
  updateSuperAgent,
  getTotalNumberOfCreatedSuperAgents,
  removeSuperAgent
} from "api/superAgents";
import { ISuperAgent, IUpdateSuperAgentRequest } from "types/superAgent";

const useSuperAgent = (
  pageNumber: number = 0,
  superAgentPerPage: number = 20
) => {
  const navigate = useNavigate();
  const [superAgents, setSuperAgents] = useState<ISuperAgent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalSuperAgents, setTotalSuperAgents] = useState(0);
  const [totalPages, setTotalPage] = useState(0);

  useEffect(() => {
    getTotalNumberOfCreatedSuperAgents()
      .then((response) => {
        setTotalSuperAgents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setIsError(false);
    setError("");

    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    getAllSuperAgents(pageNumber, superAgentPerPage, { signal })
      .then((data) => {
        setSuperAgents([...data.superAgents]);
        setTotalPage(data.totalSuperAgents);
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
  }, [pageNumber, superAgentPerPage]);

  const updateSuperAgentDetails = (updatedBank: IUpdateSuperAgentRequest) => {
    updateSuperAgent(updatedBank)
      .then((response) => {
        if (response.status === "Success") {
          toast.success(response.message);
          navigate("/super-agents");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error(`Update error ${error.message}`);
      });
  };

  const deleteSuperAgent = async (superAgentId: string) => {
    removeSuperAgent(superAgentId)
      .then((response) => {
        if (response.status === "Success") {
          setSuperAgents(
            superAgents.filter((superAgent) => superAgent._id !== superAgentId)
          );
          toast.success(response.message);
          navigate("/super-agents");
          return;
        }

        toast.error(response.message);
      })
      .catch((error) => {
        toast.error("Remove Super Agent Error");
        console.log(error.message);
      });
  };

  const filteredSuperAgents = superAgents.filter((superAgent) => {
    if (searchTerm !== "") {
      const regex = new RegExp(`${searchTerm}`, "gi");
      return (
        superAgent.companyName.match(regex) ||
        superAgent.contactPerson.match(regex) ||
        superAgent.designation.match(regex) ||
        superAgent.email.match(regex)
      );
    }

    return superAgent;
  });

  return {
    loading,
    isError,
    error,
    totalPages,
    totalSuperAgents,
    filteredSuperAgents,
    setSearchTerm,
    setSuperAgents,
    deleteSuperAgent,
    updateSuperAgentDetails
  };
};

export default useSuperAgent;
