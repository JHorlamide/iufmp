import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CLOSE_ICON } from "assets/icons";
import { Carousel } from "flowbite-react";
// import { GALLERY } from "../content";
import ScrollToTop from "utils/scrollToTop";
import { urlFor } from "lib/client";

interface GalleryModalProps {
  isOpen: boolean;
  images: Array<string>;
  setIsOpen: (value: boolean) => void;
}

const GalleryModal = ({ isOpen, setIsOpen, images }: GalleryModalProps) => {
  const handleModalClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      ScrollToTop();
    }, 2000);
  };

  return (
    <Fragment>
      <ScrollToTop />
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
                <Dialog.Panel>
                  <div
                    className="bg-cover bg-center w-[370px] md:w-[863px] h-[584px] transform 
                    rounded-2xl align-middle shadow-xl transition-all"
                  >
                    <Carousel>
                      {images.map((imgSrc, idx) => (
                        <img
                          key={idx}
                          src={urlFor(imgSrc).toString()}
                          alt="..."
                          className="object-cover w-full h-full"
                        />
                      ))}
                    </Carousel>
                  </div>
                </Dialog.Panel>

                <img
                  className="absolute w-10 h-7 inset-y-0 -right-10 top-0 -ml-1 -mt-1 md:ml-5 md:mt-0"
                  src={CLOSE_ICON}
                  alt=""
                  onClick={handleModalClose}
                />
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Fragment>
  );
};

export default GalleryModal;
