import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import RegulatorHeader from "./components/RegulatorHeader";
import { DashboardMainView } from "app/components/Layout";
import Pagination, { TableRecord } from "app/components/Pagination";
import { ADD_REGULATOR } from "routes/ROUTES_CONSTANTS";
import RegulatorsListTable from "./components/RegulatorsListTable";
import useRegulator from "app/pages/Regulators/hooks/useRegulator";
import RegulatorTableHeader from "./components/RegulatorTableHeader";

const Regulators = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [regulatorPerPage, setRegulatorPerPage] = useState(20);
  const {
    loading,
    error,
    totalPages,
    filteredRegulators,
    deleteRegulator,
    setSearchTerm
  } = useRegulator(pageNumber, regulatorPerPage);

  return (
    <DashboardLayout>
      <RegulatorHeader />

      <DashboardMainView className="h-screen">
        <RegulatorTableHeader
          buttonText={"New Regulator"}
          path={ADD_REGULATOR}
          setSearchTerm={setSearchTerm}
          regulators={filteredRegulators}
        />

        <RegulatorsListTable
          loading={loading}
          error={error}
          filteredRegulators={filteredRegulators}
          removeRegulator={deleteRegulator}
        />

        <div className="flex justify-between mt-8">
          <TableRecord
            recordPerPage={regulatorPerPage}
            setRecordPerPate={setRegulatorPerPage}
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

export default Regulators;
