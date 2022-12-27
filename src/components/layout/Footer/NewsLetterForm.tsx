import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import CustomBtn from "../../widgets/CustomBtn/CustomBtn";
import CustomInput from "../../widgets/CustomInput/CustomInput";

type NewsLetterProps = {
  status: string | boolean | any;
  message: string | Node;
  onValidated: (arg: { EMAIL: string }) => void;
};

const NewsLetterForm = ({ status, message, onValidated }: NewsLetterProps) => {
  const [error, setError] = useState<string | null>("");
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    console.log(isFormValidated);

    setEmail("");
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  return (
    <Fragment>
      {/* SUCCESS SUBSCRIPTION MESSAGE */}
      <div className="flex justify-center mx-auto context">
        {status === "success" && (
          <div
            className="pt-2 font-bold text-blue-600"
            dangerouslySetInnerHTML={{ __html: message as string }}
          />
        )}
      </div>

      {/* SUBSCRIPTION FORM */}
      <form
        className="flex items-center justify-center space-x-5"
        onSubmit={handleSubmit}
      >
        <CustomInput
          id=""
          className="text-xs text-white placeholder:text-white rounded-full 
          bg-transparent border-2 border-white md:pl-[32px] md:py-4 w-[350px]"
          inputProps={{
            type: "email",
            name: "email",
            placeholder: "Your Email",
            value: email,
            onChange: handleChange
          }}
        />

        <div className="inset-y-0 right-0 flex items-center">
          <CustomBtn
            className={
              "text-white font-medium px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-900"
            }
          >
            {status === "sending" ? "Sending..." : "Get started"}
          </CustomBtn>
        </div>
      </form>

      {/* ERROR MESSAGE */}
      <div className="container flex justify-center pt-1 mx-auto">
        {error && (
          <div
            className="font-bold text-red-500"
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}

        {status === "error" ? (
          <div
            className="font-bold text-red-500"
            dangerouslySetInnerHTML={{
              __html: message as string
            }}
          ></div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default NewsLetterForm;
