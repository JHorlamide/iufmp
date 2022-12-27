import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CLOSE_ICON } from "assets/icons";
import Image from "components/widgets/Image/Image";

interface BoardModalProps {
  image: string;
  name: string;
  position: string;
  profileDetails: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const BoardModal = ({
  image,
  name,
  position,
  profileDetails,
  isOpen,
  setIsOpen
}: BoardModalProps) => {
  return (
    <Fragment>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="container relative z-50 mx-auto"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-modalColor bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={"div"}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className={"relative flex"}
              >
                <Dialog.Panel
                  className="w-[370px] md:w-[900px] lg:w-[965px] h-fit transform 
                    overflow-hidden rounded-2xl bg-white px-12 md:px-10 py-6 text-left align-middle
                    shadow-xl transition-all"
                >
                  <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
                    <Image
                      image={image}
                      parentClassName="w-full flex justify-center items-center md:justify-start md:items-start md:mx-0 md:w-1/6"
                    />

                    {/* <div className="mt-2 w-full md:mt-2 md:w-5/6 md:space-y-8"> */}
                    <div className="mt-2 md:space-y-8 w-full">
                      <div className="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:justify-start md:items-start">
                        <h1 className="text-md md:text-xl text-center md:text-start font-bold">
                          {name}
                        </h1>
                        <h1 className="text-md">{position}</h1>
                      </div>

                      <p className="text-[16px] text-modalTextColor leading-[30px] mt-7 md:mt-0 whitespace-pre-line">
                        {profileDetails}
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>

                <img
                  className="absolute w-10 h-7 inset-y-0 -right-10 top-5 -ml-1 -mt-1 md:ml-5 md:mt-5"
                  src={CLOSE_ICON}
                  alt=""
                  onClick={() => setIsOpen(false)}
                />
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default BoardModal;
