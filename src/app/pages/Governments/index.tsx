import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import GovernmentHeader from "./components/GovernmentHeader";
import { DashboardMainView } from "app/components/Layout";
import { ADD_GOVERNMENT } from "routes/ROUTES_CONSTANTS";
import GovernmentListTable from "./components/GovernmentListTable";
import useGovernment from "app/pages/Governments/hooks/useGovernmnet";
import GovernmentTableHeader from "./components/GovernmentTableHeader";
import Pagination, { TableRecord } from "app/components/Pagination";

const Government = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [govPerPage, setGovPerPage] = useState(20);
  const {
    loading,
    error,
    totalPages,
    filteredGovernments,
    setSearchTerm,
    deleteGovernment
  } = useGovernment(pageNumber, govPerPage);

  return (
    <DashboardLayout>
      <GovernmentHeader />

      <DashboardMainView className="h-screen">
        <GovernmentTableHeader
          setSearchTerm={setSearchTerm}
          buttonText={"New Government/MDA"}
          path={ADD_GOVERNMENT}
          governments={filteredGovernments}
        />

        <GovernmentListTable
          loading={loading}
          error={error}
          filteredGovernments={filteredGovernments}
          removeGovernment={deleteGovernment}
        />

        <div className="flex justify-between mt-8">
          <TableRecord
            recordPerPage={govPerPage}
            setRecordPerPate={setGovPerPage}
          />

          <Pagination
            setPageNumber={setPageNumber}
            pageNumber={pageNumber}
            totalPage={totalPages}
          />
        </div>
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default Government;
