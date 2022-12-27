import React from "react";
interface PartnersAndNameProps {
  sectionName: string;
  logos: {
    id: number;
    logo: string;
    name: string;
  }[];
}

const PartnersAndName = ({ sectionName, logos }: PartnersAndNameProps) => {
  return (
    <section id={sectionName} className="container mt-10">
      <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
        <h1 className="text-center text-2xl font-bold md:text-left lg:text-3xl">
          {sectionName}
        </h1>
        <hr className="border-b-4 border-buttonColor w-16 mt-2" />
      </div>

      <div className="relative flex justify-center items-center mt-8">
        <div
          id="slider"
          className="overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
        >
          {logos.map(({ id, logo, name }) => (
            <div
              key={id}
              className="inline-block align-top flex-col space-y-2 justify-center items-center px-3 bg-clip-content"
            >
              <div className="bg-white p-4 m-0 rounded-full">
                <img className="w-20 h-20 m-0" src={logo} alt={name} />
              </div>

              <div>
                <p className="text-center text-[12px] font-semibold whitespace-pre-line md:whitespace-normal">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersAndName;
