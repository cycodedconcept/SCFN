import React from "react";

const OurSponsors = () => {
  return (
    <section className="px-14 mt-28 flex flex-col items-start justify-start">
      <h2 className="text-[44px] leading-[1.2] capitalize font-[600] text-primary_red w-max">
        Our Sponsors
      </h2>
      <div className="w-1/2 h-full p-10 pl-28 mt-20 self-end">
        <img
          src="./assets/bmt/logos_nnpc.png"
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default OurSponsors;
