import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Table } from "flowbite-react";
import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import DeleteModal from "app/components/DeleteModal";
import { ISuperAgent } from "types/superAgent";

export interface SuperAgentProps {
  superAgents: ISuperAgent[];
  loading: boolean;
  error: string;
  removeSuperAgent: (superAgentId: string) => void;
}

const SuperAgentList = ({
  superAgents,
  loading,
  error,
  removeSuperAgent
}: SuperAgentProps) => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const [superAgentId, setSuperAgentId] = useState<string>("");
  const [superAgentName, setSuperAgentName] = useState<string>("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id: string, name: string) {
    setSuperAgentId(id);
    setSuperAgentName(name);
    setIsOpen(true);
  }

  return (
    <Fragment>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        actionText={"Delete"}
        modalHeading={"Delete Super Agent"}
        subText={`${superAgentName} will be deleted`}
        deleteAction={() => removeSuperAgent(superAgentId)}
      />

      <Table hoverable={true}>
        <Table.Head className="bg-white text-[12px] capitalize border-b-2">
          <Table.HeadCell className="font-light">
            Logo
            <CustomBtn
              rightIcon={
                <img src={FILTER_ICON} alt="filter icon" className="w-1.5" />
              }
              className="ml-2"
            />
          </Table.HeadCell>

          <Table.HeadCell className="font-light">
            Company Name
            <CustomBtn
              rightIcon={
                <img src={FILTER_ICON} alt="filter icon" className="w-1.5" />
              }
              className="ml-2"
            />
          </Table.HeadCell>
          <Table.HeadCell className="font-light">
            Contact Person
            <CustomBtn
              rightIcon={
                <img src={FILTER_ICON} alt="filter icon" className="w-1.5" />
              }
              className="ml-2"
            />
          </Table.HeadCell>
          <Table.HeadCell className="font-light">
            Designation
            <CustomBtn
              rightIcon={
                <img src={FILTER_ICON} alt="filter icon" className="w-1.5" />
              }
              className="ml-2"
            />
          </Table.HeadCell>

          <Table.HeadCell className="font-light">
            Email
            <CustomBtn
              rightIcon={
                <img src={FILTER_ICON} alt="filter icon" className="w-1.5" />
              }
              className="ml-2"
            />
          </Table.HeadCell>

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

          {superAgents.length <= 0 && (
            <div className="container flex items-center justify-center py-10 mx-auto ml-72">
              <h1 className="font-semibold">
                Your super agent record is empty!
              </h1>
            </div>
          )}

          {superAgents.map((superAgent) => (
            <Table.Row key={superAgent._id} className="bg-white">
              <Table.Cell className="font-medium text-gray-900 whitespace-nowrap">
                <img
                  src={superAgent.logo?.imageUrl}
                  alt={superAgent.logo?.key}
                  className="w-[39.52px] h-[40px]"
                />
              </Table.Cell>

              <Table.Cell className="">{superAgent.companyName}</Table.Cell>
              <Table.Cell className="">{superAgent.contactPerson}</Table.Cell>
              <Table.Cell className="">{superAgent.designation}</Table.Cell>
              <Table.Cell className="">{superAgent.email}</Table.Cell>

              <Table.Cell className="flex space-x-6">
                <CustomBtn
                  rightIcon={
                    <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() =>
                    navigate(`/super-agent/edit/${superAgent._id}`)
                  }
                />

                <CustomBtn
                  rightIcon={
                    <img src={DELETE_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() =>
                    openModal(superAgent._id, superAgent.companyName)
                  }
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default SuperAgentList;
