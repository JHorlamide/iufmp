import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import StrategicPartnerHeader from "./components/StrategicPartnerHeader";
import { DashboardMainView } from "../../components/Layout";
import { ADD_STRATEGIC_PARTNERS } from "routes/ROUTES_CONSTANTS";
import StrategicPartnerTable from "./components/StrategicPartnerTable";
import StrategicPartnerTableHeader from "./components/StrategicPartnerTableHeader";
import useStrategicPartner from "app/pages/StrategicPartners/hooks/useStrategicPartner";
import Pagination, { TableRecord } from "app/components/Pagination";

const StrategicPartner = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [partnerPerPage, setPartnerPerPage] = useState(20);
  const {
    loading,
    error,
    totalPages,
    filteredPartner,
    deletePartner,
    setSearchTerm
  } = useStrategicPartner(pageNumber, partnerPerPage);

  return (
    <DashboardLayout>
      <StrategicPartnerHeader />

      <DashboardMainView className="h-screen">
        <StrategicPartnerTableHeader
          buttonText={"New Partner"}
          path={ADD_STRATEGIC_PARTNERS}
          setSearchTerm={setSearchTerm}
          partners={filteredPartner}
        />

        <StrategicPartnerTable
          filteredPartners={filteredPartner}
          loading={loading}
          error={error}
          removePartner={deletePartner}
        />

        <div className="flex justify-between mt-8">
          <TableRecord
            recordPerPage={partnerPerPage}
            setRecordPerPate={setPartnerPerPage}
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

export default StrategicPartner;
