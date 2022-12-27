import React, { useState } from "react";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { SEARCH_ICON } from "assets/icons";

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="relative flex flex-col space-y-2">
      <CustomInput
        id="password"
        className="rounded-full border border-gray-300 outline-buttonColor 
        focus:border-buttonColor focus:ring-buttonColor py-2 px-10"
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
  );
};

export default Search;
