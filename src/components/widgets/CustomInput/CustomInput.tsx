import React from "react";

export interface CustomInputProps {
  id: string;
  className: string;
  inputProps: any;
}

const CustomInput = ({ id, className, inputProps }: CustomInputProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input id={id} className={className} {...inputProps} />;
};

export default CustomInput;
