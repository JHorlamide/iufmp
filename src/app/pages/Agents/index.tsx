import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import AgentsHeader from "./components/AgentsHeader";
import { DashboardMainView } from "app/components/Layout";
import Analytics from "./components/Analytics";
import { LONG_HORIZONTAL_LINE } from "assets/icons";
import TestTable from "./components/AgentTable";
import { ADD_AGENT } from "routes/ROUTES_CONSTANTS";
import useAgents from "app/pages/Agents/hooks/useAgents";
import AgentTableHeader from "./components/AgentTableHeader";
import Pagination, { TableRecord } from "app/components/Pagination";

const Agent = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [agentPerPage, setAgentPerPage] = useState(20);
  const {
    loading,
    error,
    totalPages,
    totalAgents,
    filteredAgents,
    setSearchTerm,
    setIsApproved,
    deleteAgent
  } = useAgents(pageNumber, agentPerPage);

  return (
    <DashboardLayout>
      <AgentsHeader />

      <DashboardMainView className="h-screen">
        <Analytics totalAgents={totalAgents} />

        <img src={LONG_HORIZONTAL_LINE} alt="" className="w-full" />

        <AgentTableHeader
          buttonText={"New Agent"}
          path={ADD_AGENT}
          setSearchTerm={setSearchTerm}
          agents={filteredAgents}
          setIsApproved={setIsApproved}
        />

        <TestTable
          filterAgents={filteredAgents}
          loading={loading}
          error={error}
          removeAgent={deleteAgent}
        />

        <div className="flex justify-between mt-8">
          <TableRecord
            recordPerPage={agentPerPage}
            setRecordPerPate={setAgentPerPage}
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

export default Agent;
