import React, { useState } from "react";
import CustomSelect from "components/widgets/CustomInput/CustomSelect";
import { FILTER_ICON2 } from "assets/icons";

const Filter = () => {
  const [filter, setFilter] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="relative">
      <CustomSelect
        id="gender"
        className="rounded-full border border-gray-300 outline-buttonColor 
        focus:border-buttonColor focus:ring-buttonColor py-2 w-52 px-10"
        selectProps={{
          name: "gender",
          value: filter,
          onChange: handleChange
        }}
        selectOptions={[
          { value: "Company Name", name: "Company Name" },
          { value: "Email", name: "Email" },
          { value: "Contact Person", name: "Contact Person" }
        ]}
        selectPlaceholder="Filter"
      />

      <div className="absolute inset-y-0 top-3 left-3">
        <img src={FILTER_ICON2} alt="" />
      </div>
    </div>
  );
};

export default Filter;
