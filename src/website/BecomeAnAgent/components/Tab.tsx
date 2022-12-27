import { Tab } from "@headlessui/react";
import SuperAgent from "./SuperAgent";
import Agent from "./Agent";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const AgentTab = () => {
  return (
    <div className="relative mx-auto mt-16 container-md md:-mt-16">
      <Tab.Group>
        <Tab.List className="flex items-center justify-center space-x-20 border-b-0">
          <div className="flex space-x-14">
            <Tab
              className={({ selected }) =>
                classNames(
                  `text-[24px] font-bold hover:text-lightGreen`,
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              Super Agents
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  `text-[24px] font-bold hover:text-lightGreen`,
                  "focus:outline-none",
                  selected
                    ? "text-buttonColor border-b-4 border-b-buttonColor"
                    : ""
                )
              }
            >
              Agents
            </Tab>
          </div>
        </Tab.List>

        <Tab.Panels className={"mt-8 md:mt-12"}>
          <Tab.Panel className={"px-5"}>
            <SuperAgent />
          </Tab.Panel>

          <Tab.Panel>
            <Agent />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AgentTab;
