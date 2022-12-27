import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Analytics from "./components/Analytics";
import SuperAgentHeader from "./components/SuperAgentHeader";
import { DashboardMainView } from "app/components/Layout";
import Pagination, { TableRecord } from "app/components/Pagination";
import SuperAgentList from "./components/SuperAgentList";
import { LONG_HORIZONTAL_LINE } from "assets/icons";
import { ADD_SUPER_AGENT } from "routes/ROUTES_CONSTANTS";
import SuperAgentTableHeader from "./components/SuperAgentTableHeader";
import useSuperAgent from "app/pages/SuperAgents/hooks/useSuperAgent";

const SuperAgent = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [superAgentPerPage, setSuperAgentPerPage] = useState(20);
  const {
    loading,
    error,
    totalPages,
    totalSuperAgents,
    filteredSuperAgents,
    setSearchTerm,
    deleteSuperAgent
  } = useSuperAgent(pageNumber, superAgentPerPage);

  return (
    <DashboardLayout>
      <SuperAgentHeader />

      <DashboardMainView className="h-screen">
        <Analytics totalCreatedSuperAgent={totalSuperAgents} />

        <img src={LONG_HORIZONTAL_LINE} alt="" className="w-full" />
        <SuperAgentTableHeader
          superAgents={filteredSuperAgents}
          buttonText={"New Super Agent"}
          path={ADD_SUPER_AGENT}
          setSearchTerm={setSearchTerm}
        />

        <SuperAgentList
          superAgents={filteredSuperAgents}
          loading={loading}
          error={error}
          removeSuperAgent={deleteSuperAgent}
        />

        <div className="flex justify-between mt-8">
          <TableRecord
            recordPerPage={superAgentPerPage}
            setRecordPerPate={setSuperAgentPerPage}
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

export default SuperAgent;
