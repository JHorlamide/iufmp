import React from "react";

export interface CustomTextareaProps {
  id: string;
  className: string;
  boxProps: any;
}

const CustomTextarea = ({ id, className, boxProps }: CustomTextareaProps) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <textarea id={id} className={className} {...boxProps}></textarea>;
};

export default CustomTextarea;
