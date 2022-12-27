import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Table } from "flowbite-react";
import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import DeleteModal from "app/components/DeleteModal";
import { IRegulator } from "types/regulator";

export interface RegulatorListProps {
  filteredRegulators: IRegulator[];
  loading: boolean;
  error: string;
  removeRegulator: (regulatorId: string) => void;
}

const RegulatorsListTable = ({
  filteredRegulators,
  loading,
  error,
  removeRegulator
}: RegulatorListProps) => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const [regulatorId, setRegulatorId] = useState("");
  const [regulatorName, setRegulatorName] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id: string, name: string) {
    setRegulatorId(id);
    setRegulatorName(name);
    setIsOpen(true);
  }

  return (
    <Fragment>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        actionText={"Delete"}
        modalHeading={"Delete Regulator"}
        subText={`${regulatorName} will be deleted.`}
        deleteAction={() => removeRegulator(regulatorId)}
      />

      <Table hoverable={true}>
        <Table.Head className="bg-white text-[12px] w-full capitalize space-x-3 border-b-2">
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
            Name
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
            <div className="container flex items-center justify-center my-8 ml-40">
              <Spinner
                color="success"
                aria-label="spinner"
                className="text-buttonColor"
                size={"xl"}
              />
            </div>
          )}

          {error && (
            <div className="container mx-auto my-10">
              <h1 className="text-start text-md">
                Can't load regulators at the moment. Please try again later
              </h1>
            </div>
          )}

          {filteredRegulators.length <= 0 && (
            <div className="container flex items-center justify-center py-10 mx-auto ml-[150px]">
              <h1 className="font-semibold">Your regulator record is empty!</h1>
            </div>
          )}

          {filteredRegulators.map((regulator: any) => (
            <Table.Row key={regulator._id} className="bg-white">
              <Table.Cell>
                <img
                  src={regulator.logo?.imageUrl}
                  alt={regulator.logo?.key}
                  className="w-[39.52px] h-[40px]"
                />
              </Table.Cell>

              <Table.Cell className="w-[600px]">{regulator.name}</Table.Cell>

              <Table.Cell className="flex space-x-6">
                <CustomBtn
                  rightIcon={
                    <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => navigate(`/regulators/edit/${regulator._id}`)}
                />

                <CustomBtn
                  rightIcon={
                    <img src={DELETE_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => openModal(regulator._id, regulator.name)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default RegulatorsListTable;
