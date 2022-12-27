import React from "react";
// import RouterLink from "components/layout/Navbar/NavLink/RouterLink";

export interface FooterContentProps {
  parentClassName?: string;
  headingClassName: string;
  contentClassName: string;
}

const FooterContentOne = ({
  parentClassName,
  headingClassName,
  contentClassName
}: FooterContentProps) => {
  return (
    <section className={parentClassName}>
      <h1 className={headingClassName}>Subscribe</h1>

      <p className={contentClassName}>Subscribe to learn more about SANEF</p>
    </section>
  );
};

export default FooterContentOne;
