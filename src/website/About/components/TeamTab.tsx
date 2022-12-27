import { Tab } from "@headlessui/react";
import { BOARD_CONTENT } from "../content";
import BoardCard from "./BoardCard";
import { GROUP_SHAPE, GROUP_CIRCLE_COLORED } from "assets/icons";
import Image from "components/widgets/Image/Image";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const TeamTab = () => {
  return (
    <Tab.Group>
      <div className="md:space-y-14">
        <Tab.List className="flex justify-center items-center space-x-20 border-b-0">
          {Object.keys(BOARD_CONTENT).map((category, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  `text-xl font-bold hover:text-lightGreen`,
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className={"mt-16"}>
          {Object.values(BOARD_CONTENT).map((members, index) => (
            <Tab.Panel key={index} className="z-0 relative">
              <div
                className="mx-auto grid grid-cols-1 md:member-custom-grid gap-y-16 
                md:gap-x-10 grid-flow-row md:max-w-screen-lg md:justify-center"
              >
                {members.slice(0, 6).map((info) => (
                  <BoardCard
                    key={info.id}
                    image={info.image}
                    name={info.name}
                    position={info.position}
                    shortBio={info.shortBio}
                    shortBio2={info.shortBio2}
                    fullBio={info.fullBio}
                  />
                ))}
              </div>

              <div className="flex w-full mx-auto justify-center py-16">
                {members.slice(6, 8).map((info) => (
                  <BoardCard
                    key={info.id}
                    image={info.image}
                    name={info.name}
                    position={info.position}
                    shortBio={info.shortBio}
                    shortBio2={info.shortBio2}
                    fullBio={info.fullBio}
                  />
                ))}
              </div>

              <Image
                image={GROUP_SHAPE}
                parentClassName="hidden md:block absolute inset-y-0 right-0 top-20"
                imageClassName="w-64"
              />

              <Image
                image={GROUP_CIRCLE_COLORED}
                parentClassName="hidden md:block absolute inset-y-0 left-0 top-[22%]"
                imageClassName="w-[80%]"
              />

              <Image
                image={GROUP_CIRCLE_COLORED}
                parentClassName="hidden md:block absolute inset-y-0 right-0 top-[92%]"
                imageClassName="w-[90%]"
              />

              <Image
                image={GROUP_SHAPE}
                parentClassName="hidden md:block absolute inset-y-0 -left-20 top-[52%]"
                imageClassName="w-80"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default TeamTab;
