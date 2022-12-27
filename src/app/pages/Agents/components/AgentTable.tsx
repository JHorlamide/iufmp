import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Table } from "flowbite-react";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import { DELETE_ICON, EDIT_ICON } from "assets/icons"; //FILTER_ICON
import DeleteModal from "app/components/DeleteModal";
import { IAgent } from "types/agent";
import dateformat from "dateformat";

const tableHeadCellList = [
  {
    id: 1,
    title: "Date"
  },
  // {
  //   id: 2,
  //   title: "First Name"
  // },
  // {
  //   id: 3,
  //   title: "Surname"
  // },
  {
    id: 4,
    title: "Business Name"
  },
  {
    id: 5,
    title: "State"
  },
  // {
  //   id: 6,
  //   title: "LGA"
  // },
  {
    id: 7,
    title: "Email"
  },
  {
    id: 8,
    title: "Choice of Super Agent"
  }
];

export interface AgentListTableProps {
  filterAgents: IAgent[];
  loading: boolean;
  error: string;
  removeAgent: (superAgentId: string | undefined) => void;
}

const TestTable = ({
  filterAgents,
  loading,
  error,
  removeAgent
}: AgentListTableProps) => {
  const navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);
  const [agentId, setAgentId] = useState<string | undefined>("");
  const [agentName, setAgentName] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id: string | undefined, name: string) {
    setAgentId(id);
    setAgentName(name);
    setIsOpen(true);
  }
  return (
    <React.Fragment>
      <DeleteModal
        isOpen={isOpen}
        actionText={"Delete"}
        closeModal={closeModal}
        modalHeading={"Delete Agent"}
        subText={`${agentName} will be deleted.`}
        deleteAction={() => removeAgent(agentId)}
      />

      <Table className="z-0">
        <Table.Head className="bg-white text-[10px] capitalize border-b-2">
          {tableHeadCellList.map((tableItem) => (
            <Table.HeadCell key={tableItem.id} className="font-medium w-fit">
              <div className="flex space-x-1">
                <p className="whitespace-nowrap">{tableItem.title}</p>
                {/* <CustomBtn
                  rightIcon={
                    <img
                      src={FILTER_ICON}
                      alt="filter icon"
                      className="w-full"
                    />
                  }
                /> */}
              </div>
            </Table.HeadCell>
          ))}
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {loading && (
            <div className="container flex justify-center mx-auto my-8 ml-40 item-center">
              <Spinner
                color="success"
                aria-label="spinner"
                className="text-buttonColor"
                size={"xl"}
              />
            </div>
          )}

          {error && (
            <div className="container mx-auto my-10 ml-72">
              <h1 className="text-start text-md">
                Can't load super agents at the moment. Please try reloading the
                page
              </h1>
            </div>
          )}

          {filterAgents.length <= 0 && (
            <div className="container flex items-center justify-center py-10 mx-auto ml-72">
              <h1 className="font-semibold">Your agent record is empty!</h1>
            </div>
          )}

          {filterAgents.map((agent) => (
            <Table.Row
              key={agent._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap">
                {dateformat(agent.createdAt, "yyyy-mm-dd")}
              </Table.Cell>
              {/* <Table.Cell>{agent.firstName}</Table.Cell> */}
              {/* <Table.Cell>{agent.surname}</Table.Cell> */}
              <Table.Cell className="whitespace-nowrap">
                {agent.businessName}
              </Table.Cell>
              <Table.Cell>{agent.state}</Table.Cell>
              {/* <Table.Cell>{agent?.LGA}</Table.Cell> */}
              <Table.Cell>{agent.email}</Table.Cell>
              <Table.Cell>{agent.choiceOfSuperAgent}</Table.Cell>
              <Table.Cell className="flex space-x-4">
                <CustomBtn
                  rightIcon={
                    <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => navigate(`/agents/edit/${agent._id}`)}
                />

                <CustomBtn
                  rightIcon={
                    <img src={DELETE_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => openModal(agent._id, agent.businessName)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};

export default TestTable;
