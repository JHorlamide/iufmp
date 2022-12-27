import { useState, useEffect } from "react";
import { monthsList } from "utils/constants";
import {
  getNumberOfNewReqByMonth,
  getNumberOfApprovedAgentByMonth
} from "api/agents";

type MonthType = {
  numberOfDocuments: number;
  month: string;
};

const useAnalytics = () => {
  const [loadingMonths, setLoadingMonth] = useState(false);
  const [newAgentReqMonths, setNewAGentReqMonths] = useState<MonthType[]>([]);
  const [approvedAgentMonths, setApprovedAgentMonths] = useState<MonthType[]>(
    []
  );
  const [selectedNewReqMonth, setSelectedNewReqMonth] = useState(monthsList[0]);
  const [selectedApprAgentMonth, setSelectedApprAgentMonth] = useState(
    monthsList[0]
  );
  const [query, setQuery] = useState("");
  const [reqNewMonth, setReqNewMonth] = useState(0);
  const [reqApprMonth, setReqApprMonth] = useState(0);

  const regex = new RegExp(`${query}`, "gi");

  const filteredMonth =
    query === ""
      ? monthsList
      : monthsList.filter((month) => month.value.match(regex));

  // New Req Month
  useEffect(() => {
    const myMonth = newAgentReqMonths.filter((month) =>
      month.month.match(selectedNewReqMonth.value)
    )[0];

    if (myMonth) {
      setReqNewMonth(myMonth?.numberOfDocuments);
      return;
    }

    setReqNewMonth(0);
  }, [selectedNewReqMonth, newAgentReqMonths]);

  // Approved Agents Month
  useEffect(() => {
    const myMonth = approvedAgentMonths.filter((month) =>
      month.month.match(selectedApprAgentMonth.value)
    )[0];

    if (myMonth) {
      setReqApprMonth(myMonth?.numberOfDocuments);
      return;
    }

    setReqApprMonth(0);
  }, [selectedApprAgentMonth, approvedAgentMonths]);

  useEffect(() => {
    setLoadingMonth(true);

    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;
    const dataFetch = async () => {
      const result = (
        await Promise.all([
          getNumberOfNewReqByMonth({ signal }),
          getNumberOfApprovedAgentByMonth({ signal })
        ])
      ).map((response) => response.data);

      const [newReqMonth, ApprovedAgentMonth] = await Promise.all(result);
      setNewAGentReqMonths(newReqMonth);
      setApprovedAgentMonths(ApprovedAgentMonth);
      setLoadingMonth(false);
    };

    dataFetch();
  }, []);

  return {
    query,
    reqNewMonth,
    reqApprMonth,
    selectedNewReqMonth,
    selectedApprAgentMonth,
    filteredMonth,
    loadingMonths,
    setQuery,
    setSelectedNewReqMonth,
    setSelectedApprAgentMonth
  };
};

export default useAnalytics;

// getNumberOfNewReqByMonth({ signal })
//   .then((data) => {
//     setLoadingMonth(false);
//     setMonths(data.data);
//   })
//   .catch((error) => {
//     setLoadingMonth(false);
//     if (signal.aborted) return;
//     toast.error(error.response.data.message);
//   });
