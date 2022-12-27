import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Spinner } from "flowbite-react";

import { DELETE_ICON, EDIT_ICON, FILTER_ICON } from "assets/icons";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import DeleteModal from "app/components/DeleteModal";
import { IBank } from "types/bank";

export interface BankManagerProps {
  banks: IBank[];
  loading: boolean;
  error: string;
  removeBank: (bankId: string) => void;
}

const BankListTable = ({
  banks,
  loading,
  error,
  removeBank
}: BankManagerProps) => {
  const navigate = useNavigate();
  let [isOpen, setIsOpen] = useState(false);
  const [bankId, setBankId] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");

  const handleDeleteBank = async () => {
    removeBank(bankId);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(id: string, bankName: string) {
    setBankName(bankName);
    setBankId(id);
    setIsOpen(true);
  }

  return (
    <Fragment>
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        actionText={"Delete"}
        modalHeading={"Delete Bank"}
        subText={`${bankName} will be deleted`}
        deleteAction={handleDeleteBank}
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
                Can't load banks at the moment. Please try again later
              </h1>
            </div>
          )}

          {banks?.length <= 0 && (
            <div className="container flex items-center justify-center py-10 mx-auto ml-40">
              <h1 className="font-semibold">Your bank record is empty!</h1>
            </div>
          )}

          {banks.map((bank: any) => (
            <Table.Row key={bank._id} className="bg-white">
              <Table.Cell>
                <img
                  src={bank.logo?.imageUrl}
                  alt={bank.logo?.key}
                  className="w-[39.52px] h-[40px]"
                />
              </Table.Cell>

              <Table.Cell className="w-[600px]">{bank.name}</Table.Cell>

              <Table.Cell className="flex space-x-6">
                <CustomBtn
                  rightIcon={
                    <img src={EDIT_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => navigate(`/banks/edit/${bank._id}`)}
                />

                <CustomBtn
                  rightIcon={
                    <img src={DELETE_ICON} alt="edit icon" className="w-4" />
                  }
                  onClick={() => openModal(bank._id, bank.name)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Fragment>
  );
};

export default BankListTable;
