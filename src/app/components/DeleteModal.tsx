import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";

interface DeleteModalProps {
  isOpen: boolean;
  closeModal: () => void;
  modalHeading: string;
  subText: string;
  actionText: string;
  deleteAction: () => void;
  isLoading?: boolean;
}

const DeleteModal = ({
  isOpen,
  closeModal,
  modalHeading,
  subText,
  actionText,
  deleteAction,
  isLoading
}: DeleteModalProps) => {
  const handleDelete = () => {
    deleteAction();
    closeModal();
  };

  return (
    <Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => closeModal()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h1"
                    className="text-[24px] font-bold text-black"
                  >
                    {modalHeading}
                  </Dialog.Title>

                  <div className="mt-1">
                    <p className="">{subText}</p>
                  </div>

                  <div className="mt-10 flex items-center space-x-8">
                    <CustomBtn
                      type="button"
                      className="inline-flex py-3 rounded-full px-12 bg-buttonColor text-white hover:bg-lightGreen"
                      onClick={handleDelete}
                      isloading={isLoading}
                    >
                      {actionText}
                    </CustomBtn>

                    <CustomBtn
                      type="button"
                      className="inline-flex text-buttonColor"
                      onClick={() => closeModal()}
                    >
                      Cancel
                    </CustomBtn>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default DeleteModal;
