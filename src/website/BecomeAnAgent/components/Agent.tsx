import React, { Fragment, useState } from "react";
import Image from "components/widgets/Image/Image";
import style from "../BecomeAnAgent.module.css";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";
import { CHECK_LIST } from "assets/icons";
import { useNavigate } from "react-router-dom";

import { Combobox, Transition } from "@headlessui/react";
import { BsCheck2 } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { StateType } from "hooks/useStateLga";
import useStateLga from "hooks/useStateLga";
import { registerNewAgentByUser } from "api/agents";
import { IAgentRequest } from "types/agent";
import toast from "react-hot-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  businessName: string;
  superAgent: string;
  proposedAgencyService: string;
  preferredPhoneNumber: string;
  alternatePhoneNumber: string;
}

const Agent = () => {
  const navigate = useNavigate();
  const DEFAULT_STATE_TO_FETCH_LGA = "lagos";
  const [stateToFetchLGA, setStateToFetchLGA] = useState<string>("");

  const { statesList, LGAsList } = useStateLga(
    stateToFetchLGA ? stateToFetchLGA : DEFAULT_STATE_TO_FETCH_LGA
  );

  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<StateType>(statesList[0]);
  const [selectedLGA, setSelectedLGA] = useState(LGAsList && LGAsList[0]);
  const regex = new RegExp(`${query}`, "gi");

  const filterState =
    query === ""
      ? statesList
      : statesList.filter((state) => state.name.match(regex));

  const filterLGA =
    query === "" ? LGAsList : LGAsList?.filter((lga) => lga.match(regex));

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    superAgent: "",
    businessName: "",
    proposedAgencyService: "",
    preferredPhoneNumber: "",
    alternatePhoneNumber: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const agentObj: IAgentRequest = {
      email: formData.email,
      firstName: formData.firstName,
      surname: formData.lastName,
      businessName: formData.businessName,
      state: stateToFetchLGA,
      LGA: selectedLGA as string,
      approved: false,
      createdDate: new Date(),
      gender: formData.gender,
      choiceOfSuperAgent: formData.superAgent,
      preferredPhoneNumber: formData.preferredPhoneNumber,
      alternativePhoneNumber: formData.alternatePhoneNumber,
      proposedAgentService: formData.proposedAgencyService
    };

    registerNewAgentByUser(agentObj)
      .then((response) => {
        toast.success(response.message);
        clearForm();
        navigate("/become-agent");
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message);
        }

        toast.error(error.message);
      });
    console.log({ state: selectedState, lga: selectedLGA, ...formData });
  };

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      superAgent: "",
      businessName: "",
      proposedAgencyService: "",
      preferredPhoneNumber: "",
      alternatePhoneNumber: ""
    });
  };

  return (
    <Fragment>
      <div className="sm:container space-y-5 md:w-[690px] md:justify-center px-5 mx-auto">
        <p className="text-center">
          <span className="font-bold">SANEF Agents</span> are individuals or
          small businesses who provide financial services within communities on
          behalf of licensed financial institutions.
        </p>

        <p className="text-center">
          They are recruited and monitored by CBN licensed financial
          institutions/SANEF Super Agents to carry out financial transactions.
        </p>
      </div>

      {/* FLEX CONTAINER */}
      <div className="container flex flex-col items-center mx-auto mt-8 space-y-8 lg:flex-row lg:space-x-6 lg:space-y-0 md:items-start md:pb-24">
        {/* 1st CONTAINER */}
        <div className="text-white bg-buttonColor rounded-xl w-full mx-5 md:mx-0 px-5 py-4 md:px-10 md:py-12 md:container lg:w-[450px]">
          <div className="">
            <h1 className="font-bold">Requirements</h1>

            <div className="mt-8 space-y-4">
              <div className="flex justify-start space-x-4">
                <div className="block w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="flex">Must be able to read and write</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must have a functional computer or at least an android
                    enabled mobile phone
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Must have an existing physical shop/business outlet
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    A copy of ID or equivalent (Driver’s license, National ID
                    card, Int’l passport, Voter’s card)
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    A Passport-sized photograph Proof of Address (Utility bills
                    e.g. PHCN, LAWMA, DStv, GOtv, StarTimes, etc.)
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">
                    Financial/Bank account detail or statements
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-fit">
                  <Image
                    image={CHECK_LIST}
                    parentClassName="mt-2"
                    imageClassName="w-fit"
                  />
                </div>

                <div className="w-full">
                  <p className="">At least 10,000 Naira startup capital.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd CONTAINER */}
        <div
          className={`${style.form_tab} bg-white md:rounded-2xl md:shadow-lg w-full lg:w-[700px]`}
        >
          <div className="flex flex-col space-y-1.5 justify-center px-5 mt-8 md:mt-10">
            <h1 className="font-bold text-[24px] text-center">
              Apply to become a SANEF Agent here
            </h1>

            <p className="text-[14px] text-center">
              Fill the application form below and a super agent will get in
              touch with you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-5 space-y-10 md:space-y-5 md:justify-center py-14 md:py-12 md:px-10 md:w-fit"
          >
            {/* FIRST & LAST NAME */}
            <div className="container flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-4">
              <div className="w-full space-y-2">
                <label htmlFor="firstName">First Name</label>
                <CustomInput
                  id="firstName"
                  className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "firstName",
                    value: formData.firstName,
                    onChange: handleChange
                  }}
                />
              </div>

              <div className="w-full space-y-2">
                <label htmlFor="lastName">Last Name</label>
                <CustomInput
                  id="lastName"
                  className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "lastName",
                    value: formData.lastName,
                    onChange: handleChange
                  }}
                />
              </div>
            </div>

            {/* BUSINESS NAME */}
            <div className="container space-y-2">
              <label htmlFor="businessName">Business Name</label>
              <CustomInput
                id="businessName"
                className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                inputProps={{
                  type: "text",
                  name: "businessName",
                  value: formData.businessName,
                  onChange: handleChange
                }}
              />
            </div>

            {/* EMAIL & GENDER  */}
            <div className="container flex flex-col space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
              <div className="w-full space-y-2">
                <label htmlFor="email">Email Address</label>
                <CustomInput
                  id="email"
                  className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "email",
                    value: formData.email,
                    onChange: handleChange
                  }}
                />
              </div>

              <div className="w-full space-y-2">
                <label htmlFor="gender">Gender</label>
                <CustomSelect
                  id="gender"
                  className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  selectProps={{
                    name: "gender",
                    value: formData.gender,
                    onChange: handleChange
                  }}
                  selectOptions={[
                    { value: "male", name: "Male" },
                    { value: "female", name: "Female" }
                  ]}
                  selectPlaceholder="Select a gender"
                />
              </div>
            </div>

            {/* PREFERRED & ALTERNATE PHONE NUMBER */}
            <div className="container flex flex-col space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
              <div className="w-full space-y-2">
                <label htmlFor="preferredPhoneNumber">
                  Preferred Phone Number
                </label>

                <CustomInput
                  id="preferredPhoneNumber"
                  className="relative w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "preferredPhoneNumber",
                    value: formData.preferredPhoneNumber,
                    placeholder: "e.g +2347080903040",
                    onChange: handleChange
                  }}
                />

                {/* <div>
                  <p className="z-10 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                    +234
                  </p>
                </div> */}
              </div>

              <div className="w-full space-y-2">
                <label htmlFor="alternatePhoneNumber">
                  Alternate Phone Number
                </label>

                <CustomInput
                  id="alternatePhoneNumber"
                  className="relative w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "alternatePhoneNumber",
                    value: formData.alternatePhoneNumber,
                    placeholder: "e.g +2347080903040",
                    onChange: handleChange
                  }}
                />

                {/* <div>
                  <p className="z-10 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                    +234
                  </p>
                </div> */}
              </div>
            </div>

            {/* STATE & LGA */}
            <div className="container flex flex-col space-y-10 md:space-y-0 md:space-x-4 md:flex-row">
              <div className="w-full space-y-2">
                <label htmlFor="state">State</label>
                <Combobox value={selectedState} onChange={setSelectedState}>
                  <div className="relative mt-1">
                    <Combobox.Input
                      placeholder="Search States"
                      className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      displayValue={(state: any) => {
                        setStateToFetchLGA(state);
                        return state;
                      }}
                      onChange={(event) => setQuery(event.target.value)}
                    />

                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <HiOutlineChevronDown
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery("")}
                    >
                      <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filterState.length === 0 && query !== "" ? (
                          <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                            Nothing found.
                          </div>
                        ) : (
                          filterState.map((state, index) => (
                            <Combobox.Option
                              key={state.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-buttonColor text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={state?.id}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {state.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active
                                          ? "text-white"
                                          : "text-buttonColor"
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
                {/* <CustomSelect
                  id="state"
                  className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  selectProps={{
                    name: "state",
                    value: formData.state,
                    onChange: handleChange
                  }}
                  selectOptions={[
                    { value: "lagos", name: "Lagos" },
                    { value: "abia", name: "Abia" },
                    { value: "abuja", name: "Abuja" }
                  ]}
                  selectPlaceholder="Select a state"
                /> */}
              </div>

              <div className="w-full space-y-2">
                <label htmlFor="lga">LGA</label>
                <Combobox value={selectedLGA} onChange={setSelectedLGA}>
                  <div className="relative mt-1">
                    <Combobox.Input
                      placeholder="Search LGA"
                      className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      displayValue={(lga: any) => lga}
                      onChange={(event) => setQuery(event.target.value)}
                    />

                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <HiOutlineChevronDown
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery("")}
                    >
                      <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filterLGA?.length === 0 && query !== "" ? (
                          <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                            Nothing found.
                          </div>
                        ) : (
                          filterLGA?.map((lga, index) => (
                            <Combobox.Option
                              key={index}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-buttonColor text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={lga}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {lga}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active
                                          ? "text-white"
                                          : "text-buttonColor"
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
                {/* <CustomSelect
                  id="lga"
                  className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  selectProps={{
                    name: "lga",
                    value: formData.lga,
                    onChange: handleChange
                  }}
                  selectOptions={[
                    { value: "ifo", name: "Ifo LGA" },
                    { value: "eti Osa", name: "Eti Osa" }
                  ]}
                  selectPlaceholder="Select an LGA"
                /> */}
              </div>
            </div>

            {/* PREFERRED AGENCY SERVICES/BUSINESS NAME */}
            <div className="space-y-2">
              <label htmlFor="proposedAgencyService">
                Proposed Agency Services/Business Address
              </label>
              <CustomInput
                id="proposedAgencyService"
                className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                inputProps={{
                  type: "text",
                  name: "proposedAgencyService",
                  value: formData.proposedAgencyService,
                  onChange: handleChange
                }}
              />
            </div>

            {/* PREFERRED SUPER AGENT */}
            <div className="space-y-2">
              <label htmlFor="superAgent">
                Choose Your Preferred Super Agent
              </label>
              <CustomSelect
                id="superAgent"
                className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                selectProps={{
                  name: "superAgent",
                  value: formData.superAgent,
                  onChange: handleChange
                }}
                selectOptions={[
                  { value: "", name: "Business Name" },
                  { value: "my agent 1", name: "Flutterwave" }
                ]}
                selectPlaceholder="Business Name"
              />
            </div>

            <CustomBtn className="w-full px-5 py-3 font-semibold text-white rounded-full bg-buttonColor hover:bg-lightGreen">
              Submit Application
            </CustomBtn>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Agent;
