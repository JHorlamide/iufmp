import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import { DOWNLOAD_ICON, SEARCH_ICON } from "assets/icons";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { CSVLink } from "react-csv";

interface BankTableHeaderProps {
  buttonText: string;
  path: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  bankList: Array<any>;
}

const BankTableHeader = ({
  buttonText,
  path,
  setSearchTerm,
  bankList
}: BankTableHeaderProps) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setSearchTerm(searchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const csvData = bankList.map((item) => {
    return {
      id: item._id,
      name: item.name,
      logo: item.logo.imageUrl,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    };
  });

  return (
    <div className="flex justify-between">
      {/* Filter & Search Component */}
      <div className="flex space-x-2">
        <div className="relative flex flex-col space-y-2">
          <CustomInput
            id="password"
            className="px-10 py-2 border border-gray-300 rounded-full outline-buttonColor focus:border-buttonColor focus:ring-buttonColor"
            inputProps={{
              type: "text",
              name: "password",
              value: searchValue,
              placeholder: "Search",
              onChange: handleSearchInput
            }}
          />

          <div className="absolute inset-y-0 top-1 left-3">
            <img src={SEARCH_ICON} alt="" />
          </div>
        </div>
      </div>

      {/* Download & New Bank Buttons */}
      <div className="flex space-x-2">
        <CustomBtn
          className="flex px-5 py-2 font-medium transition bg-white rounded-full text-buttonColor hover:bg-lightGreen hover:text-white"
          leftIcon={
            <img
              src={DOWNLOAD_ICON}
              alt="download-icon"
              className="mt-0.5 mr-1"
            />
          }
          // onClick={() => download()}
        >
          <CSVLink data={csvData} filename="banks.csv">
            Download CSV
          </CSVLink>
        </CustomBtn>

        <CustomBtn
          className="px-8 py-2 font-medium text-white rounded-full bg-buttonColor hover:bg-lightGreen"
          onClick={() => navigate(path)}
        >
          {buttonText}
        </CustomBtn>
      </div>
    </div>
  );
};

export default BankTableHeader;
