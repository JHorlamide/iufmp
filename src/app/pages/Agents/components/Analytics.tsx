import { Fragment } from "react";
import { SMALL_VERTICAL_LINE } from "assets/icons";
import { Spinner } from "flowbite-react";
import { Combobox, Transition } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsCheck2 } from "react-icons/bs";
import useAnalytics from "app/pages/Agents/hooks/useAgentAnalytics";

interface MonthList {
  id: number;
  name: string;
  value: string;
}

const Analytics = ({ totalAgents }: { totalAgents: number }) => {
  const {
    query,
    reqNewMonth,
    reqApprMonth,
    selectedNewReqMonth,
    selectedApprAgentMonth,
    filteredMonth,
    loadingMonths,
    setQuery,
    setSelectedNewReqMonth,
    setSelectedApprAgentMonth
  } = useAnalytics();

  return (
    <div className="relative grid grid-cols-12  items-center border border-gray-200 px-8 bg-white h-[113px] rounded-lg shadow-md">
      <div className="flex flex-col col-span-3 space-y-1">
        <h1 className="text-2xl font-bold text-buttonColor">{totalAgents}</h1>
        <p className="">Total Number of Agents</p>
      </div>

      <div className="absolute left-[240px] top-5">
        <img src={SMALL_VERTICAL_LINE} alt="" className="" />
      </div>

      <div className="flex flex-col col-span-5 space-y-1">
        {loadingMonths ? (
          <Spinner
            color="success"
            aria-label="spinner"
            className="text-buttonColor"
            size={"md"}
          />
        ) : (
          <h1 className="text-2xl font-bold text-buttonColor">{reqNewMonth}</h1>
        )}
        <div className="flex space-x-10">
          New Requests in{" "}
          <div className="w-42">
            <Combobox
              value={selectedNewReqMonth}
              onChange={setSelectedNewReqMonth}
            >
              <div className="relative z-50 -mt-2">
                <div className="relative w-auto overflow-hidden text-left rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-auto py-2 text-sm font-semibold leading-5 text-gray-900 border-none focus:ring-0"
                    displayValue={(month: MonthList) => month.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />

                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiOutlineChevronDown
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>

                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredMonth.length === 0 && query !== "" ? (
                      <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                        Nothing found.
                      </div>
                    ) : (
                      filteredMonth.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-buttonColor text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-buttonColor"
                                  }`}
                                >
                                  <BsCheck2
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
      </div>

      <div className="absolute left-[580px] top-5">
        <img src={SMALL_VERTICAL_LINE} alt="" className="" />
      </div>

      <div className="flex flex-col col-span-4 -ml-10 space-y-1">
        {loadingMonths ? (
          <Spinner
            color="success"
            aria-label="spinner"
            className="text-buttonColor"
            size={"md"}
          />
        ) : (
          <h1 className="text-2xl font-bold text-buttonColor">
            {reqApprMonth}
          </h1>
        )}
        <div className="flex space-x-4">
          <p className="whitespace-nowrap">Approved Agents in</p>{" "}
          <div className="w-42">
            <Combobox
              value={selectedApprAgentMonth}
              onChange={setSelectedApprAgentMonth}
            >
              <div className="relative z-50 -mt-2">
                <div className="relative w-auto overflow-hidden text-left rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-auto py-2 text-sm font-semibold leading-5 text-gray-900 border-none focus:ring-0"
                    displayValue={(month: MonthList) => month.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />

                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiOutlineChevronDown
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </div>

                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredMonth.length === 0 && query !== "" ? (
                      <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                        Nothing found.
                      </div>
                    ) : (
                      filteredMonth.map((month) => (
                        <Combobox.Option
                          key={month.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-buttonColor text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={month}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {month.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-buttonColor"
                                  }`}
                                >
                                  <BsCheck2
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
