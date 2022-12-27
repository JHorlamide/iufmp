import { useNavigate, useParams } from "react-router-dom";
import AgentsHeader from "./AgentsHeader";
import DashboardLayout from "../../../components/DashboardLayout";
import { DashboardMainView } from "app/components/Layout";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { SUPER_AGENT } from "routes/ROUTES_CONSTANTS";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";
import useEditAgentForm from "../hooks/useEditAgentForm";

const SubUpdateForm = () => {
  return (
    <section className="space-y-4">
      <div className="flex space-x-3">
        {/* Serial Number */}
        <div className="w-full space-y-3">
          <label htmlFor="serial">Serial</label>
          <CustomInput
            id="serial"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "serial"
            }}
          />
        </div>

        {/* SID Number */}
        <div className="w-full space-y-3">
          <label htmlFor="sid">SID</label>
          <CustomInput
            id="sid"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "sid"
            }}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        {/* SubmittedTime */}
        <div className="w-full space-y-3">
          <label htmlFor="submittedTime">Submitted Time</label>
          <CustomInput
            id="submittedTime"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "submittedTime"
            }}
          />
        </div>

        {/* Completed Time */}
        <div className="w-full space-y-3">
          <label htmlFor="completedTime">Completed Time</label>
          <CustomInput
            id="completedTime"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "completedTime"
            }}
          />
        </div>

        {/* Modified Time */}
        <div className="w-full space-y-3">
          <label htmlFor="modifiedTime">Modified Time</label>
          <CustomInput
            id="modifiedTime"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "modifiedTime"
            }}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        {/* Serial Number */}
        <div className="w-full space-y-3">
          <label htmlFor="draft">Draft</label>
          <CustomInput
            id="draft"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "draft"
            }}
          />
        </div>

        {/* SID Number */}
        <div className="w-full space-y-3">
          <label htmlFor="ipAddress">IP Address</label>
          <CustomInput
            id="ipAddress"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "ipAddress"
            }}
          />
        </div>
      </div>

      <div className="flex space-x-3">
        {/* Serial Number */}
        <div className="w-full space-y-3">
          <label htmlFor="uid">UID</label>
          <CustomInput
            id="uid"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "uid"
            }}
          />
        </div>

        {/* SID Number */}
        <div className="w-full space-y-3">
          <label htmlFor="username">Username</label>
          <CustomInput
            id="username"
            className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "username"
            }}
          />
        </div>
      </div>
    </section>
  );
};

const EditAgents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agentData, handleSubmit, handlePress, handleAgentDataChange } =
    useEditAgentForm(id);
  return (
    <DashboardLayout>
      <AgentsHeader />

      <DashboardMainView className="h-auto py-5 pl-10">
        <div className="bg-white w-[690px] border rounded-lg py-6 flex flex-col space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between px-5">
              <h1 className="text-[18px] font-bold pl-10">Agent Details</h1>

              <div className="flex justify-center">
                <p className="mr-3 font-medium">Active</p>
                <div className="form-check form-switch">
                  <input
                    className="float-left h-5 -ml-10 align-top bg-no-repeat bg-contain rounded-full shadow-sm appearance-none cursor-pointer form-check-input w-11 bg-buttonColor focus:outline-none outline-buttonColor border-buttonColor focus:outline-buttonColor"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>
            <hr className="w-full border" />
          </div>

          <form
            className="container px-8 pb-8 mx-auto space-y-10"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-5">
              {/* First name & Surname */}
              <div className="flex space-x-6">
                <div className="w-[390px]">
                  <div className="space-y-3">
                    <label htmlFor="firstName">First name</label>
                    <CustomInput
                      id="firstName"
                      className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      inputProps={{
                        type: "text",
                        name: "firstName",
                        value: agentData.firstName,
                        onChange: handleAgentDataChange
                      }}
                    />
                  </div>
                </div>

                <div className="w-[390px]">
                  <div className="space-y-3">
                    <label htmlFor="surname">Surname</label>
                    <CustomInput
                      id="surname"
                      className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      inputProps={{
                        type: "text",
                        name: "surname",
                        value: agentData.surname,
                        onChange: handleAgentDataChange
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Business name */}
              <div className="w-full space-y-3">
                <label htmlFor="businessName">Business name</label>
                <CustomInput
                  id="businessName"
                  className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "businessName",
                    value: agentData.businessName,
                    onChange: handleAgentDataChange
                  }}
                />
              </div>

              {/* Email & Gender */}
              <div className="flex space-x-6">
                {/* Form Input */}
                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="email">Email</label>
                    <CustomInput
                      id="email"
                      className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      inputProps={{
                        type: "text",
                        name: "email",
                        value: agentData.email,
                        onChange: handleAgentDataChange
                      }}
                    />
                  </div>
                </div>

                {/* Form Input */}
                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="gender">Gender</label>
                    <CustomSelect
                      id="gender"
                      className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      selectProps={{
                        name: "gender",
                        value: agentData.gender,
                        onChange: handleAgentDataChange
                      }}
                      selectOptions={[
                        { value: "male", name: "Male" },
                        { value: "female", name: "Female" }
                      ]}
                      selectPlaceholder="Select gender"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex space-x-6">
                <div className="w-full space-y-3">
                  <label className="" htmlFor="preferredPhoneNumber">
                    Preferred Phone Number
                  </label>

                  <div>
                    <p className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                      +234
                    </p>

                    <CustomInput
                      id="preferredPhoneNumber"
                      className="relative w-full px-24 py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      inputProps={{
                        type: "text",
                        name: "preferredPhoneNumber",
                        value: agentData.preferredPhoneNumber,
                        onChange: handleAgentDataChange
                      }}
                    />
                  </div>
                </div>

                <div className="w-full space-y-3">
                  <label className="" htmlFor="alternativePhoneNumber">
                    Alternate Phone Number
                  </label>

                  <div>
                    <p className="z-50 absolute bg-gray-200 py-[9px] px-6 rounded-full ml-1 mt-1">
                      +234
                    </p>

                    <CustomInput
                      id="alternativePhoneNumber"
                      className="relative w-full px-24 py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      inputProps={{
                        type: "text",
                        name: "alternativePhoneNumber",
                        value: agentData.alternativePhoneNumber,
                        onChange: handleAgentDataChange
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* State & LGA */}
              <div className="flex space-x-6">
                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="state">State</label>
                    <CustomSelect
                      id="state"
                      className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      selectProps={{
                        name: "state",
                        value: agentData.state,
                        onChange: handleAgentDataChange
                      }}
                      selectOptions={[
                        { value: "male", name: "Male" },
                        { value: "female", name: "Female" }
                      ]}
                      selectPlaceholder="Select gender"
                    />
                  </div>
                </div>

                <div className="w-[390px] space-y-12">
                  <div className="space-y-3">
                    <label htmlFor="LGA">LGA</label>
                    <CustomSelect
                      id="LGA"
                      className="w-full py-3 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                      selectProps={{
                        name: "LGA",
                        value: agentData.LGA,
                        onChange: handleAgentDataChange
                      }}
                      selectOptions={[
                        { value: "Lagos", name: "Lagos" },
                        { value: "Abuja", name: "Abuja" }
                      ]}
                      selectPlaceholder="Select gender"
                    />
                  </div>
                </div>
              </div>

              {/* Proposed Agency Service/Business Address */}
              <div className="w-full space-y-3">
                <label htmlFor="proposedAgentService">
                  Proposed Agency Service/Business Address
                </label>
                <CustomInput
                  id="proposedAgentService"
                  className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "proposedAgentService",
                    value: agentData.proposedAgentService,
                    onChange: handleAgentDataChange
                  }}
                />
              </div>

              {/* Choice of Super Agent */}
              <div className="w-full space-y-3">
                <label htmlFor="choiceOfSuperAgent">
                  Choice of Super Agent
                </label>
                <CustomInput
                  id="choiceOfSuperAgent"
                  className="w-full py-3 mt-8 border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
                  inputProps={{
                    type: "text",
                    name: "choiceOfSuperAgent",
                    value: agentData.choiceOfSuperAgent,
                    onChange: handleAgentDataChange
                  }}
                />
              </div>
            </div>

            <hr className="w-full border" />

            {/* SubUpdateForm */}
            <SubUpdateForm
            // companyData={companyData}
            // handleCompanyDataChange={handleCompanyDataChange}
            />

            <div className="flex space-x-16">
              <CustomBtn
                className="px-20 py-3 font-semibold text-white rounded-full bg-buttonColor hover:bg-lightGreen"
                type="submit"
                onKeyDown={handlePress}
              >
                Update Changes
              </CustomBtn>

              <CustomBtn
                className="font-semibold text-buttonColor hover:text-lightGreen"
                type="button"
                onClick={() => navigate(SUPER_AGENT)}
              >
                Back
              </CustomBtn>
            </div>
          </form>
        </div>
      </DashboardMainView>
    </DashboardLayout>
  );
};

export default EditAgents;
