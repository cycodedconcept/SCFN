import React from "react";

const Sponsors = () => {
  return (
    <section className="h-max flex items-center justify-center px-14 gap-10 mt-28">
      <div className="w-1/2 h-full p-10 pl-28">
        <img src="./assets/bmt/logos.png" alt="" className="object-cover" />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
          Our Multi-Disciplinary Services
        </h2>
        <p className="w-full text-[18px] leading-normal mt-1">
          The SCFN/LUTH/VUMC BMT Centre was officially opened January 2022 and
          it is heartwarming to know that the SCFN/LUTH/VUMC BMT Centre will not
          only provide safe, quality and affordable cure for sickle cell
          disorder, but also serve as a Centre of Excellence for BMT training in
          Africa. In addition, it will usher a new dawn for Nigeria and the
          concept of Reverse Medical Tourism as Nigeria will be hosting patients
          from other countries travelling in to access SAFE, QUALITY, MORE
          AFFORDABLE BONE MARROW TRANSPLANTATION AT THE SCFN/LUTH/VUMC
          BMT CENTRE, LAGOS.
          <span className="font-bold text-primary_red text-[18px] pl-2 cursor-pointer">
            Learn More
          </span>
        </p>
      </div>
    </section>
  );
};

export default Sponsors;
