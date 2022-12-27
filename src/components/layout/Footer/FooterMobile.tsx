import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { MOBILE_LINE } from "assets/icons";
import { Logo } from "assets/images";
import CustomBtn from "components/widgets/CustomBtn/CustomBtn";
import CustomInput from "components/widgets/CustomInput/CustomInput";
import { FOOTER_NAVIGATION } from "utils/constants";
import FooterContentOne from "./FooterContentOne";
import FooterContentTwo from "./FooterContentTwo";
import FooterCopyright from "./FooterCopyright";
import RouterLink from "components/layout/Navbar/NavLink/RouterLink";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import NewsLetterForm from "./NewsLetterForm";

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
            className="pt-2 font-bold text-buttonColor"
            dangerouslySetInnerHTML={{ __html: message as string }}
          />
        )}
      </div>

      <div className="mt-4">
        <form className="relative" onSubmit={handleSubmit}>
          <CustomInput
            id=""
            className="text-xs placeholder:text-white pl-[14px] text-left px-48 py-4
            rounded-full bg-transparent border-2 border-white"
            inputProps={{
              type: "email",
              name: "email",
              placeholder: "Your Email",
              value: email,
              onChange: handleChange
            }}
          />

          <div className="absolute inset-y-0 right-0 flex items-center">
            <CustomBtn
              className={
                "text-white font-medium px-8 py-3 border-r-2 rounded-full bg-buttonColor"
              }
            >
              {status === "sending" ? "Sending..." : "Get Started"}
            </CustomBtn>
          </div>
        </form>
      </div>

      {/* ERROR MESSAGE */}
      <div className="container flex justify-center pt-3 mx-auto">
        {error && <div dangerouslySetInnerHTML={{ __html: error }} />}

        {status === "error" ? (
          <div
            dangerouslySetInnerHTML={{
              __html: message as string
            }}
          ></div>
        ) : null}
      </div>
    </Fragment>
  );
};

const FooterMobile = () => {
  const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL as string;

  return (
    <section className="flex flex-col items-center justify-center pt-10 bg-center bg-no-repeat bg-cover md:hidden lg:hidden bg-footer-image-mobile">
      <div className="">
        <img className="w-28" src={Logo} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center space-y-2.5 mt-12">
        <h1 className="text-2xl font-bold text-white">SANEF</h1>
        {FOOTER_NAVIGATION.FIRST_LINKS.map(({ id, title, path }) => (
          <RouterLink
            className="text-white hover:text-buttonColor"
            key={id}
            path={path}
            title={title}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-12 space-y-4">
        <h1 className="text-2xl font-bold text-white">Quick Actions</h1>
        {FOOTER_NAVIGATION.SECOND_LINKS.map(({ id, title, path }) => (
          <RouterLink
            className="text-white hover:text-buttonColor"
            key={id}
            path={path}
            title={title}
          />
        ))}
      </div>

      <FooterContentOne
        parentClassName="flex flex-col justify-center items-center space-y-1 mt-12"
        headingClassName="text-white text-xl font-bold"
        contentClassName="text-white text-xs hover:text-white"
      />

      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <NewsLetterForm
            status={status}
            message={message as string | Node}
            onValidated={(formData: { EMAIL: string }) => subscribe(formData)}
          />
        )}
      />

      <div className="mt-10">
        <img src={MOBILE_LINE} alt="horizontal-line" />
      </div>

      <div className="flex flex-col items-center justify-center mt-10 font-semibold text-white space-y-9">
        {/* <p>Terms and Condition</p>
        <p>Privacy Policy</p> */}
        <a href="mailto:info@sanefng.com" className="hover:text-buttonColor">
          info@sanefng.com
        </a>

        <p className="text-white">+234 909 555 7912</p>
        {/* <a href="tel:+234 909 555 7912" className="hover:text-buttonColor">
          +234 909 555 7912
        </a> */}
      </div>

      <div className="mt-10">
        <img src={MOBILE_LINE} alt="horizontal-line" />
      </div>

      <FooterContentTwo iconSize={40} />

      <FooterCopyright
        parentStyle="flex justify-center items-center mt-10 mb-10"
        contentStyle="text-white text-center"
      />
    </section>
  );
};

export default FooterMobile;
