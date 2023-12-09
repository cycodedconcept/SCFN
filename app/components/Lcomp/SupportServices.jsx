import React from "react";

const SupportServices = () => {
  return (
    <section className="h-[70vh] px-14 mt-10">
      <h2 className="w-full text-[44px] leading-[1.2] text-center capitalize font-[600] text-primary_red">
        Our Support Services
      </h2>
      <div className="mt-10 flex items-center justify-center gap-10">
        <div className="p-6 box_shadow hover:box_shadow_hover trans_animate rounded-[16px]">
          <img
            src="./assets/bmt/person_card.png"
            alt=""
            className="cursor-pointer"
          />
          <p className="text-primary_red text-2xl font-bold text-center pt-5">
            Counselling
          </p>
        </div>
        <div className="p-6 box_shadow hover:box_shadow_hover trans_animate rounded-[16px]">
          <img
            src="./assets/bmt/person_card2.png"
            alt=""
            className="cursor-pointer"
          />
          <p className="text-primary_red text-2xl font-bold text-center pt-5">
            Support Groups
          </p>
        </div>
        <div className="p-6 box_shadow hover:box_shadow_hover trans_animate rounded-[16px]">
          <img
            src="./assets/bmt/person_card3.png"
            alt=""
            className="cursor-pointer"
          />
          <p className="text-primary_red text-2xl font-bold text-center pt-5">
            Laboratory
          </p>
        </div>
      </div>
    </section>
  );
};

export default SupportServices;
